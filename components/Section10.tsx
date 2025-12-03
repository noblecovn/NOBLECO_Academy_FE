const Section10 = () => {
    const targetAudiences = [
        {
            title: "JEWELRY ADVISOR MUỐN THĂNG HẠNG LÊN SENIOR",
            description:
                "Bạn đã là tư vấn viên trang sức với những kinh nghiệm nhất định, muốn nâng cấp kiến thức và xây dựng khả năng xây dựng và dẫn dắt đội nhóm.",
        },
        {
            title: "NHÂN VIÊN BÁN LẺ, TƯ VẤN VIÊN ĐANG MUỐN NÂNG CẤP KỸ NĂNG",
            description:
                "Bạn đã có kinh nghiệm bán hàng nhưng muốn chuyên nghiệp hóa kiến thức về Trang sức, Kim cương, Đá quý để nâng cao uy tín, khả năng chốt sale và upsell.",
            featured: true,
        },
        {
            title: "CHỦ DOANH NGHIỆP/QUẢN LÝ",
            description:
                "Bạn là chủ cửa hàng, người quản lý, hoặc người mới khởi nghiệp trong lĩnh vực trang sức, cần một hệ thống kiến thức chuẩn hóa để đào tạo nhân viên và vận hành kinh doanh hiệu quả.",
        },
    ];

    return (
        <section className="w-full lg:pt-16 2xl:py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            <div className="text-center border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    KHÓA HỌC DÀNH CHO AI?
                </h2>
            </div>
            <div className="max-w-7xl mx-auto pt-16 2xl:pt-32 px-2 2xl:px-0">
                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {targetAudiences.map((audience, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl border-2 border-[#c9a86c] p-6 sm:p-8 text-center ${audience.featured
                                    ? "bg-[#043022] lg:-mt-20 lg:mb-20"
                                    : "bg-[#043022]"
                                }`}
                        >
                            <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl mb-4 uppercase tracking-wide">
                                {audience.title}
                            </h3>
                            <p className="text-white text-sm sm:text-base leading-relaxed text-justify-center">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Section10;
