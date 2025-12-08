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
          <li>- Bùng nổ lợi nhuận và nâng thu nhập lên 15-30 triệu/tháng chỉ trong 3 tháng.</li>
          <li>- Đột phá tài chính, thiết lập nguồn thu nhập bền vững không giới hạn.</li>
        </ul>
      </>
    ),
    image: "/images/introPopup/image-1.jpg"
  },
  {
    title: (
      <>
        <ul className="">
          <li>- Bắt đầu như một nghề thứ hai linh hoạt, dành trọn vẹn thời gian cho gia đình, sức khoẻ và đam mê.</li>
          <li>- Nghề nghiệp sang trọng với hình ảnh chuyên nghiệp và phong thái tự tin, tạo dấu ấn đẳng cấp.</li>
        </ul>
      </>
    ),
    image: "/images/introPopup/image-2.jpg"
  },
  {
    title: (
      <>
        <ul className="">
          <li>- Hội nhập cộng đồng tinh hoa, kết nối với những người yêu trang sức và ngành hàng Luxury.</li>
          <li>- Nâng tầm vị thế xã hội, gặp gỡ các đối tác tiềm năng và những người có tầm ảnh hưởng trong cộng đồng Luxury.</li>
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
                <div className="px-6 pt-10 pb-15 md:px-10 lg:pb-20 relative bg-white rounded-[20px]">
                  <h2 className={`uppercase md:text-lg lg:text-2xl text-[#1b4336] font-bold leading-snug `}>
                    Trở thành Chuyên gia Trang sức chuẩn quốc tế cùng
                  </h2>
                  <Image src="/images/introPopup/Christmas-tree.svg" alt="Logo" width={130} height={191} className="absolute -top-10 -left-5" />
                  <Image src="/images/introPopup/text.svg" alt="Logo" width={700} height={140} className="w-[500px] lg:w-[700px] absolute -bottom-15 right-1/2 translate-x-1/2" />
                  <Image src="/images/introPopup/Ornament.svg" alt="Logo" width={40} height={60} className="absolute top-0 md:right-20 lg:right-35" />
                  <Image src="/images/introPopup/Ornament.svg" alt="Logo" width={60} height={90} className="absolute top-0 md:right-5 lg:right-15" />
                </div>
              </div>
              <div className="px-5 lg:px-15 2xl:px-20 pb-8 md:pt-15 md:pb-10 relative overflow-hidden rounded-[28px]">
                <div className="grid gap-3 lg:gap-15 text-left text-emerald-900 md:grid-cols-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-b from-[#265038] to-[#012218] p-1 rounded-xl grid grid-cols-1 grid-rows-2 h-full text-base md:text-lg lg:text-xl`}
                    >
                      <div className="w-full h-40 overflow-hidden rounded-t-lg">
                        <img src={item.image} alt="Logo" width={200} height={100} className="w-full h-full object-cover object-[0%_30%]" />
                      </div>
                      <div className="bg-white rounded-b-lg text-sm relative z-10 font-medium text-deep-green text-left md:text-justify-center p-2">{item.title}</div>
                    </div>
                  ))}
                </div>
                <div className="text-white pt-2 text-xs lg:text-sm pb-20">
                  Không yêu cầu kinh nghiệm trang sức - phù hợp nhân viên văn phòng, freelancer, bán hàng online, livestream, spa - thẩm mỹ, makeup
                </div>
                <div className="text-center mt-auto flex justify-center absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                  <div className="rounded-full p-[2px] w-fit">
                    <button
                      className="relative z-30 cursor-pointer inline-block rounded-full text-white text-sm md:text-xl font-bold "
                    >
                      <span className="bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
                        TÌM HIỂU NGAY
                      </span>
                    </button>
                  </div>
                </div>
                <Image src="/images/introPopup/button.png" alt="Logo" width={200} height={110} onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    document.getElementById("chuong-trinh-dao-tao")?.scrollIntoView({ behavior: "smooth" });
                  }, 250);
                }} className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
                <Image src="/images/introPopup/snow.svg" alt="Logo" width={1024} height={123} className="w-full absolute bottom-0 left-0" />
                <Image src="/images/introPopup/Santa-Claus.svg" alt="Logo" width={200} height={72} className="-rotate-15 absolute bottom-10 left-15 z-25" />
                <Image src="/images/introPopup/snowmen.svg" alt="Logo" width={160} height={163} className="md:w-[110px] lg:w-[140px] xl:w-[160px] absolute bottom-0 right-0 z-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

