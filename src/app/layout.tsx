import type { Metadata } from "next";
import { Bree_Serif, Roboto } from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bree-serif",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
      <body
        className={`${breeSerif.variable} ${roboto.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
