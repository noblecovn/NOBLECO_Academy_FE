import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        className={`${afacadFlux.className} antialiased w-full overflow-x-hidden`}
      >
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
