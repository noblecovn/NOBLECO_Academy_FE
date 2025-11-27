import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import IntroPopup from "@/components/IntroPopup";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <IntroPopup />
      <div className="relative w-full" style={{ aspectRatio: "640 / 360" }}>
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dtmtycf0d&public_id=clip_60s-web_rv4y1n&profile=cld-looping"
          width={640}
          height={360}
          style={{
            height: "100%",
            width: "100%",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy" // Lazy load video để cải thiện FCP
          title="Nobleco Video"
        />
      </div>

      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
        style={{ backgroundImage: "url('/images/bg-1.png')" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Cột trái - Nội dung */}
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

            {/* Cột phải - Để trống */}
            <div></div>
          </div>
        </div>
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}
