"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const ExpertSection = () => {
    const experts = [
        {
            name: "PHẠM THU NGA",
            role: "CHUYÊN GIA ĐÁ QUÝ",
            highlights: [
                "- Người Việt Nam đầu tiên đạt chứng chỉ Gemologist của GIA.",
                "- Có nhiều năm kinh nghiệm tại trung tâm trang sức JTC Bangkok và các mỏ đá quý Việt Nam, Myanmar.",
            ],
            image: "/images/expert/9.png",
            background: "/images/expert/bg-1.png",
        },
        {
            name: "LÀO TRÍ ĐƯỜNG",
            role: "CHUYÊN GIA CHIẾN LƯỢC KINH DOANH",
            highlights: [
                "- Giám đốc Điều hành Công ty IVNCA Limited Canada.",
                "- Từng đảm nhiệm vị trí Phó Tổng Giám đốc Công ty Cathay Life và Great Eastern - Tập đoàn bảo hiểm nhân thọ lâu đời nhất tại Singapore và Malaysia.",
            ],
            image: "/images/expert/Duong.png",
            background: "/images/expert/bg-2.png",
        },
    ]

    return (
        <section id="giang-vien" className="relative w-full bg-gradient-to-b from-[#87c5ab] to-[#04241a] overflow-hidden">

            <div className="relative z-10">
                <div className="text-center py-6 border-b border-t border-white flex flex-col">
                    <h2 className={`${cormorantGaramond.className} text-white text-2xl md:text-4xl 2xl:text-5xl font-bold`}>
                        GIẢNG VIÊN & CHUYÊN GIA
                    </h2>
                </div>
                <div className="relative">
                    <div className="">
                        <div className="relative">
                            <Carousel
                                opts={{
                                    align: "center",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {experts.map((expert) => (
                                        <CarouselItem key={expert.name}>
                                            <div className="h-[450px] md:h-full relative">
                                                <Image src={expert.background} alt="Expert" width={1536} height={842} className="w-full 2xl:aspect-[1536/620]" />
                                                <div className="absolute bottom-0 left-0 w-full md:h-1/2 lg:h-2/5 bg-[#04241a]">
                                                </div>
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full lg:w-2/3 h-full flex flex-col md:flex-row items-center md:items-end justify-end md:justify-center px-2 md:px-0">
                                                    <Image
                                                        src={expert.image}
                                                        alt={expert.name}
                                                        width={1500}
                                                        height={2000}
                                                        className="object-cover w-[45%] md:w-4/10 lg:w-1/2"
                                                    />
                                                    <div className="text-center md:text-left space-y-2 xl:space-y-4 md:w-2/5">
                                                        <div className="border-b border-white">
                                                            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold leading-tight bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                                                {expert.name}
                                                            </h3>
                                                            <p className="text-white text-sm md:text-base 2xl:text-2xl font-semibold uppercase pb-2">
                                                                {expert.role}
                                                            </p>
                                                        </div>
                                                        <ul className="space-y-2 min-h-24 md:min-h-0 text-sm xl:text-base 2xl:text-lg text-white pt-2">
                                                            {expert.highlights.map((item) => (
                                                                <li key={item} className="text-justify">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertSection

