const Section10 = () => {
    const targetAudiences = [
        {
            title: "JEWELRY ADVISOR MUỐN THĂNG HẠNG LÊN SENIOR",
            description:
                "Bạn không biết bắt đầu từ đâu nếu muốn vào nghề nhưng mong muốn bước chân vào ngành hàng cao cấp với mức thu nhập đột phá và môi trường làm việc sang trọng.",
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
        <section className="w-full py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    KHÓA HỌC DÀNH CHO AI?
                </h2>
            </div>
            <div className="max-w-7xl mx-auto pt-32 px-4">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {targetAudiences.map((audience, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl border-2 border-[#c9a86c] p-6 sm:p-8 text-center ${audience.featured
                                    ? "bg-[#043022] md:-mt-20 md:mb-20"
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

                {/* CTA Button */}
                <div className="flex justify-center">
                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                        <button className="cursor-pointer relative px-12 py-4 text-4xl font-bold uppercase tracking-wider rounded-full bg-[#043022] hover:bg-[#043022]/80 transition-all duration-300 shadow-lg">
                            <span className="relative z-10 text-white">ĐĂNG KÝ NGAY</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
