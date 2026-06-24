import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supportive Coach Chat",
  description: "A simple Next.js chat frontend for the FastAPI OpenAI backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
