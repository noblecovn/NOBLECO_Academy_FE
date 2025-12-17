import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { X, Check } from "lucide-react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["vietnamese"],
});

const AboutUs = () => {
  const featureCards = [
    {
      title: "TIỀM NĂNG TÀI CHÍNH",
      content: "Tiếp cận kiến thức và mô hình vận hành kinh doanh trong ngành Trang sức Cao cấp, mở ra cơ hội tài chính lớn cho mọi cá nhân muốn gia tăng thu nhập.",
      image: "/images/about-us/5.png"
    },
    {
      title: "CHUYÊN MÔN TOÀN DIỆN",
      content: "Học hỏi kiến thức chuẩn quốc tế, phát triển kỹ năng toàn diện để trở thành chuyên gia và nhận chứng nhận hoàn thành từ Học viện.",
      image: "/images/about-us/6.png"
    },
    {
      title: "CƠ HỘI KẾT NỐI VÀ NGHỀ NGHIỆP",
      content: "Gia nhập mạng lưới đối tác, chuyên gia chất lượng (trong ngành trang sức, thời trang, làm đẹp), mở rộng các mối quan hệ, cơ hội hợp tác, việc làm tự do.",
      image: "/images/about-us/7.png"
    }
  ];

  const targetAudience = [
    {
      icon: "/images/about-us/1-1.svg",
      label: "NHÂN VIÊN VĂN PHÒNG",
      alt: "NHÂN VIÊN VĂN PHÒNG"
    },
    {
      icon: "/images/about-us/2-1.svg",
      label: "FREELANCER, STYLIST",
      alt: "FREELANCER, STYLIST"
    },
    {
      icon: "/images/about-us/3-1.svg",
      label: "CHỦ DOANH NGHIỆP",
      alt: "CHỦ DOANH NGHIỆP"
    },
    {
      icon: "/images/about-us/4-1.svg",
      label: <>TĂNG THU NHẬP <br /> & <br /> NÂNG CẤP HÌNH ẢNH</>,
      alt: "TĂNG THU NHẬP & NÂNG CẤP HÌNH ẢNH"
    }
  ];

  return (
    <section id="thong-tin-nobleco"
      className="relative w-full bg-[#042419]"
    >
      {/* Tiêu đề trên nền trắng với biểu tượng */}
      <div className="py-6 md:py-8 relative px-2 md:px-0">
        <div className="relative flex justify-center items-center">
          <Image src="/images/about-us/text.png" alt="Logo" width={500} height={43} />
        </div>
      </div>

      <div className="px-2 2xl:px-0 max-w-7xl mx-auto">
        {/* Nội dung chính */}
        <div className="pb-10 text-white space-y-10">
          {/* Mô tả giới thiệu */}
          <p className="text-base md:text-xl leading-relaxed text-center text-white">
            NOBLECO ACADEMY được xây dựng trên nền tảng chuyên môn vững chắc của NOBLECO – thương hiệu tiên phong, dẫn đầu thị trường kim cương <br className="hidden xl:block" /> Lab-grown cao cấp chuẩn Hoa Kỳ tại Việt Nam.
          </p>
          <div className="bg-gradient-to-l from-[#547C6D] to-[#072D1F] p-1 rounded-xl">
            {/* Phần HỌC VIỆN MỞ CHO CÔNG CHÚNG */}
            <div className="bg-gradient-to-b from-[#547C6D] to-[#072D1F] rounded-lg p-4 md:p-6 lg:p-8 space-y-4">
              <h3 className="text-base md:text-lg lg:text-3xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
                HỌC VIỆN MỞ CHO CÔNG CHÚNG VÀ HOÀN TOÀN ĐỘC LẬP.
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <X className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                    <strong>KHÔNG</strong> phải chương trình tuyển dụng / đào tạo nội bộ.
                  </p>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                    Đăng ký tự do, <strong>KHÔNG CẦN</strong> cam kết trở thành nhân viên của <strong>NOBLECO</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Phần DÀNH CHO MỌI ĐỐI TƯỢNG với biểu tượng */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-base md:text-lg lg:text-3xl font-bold text-center bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
              DÀNH CHO MỌI ĐỐI TƯỢNG
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 md:gap-3 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-xs md:text-sm lg:text-base text-white font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Phần GIÁ TRỊ ĐỘC LẬP */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-base md:text-lg lg:text-3xl font-bold text-center bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
                GIÁ TRỊ ĐỘC LẬP VÀ MÔ HÌNH THÀNH CÔNG
              </h3>
              <p className="text-base md:text-lg text-white text-center leading-relaxed">
                Tham gia chương trình, bạn sẽ nhận được những giá trị cốt lõi để tự chủ sự nghiệp:
              </p>
            </div>

            {/* Ba thẻ card với hình ảnh */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-6 xl:gap-20">
              {featureCards.map((card, index) => (
                <div key={index} className="bg-gradient-to-l from-[#547C6D] to-[#072D1F] p-1 rounded-2xl">
                  <div
                    className="bg-[#04241a] h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Hình ảnh minh họa */}
                    <div className="relative w-full h-48 md:h-56 lg:h-80 overflow-hidden bg-gray-800">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Nội dung thẻ */}
                    <div className="p-2 lg:p-5 space-y-3 flex flex-col items-center justify-center">
                      <h4 className="text-base xl:text-xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
                        {card.title}
                      </h4>
                      <p className="text-white text-xs md:text-sm lg:text-base 2xl:w-4/5 leading-relaxed text-justify">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phần cam kết */}
      <div className="bg-white py-6 md:py-8">
        <p className="px-2 md:px-0 max-w-7xl mx-auto text-base md:text-lg leading-relaxed text-center">
          <span className="font-bold">NOBLECO ACADEMY</span> cam kết mang đến giá trị tri thức và kết nối đỉnh cao, đồng hành cùng mọi cá nhân xây dựng sự nghiệp tự chủ và thành công vượt mong đợi.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
