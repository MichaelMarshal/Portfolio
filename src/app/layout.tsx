import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michael Marshal - Portfolio | Software Engineer",
  description: "Software Engineer specializing in building scalable web applications and distributed systems. Experienced in React, Node.js, and modern web technologies.",
  keywords: ["software engineer", "web developer", "React", "Node.js", "TypeScript", "portfolio", "Michael Marshal"],
  authors: [{ name: "Michael Marshal" }],
  creator: "Michael Marshal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michalmarshal.com",
    title: "Michael Marshal - Portfolio",
    description: "Software Engineer specializing in scalable web applications and distributed systems.",
    siteName: "Michael Marshal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Marshal - Portfolio",
    description: "Software Engineer specializing in scalable web applications and distributed systems.",
    creator: "@michaelmarshal",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
