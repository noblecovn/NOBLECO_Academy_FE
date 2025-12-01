"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const trainingLinks = [
  { href: "#cap-do-1", label: "Cấp độ 1 - Jewelry Advisor" },
  { href: "#cap-do-2", label: "Cấp độ 2 - Senior Jewelry Consultant" },
  { href: "#cap-do-3", label: "Cấp độ 3 - Master Jewelry Stylist" },
  { href: "#workshop", label: "Workshop - Trải nghiệm thực tế" },
  { href: "#giang-vien", label: "Thông tin Giảng viên" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trainingExpanded, setTrainingExpanded] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setTrainingExpanded(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 border-b border-[#D5DADF] bg-white px-2 py-4 text-[var(--deep-green)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Trang chủ NOBLECO Academy">
          <Image src="/images/logo.png" alt="NOBLECO Academy" width={150} height={51} priority/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10 text-[17px] font-semibold text-[#0E3D27]" aria-label="Điều hướng chính">
          <Link href="/" className="flex items-center gap-2 transition hover:text-[#2F6848]">
            <Image src="/images/home.png" alt="" width={20} height={16} />
            Trang chủ
          </Link>

          <div className="group relative">
            <Link
              href="#chuong-trinh-dao-tao"
              className="flex items-center gap-2 transition hover:text-[#2F6848] focus-visible:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={(e) => (e.currentTarget as HTMLElement).blur()}
            >
              Chương trình đào tạo
              <Image src="/images/dropdown.png" alt="" width={16} height={13} />
            </Link>
            {/* Bridge element để lấp khoảng trống giữa button và menu */}
            <div className="absolute left-0 right-0 top-full h-3" />
            <ul className="pointer-events-none absolute top-full mt-1 w-fit min-w-[200px] -translate-y-2 rounded-3xl bg-[linear-gradient(180deg,#87c5ab,#0e392b)] p-4 text-[15px] font-medium text-white opacity-0 shadow-[0px_15px_35px_rgba(0,0,0,0.15)] transition duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 z-50">
              {trainingLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap rounded-xl px-3 py-2 transition hover:bg-white/15 focus-visible:bg-white/20"
                    onClick={(e) => (e.currentTarget as HTMLElement).blur()}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="#thong-tin-nobleco" className="transition hover:text-[#2F6848]">
            Thông tin về NOBLECO Academy
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#0E3D27] transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0E3D27] transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0E3D27] transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 top-[73px] bg-black/50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <nav
        className={`xl:hidden fixed top-[73px] right-0 h-[calc(100vh-73px)] w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu di động"
      >
        <div className="flex flex-col py-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-6 py-4 text-[16px] font-semibold text-[#0E3D27] hover:bg-[#f0f7f4] transition"
            onClick={closeMobileMenu}
          >
            <Image src="/images/home.png" alt="" width={20} height={20} />
            Trang chủ
          </Link>

          {/* Training Programs Accordion */}
          <div className="border-t border-[#E5E9EC]">
            <div className="flex items-center justify-between w-full px-6 py-4 hover:bg-[#f0f7f4] transition">
              <Link
                href="#chuong-trinh-dao-tao"
                className="text-[16px] font-semibold text-[#0E3D27] flex-1"
                onClick={closeMobileMenu}
              >
                Chương trình đào tạo
              </Link>
              <button
                onClick={() => setTrainingExpanded(!trainingExpanded)}
                aria-expanded={trainingExpanded}
                aria-label={trainingExpanded ? "Thu gọn menu" : "Mở rộng menu"}
                className="p-2 -mr-2 hover:bg-[#e8f0ec] rounded-full transition"
              >
                <Image
                  src="/images/dropdown.png"
                  alt=""
                  width={16}
                  height={16}
                  className={`transition-transform duration-200 ${trainingExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                trainingExpanded ? "max-h-[400px]" : "max-h-0"
              }`}
            >
              <ul className="bg-[#f8faf9] py-2">
                {trainingLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-8 py-3 text-[15px] font-medium text-[#0E3D27] hover:bg-[#e8f0ec] transition"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="#thong-tin-nobleco"
            className="flex items-center px-6 py-4 text-[16px] font-semibold text-[#0E3D27] hover:bg-[#f0f7f4] transition border-t border-[#E5E9EC]"
            onClick={closeMobileMenu}
          >
            Thông tin về NOBLECO Academy
          </Link>
        </div>
      </nav>
    </header>
  );
}

