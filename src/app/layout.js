import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber";

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
  creator: "Car Doctor Pro",
  publisher: "Car Doctor Pro",
  openGraph: {
    title: "Car Doctor Pro",
    description: "Car Doctor Pro is a car service provider that offers a wide range of services to keep your vehicle in top condition.",
    url: "https://cardoctorpro.com",
    siteName: "Car Doctor Pro",
    images: [
      {
        url: "/assets/logo.svg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Doctor Pro",
    description: "Car Doctor Pro is a car service provider that offers a wide range of services to keep your vehicle in top condition.",
    images: ["/assets/logo.svg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: "no",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Car Doctor Pro",
    statusBarStyle: "default",
    navigationBarColor: "#ffffff",
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
    android: "/assets/logo.svg",
  },
  appleTouchIcon: "/assets/logo.svg",
  favicon: "/assets/logo.svg",
  mobileOptimized: "width",
  applicationName: "Car Doctor Pro",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  alternates: {
    en: "/en",
    de: "/de",
    fr: "/fr",
    it: "/it",
    es: "/es",
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Car Doctor Pro",
    statusBarStyle: "default",
    navigationBarColor: "#ffffff",
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
    android: "/assets/logo.svg",
  },
  appleTouchIcon: "/assets/logo.svg",
  favicon: "/assets/logo.svg",
  mobileOptimized: "width",
  applicationName: "Car Doctor Pro",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        {children}
      </body>
    </html>
  );
}
