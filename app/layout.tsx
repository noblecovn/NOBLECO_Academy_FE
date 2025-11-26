import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOBLECO Academy",
  description: "NOBLECO Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacadFlux.className} antialiased overflow-x-hidden`}
      >
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
