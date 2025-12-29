"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/register-seminar`
    : "https://api.noblecovn.com/api/register-seminar";

interface FormData {
    name: string;
    email: string;
    phone: string;
    participants: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface ApiError {
    [key: string]: string[];
}

export default function SeminarRegistrationPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        participants: "",
    });
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [errors, setErrors] = useState<ApiError>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string>("");

    // Target date for countdown (có thể thay đổi)
    const targetDate = new Date("2026-02-01T00:00:00").getTime();

    // Countdown timer logic
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Show popup after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // Hiển thị sau 2 giây

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error khi người dùng nhập lại
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
        if (errorMessage) {
            setErrorMessage("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset errors
        setErrors({});
        setErrorMessage("");
        
        // Validate participant_count
        const participantCount = formData.participants 
            ? parseInt(formData.participants, 10) 
            : 1;
        
        if (formData.participants && (isNaN(participantCount) || participantCount < 1)) {
            setErrorMessage("Số lượng người tham gia phải là số nguyên lớn hơn hoặc bằng 1.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Chuẩn bị dữ liệu gửi lên API
            const payload = {
                name: formData.name.trim() || null,
                email: formData.email.trim() || null,
                phone: formData.phone.trim() || null,
                participant_count: participantCount,
            };

            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.status === 201 && data.success) {
                // Success (201)
                setSuccessMessage(data.message || "Đăng ký seminar thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
                setShowSuccessModal(true);
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    participants: "",
                });
            } else if (response.status === 422 && !data.success) {
                // Validation Error (422)
                if (data.errors) {
                    setErrors(data.errors);
                }
                setErrorMessage(data.message || "Dữ liệu đầu vào không hợp lệ. Vui lòng kiểm tra lại thông tin đã nhập.");
            } else {
                // Other errors (500, etc.)
                setErrorMessage(data.message || "Có lỗi xảy ra khi đăng ký seminar. Vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("Không thể kết nối đến server. Vui lòng kiểm tra kết nối internet và thử lại.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Always render success modal even if registration popup is not visible
    if (showSuccessModal) {
        return (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 animate-fadeIn">
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" 
                    onClick={() => {
                        setShowSuccessModal(false);
                        handleClose();
                    }} 
                />
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scaleIn">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounceIn">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        Thành công!
                    </h3>

                    {/* Message */}
                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                        {successMessage}
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => {
                            setShowSuccessModal(false);
                            handleClose();
                        }}
                        className="w-full bg-[#d4af37] hover:bg-[#c4a027] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        );
    }

    if (!isVisible) {
        return null;
    }

    return (
        <>
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Popup Content */}
            <div
                className="relative w-full max-w-5xl overflow-hidden"
            >
                <Image src="/images/popup2/bg.png" alt="Logo" width={3319} height={1888} className="w-full h-full object-cover absolute top-0 left-0" />
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 flex items-center justify-center text-white hover:text-[#d4af37] transition-colors"
                    aria-label="Đóng"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Content */}
                <div className="relative p-6 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-2 md:mb-6 gap-2 md:gap-0 flex flex-col items-center justify-center">
                        <Image src="/images/popup2/text.png" alt="Logo" width={3056} height={394} className="w-full h-auto" />
                        <p className="text-white text-xs md:text-base lg:text-lg">
                            Cơ hội duy nhất gặp gỡ các chuyên gia đầu ngành GIA và Chiến lược kinh doanh quốc tế tại <br className="md:block hidden"/>Seminar đặc biệt tháng 1 này.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mb-2 md:mb-6">
                        {/* Error message */}
                        {errorMessage && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {errorMessage}
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                            {/* Tên */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full bg-white border-2 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                                        errors.name ? "border-red-500 focus:ring-red-500" : "border-[#d4af37] focus:ring-[#d4af37]"
                                    }`}
                                    placeholder="Tên:"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{Array.isArray(errors.name) ? errors.name[0] : errors.name}</p>
                                )}
                            </div>
                            {/* Số điện thoại */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className={`w-full bg-white border-2 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-[#d4af37] focus:ring-[#d4af37]"
                                    }`}
                                    placeholder="Số điện thoại:"
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-500">{Array.isArray(errors.phone) ? errors.phone[0] : errors.phone}</p>
                                )}
                            </div>
                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full bg-white border-2 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                                        errors.email ? "border-red-500 focus:ring-red-500" : "border-[#d4af37] focus:ring-[#d4af37]"
                                    }`}
                                    placeholder="Email:"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{Array.isArray(errors.email) ? errors.email[0] : errors.email}</p>
                                )}
                            </div>



                            {/* Số lượng người tham gia */}
                            <div>
                                <input
                                    type="number"
                                    name="participants"
                                    value={formData.participants}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    className={`w-full bg-white border-2 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 ${
                                        errors.participant_count ? "border-red-500 focus:ring-red-500" : "border-[#d4af37] focus:ring-[#d4af37]"
                                    }`}
                                    placeholder="Số lượng người tham gia:"
                                />
                                {errors.participant_count && (
                                    <p className="mt-1 text-sm text-red-500">{Array.isArray(errors.participant_count) ? errors.participant_count[0] : errors.participant_count}</p>
                                )}
                            </div>
                        </div>
                    </form>

                    {/* Countdown Timer and Limited Offer */}
                    <div className="mx-auto flex flex-col md:flex-row gap-2 md:gap-4 mb-2 md:mb-6 w-4/6">
                        {/* Countdown Timer */}
                        <div className="flex-1 bg-white/40 p-4">
                            <div className="grid grid-cols-4 gap-2 text-center items-center justify-center">
                                <div>
                                    <div className="text-white bg-red-600 text-2xl md:text-3xl aspect-square flex items-center justify-center font-bold">
                                        {String(timeLeft.days).padStart(2, "0")}
                                    </div>
                                    <div className="text-black text-xs md:text-sm">days</div>
                                </div>
                                <div>
                                    <div className="text-white bg-red-600 text-2xl md:text-3xl aspect-square flex items-center justify-center font-bold">
                                        {String(timeLeft.hours).padStart(2, "0")}
                                    </div>
                                    <div className="text-black text-xs md:text-sm">hours</div>
                                </div>
                                <div>
                                    <div className="text-white bg-red-600 text-2xl md:text-3xl aspect-square flex items-center justify-center font-bold">
                                        {String(timeLeft.minutes).padStart(2, "0")}
                                    </div>
                                    <div className="text-black text-xs md:text-sm">min</div>
                                </div>
                                <div>
                                    <div className="text-white bg-red-600 text-2xl md:text-3xl aspect-square flex items-center justify-center font-bold">
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </div>
                                    <div className="text-black text-xs md:text-sm">sec</div>
                                </div>
                            </div>
                        </div>

                        {/* Limited Offer */}
                        <div className="flex-1 bg-white/40 p-4 flex items-center">
                            <Image src="/images/popup2/fire-flame.gif" alt="Logo" width={80} height={80} className="w-15 h-15 lg:w-20 xl:h-20"/>
                            <div className="flex-1">
                                <div
                                    className="text-red-600 text-xl font-semibold uppercase text-center"
                                    style={{
                                        textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, 0 -1px 0 white, 0 1px 0 white, -1px 0 0 white, 1px 0 0 white'
                                    }}
                                >
                                    DUY NHẤT
                                </div>
                                <div
                                    className="text-red-600 text-3xl lg:text-4xl xl:text-6xl font-bold text-center"
                                    style={{
                                        textShadow: '-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white, 0 -2px 0 white, 0 2px 0 white, -2px 0 0 white, 2px 0 0 white'
                                    }}
                                >
                                    30 suất
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="cursor-pointer relative mx-auto w-full md:w-4/6 text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Image src="/images/popup2/CTA-1.png" alt="Logo" width={200} height={50} className="absolute top-0 left-0 w-full h-auto" />
                        <Image src="/images/popup2/CTA-1.png" alt="" width={200} height={50} className="w-full h-auto opacity-0 pointer-events-none" aria-hidden="true" />
                        <span className="absolute inset-0 uppercase z-10 flex items-center justify-center text-center w-full">
                            {isSubmitting ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ NHẬN VÉ MỜI NGAY"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

