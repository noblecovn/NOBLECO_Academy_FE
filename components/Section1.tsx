import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const NoblecoAcademySection = () => {
    const cards = [
        {
            title: '#ĐÀO TẠO',
            content: 'NOBLECO Academy áp dụng mô hình đào tạo chuẩn quốc tế, và được nhận chứng chỉ uy tín từ chuyên gia GIA. Chương trình học được thiết kế tinh gọn, ưu tiên kết hợp lý thuyết với trải nghiệm thực tế, đảm bảo học viên được trang bị trọn vẹn kiến thức chuyên môn vững vàng và kỹ năng làm việc chuyên nghiệp.'
        },
        {
            title: '#CỘNG ĐỒNG',
            content: 'Tham gia cộng đồng NOBLECO Academy – nơi kết nối những cá nhân đam mê và khát khao phát triển trong ngành trang sức cao cấp. Mở rộng mạng lưới quan hệ với các chuyên gia, giảng viên, khách hàng, đồng thời mở rộng cơ hội hợp tác và kinh doanh.'
        },
        {
            title: '#DÀI HẠN',
            content: 'NOBLECO Academy tự hào sở hữu mạng lưới Đối tác chiến lược rộng khắp Việt Nam và quốc tế. Mạng lưới này là cầu nối vững chắc, cam kết mở ra cánh cửa cơ hội nghề nghiệp và phát triển kinh doanh cho các học viên thông qua chương trình đào tạo chuyên sâu và hợp tác dài lâu.'
        }
    ];

    return (
        <section id="thong-tin-nobleco" className="w-full 2xl:pb-16 min-h-fit bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Header */}
            <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col px-2 2xl:px-0">
                <h2 className={`${cormorantGaramond.className} text-white text-xl md:text-4xl 2xl:text-5xl mb-2`}>
                    BƯỚC VÀO NGÀNH TRANG SỨC CÙNG
                </h2>
                <h3 className={`${cormorantGaramond.className} text-white text-xl md:text-4xl 2xl:text-5xl font-bold`}>
                    NOBLECO ACADEMY
                </h3>
            </div>
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-20">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative p-8 hover:transform hover:scale-105 transition-transform duration-300 bg-[#043022] rounded-2xl"
                        >
                            <h4 className="relative z-10 text-xl md:text-4xl font-bold mb-2 2xl:mb-6 text-center bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                {card.title}
                            </h4>
                            <p className="relative z-10 text-white text-sm md:text-xl leading-relaxed text-center text-justify-center">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NoblecoAcademySection;