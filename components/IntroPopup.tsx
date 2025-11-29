"use client";

import { ReactNode, useEffect, useState } from "react";

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
            <div className="bg-gradient-to-b from-[#87c5ab] to-[#0e392b] px-6 py-8 text-white md:px-10 md:py-10">
              <h2 className="text-lg 2xl:text-2xl leading-snug md:text-3xl">
                Trở thành Chuyên gia Trang sức <br /> chuẩn quốc tế cùng{" "}
                <span className="font-bold">NOBLECO Academy</span>
              </h2>
            </div>

            <div className="bg-white px-3 pb-8 pt-6 md:pb-10">
              <div className="grid gap-6 text-left text-emerald-900 md:grid-cols-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 text-base md:text-lg lg:text-xl ${index < highlights.length - 1 ? "md:border-r md:pr-6" : ""
                      }`}
                  >
                    <div className="font-medium text-deep-green text-justify-center">{item.title}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    document.getElementById("chuong-trinh-dao-tao")?.scrollIntoView({ behavior: "smooth" });
                  }, 250);
                }}
                className="cursor-pointer mt-8 inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-b from-[#87c5ab] to-[#0e392b] px-8 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:bg-[#19563c]"
              >
                Tìm hiểu ngay
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

