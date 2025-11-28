"use client";

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
  return (
    <header className="w-full sticky top-0 z-50 border-b border-[#D5DADF] bg-white px-4 py-4 text-[var(--deep-green)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Trang chủ NOBLECO Academy">
          <Image src="/images/logo.png" alt="NOBLECO Academy" width={146} height={56} priority />
        </Link>

        <nav className="flex items-center gap-10 text-[17px] font-semibold text-[#0E3D27]" aria-label="Điều hướng chính">
          <Link href="/" className="flex items-center gap-2 transition hover:text-[#2F6848]">
            <Image src="/images/home.png" alt="" width={20} height={20} />
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
              <Image src="/images/dropdown.png" alt="" width={16} height={16} />
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
      </div>
    </header>
  );
}

