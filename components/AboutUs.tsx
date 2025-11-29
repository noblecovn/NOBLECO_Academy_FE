const AboutUs = () => {
    return (
        <section
        className="relative w-full py-16 2xl:py-24 bg-gradient-to-t from-[#87c5ab] to-[#04241a]"
      >
        {/* Background image chỉ hiển thị trên md trở lên */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg-1.png')" }}
        />
        <div className="container mx-auto max-w-7xl px-2 2xl:px-0 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white flex flex-col gap-10">
              <h1 className="text-4xl md:text-5xl font-medium uppercase tracking-tight">
                NOBLECO ACADEMY
              </h1>
              <p className="text-base md:text-lg leading-relaxed">
                NOBLECO là thương hiệu tiên phong tại Việt Nam và dẫn đầu thị trường kim cương Lab-grown cao cấp Hoa Kỳ. Từ nền tảng chuyên môn quốc tế ấy, <span className="font-medium">NOBLECO Academy</span> ra đời với sứ mệnh đào tạo kiến thức, định hướng nghề nghiệp, và mở lối cho những ai muốn bước vào ngành Trang sức Cao cấp.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
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
            <div></div>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;