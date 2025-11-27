import Image from "next/image";

const Section9 = () => {
    const highlights = [
        "Nắm vững kiến thức chuyên sâu về kim cương, đá quý và trang sức.",
        "Phát triển năng lực tư vấn sản phẩm toàn diện, từ phong cách, cảm xúc đến câu chuyện thương hiệu, đồng thời xử lý linh hoạt",
    ];

    return (
        <section className="w-full bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Khối nội dung */}
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-6 text-white justify-center">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-lg sm:text-xl text-white/80">Cấp độ 2</p>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                Senior Jewelry Consultant
                            </h2>
                        </div>
                        <div className="inline-flex w-full items-center justify-center bg-gradient-to-r from-[#be945f] to-[#fee08b] text-white font-semibold text-center text-sm sm:text-base py-3 px-6 rounded-full shadow-lg">
                            Nâng tầm kỹ năng & Trở thành Chuyên viên Cao cấp thực thụ
                        </div>

                        <ul className="space-y-4 text-base sm:text-lg mt-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Image src="/images/section6/1.png" alt="check" width={24} height={24} className="object-cover" />
                                    <span className="w-4/5">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hình ảnh */}
                    <div className="relative min-h-[320px] lg:min-h-full">
                        <Image
                            src="/images/section9/1.png"
                            alt="Senior Jewelry Consultant"
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

export default Section9;
