"use client";

import { useState, useEffect } from "react";

// API endpoint - có thể thay đổi thành biến môi trường
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || "https://api.noblecovn.com/api/register";

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

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    useEffect(() => {
        // Get or set target date in localStorage
        const STORAGE_KEY = 'nobleco_countdown_target';
        let targetDate: Date;

        const storedTarget = localStorage.getItem(STORAGE_KEY);
        if (storedTarget) {
            targetDate = new Date(storedTarget);
            // If target date has passed, reset to 2 days from now
            if (targetDate.getTime() <= Date.now()) {
                targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 2);
                localStorage.setItem(STORAGE_KEY, targetDate.toISOString());
            }
        } else {
            // First visit: set target to 2 days from now
            targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 2);
            localStorage.setItem(STORAGE_KEY, targetDate.toISOString());
        }

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset status
        setSubmitStatus({ type: null, message: "" });
        setIsSubmitting(true);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong 24h làm việc.",
                });
                // Reset form sau khi submit thành công
                setFormData({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    dateOfBirth: "",
                    levelOfInterest: "",
                    desire: "",
                    time: "",
                    referral: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                type: "error",
                message: "Không thể kết nối đến server. Vui lòng kiểm tra kết nối internet và thử lại.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full pb-16 bg-gradient-to-b from-[#87c5ab] to-[#04241a]">
            <div className="max-w-7xl mx-auto px-2 2xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {/* Countdown Timer */}
                        <div className="flex justify-center">
                            <div className="flex justify-center w-fit bg-white p-2">
                                <div className="flex gap-4">
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">{String(timeLeft.days).padStart(2, '0')}</div>
                                        <div className="text-xl text-deep-green">days</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">{String(timeLeft.hours).padStart(2, '0')}</div>
                                        <div className="text-xl text-deep-green">hours</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                        <div className="text-xl text-deep-green">min</div>
                                    </div>
                                    <div className="text-white text-center font-bold">
                                        <div className="text-4xl bg-[#ed1c24] p-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
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
                                disabled={isSubmitting}
                                className="w-full bg-mint text-deep-green font-medium placeholder:font-medium border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#0a5c3f] resize-none placeholder:text-deep-green disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <h2 className="text-2xl md:text-3xl text-center font-medium uppercase leading-tight tracking-wide bg-gradient-to-t from-[#be945f] to-[#fee08b] bg-clip-text text-transparent">
                                Cam kết bảo mật thông tin
                            </h2>
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

                        {/* Status Message */}
                        {submitStatus.type && (
                            <div
                                className={`mb-4 p-4 rounded-lg ${submitStatus.type === "success"
                                        ? "bg-green-100 text-green-800 border border-green-300"
                                        : "bg-red-100 text-red-800 border border-red-300"
                                    }`}
                            >
                                <p className="text-sm font-medium">{submitStatus.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Họ tên của bạn:"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email:"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Số điện thoại:"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                            />

                            <input
                                type="text"
                                name="dateOfBirth"
                                placeholder="Năm sinh:"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                            />

                            <div>
                                <label className="text-deep-green text-sm font-medium">Cấp độ đào tạo bạn quan tâm *</label>
                                <select
                                    name="levelOfInterest"
                                    value={formData.levelOfInterest}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] bg-mint text-deep-green appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    required
                                    disabled={isSubmitting}
                                    className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="text-deep-green text-sm font-medium">Khoảng thời gian phù hợp để NOBLECO Academy tư vấn cho bạn</label>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border border-[#0a5c3f] rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:border-[#0a5c3f] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#ed1c24] hover:bg-red-700 text-white font-bold text-xl px-16 py-3 rounded-full transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#ed1c24]"
                                >
                                    {isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ"}
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
