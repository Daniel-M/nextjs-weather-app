import TopAppBar from "@/components/TopAppBar/TopAppBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather app with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopAppBar label="Weather App" />
        <div className="content-container">{children}</div>
      </body>
    </html>
  );
}
