import Image from "next/image";

const Section12 = () => {
    const highlights = [
        "Chất lượng kim cương, đá quý và trang sức.",
        "Thiết kế, phong cách (styling), bespoke (thiết kế theo yêu cầu).",
        "Nghệ thuật kể chuyện thương hiệu (Branding Storytelling).",
    ];

    return (
        <section id="cap-do-3" className="w-full pt-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Khối nội dung */}
                    <div className="p-2 2xl:p-12 flex flex-col gap-6 text-white justify-center">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-lg sm:text-xl text-white/80">Cấp độ 3</p>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                Master Jewelry Stylist
                            </h2>
                        </div>
                        <div className="inline-flex w-full items-center justify-center bg-gradient-to-r from-[#be945f] to-[#fee08b] text-white font-semibold text-center text-xs md:text-base py-3 px-6 rounded-full shadow-lg">
                            Nâng tầm kỹ năng & Trở thành Chuyên viên Cao cấp thực thụ
                        </div>
                        <p className="text-white font-semibold text-lg italic">
                            Trở thành chuyên gia thực thụ về:
                        </p>

                        <ul className="space-y-4 text-base sm:text-lg">
                            {highlights.map((item, index) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Image src="/images/section6/1.png" alt="check" width={24} height={30} className="object-cover" />
                                    <span className="w-4/5">{item}</span>
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
                            src="/images/section12/1.png"
                            alt="Master Jewelry Stylist"
                            width={873}
                            height={686}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section12;
