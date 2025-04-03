"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const router = useRouter();
    const { status } = useSession();
    console.log(status)
    const handleLogin = (provider) => {
        const res = signIn(provider, { redirect: false });
    };
    if (status=== 'authenticated') {
        toast.success("Logged in successfully!");
        router.push("/");
    }

    return (
        <div className="flex items-center justify-center space-x-4">
            <button
                onClick={() => handleLogin('google')}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100 transition"
                aria-label="Login with Google"
            >
                <FaGoogle className="text-red-500" />
            </button>
            <button
                onClick={() => handleLogin('github')}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100 transition"
                aria-label="Login with GitHub"
            >
                <FaGithub className="text-gray-700" />
            </button>
        </div>
    );
};

export default SocialLogin;
