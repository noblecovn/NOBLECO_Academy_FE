import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const PartnersAndTestimonialsSection = () => {
    const partners = [
        { name: "ChristopherDesigns", subtitle: "Christopher Designs", image: "/images/partners/ChristopherDesigns_logo.jpg" },
        { name: "SJA", subtitle: "Saigon Jewelry Academy", image: "/images/partners/SJA.svg" },
        { name: "NOBLECO", subtitle: "American Grown Diamonds", image: "/images/partners/NOBLECO.svg" },
        { name: "Clarity", subtitle: "Diamond", image: "/images/partners/Clarity.svg" },
    ];

    const testimonials = [
        {
            image: "/images/partners/2.png",
            name: "Anh Nam",
            title: "Jewelry Advisor: Giải tỏa áp lực tài chính bằng nghề tay trái",
            quote: "Từng mắc kẹt với mức lương 10 triệu và áp lực trụ cột gia đình, tôi không dám bỏ việc vì gánh nặng cơm áo gạo tiền. Nhờ Nobleco Academy, tôi có thêm nghề tay trái tư vấn trang sức cao cấp. Hiện tại, tôi vừa duy trì việc văn phòng, vừa kiếm được thêm 8–15 triệu đồng/tháng vào thời gian rảnh, nhờ vậy mà tài chính gia đình đượcc arit hiện đáng kể.",
        },
        {
            image: "/images/partners/3.png",
            name: "Anh Quang",
            title: "Senior Jewelry Consultant: Nâng tầm dịch vụ Wedding Planner",
            quote: "Trước đây, tôi thường lúng túng và bỏ lỡ cơ hội gia tăng doanh thu khi khách hỏi về trang sức cưới vì thiếu kiến thức chuyên sâu. Sau khóa học, tôi được thêm nghề cố vấn trang sức, giúp khách hàng lựa chọn những bộ trang sức tinh tế, phù hợp với ngân sách và phong cách riêng. Việc tự tin dẫn dắt khách hàng thượng lưu chọn bộ trang sức phù hợp đã giúp tôi nâng tầm uy tín, trở thành một Wedding Planner đa năng và chuyên nghiệp.",
        },
        {
            image: "/images/partners/1.jpg",
            name: "Chị Vy",
            title: "Master Jewelry Stylist: Cố vấn chiến lược cho giới siêu giàu",
            quote: "Dù là Stylist cho người nổi tiếng, tôi từng gặp rào cản khi tư vấn trang sức kim cương, đá quý với tệp khách VIP am tường. Sự lúng túng trong việc tư vấn chuyên sâu khiến tôi khó thuyết phục khách hàng đầu tư thêm, dẫn đến tỷ lệ khách quay lại thấp vì niềm tin chưa tuyệt đối. Sau khóa học, tôi tự tin là Chuyên gia định hình phong cách và Cố vấn đầu tư trang sức. Hiện tôi đang vận hành hệ thống kinh doanh trang sức quy mô lớn, khẳng định vị thế trong ngành Luxury và trực tiếp đào tạo đội ngũ kế cận theo tiêu chuẩn quốc tế.",
        },
    ];

    return (
        <section className="w-full pt-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a] px-2 2xl:px-0">
            <div className="max-w-7xl mx-auto overflow-hidden">
                {/* Section 1: Mạng lưới đối tác */}
                <div className="mb-16">
                    <p className={`${cormorantGaramond.className} text-2xl uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                        MẠNG LƯỚI
                    </p>
                    <h3 className={`${cormorantGaramond.className} text-6xl font-semibold leading-tight bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                        ĐỐI TÁC
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-10">
                        {partners.map((partner) => (
                            <div
                                key={partner.name}
                                className="bg-white flex items-center justify-center p-4"
                            >
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    width={160}
                                    height={160}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Chia sẻ Học viên */}
                <div>
                    <p className={`${cormorantGaramond.className} text-2xl uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                        Chia sẻ từ
                    </p>
                    <h3 className={`${cormorantGaramond.className} text-6xl font-semibold uppercase leading-tight bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                        HỌC viên
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="bg-white border border-deep-green rounded-lg overflow-hidden"
                            >
                                <div className="aspect-square w-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={1024}
                                        height={1024}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-base 2xl:text-lg font-semibold text-deep-green">
                                        {testimonial.name} - <span className="font-medium">{testimonial.title}</span>
                                    </p>
                                    <p className="text-xs 2xl:text-base text-deep-green leading-relaxed mt-2">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersAndTestimonialsSection;

