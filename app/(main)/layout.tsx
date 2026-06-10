import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/common/background/GradientBackground";
import ThemeProvider from "@/components/common/theme/ThemeProvider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kagerou",
  description:
    "kagerou's personal website, share my thoughts and experiences with the world",
  keywords: ["kagerou", "blog", "Frontend"],
  icons: {
    icon: "/img/avatar.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground ">
        <ThemeProvider>
          <GradientBackground />
          <Header />
          <main className="flex-1 max-w-5xl mx-auto mt-16 w-full px-3">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
