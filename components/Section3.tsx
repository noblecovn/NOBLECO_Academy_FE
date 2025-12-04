import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const WorkshopSection = () => {
    const workshops = [
        {
            title: "Chuyến đi Lục Yên <br/> mỏ đá quý",
            image: "/images/4.png",
        },
        {
            title: "Tham quan <br/> xưởng chế tác",
            image: "/images/5.png",
        },
        {
            title: "Workshop <br/> trực tiếp với chuyên gia",
            image: "/images/6.png",
        },
    ];

    return (
        <section id="workshop" className="w-full pt-16 min-h-fit bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="overflow-hidden shadow-2xl bg-mint">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#4f8b6f] to-[#2e5d49] text-center py-10 px-4">
                    <h2 className={`${cormorantGaramond.className} text-white text-2xl md:text-4xl 2xl:text-5xl font-bold`}>
                        WORKSHOP
                    </h2>
                </div>

                {/* Workshop Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <Image
                                src={workshop.image}
                                alt={workshop.title}
                                width={640}
                                height={360}
                                className="w-full"
                            />
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 p-6 text-center">
                                <p className="text-white text-lg md:text-3xl font-extrabold">
                                    <span dangerouslySetInnerHTML={{ __html: workshop.title }} />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopSection;

