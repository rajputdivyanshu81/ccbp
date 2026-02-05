import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NxtWave Intensive | A Proven Program to Make You a Software Developer",
  description:
    "NxtWave Intensive offers multiple job tracks such as Java and MERN Full Stack, Data Analytics, and QA/Automation Testing. Start your IT career in a powerful way.",
  keywords: [
    "NxtWave",
    "Intensive",
    "Software Developer",
    "Full Stack Developer",
    "MERN",
    "Java",
    "Data Analytics",
    "QA",
    "IT Career",
    "Coding Bootcamp",
  ],
  authors: [{ name: "NxtWave" }],
  openGraph: {
    title: "NxtWave Intensive | A Proven Program to Make You a Software Developer",
    description:
      "NxtWave Intensive offers multiple job tracks such as Java and MERN Full Stack, Data Analytics, and QA/Automation Testing.",
    type: "website",
    locale: "en_IN",
    siteName: "NxtWave",
  },
  twitter: {
    card: "summary_large_image",
    title: "NxtWave Intensive | A Proven Program to Make You a Software Developer",
    description:
      "NxtWave Intensive offers multiple job tracks such as Java and MERN Full Stack, Data Analytics, and QA/Automation Testing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font Awesome CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Satoshi Variable Font */}
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
