import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const Section8 = () => {
    const phan2Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Nắm vững kiến thức căn bản về kim cương, tiêu chuẩn 4C, sự khác biệt cơ bản kim cương tự nhiên và kim cương lab chất liệu.",
            result: "đọc được 1 bản báo cáo GIA tiêu chuẩn.",
        },
        {
            title: "BUỔI 2",
            content:
                "Nắm vững kiến thức căn bản về một số loại đá quý và nguyên liệu chế tác trang sức vàng, bạc, bạch kim...",
            result: "hoàn thành 80% trở lên bài kiểm tra kiến thức kim cương đá quý.",
        },
        {
            title: "BUỔI 3 & 4",
            content:
                "Nắm vững kiến thức về các loại trang sức kim cương, đá quý và quy trình sản xuất cơ bản (vàng 10k, 14k, 18k, bạc 925, bạch kim), (các loại nhẫn, mặt dây, vòng tay, bông tai, cài áo...) (quy trình chế tác cơ bản).",
            result: "hoàn thành 80% trở lên bài kiểm tra kiến thức trang sức và nguyên liệu chế tác.",
        },
    ];

    const phan3Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Phát triển kỹ năng tiếp cận khách hàng có nhu cầu tìm hiểu và mua sắm trang sức (giao tiếp thân thiện, tận tâm, biết lắng nghe và đáp ứng nhu cầu khách hàng một cách chính xác, tạo sự tin tưởng ban đầu...).",
            result: "Thu thập bảng dữ liệu 10 khách hàng có nhu cầu tìm hiểu hay mua sắm trang sức.",
        },
        {
            title: "BUỔI 2",
            content:
                "Phát triển kỹ năng chăm sóc và thuyết phục khách hàng (Tư vấn khách hàng dựa trên những tiêu chí đơn giản về phong cách và sự kiện, sự yêu thích và phong thủy... giúp khách hàng lựa chọn được món trang sức phù hợp).",
            result: "hoàn thành danh sách công việc chăm sóc các khách hàng đã thu thập được ở trên.",
        },
        {
            title: "BUỔI 3",
            content:
                "Phát triển kỹ năng chăm sóc khách hàng trước và sau bán (Đảm bảo khả năng quản lý thông tin khách hàng, theo dõi đơn hàng để hỗ trợ quy trình mua hàng suôn sẻ, hướng dẫn khách hàng cách bảo quản, giữ gìn, vệ sinh sản phẩm trong quá trình sử dụng, xử lý phàn nàn và phản hồi của khách hàng, giải quyết tình huống...). Thực hành các tình huống nhập vai.",
            result: "hoàn thành 80% trở lên bài kiểm tra kiến thức chăm sóc và hướng dẫn khách hàng trước và sau mua.",
        },
        {
            title: "BUỔI 4",
            content:
                "Phát triển kỹ năng sử dụng công nghệ hỗ trợ bán hàng (CRM lưu trữ và theo dõi dữ liệu khách hàng, công cụ tư vấn khách hàng online để giữ được cảm xúc, thúc đẩy mua hàng, công cụ marketing cơ bản trên facebook, instagram...).",
            result: "hoàn thành 80% trở lên bài kiểm tra kiến thức sử dụng các công nghệ hỗ trợ bán hàng.",
        },
        {
            title: "BUỔI 5",
            content:
                "Phát triển cơ bản kỹ năng bán hàng cảm xúc, hiểu được những giá trị cốt lõi của trang sức khi làm quà tặng hoặc biểu tượng cá nhân, kỹ năng up sale sản phẩm cho khách hàng, các phương pháp kích thích cảm xúc, xây dựng mối quan hệ lâu dài, câu chuyện kết nối thương hiệu, chăm sóc khách hàng sau mua.",
            result: "",
        },
    ];

    return (
        <section className="w-full pb-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            <div className="w-full flex flex-col items-center justify-center py-10">
                <span className={`${cormorantGaramond.className} uppercase text-2xl md:text-4xl text-white w-fit`}>CHỨNG CHỈ</span>
                <h2 className={`${cormorantGaramond.className} text-4xl md:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent`}>
                    Jewelry Advisor
                </h2>
            </div>
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                <div className="flex flex-col items-center">
                    {/* Certificate Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Content */}
                        <div className="text-white order-2">
                            <p className="text-base text-white leading-relaxed text-justify py-4 mx-auto">
                                <span className="font-bold">Chứng chỉ được cấp bởi NOBLECO - Thương hiệu kim cương & trang sức đạt chuẩn quốc tế, cùng sự tham gia thẩm định nội dung bởi chuyên gia có chứng nhận GIA</span>. Đây là minh chứng rõ ràng cho kiến thức và kỹ năng chuyên môn mà học viên đã được đào tạo bài bản:
                            </p>
                            {/* Checklist */}
                            <div className="space-y-6 ">
                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Nắm vững kiến thức kim cương & trang sức. Bao gồm cấu trúc, phân loại, tiêu chuẩn GIA, cách đọc – phân tích – diễn giải báo cáo kiểm định.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Thành thạo kỹ năng tư vấn & bán hàng trong ngành trang sức cao cấp. Khả năng tiếp cận, phân tích nhu cầu và thuyết phục khách hàng dựa trên giá trị sản phẩm.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Có đủ chuyên môn để làm việc tại showroom, boutique hoặc ngành bán lẻ cao cấp. Chứng chỉ giúp học viên được đánh giá cao trong quy trình tuyển dụng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right - Certificate Image */}
                        <div className="flex justify-center lg:justify-end lg:h-full order-1">
                            <Image
                                src="/images/section8/1-01.jpg"
                                width={3840}
                                height={2789}
                                alt="Certificate of Completion - Jewelry Advisor Training Program"
                                className="w-full lg:h-full lg:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;
