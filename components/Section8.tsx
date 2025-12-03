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
        <section className="w-full pb-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            {/* <div className="text-center border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl 2xl:text-5xl font-bold tracking-wide">
                    NỘI DUNG ĐÀO TẠO
                </h2>
            </div> */}

            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                {/* <div className="my-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 1 — ĐỊNH HƯỚNG & HỘI THẢO NGÀNH (1 BUỔI)
                        </div>
                    </div>

                    <div className="relative w-full 2xl:py-8">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex space-x-2 2xl:space-x-8 justify-between lg:justify-start relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                                        <button className="relative px-1 md:px-8 lg:px-12 py-1 text-sm tracking-wider rounded-full bg-[#0e392b] transition-all duration-300 shadow-lg">
                                            <span className="relative z-10 text-white">Giới thiệu NOBLECO:<br />
                                                câu chuyện hình thành, triết lý, sứ mệnh.</span>
                                        </button>
                                    </div>
                                </div>
                                <span className="flex items-center text-white text-xl md:text-5xl">→</span>
                                <div className="relative flex items-center">
                                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                                        <button className="relative px-1 md:px-8 lg:px-12 py-[14px] text-sm tracking-wider rounded-full bg-[#0e392b] transition-all duration-300 shadow-lg">
                                            <span className="relative z-10 text-white">Giới thiệu giảng viên – phương pháp học tập.</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-7 2xl:top-15 right-20 xl:right-35 hidden lg:block z-0">
                                <Image src="/images/section8/4.png" width={300} height={58} alt="Flow Diagram" className="w-50 xl:w-70" />
                            </div>
                            <div className="absolute bottom-5 xl:bottom-3 2xl:bottom-12 right-20 xl:right-35 hidden lg:block">
                                <Image src="/images/section8/5.png" width={280} height={69} alt="Flow Diagram" className="w-50 xl:w-65" />
                            </div>
                            <span className="text-white text-xl absolute top-20 md:top-15 right-20 md:right-35 lg:hidden">↓</span>
                            <span className="text-white text-xl absolute top-45 md:top-40 right-20 md:right-35 lg:hidden">↓</span>
                            <div className="flex space-x-2 2xl:space-x-8 mt-30 2xl:mt-25 justify-between lg:justify-start">
                                <div className="flex items-center w-1/2 md:w-auto">
                                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                                        <button className="relative px-1 md:px-8 xl:px-12 py-1 md:py-[14px] text-sm tracking-wider rounded-full bg-[#0e392b] transition-all duration-300 shadow-lg">
                                            <span className="relative z-10 text-white">Chia team - hoạt động nhóm - định hướng học tập</span>
                                        </button>
                                    </div>
                                </div>
                                <span className="flex items-center text-white text-xl md:text-5xl">←</span>
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                                        <button className="relative px-1 md:px-4 xl:px-12 py-1 text-sm tracking-wider rounded-full bg-[#0e392b] transition-all duration-300 shadow-lg">
                                            <span className="relative z-10 text-white">Giá trị học viên nhận được:<br />
                                                kiến thức – cơ hội – hệ sinh thái hỗ trợ.</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-30 md:top-25 right-0 2xl:top-30">
                            <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                                <button className="relative px-12 py-1 text-sm tracking-wider rounded-full bg-[#0e392b] transition-all duration-300 shadow-lg">
                                    <span className="relative z-10 text-white">Kiến thức tổng quan ngành trang sức <br /> & xu hướng tiêu dùng.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 2 — KIẾN THỨC SẢN PHẨM (4 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-2xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 3 — KỸ NĂNG TƯ VẤN & CHĂM SÓC KHÁCH HÀNG CAO CẤP (5 BUỔI)
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                </div> */}

                <div className="flex flex-col items-center">
                    {/* <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-12 max-w-2xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm  md:text-lg uppercase tracking-wide">
                            PHẦN 4 — TỔNG KẾT & TRAO CHỨNG CHỉ (1 BUỔI)
                        </div>
                    </div> */}
                    <div className="w-full grid grid-cols-1 items-start">
                        <p className="uppercase tracking-[0.2em] text-2xl text-white">CHỨNG CHỈ</p>
                        <h2 className="text-4xl 2xl:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
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
                            <div className="space-y-6 2xl:max-w-lg">
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
                        <div className="flex justify-center lg:justify-end lg:h-full">
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
