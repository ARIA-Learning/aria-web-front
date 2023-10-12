import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARIA Learning",
  description:
    "ARIA (Active Recall Intelligent Assistant) is a study platform which leverages the power of Open AI's Chat GPT to create flash cards and quizzes on any subject and provide feedback to user responses in realtime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
