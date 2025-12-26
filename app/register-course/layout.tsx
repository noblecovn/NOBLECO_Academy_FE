import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "../globals.css";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danh sách đăng ký khóa học",
  description: "Xem danh sách đăng ký khóa học NOBLECO Academy",
};

export default function RegisterCourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

