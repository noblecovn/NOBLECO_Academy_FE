import dynamic from "next/dynamic";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import AboutUs from "@/components/AboutUs";
import Target from "@/components/Target";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

// Dynamic import cho IntroPopup - chỉ hiển thị sau 300ms
const IntroPopup = dynamic(() => import("@/components/IntroPopup"), {
  loading: () => null, // Không hiển thị gì khi đang load
});

// Dynamic import cho các section dưới fold - lazy load để cải thiện FCP
const WorkshopSection = dynamic(() => import("@/components/Workshop"), {
  loading: () => <div className="min-h-[400px]" />,
});

const ExpertSection = dynamic(() => import("@/components/Expert"), {
  loading: () => <div className="min-h-[400px]" />,
});

const PartnersAndTestimonialsSection = dynamic(() => import("@/components/Partners"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section6 = dynamic(() => import("@/components/Section6"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section8 = dynamic(() => import("@/components/Section8"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section9 = dynamic(() => import("@/components/Section9"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section11 = dynamic(() => import("@/components/Section11"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section12 = dynamic(() => import("@/components/Section12"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section14 = dynamic(() => import("@/components/Section14"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section15 = dynamic(() => import("@/components/Section15"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Section16 = dynamic(() => import("@/components/Section16"), {
  loading: () => <div className="min-h-[400px]" />,
});

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
