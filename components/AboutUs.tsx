import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["vietnamese"],
});

const AboutUs = () => {
  const featureCards = [
    {
      title: "TIỀM NĂNG TÀI CHÍNH",
      content: "Tiếp cận kiến thức và mô hình vận hành kinh doanh trong ngành Trang sức Cao cấp, mở ra cơ hội tài chính lớn cho mọi cá nhân muốn gia tăng thu nhập."
    },
    {
      title: "CHUYÊN MÔN TOÀN DIỆN",
      content: "Học hỏi kiến thức chuẩn quốc tế, phát triển kỹ năng toàn diện để định vị bản thân là chuyên gia và nhận chứng nhận hoàn thành từ Học viện."
    },
    {
      title: "CƠ HỘI KẾT NỐI VÀ NGHỀ NGHIỆP",
      content: "Gia nhập mạng lưới đối tác, chuyên gia chất lượng (trong ngành trang sức, thời trang, làm đẹp), mở rộng các mối quan hệ chiến lược để tìm cơ hội hợp tác, việc làm tự do hoặc làm việc cho bất kỳ thương hiệu nào bạn lựa chọn."
    }
  ];

  return (
    <section id="thong-tin-nobleco"
      className=" relative w-full bg-gradient-to-b from-[#87c5ab] to-[#04241a]"
    >
      {/* Tiêu đề trên nền trắng */}
      <div className="bg-white py-6 md:py-8">
        <h2 className={`${cormorantGaramond.className} text-center text-2xl md:text-4xl 2xl:text-5xl font-bold uppercase text-black`}>
          NOBLECO ACADEMY
        </h2>
      </div>
      <div className="px-2 2xl:px-0 max-w-7xl mx-auto">
        {/* Nội dung chính */}
        <div className="py-10 text-white space-y-8">
          {/* Bullet points với từ khóa nhấn mạnh */}
          <ul className="text-base md:text-lg leading-relaxed space-y-8">
            <li className="text-justify">
              - <strong>NOBLECO ACADEMY</strong> được xây dựng trên nền tảng chuyên môn vững chắc của <strong>NOBLECO</strong> – thương hiệu tiên phong, dẫn đầu thị trường kim cương Lab-grown cao cấp chuẩn Hoa Kỳ tại Việt Nam.
            </li>
            <li className="text-justify">
              - Chúng tôi là Học viện đào tạo trang sức <strong>MỞ CHO CÔNG CHÚNG</strong> và <strong>HOÀN TOÀN ĐỘC LẬP</strong>.
            </li>
            <li className="text-justify">
              - Đây <strong>KHÔNG</strong> phải là chương trình tuyển dụng hay đào tạo nội bộ. Bất kỳ cá nhân nào quan tâm đến ngành luxury đều có thể đăng ký tham gia (có thu học phí) mà <strong>KHÔNG CẦN</strong> cam kết trở thành nhân viên của <strong>NOBLECO</strong>.
            </li>
            <li className="text-justify">
              - Học viện dành cho <strong>MỌI ĐỐI TƯỢNG</strong> tìm kiếm lối đi mới: Từ nhân viên văn phòng, freelancer, stylist, chủ doanh nghiệp, đến bất kỳ ai muốn tăng thu nhập, nâng cấp hình ảnh và bước chân vào thế giới trang sức cao cấp.
            </li>
            <li className="text-justify">
              - <strong>GIÁ TRỊ ĐỘC LẬP VÀ MÔ HÌNH THÀNH CÔNG</strong>:
              <br />
              Tham gia chương trình, bạn sẽ nhận được những giá trị cốt lõi để tự chủ sự nghiệp:
            </li>
          </ul>

          {/* Ba thẻ card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            {featureCards.map((card, index) => (
              <div key={index} className={`overflow-hidden md:px-2 ${index == 1 ? 'md:border-r md:border-l md:border-white md:border-opacity-50' : ''}`}>
                {/* Thanh tiêu đề */}
                <div className="bg-white border border-black rounded-lg px-4 py-1">
                  <h4 className="text-black font-bold text-sm lg:text-xl text-center uppercase">
                    {card.title}
                  </h4>
                </div>
                {/* Nội dung thẻ */}
                <div className="py-4 md:py-6">
                  <p className="text-white text-sm md:text-base leading-relaxed text-justify-center">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-6 md:py-8">
        <h4 className="px-2 md:px-0 text-base md:text-lg leading-relaxed text-center">
          <span className="font-bold">NOBLECO ACADEMY</span> cam kết mang đến giá trị tri thức và kết nối đỉnh cao, đồng hành cùng mọi cá nhân xây dựng sự nghiệp tự chủ và thành công vượt mong đợi.
        </h4>
      </div>
    </section>
  );
};

export default AboutUs;
