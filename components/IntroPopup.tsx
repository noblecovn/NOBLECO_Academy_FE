"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["vietnamese"],
});

const highlights: { title: ReactNode, image: string }[] = [
  {
    title: (
      <>
        <ul className="">
          <li>- Gia tăng thu nhập thêm 15–30 triệu/tháng chỉ trong 3 tháng.</li>
          <li>- Thiết lập nguồn tài chính bền vững không giới hạn.</li>
        </ul>
      </>
    ),
    image: "/images/introPopup/image-1.jpg"
  },
  {
    title: (
      <>
        <ul className="">
          <li>- Không cần bỏ việc ngay, bắt đầu nghề thứ hai linh hoạt, sáng tạo và sang trọng.</li>
          <li>- Xây dựng thương hiệu cá nhân chuyên nghiệp, phong thái tự tin, tạo dấu ấn đẳng cấp.</li>
        </ul>
      </>
    ),
    image: "/images/introPopup/image-2.jpg"
  },
  {
    title: (
      <>
        <ul className="">
          <li>- Hội nhập cộng đồng tinh hoa, kết nối với những người yêu trang sức và nhiều ngành hàng cao cấp.</li>
          <li>- Nâng tầm vị thế xã hội, kết giao những người có tầm ảnh hưởng trong cộng đồng Luxury.</li>
        </ul>
      </>
    ),
    image: "/images/introPopup/image-3.jpg"
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
        className={`relative w-full max-w-5xl shadow-2xl transition-all duration-200 ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
      >
        <div className="relative w-full bg-gradient-to-b from-[#265038] to-[#012218] rounded-[28px]">
          <button
            onClick={handleClose}
            aria-label="Đóng popup"
            className="absolute right-4 top-4 z-10 flex h-6 w-6 2xl:h-10 2xl:w-10 items-center justify-center rounded-full bg-deep-green/80 text-white shadow-md transition hover:bg-deep-green/50"
          >
            ✕
          </button>

          <div className="relative w-full">
            <div className="w-full text-center shadow-2xl">
              <div className="bg-gradient-to-b from-[#265038] to-[#012218] p-2 rounded-[28px]">
                <div className="px-0 md:px-6 pt-5 pb-10 md:pt-10 md:pb-15 md:px-10 lg:pb-20 relative bg-white rounded-[20px]">
                  <h2 className={`uppercase text-xs md:text-lg lg:text-2xl text-[#1b4336] font-bold leading-snug `}>
                    Trở thành Chuyên gia Trang sức <br className="md:hidden" /> chuẩn quốc tế cùng
                  </h2>
                  <Image src="/images/introPopup/Christmas-tree.svg" alt="Logo" width={130} height={191} className="w-[80px] md:w-[130px] absolute -top-5 md:-top-10 -left-5" />
                  <Image src="/images/introPopup/text.svg" alt="Logo" width={700} height={140} className="w-[250px] md:w-[500px] lg:w-[700px] absolute -bottom-5 md:-bottom-15 right-1/2 translate-x-1/2" />
                  <Image src="/images/introPopup/Ornament.svg" alt="Logo" width={40} height={60} className="w-[30px] md:w-[40px] absolute top-0 right-10 md:right-20 lg:right-35" />
                  <Image src="/images/introPopup/Ornament.svg" alt="Logo" width={60} height={90} className="hidden md:block absolute top-0 md:right-5 lg:right-15" />
                </div>
              </div>
              <div className="px-1 md:px-5 lg:px-15 2xl:px-20 pb-8 pt-5 md:pt-15 md:pb-10 relative overflow-hidden rounded-[28px]">
                <div className="grid gap-3 lg:gap-15 text-left text-emerald-900 md:grid-cols-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-b from-[#265038] to-[#012218] p-1 rounded-xl grid grid-cols-3 md:grid-cols-1 md:grid-rows-2 h-full text-base md:text-lg lg:text-xl`}
                    >
                      <div className="w-full h-30 md:h-40 overflow-hidden rounded-l-lg md:rounded-none md:rounded-t-lg">
                        <Image src={item.image} alt="Logo" width={2000} height={100} className="w-full h-full object-cover  md:object-[0%_30%]" />
                      </div>
                      <div className="col-span-2 md:col-span-1 bg-white rounded-r-lg md:rounded-none md:rounded-b-lg text-xs md:text-sm relative z-10 font-medium text-deep-green text-left md:text-justify-center p-2 flex items-center md:items-start">{item.title}</div>
                    </div>
                  ))}
                </div>
                <div className="text-white pt-2 text-xs lg:text-sm pb-20">
                  Không yêu cầu kinh nghiệm trang sức - phù hợp nhân viên văn phòng, freelancer, bán hàng online, livestream, spa - thẩm mỹ, makeup
                </div>
                <div className="text-center mt-auto flex justify-center absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
                  <div className="rounded-full p-[2px] w-fit">
                    <button
                      onClick={() => {
                        handleClose();
                        setTimeout(() => {
                          document.getElementById("target")?.scrollIntoView({ behavior: "smooth" });
                        }, 250);
                      }}
                      className="relative z-30 cursor-pointer inline-block rounded-full text-white text-xs md:text-xl font-bold "
                    >
                      <span className="bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
                        TÌM HIỂU NGAY
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      document.getElementById("target")?.scrollIntoView({ behavior: "smooth" });
                    }, 250);
                  }}
                  className="w-[120px] md:w-[200px] cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-transparent border-none p-0"
                  aria-label="Tìm hiểu ngay"
                >
                  <Image src="/images/introPopup/button.png" alt="Logo" width={200} height={110} className="w-full h-auto" />
                </button>
                <Image src="/images/introPopup/snow.svg" alt="Logo" width={1024} height={123} className="w-full absolute bottom-0 left-0" />
                <Image src="/images/introPopup/Santa-Claus.svg" alt="Logo" width={200} height={72} className="w-[130px] md:w-[200px] -rotate-15 absolute bottom-10 left-0 md:left-15 z-25" />
                <Image src="/images/introPopup/snowmen.svg" alt="Logo" width={160} height={163} className="w-[100px] md:w-[110px] lg:w-[140px] xl:w-[160px] absolute bottom-0 right-0 z-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

