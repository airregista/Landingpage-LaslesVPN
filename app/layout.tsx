import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaslesVPN — Want anything to be easy with LaslesVPN",
  description:
    "Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-[#4F5665] antialiased">
        {children}
      </body>
    </html>
  );
}
