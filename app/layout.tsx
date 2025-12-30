import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NOBLECO Academy - Đào Tạo Trang Sức Cao Cấp Chuẩn Quốc Tế",
    template: "%s | NOBLECO Academy",
  },
  description:
    "NOBLECO Academy - Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế, cấp độ từ Jewelry Advisor đến Master Jewelry Stylist. Đội ngũ chuyên gia hàng đầu, mạng lưới đối tác rộng khắp.",
  keywords: [
    "NOBLECO Academy",
    "đào tạo trang sức",
    "học viện trang sức",
    "Jewelry Advisor",
    "Senior Jewelry Consultant",
    "Master Jewelry Stylist",
    "đào tạo kim cương",
    "trang sức cao cấp",
    "đào tạo ngành trang sức",
    "nghề trang sức",
    "NOBLECO",
    "kim cương Lab-grown",
  ],
  authors: [{ name: "NOBLECO Academy" }],
  creator: "NOBLECO Academy",
  publisher: "NOBLECO Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://academy.noblecovn.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "NOBLECO Academy",
    title: "NOBLECO Academy - Đào Tạo Trang Sức Cao Cấp Chuẩn Quốc Tế",
    description:
      "Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế, cấp độ từ Jewelry Advisor đến Master Jewelry Stylist.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NOBLECO Academy - Đào Tạo Trang Sức Cao Cấp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOBLECO Academy - Đào Tạo Trang Sức Cao Cấp Chuẩn Quốc Tế",
    description:
      "Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế.",
    images: ["/images/logo.png"],
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
  verification: {
    // Thêm Google Search Console verification code nếu có
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${afacadFlux.className} antialiased w-full overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <MicrosoftClarity />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  );
}
