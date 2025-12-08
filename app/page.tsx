import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import WorkshopSection from "@/components/Workshop";
import ExpertSection from "@/components/Expert";
import PartnersAndTestimonialsSection from "@/components/Partners";
import Section6 from "@/components/Section6";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section11 from "@/components/Section11";
import Section12 from "@/components/Section12";
import Section14 from "@/components/Section14";
import Section15 from "@/components/Section15";
import Section16 from "@/components/Section16";
import IntroPopup from "@/components/IntroPopup";
import AboutUs from "@/components/AboutUs";
import Target from "@/components/Target";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Chủ",
  description:
    "NOBLECO Academy - Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế với chứng chỉ GIA. Khám phá các khóa học từ Jewelry Advisor đến Master Jewelry Stylist.",
  openGraph: {
    title: "NOBLECO Academy - Đào Tạo Trang Sức Cao Cấp Chuẩn Quốc Tế",
    description:
      "Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế với chứng chỉ GIA, cấp độ từ Jewelry Advisor đến Master Jewelry Stylist.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NOBLECO Academy",
      },
    ],
  },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://academy.noblecovn.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "NOBLECO Academy",
    description:
      "Học viện đào tạo trang sức cao cấp hàng đầu Việt Nam. Chương trình đào tạo chuẩn quốc tế với chứng chỉ GIA.",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Việt Nam",
    },
    sameAs: [
      // Thêm các link mạng xã hội nếu có
      // "https://www.facebook.com/noblecoacademy",
      // "https://www.instagram.com/noblecoacademy",
    ],
    offers: {
      "@type": "Offer",
      name: "Chương trình đào tạo trang sức cao cấp",
      description:
        "Đào tạo từ cấp độ Jewelry Advisor đến Master Jewelry Stylist với chứng chỉ GIA quốc tế",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chương trình đào tạo NOBLECO Academy",
      itemListElement: [
        {
          "@type": "Course",
          name: "Jewelry Advisor",
          description:
            "Chương trình đào tạo tư vấn viên trang sức chuyên nghiệp, nắm vững sản phẩm và kỹ năng bán hàng",
          provider: {
            "@type": "Organization",
            name: "NOBLECO Academy",
          },
        },
        {
          "@type": "Course",
          name: "Senior Jewelry Consultant",
          description:
            "Chương trình chuyên sâu giúp học viên trở thành chuyên viên cấp cao trong ngành trang sức",
          provider: {
            "@type": "Organization",
            name: "NOBLECO Academy",
          },
        },
        {
          "@type": "Course",
          name: "Master Jewelry Stylist",
          description:
            "Cấp độ đào tạo cao nhất, trở thành chuyên gia trang sức thực thụ với kiến thức sâu rộng",
          provider: {
            "@type": "Organization",
            name: "NOBLECO Academy",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      // Có thể thêm rating nếu có đánh giá
    },
  };

  return (
    <div className="relative min-h-screen">
      <JsonLd data={jsonLd} />
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

      <AboutUs />
      <Target />
      <Section1 />
      <Section2 />
      <WorkshopSection />
      <ExpertSection />
      <PartnersAndTestimonialsSection />
      <Section6 />
      <Section8 />
      <Section9 />
      <Section11 />
      <Section12 />
      <Section14 />
      <Section15 />
      <Section16 />
    </div>
  );
}
