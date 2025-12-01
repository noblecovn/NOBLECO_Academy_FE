import Image from "next/image";

const TrainingProgramSection = () => {
    const programs = [
        {
            level: "CẤP ĐỘ 1",
            title: "\"JEWELRY ADVISOR\"",
            description: "<span class='font-bold'>Jewelry Advisor</span> được thiết kế tinh gọn để giúp học viên nhanh chóng trở thành một Tư vấn viên chuyên nghiệp – người có khả năng nắm vững sản phẩm, tự tin  thuyết phục, chốt sale và xây dựng mối quan hệ với khách hàng bền vững.",
            image: "/images/section2/1.png",
            href: "#cap-do-1"
        },
        {
            level: "CẤP ĐỘ 2",
            title: "\"SENIOR JEWELRY CONSULTANT\"",
            description: "<span class='font-bold'>Senior Jewelry Consultant</span> là lộ trình chuyên sâu được thiết kế để giúp học viên đi từ Tư vấn viên lên Chuyên viên cấp cao. Chương trình học kết hợp tinh hoa giữa kỹ năng đàm phán, chốt sale và phát triển năng lực huấn luyện cấp dưới, giúp bạn mở rộng cơ hội thăng tiến và khẳng định vị thế vững chắc trong phân khúc khách hàng cao cấp.",
            image: "/images/section2/2.jpg",
            href: "#cap-do-2"
        },
        {
            level: "CẤP ĐỘ 3",
            title: "\"MASTER JEWELRY STYLIST\"",
            description: "<span class='font-bold'>Master Jewelry Stylist</span> là cấp độ đào tạo cao nhất, giúp học viên trở thành một Chuyên gia trang sức thực thụ với kiến thức sâu rộng. Ở vị trí này, học viên sẽ đảm nhận vai trò Lãnh đạo, Cố vấn chuyên môn, và phát triển năng lực cho toàn bộ đội ngũ.",
            image: "/images/section2/3.jpg",
            href: "#cap-do-3"
        }
    ];

    return (
        <section id="chuong-trinh-dao-tao" className="w-full pt-16 2xl:py-16 min-h-fit bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            {/* Header */}
            <div className="text-center mb-12 border-b border-t border-white py-12 px-2 2xl:px-0 flex flex-col">
                <h2 className="text-white text-2xl 2xl:text-5xl font-bold tracking-wide">
                    CHƯƠNG TRÌNH ĐÀO TẠO
                </h2>
            </div>
            <div className="max-w-7xl mx-auto">

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-6 lg:gap-8 items-stretch px-2 2xl:px-0">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#0e392b] border border-[#2d5a4a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 flex flex-col ${index === 0 ? 'md:col-span-2' : index === 1 ? 'md:col-span-3' : 'md:col-span-2'}`}
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 md:h-56">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <div className="text-center flex-grow">
                                    <h4 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent text-lg 2xl:text-2xl font-bold">
                                        {program.level}
                                    </h4>
                                    <h4 className="bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent text-lg 2xl:text-2xl font-bold pb-2">
                                        {program.title}
                                    </h4>
                                    <p className="text-white text-sm md:text-base leading-relaxed text-justify-center flex-grow">
                                        <span dangerouslySetInnerHTML={{ __html: program.description }} />
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="text-center mt-auto pt-10 flex justify-center">
                                    <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-[2px] w-fit">

                                        <a
                                            href={program.href}
                                            className="bg-[#0e392b] inline-block px-12 py-2 rounded-full text-white text-sm md:text-base font-medium"
                                        >
                                            TÌM HIỂU THÊM
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingProgramSection;
