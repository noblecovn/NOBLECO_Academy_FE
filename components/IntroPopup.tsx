"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["vietnamese"],
});

const highlights: { title: ReactNode }[] = [
  {
    title: (
      <>
        Đột phá thu nhập và Ổn định tài chính
      </>
    )
  },
  {
    title: (
      <>
        Cấp chứng chỉ từ <strong>chuyên gia GIA</strong>, học từ giảng viên quốc tế
      </>
    )
  },
  {
    title: (
      <>
        <strong>Cơ hội</strong> phát triển nghề nghiệp và kinh doanh trong ngành kim hoàn
      </>
    )
  }
];

export default function IntroPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 transition-opacity duration-200 ${isClosing ? "opacity-0" : "opacity-100"
        }`}
    >
      <div
        className={`relative w-full max-w-4xl rounded-[32px] bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1 shadow-2xl transition-all duration-200 ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
      >
        <div className="relative w-full overflow-hidden rounded-[30px] bg-white">
          <button
            onClick={handleClose}
            aria-label="Đóng popup"
            className="absolute right-4 top-4 z-10 flex h-6 w-6 2xl:h-10 2xl:w-10 items-center justify-center rounded-full bg-white/80 text-emerald-900 shadow-md transition hover:bg-white"
          >
            ✕
          </button>

          <div className="relative w-full">
            <div className="w-full overflow-hidden rounded-[28px] bg-white/95 text-center shadow-2xl">
              <div className="bg-gradient-to-b from-[#87c5ab] to-[#0e392b] px-6 py-8 md:px-10 md:py-10">
                <h2 className={`${cormorantGaramond.className} text-lg 2xl:text-4xl leading-snug md:text-3xl bg-gradient-to-tr from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                  Trở thành Chuyên gia Trang sức <br /> chuẩn quốc tế cùng{" "}
                  <span className="font-bold">NOBLECO Academy</span>
                </h2>
              </div>

              <div className="bg-white px-5 lg:px-15 2xl:px-20 pb-8 md:pt-6 md:pb-10">
                <div className="grid gap-0 text-left text-emerald-900 md:grid-cols-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col gap-2 text-base md:text-lg lg:text-xl justify-center items-center min-h-[110px] md:min-h-[200px]`}
                    >
                      <Image src="/images/introPopup/3.png" alt="Icon" width={448} height={266} className="block md:hidden w-[310px] absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-none select-none" />
                      <Image src="/images/introPopup/1.png" alt="Icon" width={200} height={253} className="hidden md:block md:w-auto absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none" />
                      <div className="text-sm md:text-xl relative z-10 font-medium text-white text-center md:text-justify-center max-w-[310px] md:max-w-[150px]">{item.title}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-auto pt-5 md:pt-10 flex justify-center">
                  <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-[2px] w-fit">
                    <button
                      onClick={() => {
                        handleClose();
                        setTimeout(() => {
                          document.getElementById("chuong-trinh-dao-tao")?.scrollIntoView({ behavior: "smooth" });
                        }, 250);
                      }}
                      className="cursor-pointer bg-gradient-to-b from-[#87c5ab] to-[#0e392b] inline-block px-20 py-2 rounded-full text-white text-sm md:text-2xl font-bold"
                    >
                      TÌM HIỂU NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

