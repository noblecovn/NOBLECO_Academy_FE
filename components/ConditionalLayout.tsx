"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Decoration from "@/components/Decoration";
import RegistrationNotificationPopup from "@/components/RegistrationNotificationPopup";
import { shouldHideHeaderFooter } from "@/lib/layout-config";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = shouldHideHeaderFooter(pathname);

  return (
    <>
      {!hideHeaderFooter && <Decoration />}
      {!hideHeaderFooter && <Header />}
      <main className="w-full">{children}</main>
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <RegistrationNotificationPopup />}
    </>
  );
}

