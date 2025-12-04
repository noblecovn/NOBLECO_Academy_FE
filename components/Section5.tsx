import Image from "next/image";

const PartnersAndTestimonialsSection = () => {
    const partners = [
        { name: "SJC", subtitle: "Saigon Jewelry Company", image: "/images/section5/1.png" },
        { name: "SJA", subtitle: "Saigon Jewelry Academy", image: "/images/section5/2.png" },
        { name: "NOBLECO", subtitle: "American Grown Diamonds", image: "/images/section5/3.png" },
        { name: "Clarity", subtitle: "Diamond", image: "/images/section5/7.png" },
    ];

    const testimonials = [
        {
            image: "/images/section5/4.png",
            name: "Anh Nam",
            title: "Học viên Jewelry Advisor",
            quote: "Hoàn thành khóa học Jewelry Advisor của NOBLECO ACADEMY mang đến cho tôi nền tảng kiến thức vững chắc và góc nhìn tinh tế hơn về nghệ thuật trang sức.",
        },
        {
            image: "/images/section5/5.png",
            name: "Anh Quang",
            title: "Học viên Senior Jewelry Consultant",
            quote: "Khóa học chuyên sâu giúp tôi tự tin hơn khi tư vấn khách hàng cao cấp và xây dựng phong thái chuyên nghiệp.",
        },
        {
            image: "/images/section5/6.png",
            name: "Chị Vy",
            title: "Học viên Master Jewelry Stylist",
            quote: "Tôi mở rộng tư duy thẩm mỹ và tự tin hơn trong việc xây dựng phong cách trang sức cho khách hàng VIP.",
        },
    ];

    return (
        <section className="w-full pt-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a] px-2 2xl:px-0">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2  items-stretch">
                    {/* Partners */}
                    <div className="pr-0 lg:pr-16 flex flex-col h-full">
                        <p className="text-2xl tracking-[0.2em] uppercase text-white">
                            MẠNG LƯỚI
                        </p>
                        <h3 className="text-6xl text-white font-semibold tracking-[0.1em] leading-tight">
                            ĐỐI TÁC
                        </h3>
                        <div className="grid grid-cols-2 gap-12 md:gap-20 xl:gap-16 mt-10 flex-grow">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className=""
                                >
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        width={160}
                                        height={160}
                                        className="w-full lg:h-full lg:w-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="flex flex-col h-full">
                        <p className="text-2xl tracking-[0.2em] uppercase text-white">
                            Chia sẻ từ
                        </p>
                        <h3 className="text-6xl text-white font-semibold uppercase tracking-[0.1em] leading-tight">
                            HỌC viên
                        </h3>
                        <div className="mt-10 space-y-6 flex-grow flex flex-col">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.name}
                                    className="bg-white border border-deep-green grid grid-cols-4 gap-3 rounded-r-3xl items-center"
                                >
                                    <div className="col-span-1 h-full">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={128}
                                            height={128}
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="max-w-xs 2xl:max-w-md col-span-3">
                                        <p className="text-base 2xl:text-lg font-semibold text-deep-green">
                                            {testimonial.name} - <span className="font-medium">{testimonial.title}</span>
                                        </p>
                                        <p className="text-xs 2xl:text-base text-deep-green leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersAndTestimonialsSection;

