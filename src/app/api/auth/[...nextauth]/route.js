import connectDB from "@/lib/connectDb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
connectDB();
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    if (!credentials.email || !credentials.password) {
                        throw new Error("Email and password are required");
                    }

                    const user = await User.findOne({ email: credentials.email });
                    if (!user) {
                        throw new Error("User not found");
                    }

                    const passwordMatched = bcrypt.compareSync(credentials.password, user.password);
                    if (!passwordMatched) {
                        throw new Error("Invalid password");
                    }

                    return { id: user._id, email: user.email, type: user.type };
                } catch (error) {
                    console.error("Authorization error:", error.message);
                    throw new Error(error.message);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || "",
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.type = user.type;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.type) {
                session.user.type = token.type;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };