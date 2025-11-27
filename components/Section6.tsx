import Image from "next/image";

const Section6 = () => {
    const highlights = [
        "Kiến thức về kim cương, đá quý, trang sức",
        "Kỹ năng tiếp cận & xây dựng mối quan hệ với khách hàng",
        "Kỹ năng thuyết phục khách hàng, chốt sale hiệu quả",
        "Kỹ năng chăm sóc khách hàng sau bán",
    ];

    return (
        <section className="w-full py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Khối nội dung */}
                    <div className="p-8 sm:p-12 flex flex-col gap-6 text-white justify-center">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-base mb-3">Cấp độ 1</p>
                            <h2 className="text-4xl sm:text-5xl font-bold uppercase leading-tight tracking-wide">
                                Jewelry Advisor
                            </h2>
                            <p className="text-base sm:text-lg mt-4 leading-relaxed">
                                Trở thành Jewelry Advisor – Bắt đầu sự nghiệp trong ngành trang sức cao cấp cùng NOBLECO Academy.
                            </p>
                        </div>

                        <div className="inline-flex w-full items-center justify-center bg-gradient-to-r from-[#be945f] to-[#fee08b] text-white font-semibold text-center text-sm sm:text-base py-3 px-6 rounded-full shadow-lg">
                            Học cùng chuyên gia - Thực chiến mỗi ngày - Bứt phá nghề nghiệp
                        </div>

                        <ul className="space-y-4 text-base sm:text-lg mt-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Image src="/images/section6/1.png" alt="check" width={24} height={24} className="object-cover" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hình ảnh */}
                    <div className="relative min-h-[320px] lg:min-h-full">
                        <Image
                            src="/images/section6/2.png"
                            alt="Học viên Jewelry Advisor"
                            width={873}
                            height={686}
                            className="object-cover w-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;


