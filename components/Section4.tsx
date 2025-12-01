"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

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
            image: "/images/section4/4.png",
        },
        {
            name: "LÀO TRÍ ĐƯỜNG",
            role: "CHUYÊN GIA CHIẾN LƯỢC KINH DOANH",
            highlights: [
                "- Giám đốc Điều hành Công ty IVNCA Limited Canada.",
                "- Từng đảm nhiệm vị trí Phó Tổng Giám đốc Công ty Cathay Life và Great Eastern - Tập đoàn bảo hiểm nhân thọ lâu đời nhất tại Singapore và Malaysia.",
            ],
            image: "/images/section4/2.png",
        },
    ]

    return (
        <section id="giang-vien" className="relative w-full pt-16 2xl:py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a] overflow-hidden">
            <Image
                src="/images/section4/6.png"
                alt="Background pattern"
                fill
                priority
                className="object-cover pointer-events-none select-none"
            />
            <div className="relative z-10">
                <div className="text-center py-12 border-b border-t border-white py-12 flex flex-col">
                    <h2 className="text-white text-2xl md:text-4xl 2xl:text-5xl font-bold tracking-[0.1em]">
                        GIẢNG VIÊN & CHUYÊN GIA
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto">

                    <div className="relative px-2 2xl:px-12 py-4">
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
                                        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center lg:items-end h-full">
                                            <div className="w-full lg:w-1/4">
                                                <Image
                                                    src={expert.image}
                                                    alt={expert.name}
                                                    width={640}
                                                    height={360}
                                                    className="object-cover w-full aspect-[3/4]"
                                                />
                                            </div>
                                            <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4">
                                                <div className="border-b border-white">
                                                    <h3 className="text-2xl md:text-5xl font-semibold leading-tight bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                                        {expert.name}
                                                    </h3>
                                                    <p className="text-white text-xl 2xl:text-2xl font-semibold uppercase pb-2">
                                                        {expert.role}
                                                    </p>
                                                </div>
                                                <ul className="min-h-[120px] space-y-2 text-sm md:text-lg text-white pt-2">
                                                    {expert.highlights.map((item) => (
                                                        <li key={item} className="leading-relaxed text-justify">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertSection

