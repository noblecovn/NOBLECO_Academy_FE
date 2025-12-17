import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const NoblecoAcademySection = () => {
    const cards = [
        {
            title: '#ĐÀO TẠO',
            content: 'Chương trình chuẩn quốc tế, được chứng nhận bởi chuyên gia GIA. Lộ trình tinh gọn, ưu tiên thực hành thực tế giúp học viên làm chủ kiến thức và kỹ năng chuyên nghiệp trong thời gian ngắn nhất.'
        },
        {
            title: '#CỘNG ĐỒNG',
            content: 'Kết nối mạng lưới chuyên gia, giảng viên và những cá nhân cùng đam mê. Đây là không gian mở rộng quan hệ, chia sẻ kinh nghiệm và tìm kiếm cơ hội hợp tác kinh doanh bền vững.'
        },
        {
            title: '#DÀI HẠN',
            content: 'Mạng lưới đối tác chiến lược rộng khắp trong và ngoài nước, là cầu nối vững chắc, cam kết mở ra cơ hội nghề nghiệp và hỗ trợ học viên phát triển kinh doanh dài lâu.'
        }
    ];

    return (
        <section className="w-full 2xl:pb-16 min-h-fit bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Header */}
            <div className="text-center mb-12 border-b border-t border-white py-6 flex flex-col px-2 2xl:px-0">
                <h2 className={`${cormorantGaramond.className} text-xl md:text-4xl 2xl:text-5xl font-bold uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    BƯỚC VÀO NGÀNH TRANG SỨC CÙNG
                </h2>
                <h2 className={`${cormorantGaramond.className} text-xl md:text-4xl 2xl:text-5xl font-bold uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    NOBLECO ACADEMY
                </h2>
            </div>
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-20">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative p-8 hover:transform hover:scale-105 transition-transform duration-300 bg-[#043022] rounded-2xl"
                        >
                            <h4 className="relative z-10 text-xl md:text-4xl font-bold mb-2 2xl:mb-6 text-center bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
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