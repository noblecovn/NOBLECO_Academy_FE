import Image from "next/image";

const Section14 = () => {
    // PHẦN 1 - Kiến thức chuyên sâu và tiên tiến (5-6 buổi)
    const phan1Sessions = [
        {
            title: "NỘI DUNG 1",
            content:
                "Nghiên cứu chuyên sâu về đặc tính kỹ thuật kim cương cao cấp, công nghệ mới trong chế tác bespoke, đá quý quý hiếm và vật liệu đặc biệt.",
        },
        {
            title: "NỘI DUNG 2",
            content:
                "Hiểu sâu về thiết kế trang sức đương đại và cổ điển; bao gồm thiết kế bespoke, xu hướng quốc tế và sáng tạo nghệ thuật.",
        },
        {
            title: "NỘI DUNG 3",
            content:
                "Phân tích các bộ sưu tập giới hạn, bespoke flagship và sản phẩm signature của NOBLECO nhằm khai thác điểm độc đáo và giá trị thương hiệu.",
        },
    ];

    // PHẦN 2 - Kỹ năng phong cách và tư vấn cá nhân hóa (4-5 buổi)
    const phan2Sessions = [
        {
            title: "NỘI DUNG 1",
            content:
                "Tư vấn phong cách tinh tế, đa dạng cho các sự kiện cao cấp, nghệ thuật phối trang sức với trang phục và trang điểm.",
        },
        {
            title: "NỘI DUNG 2",
            content:
                "Ứng dụng kỹ thuật tư vấn bespoke, tạo trải nghiệm cá nhân hóa từng khách hàng.",
        },
        {
            title: "NỘI DUNG 3",
            content:
                "Phát triển và duy trì mối quan hệ khách hàng thượng lưu dựa trên kiến thức văn hóa, tâm lý và nhu cầu đặc thù.",
        },
    ];

    // PHẦN 3 - Nghệ thuật kể chuyện thương hiệu & giao tiếp nâng cao (2-3 buổi)
    const phan3Sessions = [
        {
            title: "NỘI DUNG 1",
            content:
                "Phân tích và thực hành kể chuyện thương hiệu mang đậm giá trị của NOBLECO, cách truyền cảm hứng và hình ảnh đẳng cấp.",
        },
        {
            title: "NỘI DUNG 2",
            content:
                "Giao tiếp tinh tế, thuyết trình chuyên nghiệp trong các sự kiện, đối tác, khách VIP.",
        },
        {
            title: "NỘI DUNG 3",
            content:
                "Kỹ năng lãnh đạo và ảnh hưởng trong giao tiếp nội bộ và bên ngoài.",
        },
    ];

    // PHẦN 4 - Huấn luyện và lãnh đạo phát triển đội ngũ (3-4 buổi)
    const phan4Sessions = [
        {
            title: "NỘI DUNG 1",
            content:
                "Chiến lược huấn luyện nâng cao, coaching, mentoring tư vấn viên cấp 1 và cấp 2.",
        },
        {
            title: "NỘI DUNG 2",
            content:
                "Thiết kế chương trình đào tạo, xây dựng tiêu chuẩn đánh giá và phát triển năng lực.",
        },
        {
            title: "NỘI DUNG 3",
            content:
                "Kỹ năng lãnh đạo đội nhóm, động viên và tạo văn hóa học tập liên tục.",
        },
    ];

    // PHẦN 5 - Chiến lược kinh doanh cao cấp và thị trường (1-2 buổi)
    const phan5Sessions = [
        {
            title: "NỘI DUNG 1",
            content:
                "Định hướng chiến lược phát triển thị trường cao cấp và bespoke.",
        },
        {
            title: "NỘI DUNG 2",
            content:
                "Phân tích đối thủ, xu hướng doanh nghiệp trang sức trong nước và quốc tế.",
        },
        {
            title: "NỘI DUNG 3",
            content:
                "Thúc đẩy sáng tạo dịch vụ, đổi mới trải nghiệm khách hàng và tăng trưởng doanh thu.",
        },
    ];

    return (
        <section className="w-full pt-16 2xl:py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            {/* Title */}
            <div className="text-center mb-12 border-b border-t border-white py-12 flex flex-col">
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                    NỘI DUNG ĐÀO TẠO
                </h2>
            </div>

            <div className="max-w-7xl mx-auto 2xl:pt-8 px-2 2xl:px-0">
                {/* PHẦN 1 - Kiến thức chuyên sâu và tiên tiến */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-3xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 1 — KIẾN THỨC CHUYÊN SÂU VÀ TIÊN TIẾN (5-6 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                {/* PHẦN 2 - Kỹ năng phong cách và tư vấn cá nhân hóa */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-3xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 2 — KỸ NĂNG PHONG CÁCH VÀ TƯ VẤN CÁ NHÂN HÓA (4-5 BUỔI)
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

                {/* PHẦN 3 - Nghệ thuật kể chuyện thương hiệu */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8 max-w-4xl">
                        <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                            PHẦN 3 — NGHỆ THUẬT KỂ CHUYỆN THƯƠNG HIỆU & GIAO TIẾP NÂNG CAO (2-3 BUỔI)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                {/* PHẦN 4 & 5 - Grid 2 cột */}
                <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* PHẦN 4 - Huấn luyện và lãnh đạo */}
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8">
                            <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                                PHẦN 4 — HUẤN LUYỆN VÀ LÃNH ĐẠO PHÁT TRIỂN ĐỘI NGŨ (3-4 BUỔI)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            {phan4Sessions.map((session, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-green rounded-3xl p-4 shadow-lg border-2 border-[#c9a86c]"
                                >
                                    <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-lg md:text-xl mb-3 text-center">
                                        {session.title}
                                    </h3>
                                    <p className="text-white text-xs leading-relaxed text-justify-center">
                                        {session.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PHẦN 5 - Chiến lược kinh doanh */}
                    <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gradient-to-t from-[#be945f] to-[#fee08b] p-1 inline-block w-full text-center mb-8">
                            <div className="p-1 text-white bg-gray-orange rounded-full font-bold text-sm md:text-lg uppercase tracking-wide">
                                PHẦN 5 — CHIẾN LƯỢC KINH DOANH CAO CẤP VÀ THỊ TRƯỜNG (1-2 BUỔI)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            {phan5Sessions.map((session, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-green rounded-3xl p-4 shadow-lg border-2 border-[#c9a86c]"
                                >
                                    <h3 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent font-bold text-lg md:text-xl mb-3 text-center">
                                        {session.title}
                                    </h3>
                                    <p className="text-white text-xs leading-relaxed text-justify-center">
                                        {session.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CHỨNG CHỈ Section */}
                <div className="pt-12 flex flex-col">
                    <div className="w-full grid grid-cols-1 items-start mb-6">
                        <p className="uppercase tracking-[0.2em] text-2xl text-white">CHỨNG CHỈ</p>
                        <h2 className="text-4xl sm:text-6xl font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                            Master Jewelry Stylist
                        </h2>
                    </div>

                    {/* Certificate Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left - Content */}
                        <div className="text-white">
                            <p className="text-base leading-relaxed mb-8 text-justify italic">
                                <span className="font-bold not-italic">Chứng chỉ được cấp bởi NOBLECO - Thương hiệu kim cương & trang sức đạt chuẩn quốc tế, cùng sự tham gia thẩm định nội dung bởi chuyên gia có chứng nhận GIA.</span> Đây là minh chứng rõ ràng cho kiến thức và kỹ năng chuyên môn mà học viên đã được đào tạo bài bản, giúp học viên:
                            </p>

                            {/* Checklist */}
                            <div className="space-y-6 lg:max-w-lg">
                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p className="font-bold">Khẳng định vị thế chuyên gia trong ngành trang sức cao cấp:</p>
                                        <ul className="list-none mt-1">
                                            <li>- Chứng chỉ cấp độ cao nhất trong lộ trình đào tạo của NOBLECO.</li>
                                            <li>- Được công nhận về năng lực chuyên môn sâu.</li>
                                            <li>- Tạo lợi thế cạnh tranh nổi bật khi ứng tuyển hoặc hợp tác với thương hiệu cao cấp.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/7.png" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p className="font-bold">Mở rộng cơ hội nghề nghiệp & thu nhập</p>
                                        <p>Có thể đảm nhiệm các vị trí cao cấp: Senior Stylist, Store Trainer, Product Specialist,...</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Certificate Image */}
                        <div className="flex justify-center lg:justify-end lg:h-full">
                            <Image
                                src="/images/section14/3-01.jpg"
                                width={3840}
                                height={2789}
                                alt="Certificate of Completion - Master Jewelry Stylist Training Program"
                                className="w-full lg:h-full lg:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section14;
