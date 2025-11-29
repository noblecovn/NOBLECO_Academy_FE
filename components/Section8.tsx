import Image from "next/image";

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
        <section className="w-full py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    NỘI DUNG ĐÀO TẠO
                </h2>
            </div>

            <div className="max-w-7xl mx-auto pt-8">
                {/* PHẦN 1 */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide">
                            PHẦN 1 — ĐỊNH HƯỚNG & HỘI THẢO NGÀNH (1 BUỔI)
                        </div>
                    </div>

                    {/* Flow diagram */}
                    <div className="relative w-full py-8">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Left column */}
                            <div className="flex space-x-8">
                                <div className="flex items-start gap-3">
                                    <Image src="/images/section8/1.png" width={20} height={20} alt="Flow Diagram" className="h-full w-auto" />
                                    <p className="text-white text-sm md:text-xl text-center">
                                        Giới thiệu NOBLECO:<br />
                                        câu chuyện hình thành, triết lý, sứ mệnh.
                                    </p>
                                </div>
                                <span className="text-white text-5xl">→</span>
                                <div className="flex items-center">
                                    <p className="text-white text-sm md:text-xl">
                                        Giới thiệu giảng viên – phương pháp học tập.
                                    </p>
                                </div>
                                <div className="absolute top-15 right-20">
                                    <Image src="/images/section8/4.png" width={300} height={20} alt="Flow Diagram" />
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-x-8 mt-25 flex">
                                <div className="flex items-center">
                                    <p className="text-white text-sm md:text-xl">
                                        Chia team - hoạt động nhóm - định hướng học tập
                                    </p>
                                </div>
                                <span className="text-white text-5xl">←</span>
                                <div className="flex items-start gap-3">
                                    <p className="text-white text-sm md:text-xl text-center">
                                        Giá trị học viên nhận được:<br />
                                        kiến thức – cơ hội – hệ sinh thái hỗ trợ.trợ.
                                    </p>
                                </div>
                                <div className="absolute bottom-12 right-20">
                                    <Image src="/images/section8/5.png" width={280} height={20} alt="Flow Diagram" />
                                </div>
                            </div>
                        </div>

                        {/* Right side box */}
                        <div className="absolute -right-20 top-25 hidden lg:block">
                            <div className="p-4">
                                <p className="text-white text-xl text-center">
                                    Kiến thức tổng quan ngành trang sức <br /> & xu hướng tiêu dùng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PHẦN 2 */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide">
                            PHẦN 2 — KIẾN THỨC SẢN PHẨM (4 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {phan2Sessions.map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-3xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-base leading-relaxed mb-4">
                                    {session.content}
                                </p>
                                {session.result && (
                                    <p className="text-white text-base">
                                        <span className="font-bold">Kết quả:</span> {session.result}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* PHẦN 3 */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide">
                            PHẦN 3 — KỸ NĂNG TƯ VẤN & CHĂM SÓC KHÁCH HÀNG CAO CẤP (5 BUỔI)
                        </div>
                    </div>

                    {/* First row - 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {phan3Sessions.slice(0, 3).map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-3xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-base leading-relaxed mb-4">
                                    {session.content}
                                </p>
                                {session.result && (
                                    <p className="text-white text-base">
                                        <span className="font-bold">Kết quả:</span> {session.result}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Second row - 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {phan3Sessions.slice(3, 5).map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-3xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-base leading-relaxed mb-4">
                                    {session.content}
                                </p>
                                {session.result && (
                                    <p className="text-white text-base">
                                        <span className="font-bold">Kết quả:</span> {session.result}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* PHẦN 4 */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-16 max-w-2xl">
                        <div className="text-white bg-gray-orange rounded-full font-bold text-lg md:text-xl uppercase tracking-wide">
                            PHẦN 4 — TỔNG KẾT & TRAO CHỨNG CHỉ (1 BUỔI)
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 items-start">
                        <p className="uppercase tracking-[0.2em] text-2xl text-white">CHỨNG CHỈ</p>
                        <h2 className="text-4xl sm:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                            Jewelry Advisor
                        </h2>
                    </div>
                    {/* Certificate Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left - Content */}
                        <div className="text-white">
                            <p className="text-base leading-relaxed mb-8 text-justify">
                                <span className="font-bold">Chứng chỉ được cấp bởi NOBLECO - Thương hiệu kim cương & trang sức đạt chuẩn quốc tế, cùng sự tham gia thẩm định nội dung bởi chuyên gia có chứng nhận GIA</span>. Đây là minh chứng rõ ràng cho kiến thức và kỹ năng chuyên môn mà học viên đã được đào tạo bài bản:
                            </p>

                            {/* Checklist */}
                            <div className="space-y-6 max-w-lg">
                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={32} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Nắm vững kiến thức kim cương & trang sức. Bao gồm cấu trúc, phân loại, tiêu chuẩn GIA, cách đọc – phân tích – diễn giải báo cáo kiểm định.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={32} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Thành thạo kỹ năng tư vấn & bán hàng trong ngành trang sức cao cấp. Khả năng tiếp cận, phân tích nhu cầu và thuyết phục khách hàng dựa trên giá trị sản phẩm.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={32} alt="Check" className="flex-shrink-0 mt-1" />
                                    <p className="text-sm text-deep-green">
                                        Có đủ chuyên môn để làm việc tại showroom, boutique hoặc ngành bán lẻ cao cấp. Chứng chỉ giúp học viên được đánh giá cao trong quy trình tuyển dụng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right - Certificate Image */}
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/images/section8/8.png"
                                width={500}
                                height={400}
                                alt="Certificate of Completion - Jewelry Advisor Training Program"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;
