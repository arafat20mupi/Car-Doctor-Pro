import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber";
import Footer from "@/Components/Footer";
import AuthProvider from "@/Services/AuthProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Doctor Pro",
  icons: {
    icon: "/assets/logo.svg",
  },
  description: "Car Doctor Pro is a car service provider that offers a wide range of services to keep your vehicle in top condition.",
  keywords: "car service, car repair, car maintenance, car doctor pro",
  authors: [{ name: "Car Doctor Pro" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <AuthProvider>
          <Navber />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
