import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const PartnersAndTestimonialsSection = () => {
    const partners = [
        { name: "ChristopherDesigns", subtitle: "Christopher Designs", image: "/images/partners/ChristopherDesigns_logo.jpg" },
        { name: "SJA", subtitle: "Saigon Jewelry Academy", image: "/images/partners/SJA.svg" },
        { name: "NOBLE", subtitle: "American Grown Diamonds", image: "/images/partners/NOBLE.svg" },
        { name: "Clarity", subtitle: "Diamond", image: "/images/partners/Clarity.svg" },
    ];

    const testimonials = [
        {
            image: "/images/partners/2.png",
            name: "Anh Nam",
            title: "Jewelry Advisor: Giải tỏa áp lực tài chính bằng nghề tay trái",
            quote: "Tôi từng mắc kẹt trong vòng lặp của một nhân viên Sale với mức lương cố định 10 triệu đồng. Áp lực của người trụ cột gia đình đè nặng suốt nhiều năm khi thu nhập không đổi. Tôi luôn khao khát tìm một hướng đi mới nhưng không thể mạo hiểm bỏ việc ngay vì gánh nặng cơm áo. Noble Academy đã giúp tôi xây dựng một nghề tay trái linh hoạt trong ngành trang sức cao cấp. Tôi vẫn duy trì công việc văn phòng, nhưng tận dụng thời gian rảnh để tư vấn trang sức, mang về thêm 8–15 triệu đồng/tháng. Sự kết hợp này không chỉ giúp tôi gia tăng thu nhập đột phá mà còn giải quyết triệt để bài toán tài chính cho gia đình.",
        },
        {
            image: "/images/partners/3.png",
            name: "Anh Quang",
            title: "Senior Jewelry Consultant: Nâng tầm dịch vụ Wedding Planner",
            quote: "Là một Wedding Planner, tôi từng rất lúng túng mỗi khi khách hàng nhờ tư vấn về trang sức cưới. Vì thiếu kiến thức chuyên sâu, tôi đành đứng ngoài quy trình quan trọng này, vô tình bỏ lỡ cơ hội gia tăng doanh thu và khiến sự hài lòng của khách hàng chưa được trọn vẹn. Sau khóa học, tôi không chỉ điều phối hôn lễ mà đã trở thành một Cố vấn danh mục trang sức cưới thực thụ. Tôi tự tin dẫn dắt khách hàng lựa chọn những bộ trang sức tinh tế, phù hợp với ngân sách và phong cách riêng. Việc làm chủ tri thức chuyên sâu giúp tôi nâng tầm uy tín cá nhân, trở thành một Wedding Planner đa năng và chuyên nghiệp trong mắt giới thượng lưu.",
        },
        {
            image: "/images/partners/1.jpg",
            name: "Chị Vy",
            title: "Master Jewelry Stylist: Cố vấn chiến lược cho giới siêu giàu",
            quote: "Dù là Stylist cho người nổi tiếng, tôi vẫn gặp \"ngưỡng cản\" chuyên môn khi đối thoại về kim cương, đá quý với tệp khách VIP am tường. Sự lúng túng trong việc tư vấn chuyên sâu khiến tôi khó thuyết phục khách hàng đầu tư thêm, dẫn đến tỷ lệ khách quay lại thấp vì niềm tin chưa tuyệt đối. Tôi đã bứt phá thành Chuyên gia định hình phong cách và Cố vấn chiến lược đầu tư trang sức cho giới siêu giàu. Không chỉ phối đồ, tôi trực tiếp cố vấn những bộ sưu tập có giá trị bảo tồn và sinh lời lâu dài. Hiện tôi đang vận hành hệ thống kinh doanh trang sức quy mô lớn, khẳng định vị thế trong ngành Luxury và trực tiếp đào tạo đội ngũ kế cận theo tiêu chuẩn quốc tế.",
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
                                        className="w-full h-full object-cover"
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

