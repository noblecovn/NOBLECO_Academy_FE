import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const Section9 = () => {
    const highlights = [
        "Nắm vững kiến thức chuyên sâu về kim cương, đá quý và trang sức.",
        "Phát triển năng lực tư vấn sản phẩm toàn diện, từ phong cách, cảm xúc đến câu chuyện thương hiệu, đồng thời xử lý linh hoạt các tình huống tư vấn phức tạp.",
    ];

    return (
        <section id="cap-do-2" className="w-full bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="w-full flex flex-col items-center justify-center border-b border-t border-white py-6">
                <span className={`${cormorantGaramond.className} uppercase text-3xl font-bold text-white w-fit`}>Cấp độ <span className="text-5xl">2</span></span>
                <h2 className={`${cormorantGaramond.className} text-center text-4xl 2xl:text-7xl font-bold uppercase bg-gradient-to-tr md:bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    Senior Jewelry Consultant
                </h2>
            </div>
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
                    {/* Khối nội dung */}
                    <div className="p-2 2xl:p-12 flex flex-col gap-6 text-white justify-center">
                        <div className="inline-flex w-full items-center justify-center bg-gradient-to-r from-[#be945f] to-[#fee08b] text-white font-semibold text-center text-xs md:text-base py-3 px-6 rounded-full shadow-lg">
                            Nâng tầm kỹ năng & Trở thành Chuyên viên Cao cấp thực thụ
                        </div>

                        <div className="grid grid-cols-1 gap-4 text-lg mt-4">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <Image src="/images/section6/1.png" alt="check" width={24} height={30} className="object-cover" />
                                    <span className="w-9/10 text-justify">{item}</span>
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

                    {/* Hình ảnh */}
                    <div className="relative min-h-[320px] lg:min-h-full">
                        <Image
                            src="/images/section9/2.png"
                            alt="Senior Jewelry Consultant"
                            width={885}
                            height={686}
                            className="object-cover w-full lg:h-[560px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section9;
