import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HomeIcon, UserIcon, HashtagIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "A simple Instagram-like app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <div className="max-w-2xl mx-auto pb-16">
            {" "}
            {/* pb-16 to account for nav bar */}
            {children}
          </div>

          {/* Fixed Bottom Navigation */}
          <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
            <div className="max-w-2xl mx-auto flex justify-around items-center h-16">
              <Link href="/" className="p-3 text-gray-900">
                <HomeIcon className="w-7 h-7" />
              </Link>
              <Link href="/explore" className="p-3 text-gray-900">
                <HashtagIcon className="w-7 h-7" />
              </Link>
              <Link href="/profile" className="p-3 text-gray-900">
                <UserIcon className="w-7 h-7" />
              </Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}
