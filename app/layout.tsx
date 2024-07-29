import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Porosenocheck",
    template: "%s | Porosenocheck",
  },
  description: " Revolutionary mobile application designed to simplify and enhance the experience of managing pet care services for pet owners. The app provides a seamless platform for booking, tracking, and managing various pet care services, ensuring that pet owners can provide the best possible care for their pets with minimal effort.",
  openGraph: {
    title: "Porosenocheck",
    description:
      " Revolutionary mobile application designed to simplify and enhance the experience of managing pet care services for pet owners. The app provides a seamless platform for booking, tracking, and managing various pet care services, ensuring that pet owners can provide the best possible care for their pets with minimal effort.",
    url: "https://katya.site",
    siteName: "Porosenocheck",
    images: [
      {
        url: "https://katya.site/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Porosenocheck",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
