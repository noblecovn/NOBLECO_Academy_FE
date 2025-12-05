"use client";

import { useState, useEffect } from "react";

// API endpoint
const API_ENDPOINT = "https://api.noblecovn.com/api/register-course";

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
    const [errors, setErrors] = useState<{
        [key: string]: string;
    }>({});

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

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;

    const validateEmail = (email: string): boolean => {
        if (!email) return true; // Email không bắt buộc
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        if (!phone) return false; // Phone bắt buộc
        return phoneRegex.test(phone);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error của field này khi người dùng nhập lại
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }

        // Validate khi người dùng nhập (client-side validation)
        if (name === "email") {
            if (value && !validateEmail(value)) {
                setErrors({ ...errors, email: "Email không hợp lệ" });
            }
        }

        if (name === "phoneNumber") {
            if (!validatePhone(value)) {
                setErrors({ ...errors, phoneNumber: "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (10 số, bắt đầu bằng 0 hoặc +84)" });
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        const newErrors: { email?: string; phoneNumber?: string } = {};
        
        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }
        
        if (!validatePhone(formData.phoneNumber)) {
            newErrors.phoneNumber = "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (10 số, bắt đầu bằng 0 hoặc +84)";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmitStatus({
                type: "error",
                message: "Vui lòng kiểm tra lại thông tin đã nhập.",
            });
            return;
        }

        // Reset status
        setSubmitStatus({ type: null, message: "" });
        setErrors({});
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

            // Xử lý response theo cấu trúc mới
            if (response.status === 201 && data.success) {
                // Success (201)
                setSubmitStatus({
                    type: "success",
                    message: data.message || "Đăng ký khóa học thành công! Chúng tôi sẽ liên hệ với bạn trong 24h làm việc.",
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
                setErrors({});
            } else if (response.status === 422 && !data.success) {
                // Validation Error (422)
                const serverErrors: { [key: string]: string } = {};
                
                // Map errors từ server vào state errors
                if (data.errors) {
                    Object.keys(data.errors).forEach((key) => {
                        const errorMessages = data.errors[key];
                        // Nếu errors là array, lấy message đầu tiên
                        if (Array.isArray(errorMessages)) {
                            serverErrors[key] = errorMessages[0];
                        } else if (typeof errorMessages === "string") {
                            serverErrors[key] = errorMessages;
                        }
                    });
                }
                
                setErrors(serverErrors);
                setSubmitStatus({
                    type: "error",
                    message: data.message || "Dữ liệu đầu vào không hợp lệ. Vui lòng kiểm tra lại thông tin đã nhập.",
                });
            } else {
                // Other errors (500, etc.)
                setSubmitStatus({
                    type: "error",
                    message: data.message || "Có lỗi xảy ra khi đăng ký khóa học. Vui lòng thử lại sau.",
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
        <section className="w-full pb-16 bg-gradient-to-t from-[#87c5ab] to-[#04241a]">
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
                            <h2 className="text-2xl md:text-3xl text-center font-medium uppercase bg-gradient-to-t from-[#eebc79] to-[#fffaee] bg-clip-text text-transparent">
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
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Họ tên của bạn*:"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.name ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email:"
                                    value={formData.email}
                                    onChange={handleChange}
                                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                    disabled={isSubmitting}
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.email ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Số điện thoại*:"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    pattern="^(0|\+84)[0-9]{9}$"
                                    required
                                    disabled={isSubmitting}
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.phoneNumber ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.phoneNumber}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    placeholder="Năm sinh:"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.dateOfBirth ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.dateOfBirth && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.dateOfBirth}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-deep-green text-sm font-medium">Cấp độ đào tạo bạn quan tâm *</label>
                                <select
                                    name="levelOfInterest"
                                    value={formData.levelOfInterest}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className={`w-full font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none bg-mint text-deep-green appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.levelOfInterest ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230a5c3f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                                >
                                    <option value=""></option>
                                    <option className="text-deep-green font-medium" value="cap1">Cấp độ 1 - Jewelry Advisor</option>
                                    <option className="text-deep-green font-medium" value="cap2">Cấp độ 2 - Senior Jewelry Consultant</option>
                                    <option className="text-deep-green font-medium" value="cap3">Cấp độ 3 - Master Jewelry Stylist</option>
                                </select>
                                {errors.levelOfInterest && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.levelOfInterest}</p>
                                )}
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
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.desire ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.desire && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.desire}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-deep-green text-sm font-medium">Khoảng thời gian phù hợp để NOBLECO Academy tư vấn cho bạn</label>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={`w-full bg-mint text-deep-green placeholder:text-deep-green placeholder:font-medium border rounded-full px-4 py-2 mt-1 text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                        errors.time ? "border-red-500 focus:border-red-500" : "border-[#0a5c3f] focus:border-[#0a5c3f]"
                                    }`}
                                />
                                {errors.time && (
                                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.time}</p>
                                )}
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
