import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản lý đăng ký Seminar",
  description: "Danh sách đăng ký seminar - NOBLECO Academy",
};

export default function SeminarRegistrationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

