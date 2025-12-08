import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});

const Target = () => {
    const cards1 = [
        {
            image: "/images/target/1.svg",
            text: "**Bạn là dân văn phòng**: Muốn công việc tay trái linh hoạt, có thể chăm sóc gia đình mà vẫn **tăng thu nhập** đáng kể?",
        },
        {
            image: "/images/target/2.svg",
            text: "**Bạn khao khát độc lập**: Thích công việc linh động, chinh phục thử thách và muốn **kiếm được nhiều tiền hơn** mức hiện tại?",
        },
        {
            image: "/images/target/3.svg",
            text: "**Bạn cần một khởi đầu mới**: Mong muốn khởi nghiệp lại trong một ngành có **giá trị cao**, cơ hội  **phát triển lâu dài** và lộ trình rõ ràng?",
        },
    ];
    const cards2 = [
        {
            image: "/images/target/4.svg",
            text: "**Bạn muốn nâng tầm uy tín**: Cần profile đẹp, mở rộng **mối quan hệ chất lượng** và trở thành chuyên gia có bằng cấp, **được công nhận**?",
        },
        {
            image: "/images/target/5.svg",
            text: "**Bạn là Doanh nghiệp/Kinh doanh**: Cần giải pháp **tăng lợi nhuận**, nâng giá trị hóa đơn và gia tăng tỷ lệ chuyển đổi mà không tốn thêm chi phí marketing?",
        },
        {
            image: "/images/target/6.svg",
            text: "**Bạn làm trong ngành Dịch vụ cao cấp (Stylist, Sự kiện, Thẩm mỹ):** Muốn nâng tầm uy tín nghề nghiệp, dễ dàng nhận booking **sự kiện lớn** và tiếp cận nhóm **khách hàng thượng lưu?**",
        },
    ];

    const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <section className="w-full py-16 2xl:py-24 bg-gradient-to-t from-[#87c5ab] to-[#04241a] relative">
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                <div className="md:hidden w-full flex flex-col items-center justify-center pb-6">
                    <h2 className={`${cormorantGaramond.className} text-2xl md:text-4xl 2xl:text-5xl font-bold uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                        KHÓA HỌC DÀNH CHO AI?
                    </h2>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-1/2 ">
                    <Image src="/images/target/icon.svg" alt="Logo" fill/>
                    <div className="inline-block w-full text-center max-w-3xl relative z-10">
                        <div className="md:w-45 md:h-45 lg:w-70 lg:h-70 xl:w-80 xl:h-80 2xl:w-90 2xl:h-90 flex items-center justify-center">
                            <h2 className={`bg-gradient-to-br from-[#e1b880] to-[#f6e3c9] bg-clip-text text-transparent text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center uppercase leading-tight`}>
                                KHÓA HỌC <br /> DÀNH CHO <br /> AI?
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-30 xl:gap-40">
                    <div className="grid grid-cols-1 gap-6 2xl:gap-8">
                        {cards1.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl md:min-h-[116px] lg:min-h-[112px] xl:min-h-[128px] 2xl:min-h-[144px] p-2 lg:p-4 flex items-center gap-2 lg:gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <Image src={card.image} alt={"image1" + index.toString()} width={50} height={50} className="w-10 md:w-10 lg:w-12  xl:w-16" />
                                    </div>

                                    {/* Divider */}
                                    <div className="w-[2px] h-16 2xl:h-25 bg-deep-green flex-shrink-0" />

                                    {/* Text */}
                                    <div className="flex-grow text-gray-800 text-sm md:text-sm xl:text-base 2xl:text-lg md:max-w-[215px] lg:max-w-3/5 text-justify">
                                        {formatText(card.text)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-1 gap-6 2xl:gap-8">
                        {cards2.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl md:min-h-[116px] lg:min-h-[112px] xl:min-h-[128px] 2xl:min-h-[144px] p-2 lg:p-4 flex items-center justify-end gap-2 lg:gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Text */}
                                    <div className="order-3 md:order-1 flex-grow text-gray-800 text-sm md:text-sm xl:text-base 2xl:text-lg md:max-w-[215px] lg:max-w-3/5 text-justify">
                                        {formatText(card.text)}
                                    </div>
                                    {/* Divider */}
                                    <div className="w-[2px] h-16 2xl:h-25 bg-deep-green flex-shrink-0 order-2" />
                                    {/* Icon */}
                                    <div className="flex-shrink-0 order-1 md:order-3">
                                        <Image src={card.image} alt={"image" + index.toString()} width={50} height={50} className="w-10 md:w-10 lg:w-12 xl:w-16" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Target;
