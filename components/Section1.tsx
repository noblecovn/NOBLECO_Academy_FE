import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const NoblecoAcademySection = () => {
    const cards = [
        {
            title: <>💎 Làm chủ tri thức</>,
            content: 'Thấu hiểu tường tận về kim cương, đá quý và trang sức cao cấp theo chuẩn mực quốc tế. Tri thức chuyên sâu giúp bạn luôn tự tin trong mọi tình huống tư vấn, sẵn sàng giải đáp những câu hỏi "khó" nhất và khẳng định giá trị thực của sản phẩm trước khách hàng.'
        },
        {
            title: '💎 Vị thế Chuyên gia thực thụ',
            content: 'Thoát khỏi hình ảnh của một "nhân viên bán hàng" thông thường để nâng tầm thành một Cố vấn trang sức chuyên nghiệp. Bằng cách xây dựng hình ảnh chuyên gia uy tín, bạn dễ dàng thiết lập niềm tin tuyệt đối với khách hàng, từ đó chinh phục những đơn hàng giá trị lớn một cách tự nhiên.'
        },
        {
            title: '💎 Lộ trình thực chiến',
            content: 'Bảo chứng quốc tế: Không còn phải tự lần mò hay thử sai tốn kém. Bạn được dẫn dắt trực tiếp bởi các chuyên gia GIA và đội ngũ dày kinh nghiệm vận hành thương hiệu kim cương tại thị trường Mỹ. Mọi kiến thức đều được tinh lọc để có thể áp dụng ngay vào công việc thực tế hoặc vận hành kinh doanh bền vững.'
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
                    NOBLE ACADEMY
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
                            <h4 className="relative z-10 text-xl md:text-2xl font-bold mb-2 2xl:mb-6 text-center bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
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