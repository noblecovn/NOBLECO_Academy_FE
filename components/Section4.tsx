import Image from "next/image";

const ExpertSection = () => {
    const experts = [
        {
            name: "PHẠM THU NGA",
            role: "CHUYÊN GIA ĐÁ QUÝ",
            highlights: [
                "- Người Việt Nam đầu tiên đạt chứng chỉ Gemologist của GIA.",
                "- Có nhiều năm kinh nghiệm tại trung tâm trang sức JTC Bangkok và các mỏ đá quý Việt Nam, Myanmar."
            ],
            image: "/images/7.png"
        },
        {
            name: "LÀO TRÍ ĐƯỜNG",
            role: "CHUYÊN GIA CHIẾN LƯỢC KINH DOANH",
            highlights: [
                "- Giám đốc Điều hành Công ty LNK JSC.",
                "- Nhân vật quen thuộc trong lĩnh vực tài chính, từng giữ chức vụ Phó Tổng giám đốc Công ty Cathay."
            ],
            image: "/images/8.png"
        }
    ];

    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <div className="text-center py-12">
                    <h2 className="text-white text-3xl md:text-5xl font-bold tracking-[0.1em]">GIẢNG VIÊN & CHUYÊN GIA</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
                    {experts.map((expert) => (
                        <div
                            key={expert.name}
                            className={`flex flex-row gap-8 items-end`}
                        >
                            <div className="flex-1 w-full">
                                <div className="relative w-full">
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        width={640}
                                        height={360}
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 text-center lg:text-left space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                                        {expert.name}
                                    </h3>
                                    <p className="text-white text-base font-bold uppercase">
                                        {expert.role}
                                    </p>
                                </div>
                                <ul className="space-y-2 text-sm md:text-base text-white/90">
                                    {expert.highlights.map((item) => (
                                        <li key={item} className="leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;

