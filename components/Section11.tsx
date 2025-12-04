import Image from "next/image";

const Section11 = () => {
    // PHẦN 1 - Kiến thức chuyên sâu sản phẩm (4 buổi)
    const phan1Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Nắm bắt khả năng phân tích kỹ thuật và đánh giá chất lượng kim cương nâng cao. Phân biệt kỹ kim cương và các loại đá thay thế, công nghệ xử lý, phân biệt loại hiếm.",
        },
        {
            title: "BUỔI 2",
            content:
                "Kiến thức đá quý quý hiếm, vật liệu cao cấp (các loại đá quý màu Ruby, Sapphire, Emerald, Ngọc trai, các hợp kim quý hiếm).",
        },
        {
            title: "BUỔI 3",
            content:
                "Một số kỹ thuật chế tác thủ công cao cấp, bespoke, các công nghệ mới trong chế tác trang sức.",
        },
        {
            title: "BUỔI 4",
            content:
                "Nghiên cứu bộ sưu tập cao cấp của NOBLECO, phân tích điểm khác biệt và lợi thế cạnh tranh.",
        },
    ];

    // PHẦN 2 - Kỹ năng tư vấn chuyên sâu (3 buổi)
    const phan2Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Có khả năng tư vấn theo phong cách cá nhân, nghề nghiệp, sự kiện sang trọng và tâm lý khách hàng cao cấp phù hợp với phân khúc Premium.",
        },
        {
            title: "BUỔI 2",
            content:
                "Nắm bắt khả năng phân tích kỹ thuật và đánh giá chất lượng kim cương nâng cao. Phân biệt kỹ kim cương và các loại đá thay thế, công nghệ xử lý, phân biệt loại hiếm.",
        },
        {
            title: "BUỔI 3",
            content:
                "Thành thạo kỹ năng đàm phán, chốt sale, và upsell chuyên nghiệp, đồng thời xây dựng mối quan hệ khách hàng bền vững.",
        },
    ];

    // PHẦN 3 - Xử lý tình huống phức tạp (2 buổi)
    const phan3Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Phân tích và thực hành xử lý các tình huống khách hàng khó tính, phàn nàn, tranh chấp qua các mô phỏng nhập vai thực tế.",
        },
        {
            title: "BUỔI 2",
            content:
                "Kỹ năng giao tiếp ứng biến, giải quyết xung đột hiệu quả và bảo vệ uy tín thương hiệu.",
        },
    ];

    // PHẦN 4 - Huấn luyện và phát triển đội ngũ (2 buổi)
    const phan4Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Rèn luyện kỹ năng huấn luyện, mentoring và quản lý các tư vấn viên cấp 1. Truyền đạt kiến thức và kỹ năng một cách hiệu quả.",
        },
        {
            title: "BUỔI 2",
            content:
                "Lập kế hoạch phát triển cá nhân và nhóm tư vấn viên, tạo động lực và thực hiện đánh giá, phản hồi hiệu quả.",
        },
    ];

    // PHẦN 5 - Thị trường và xu hướng (2 buổi)
    const phan5Sessions = [
        {
            title: "BUỔI 1",
            content:
                "Cập nhật xu hướng trang sức cao cấp trên thế giới và Việt Nam, các thương hiệu đẳng cấp (Cartier, Tiffany, BVLgari, VCA...Doji, PNJ...).",
        },
        {
            title: "BUỔI 2",
            content:
                "Phân tích thị trường, phân tích đối thủ cạnh tranh và định vị thương hiệu. Dự báo xu hướng khách hàng và cơ hội kinh doanh mới.",
        },
    ];

    return (
        <section className="w-full pt-16 2xl:pt-0 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            {/* <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    NỘI DUNG ĐÀO TẠO
                </h2>
            </div> */}
            <div className="w-full flex flex-col items-center justify-center py-10">
                <span className="uppercase tracking-[0.2em] text-2xl text-white w-fit">CHỨNG CHỈ</span>
                <h2 className="text-4xl 2xl:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                    Senior Jewelry Consultant
                </h2>
            </div>
            {/* <p className="text-base text-white leading-relaxed mb-8 text-center max-w-4xl mx-auto py-4">
                <span className="font-bold">Chứng chỉ được cấp bởi NOBLECO - Thương hiệu kim cương & trang sức đạt chuẩn quốc tế, cùng sự tham gia thẩm định nội dung bởi chuyên gia có chứng nhận GIA</span>. Đây là minh chứng rõ ràng cho kiến thức và kỹ năng chuyên môn mà học viên đã được đào tạo bài bản:
            </p> */}
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                {/* <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-3xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 1 — KIẾN THỨC CHUYÊN SÂU SẢN PHẨM (4 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {phan1Sessions.map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg border-2 border-[#c9a86c]"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-2xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed text-justify-center">
                                    {session.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-3xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 2 — KỸ NĂNG TƯ VẤN CHUYÊN SÂU (3 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {phan2Sessions.map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg border-2 border-[#c9a86c]"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-2xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed text-justify-center">
                                    {session.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8">
                            <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                                PHẦN 3 — XỬ LÝ TÌNH HUỐNG PHỨC TẠP (2 BUỔI)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {phan3Sessions.map((session, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-green rounded-3xl p-6 shadow-lg border-2 border-[#c9a86c]"
                                >
                                    <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-2xl mb-4 text-center">
                                        {session.title}
                                    </h3>
                                    <p className="text-white text-sm leading-relaxed text-justify-center">
                                        {session.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8">
                            <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                                PHẦN 4 — HUẤN LUYỆN VÀ PHÁT TRIỂN ĐỘI NGŨ (2 BUỔI)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {phan4Sessions.map((session, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-green rounded-3xl p-6 shadow-lg border-2 border-[#c9a86c]"
                                >
                                    <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-2xl mb-4 text-center">
                                        {session.title}
                                    </h3>
                                    <p className="text-white text-sm leading-relaxed text-justify-center">
                                        {session.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-3xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 5 — THỊ TRƯỜNG VÀ XU HƯỚNG (2 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {phan5Sessions.map((session, index) => (
                            <div
                                key={index}
                                className="bg-dark-green rounded-3xl p-6 shadow-lg border-2 border-[#c9a86c]"
                            >
                                <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-xl md:text-2xl mb-4 text-center">
                                    {session.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed text-justify-center">
                                    {session.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* CHỨNG CHỈ Section */}
                <div className="flex flex-col">

                    {/* Certificate Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Content */}
                        <div className="text-white order-2">
                            <p className="text-base text-white leading-relaxed text-justify py-4 mx-auto">
                                <span className="font-bold">Chứng chỉ được cấp bởi NOBLECO - Thương hiệu kim cương & trang sức đạt chuẩn quốc tế, cùng sự tham gia thẩm định nội dung bởi chuyên gia có chứng nhận GIA</span>. Đây là minh chứng rõ ràng cho kiến thức và kỹ năng chuyên môn mà học viên đã được đào tạo bài bản:
                            </p>
                            {/* Checklist */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p>Khẳng định năng lực chuyên môn. Chứng chỉ xác nhận bạn đã nắm vững kiến thức trang sức, kỹ năng tư vấn cao cấp, quy trình bán hàng xa xỉ và phong thái chuyên nghiệp, giúp bạn nổi bật so với ứng viên phổ thông.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p>Thành thạo kỹ năng tư vấn & bán hàng trong ngành trang sức cao cấp. Khả năng tiếp cận, phân tích nhu cầu và thuyết phục khách hàng dựa trên giá trị sản phẩm.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p className="font-bold">Lợi thế cạnh tranh vượt trội khi thăng tiến</p>
                                        <p>Chứng chỉ giúp bạn tăng độ tin cậy khi xét thăng cấp lên:</p>
                                        <div className="flex mt-1 space-x-4">
                                            <p>- Senior Consultant</p>
                                            <p>- Store Supervisor</p>
                                            <p>- Store/Team Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Certificate Image */}
                        <div className="flex justify-center lg:justify-end lg:h-full order-1">
                            <Image
                                src="/images/section11/2-01.jpg"
                                width={3840}
                                height={2789}
                                alt="Certificate of Completion - Senior Jewelry Consultant Training Program"
                                className="w-full lg:h-full lg:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section11;
