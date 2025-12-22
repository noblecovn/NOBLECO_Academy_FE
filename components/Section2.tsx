import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const TrainingProgramSection = () => {
    const programs = [
        {
            level: "CẤP ĐỘ ",
            title: "JEWELRY ADVISOR",
            description: <>
                Sau khóa học, bạn hoàn toàn có thể: <br />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Tự tin ứng tuyển vị trí Jewelry Advisor tại các thương hiệu lớn với thu nhập từ 8 - 15 triệu VNĐ (+ hoa hồng).</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Kết hợp kinh doanh trang sức cùng các công việc sẵn có (Stylist, Sales, Luxury Services) để gia tăng thu nhập.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Tạo bước đệm vững chắc lên cấp độ Senior, sẵn sàng Khởi nghiệp trang sức & đá quý tự thân.</p>
                    </div>
                </div>
            </>,
            image: "/images/section2/1.png",
            href: "#cap-do-1"
        },
        {
            level: "CẤP ĐỘ ",
            title: "SENIOR JEWELRY CONSULTANT",
            description: <>
                Lộ trình chuyên sâu dành cho mục tiêu thăng tiến và làm chủ: <br />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Trở thành Chuyên viên cấp cao với kỹ năng đàm phán và thuyết phục khách hàng thượng lưu (VVIP).</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Phát triển năng lực dẫn dắt đội ngũ, mở rộng cơ hội thăng tiến lên cấp Quản lý/Giám đốc showroom.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Trang bị tư duy vận hành và nguồn hàng để tự tin xây dựng thương hiệu trang sức cá nhân.</p>
                    </div>
                </div>
            </>,
            image: "/images/section2/2.jpg",
            href: "#cap-do-2"
        },
        {
            level: "CẤP ĐỘ ",
            title: "MASTER JEWELRY STYLIST",
            description: <>
                Khẳng định vị thế chuyên gia thực thụ với tầm vóc dẫn dắt và cố vấn chiến lược: <br />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Làm chủ tri thức chuyên sâu để định hình phong cách và cố vấn danh mục đầu tư cho giới thượng lưu.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Phát triển năng lực quản trị, vận hành hệ thống kinh doanh trang sức quy mô lớn và chuyên nghiệp.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <Image src="/images/section2/check.svg" width={15} height={11} alt="Check" className="flex-shrink-0 mt-2" />
                        <p>Trở thành người dẫn dắt, đào tạo và phát triển năng lực chuyên môn cho thế hệ đội ngũ kế cận.</p>
                    </div>
                </div>
            </>,
            image: "/images/section2/3.jpg",
            href: "#cap-do-3"
        }
    ];

    return (
        <section id="chuong-trinh-dao-tao" className="w-full pt-16 2xl:pt-0 min-h-fit bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            {/* Header */}
            <div className="text-center mb-12 border-b border-t border-white py-6 px-2 2xl:px-0 flex flex-col">
                <h2 className={`${cormorantGaramond.className} text-2xl md:text-4xl 2xl:text-5xl font-bold uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    CHƯƠNG TRÌNH ĐÀO TẠO
                </h2>
            </div>
            <div className="max-w-7xl mx-auto">

                {/* Programs Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-x-6 items-stretch px-2 2xl:px-0">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`w-full relative bg-[#0e392b] border border-[#2d5a4a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 flex flex-col`}
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 md:h-90 2xl:h-56">
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
                                    <span className={`${cormorantGaramond.className} uppercase text-lg font-bold text-white w-fit`}>{program.level} <span className="text-3xl">{index + 1}</span></span>
                                    <h2 className={`${cormorantGaramond.className}  text-xl 2xl:text-2xl font-bold uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                                        {program.title}
                                    </h2>
                                    <div className="text-white text-sm md:text-base leading-relaxed text-left flex-grow">
                                        {program.description}
                                    </div>
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
