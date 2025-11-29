import Image from "next/image";

const Section15 = () => {
    const commitments = [
        {
            title: "1. CAM KẾT VỀ CHẤT LƯỢNG ĐÀO TẠO",
            content:
                "NOBLECO đảm bảo học viên được tiếp cận kiến thức chuẩn quốc tế, nội dung được cố vấn bởi chuyên gia sở hữu chứng chỉ GIA. \nToàn bộ giáo trình được cập nhật liên tục theo thị trường kim cương trang sức cao cấp.",
        },
        {
            title: "2. CAM KẾT HỖ TRỢ TRONG SUỐT QUÁ TRÌNH HỌC",
            content:
                "Đội ngũ chuyên môn luôn theo sát, giải đáp từng câu hỏi, kèm cặp 1:1 khi cần thiết.\nHọc viên được thực hành thực tế và làm bài tập ứng dụng để nắm vững kỹ năng.",
        },
        {
            title: "3. CAM KẾT SAU KHI TỐT NGHIỆP",
            content:
                "NOBLECO không ngừng đồng hành ngay cả khi bạn hoàn thành khóa học:\n Định hướng nghề nghiệp phù hợp\n Hỗ trợ bố cục CV – portfolio chuyên ngành\n Hợp tác kinh doanh bền vững cùng NOBLECO",
        },
        {
            title: "4. CAM KẾT PHÁT TRIỂN LÂU DÀI",
            content:
                "Học viên được tham gia cộng đồng nội bộ NOBLECO – nơi chia sẻ kiến thức, cơ hội và kinh nghiệm thực chiến từ các chuyên gia.\nChúng tôi đồng hành cùng bạn trên hành trình nâng cấp kỹ năng lẫn thu nhập.",
        },
        {
            title: "5. CAM KẾT CƠ HỘI TRỞ THÀNH ĐỐI TÁC CHIẾN LƯỢC",
            content:
                "Những học viên có định hướng rõ ràng, thể hiện năng lực tốt sẽ được ưu tiên tham gia các dự án kinh doanh, trở thành đối tác chiến lược trong hệ sinh thái của NOBLECO.",
        },
        {
            title: "6. CAM KẾT MINH BẠCH – UY TÍN",
            content:
                "Mọi quyền lợi, tài liệu, chứng chỉ đều được công bố rõ ràng.\nNOBLECO đề cao đạo đức nghề nghiệp, tính minh bạch và chất lượng thật điều tạo nên giá trị bền vững của thương hiệu.",
        },
    ];

    return (
        <section className="relative w-full py-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a] overflow-hidden">
            <Image
                src="/images/section15/2.png"
                alt="Background pattern"
                width={293}
                height={398}
                priority
                className="object-cover absolute bottom-0 left-0"
            />
            <div className="relative z-10">
                {/* Title */}
                <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                        CAM KẾT ĐỒNG HÀNH TỪ NOBLECO
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    {/* Grid 2 columns - items flow by column */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Cột 1: Cam kết 1, 2, 3 */}
                        <div className="flex flex-col gap-8">
                            {commitments.slice(0, 3).map((item, index) => (
                                <div key={index} className="text-white">
                                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-2 max-w-3xl">
                                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide py-1">
                                            {item.title}
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Cột 2: Cam kết 4, 5, 6 */}
                        <div className="flex flex-col gap-8">
                            {commitments.slice(3, 6).map((item, index) => (
                                <div key={index} className="text-white">
                                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-2 max-w-3xl">
                                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide py-1">
                                            {item.title}
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section15;
