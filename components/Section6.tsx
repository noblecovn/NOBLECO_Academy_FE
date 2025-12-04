import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const Section6 = () => {
    const highlights = [
        "Kiến thức về kim cương, đá quý, trang sức",
        "Kỹ năng tiếp cận & xây dựng mối quan hệ với khách hàng",
        "Kỹ năng thuyết phục khách hàng, chốt sale hiệu quả",
        "Kỹ năng chăm sóc khách hàng sau bán",
    ];

    return (
        <section id="cap-do-1" className="w-full pt-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="w-full flex flex-col items-center justify-center border-b border-t border-white py-6">
                <span className={`${cormorantGaramond.className} uppercase text-3xl font-bold text-white w-fit`}>Cấp độ <span className="text-5xl">1</span></span>
                <h2 className={`${cormorantGaramond.className} text-4xl 2xl:text-7xl font-bold uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent`}>
                    Jewelry Advisor
                </h2>
            </div>
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-0">
                    {/* Khối nội dung */}
                    <div className="px-2 2xl:p-12 flex flex-col gap-6 text-white justify-center">
                        <div>
                            {/* <p className="uppercase tracking-[0.2em] text-2xl">Cấp độ 1</p>
                            <h2 className="text-4xl sm:text-[80px] font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                Jewelry Advisor
                            </h2> */}
                            <p className="text-base sm:text-xl mt-4 leading-relaxed">
                                Trở thành Jewelry Advisor – Bắt đầu sự nghiệp trong ngành trang sức cao cấp cùng NOBLECO Academy.
                            </p>
                        </div>

                        <div className="inline-flex w-full items-center justify-center bg-gradient-to-r from-[#be945f] to-[#fee08b] text-white font-semibold text-center text-xs md:text-base py-3 px-6 rounded-full shadow-lg">
                            Học cùng chuyên gia - Thực chiến mỗi ngày - Bứt phá nghề nghiệp
                        </div>

                        <ul className="space-y-4 text-base sm:text-lg mt-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Image src="/images/section6/1.png" alt="check" width={24} height={30} className="object-cover" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
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
                            src="/images/section6/1.jpg"
                            alt="Học viên Jewelry Advisor"
                            width={2693}
                            height={686}
                            className="object-cover w-full lg:w-auto lg:h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Section6;


