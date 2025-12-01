const Section13 = () => {
    const targetAudiences = [
        {
            title: "Chuyên viên đã có kinh nghiệm và muốn trở thành chuyên gia thực thụ",
            description:
                "Muốn nâng cấp chuyên môn, hoàn thiện tư duy thẩm định – thiết kế – tư vấn ở cấp độ chuyên gia, để tự tin đảm nhận các vị trí cao hơn trong ngành.",
        },
        {
            title: "Stylist, Chuyên gia tư vấn hình ảnh & phong cách cá nhân",
            description:
                "Dành cho stylist, fashion consultant,... những người làm việc trong lĩnh vực hình ảnh, thời trang muốn hiểu sâu về trang sức, kim cương, đá quý để tư vấn trang sức chuẩn xác, nâng tầm giá trị cho khách hàng cao cấp.",
            featured: true,
        },
        {
            title: "Chủ doanh nghiệp/Quản lý ngành trang sức",
            description:
                "Những người muốn mở rộng tầm nhìn về sản phẩm kim cương, tối ưu chiến lược bán hàng và nâng cao trải nghiệm khách hàng ở phân khúc premium & luxury.",
        },
    ];

    return (
        <section className="w-full 2xl:py-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    KHÓA HỌC DÀNH CHO AI?
                </h2>
            </div>
            <div className="max-w-7xl mx-auto lg:pt-16 2xl:pt-32">
                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
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

export default Section13;
