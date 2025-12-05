import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["vietnamese"],
});
const Section14 = () => {
    return (
        <section className="w-full pt-0 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
            <div className="w-full flex flex-col items-center justify-center py-10">
                <span className={`${cormorantGaramond.className} uppercase text-2xl md:text-4xl text-white w-fit`}>CHỨNG CHỈ</span>
                <h2 className={`${cormorantGaramond.className} text-center text-4xl 2xl:text-7xl font-bold uppercase bg-gradient-to-tr md:bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent`}>
                    Master Jewelry Stylist
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
                                        <p className="font-bold">Khẳng định vị thế chuyên gia trong ngành trang sức cao cấp:</p>
                                        <ul className="list-none mt-1">
                                            <li>- Chứng chỉ cấp độ cao nhất trong lộ trình đào tạo của NOBLECO.</li>
                                            <li>- Được công nhận về năng lực chuyên môn sâu.</li>
                                            <li>- Tạo lợi thế cạnh tranh nổi bật khi ứng tuyển hoặc hợp tác với thương hiệu cao cấp.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#2a5a4a]">
                                    <Image src="/images/section8/check.svg" width={32} height={33} alt="Check" className="flex-shrink-0 mt-1" />
                                    <div className="text-sm text-deep-green">
                                        <p className="font-bold">Mở rộng cơ hội nghề nghiệp & thu nhập</p>
                                        <p>Có thể đảm nhiệm các vị trí cao cấp: Senior Stylist, Store Trainer, Product Specialist,...</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Certificate Image */}
                        <div className="flex justify-center lg:justify-end lg:h-full order-1">
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
