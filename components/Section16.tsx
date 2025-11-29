"use client";

import { useState } from "react";

const Section16 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        levelOfInterest: "",
        desire: "",
        time: "",
        referral: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {/* Countdown Timer */}
                        <div className="flex justify-center">
                            <div className="flex justify-center w-fit bg-white p-2">
                                <div className="flex gap-4">
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">00</div>
                                        <div className="text-xl text-deep-green">days</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">00</div>
                                        <div className="text-xl text-deep-green">hours</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">00</div>
                                        <div className="text-xl text-deep-green">min</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">00</div>
                                        <div className="text-xl text-deep-green">sec</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Referral Box */}
                        <div className="bg-white rounded-2xl p-6">
                            <p className="text-deep-green text-sm mb-2">
                                Nếu đăng ký nhóm/ hoặc được cựu học viên giới thiệu, bạn hãy điền đầy đủ thông tin bạn của mình dưới đây
                            </p>
                            <textarea
                                rows={4}
                                name="referral"
                                value={formData.referral}
                                onChange={handleChange}
                                placeholder="Họ tên - SĐT - email của nhóm bạn:"
                                className="w-full bg-mint text-deep-green font-medium placeholder:font-medium border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0a5c3f] resize-none placeholder:text-deep-green"
                            />
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <h4 className="text-white font-bold text-center mb-3">Cam kết bảo mật thông tin</h4>
                            <p className="text-white text-sm text-center leading-relaxed">
                                Khi tham gia đào tạo, bạn đồng ý rằng các nội dung trong chương trình đào tạo là tài sản trí tuệ của NOBLECO Academy. Việc chia sẻ tài liệu ra ngoài là xâm phạm quyền sở hữu trí tuệ và có thể phải chịu mọi trách nhiệm trước pháp luật theo điều 225, 226 bộ luật hình sự.
                            </p>
                        </div>

                        {/* Support Text */}
                        <p className="text-white text-center text-sm">
                            Nếu bạn gặp lỗi trong quá trình đăng ký vui lòng liên hệ<br />
                            <span className="font-bold">NOBLECO Academy để được hỗ trợ</span>
                        </p>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white rounded-2xl p-8">
                        <h3 className="text-[#0a5c3f] font-bold text-xl mb-2">
                            Đăng ký đào tạo tại NOBLECO Academy
                        </h3>
                        <p className="text-deep-green text-base mb-2">
                            Vui lòng điền đầy đủ các thông tin dưới đây. Chúng tôi sẽ liên lạc lại trong 24h làm việc.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Họ tên của bạn:"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email:"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Số điện thoại:" 
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                            />

                            <input
                                type="text"
                                name="dateOfBirth"
                                placeholder="Năm sinh:" 
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                            />

                            <div>
                                <label className="text-deep-green text-sm font-medium">Cấp độ đào tạo bạn quan tâm *</label>
                                <select
                                    name="levelOfInterest"
                                    value={formData.levelOfInterest}
                                    onChange={handleChange}
                                    className="w-full font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] bg-mint text-deep-green appearance-none cursor-pointer"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230a5c3f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                                >
                                    <option value=""></option>
                                    <option className="text-deep-green font-medium" value="cap1">Cấp độ 1 - Jewelry Advisor</option>
                                    <option className="text-deep-green font-medium" value="cap2">Cấp độ 2 - Senior Jewelry Consultant</option>
                                    <option className="text-deep-green font-medium" value="cap3">Cấp độ 3 - Master Jewelry Stylist</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-deep-green text-sm font-medium">Bạn mong muốn gì khi tham gia đào tạo *</label>
                                <input
                                    type="text"
                                    name="desire"
                                    value={formData.desire}
                                    onChange={handleChange}
                                    className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                                />
                            </div>

                            <div>
                                <label className="text-deep-green text-sm font-medium">Khoảng thời gian phù hợp để NOBLECO Academy tư vấn cho bạn</label>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f]"
                                />
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    className="bg-[#ed1c24] hover:bg-red-700 text-white font-bold text-xl px-16 py-3 rounded-full transition-all duration-300 shadow-lg"
                                >
                                    ĐĂNG KÝ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section16;
