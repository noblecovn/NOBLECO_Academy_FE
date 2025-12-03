import Image from "next/image";
const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-white"
    >
      {/* Background image chỉ hiển thị trên md trở lên */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="px-2 xl:px-0 py-10 md:py-18 text-deep-green flex flex-col gap-10 order-0 max-w-lg mx-auto" id="text-content">
          <h1 className="text-4xl md:text-5xl font-medium uppercase tracking-tight">
            NOBLECO ACADEMY
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify xl:text-start">
            NOBLECO là thương hiệu tiên phong tại Việt Nam và dẫn đầu thị trường kim cương Lab-grown cao cấp Hoa Kỳ. Từ nền tảng chuyên môn quốc tế ấy, <span className="font-medium">NOBLECO Academy</span> ra đời với sứ mệnh đào tạo kiến thức, định hướng nghề nghiệp, và mở lối cho những ai muốn bước vào ngành Trang sức Cao cấp.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-justify xl:text-start">
            <span className="font-medium">NOBLECO Academy</span> mang đến mô hình đào tạo hiện đại với đội ngũ chuyên gia hàng đầu. Học viên được tiếp cận kiến thức chuẩn quốc tế, trải nghiệm một hành trình phát triển toàn diện và tạo dựng sự nghiệp lâu dài.
          </p>

          <div className="flex justify-center gap-20">
            <div>
              <div className="text-4xl md:text-5xl font-medium">100+</div>
              <div className="text-base md:text-3xl font-medium">ĐỐI TÁC</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-4xl md:text-5xl font-medium">25+</div>
              <div className="text-base md:text-3xl font-medium">CHUYÊN GIA</div>
            </div>
          </div>
        </div>
        <div className="order-1 relative w-full h-[430px] md:h-full">
          <Image src="/images/about-us/4.jpg" alt="About Us" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;