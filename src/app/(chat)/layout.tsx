import type { Metadata } from "next";
import "../globals.css";
import Providers from "@/Providers/Providers";

export const metadata: Metadata = {
  title: "Dhata Harris Chatbot",
  description: "Chat with Dhata Harris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased font-roboto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
