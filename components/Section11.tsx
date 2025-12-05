import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});

const Section11 = () => {
    return (
        <section className="w-full pt-0 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            <div className="w-full flex flex-col items-center justify-center py-10">
                <span className={`${cormorantGaramond.className} uppercase text-2xl md:text-4xl text-white w-fit`}>CHỨNG CHỈ</span>
                <h2 className={`${cormorantGaramond.className} text-center text-4xl 2xl:text-7xl font-bold uppercase bg-gradient-to-tr md:bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    Senior Jewelry Consultant
                </h2>
            </div>
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
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
                                    <Image src="/images/section8/check.svg" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p>Khẳng định năng lực chuyên môn. Chứng chỉ xác nhận bạn đã nắm vững kiến thức trang sức, kỹ năng tư vấn cao cấp, quy trình bán hàng xa xỉ và phong thái chuyên nghiệp, giúp bạn nổi bật so với ứng viên phổ thông.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/check.svg" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p>Thành thạo kỹ năng tư vấn & bán hàng trong ngành trang sức cao cấp. Khả năng tiếp cận, phân tích nhu cầu và thuyết phục khách hàng dựa trên giá trị sản phẩm.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/check.svg" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
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
