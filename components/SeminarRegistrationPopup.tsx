"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Integrate with API
        console.log("Form submitted:", formData);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
            handleClose();
        }, 1000);
    };

    if (!isVisible) {
        return null;
    }

    return (
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
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white hover:text-[#d4af37] transition-colors"
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
                    <div className="text-center mb-6">
                        <Image src="/images/popup2/text.png" alt="Logo" width={3056} height={394} />
                        <p className="text-white text-base md:text-lg">
                            Cơ hội duy nhất gặp gỡ các chuyên gia đầu ngành GIA và Chiến lược kinh doanh quốc tế tại <br />Seminar đặc biệt tháng 1 này.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {/* Tên */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border-2 border-[#d4af37] rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                    placeholder="Tên:"
                                />
                            </div>
                            {/* Số điện thoại */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border-2 border-[#d4af37] rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                    placeholder="Số điện thoại:"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border-2 border-[#d4af37] rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                    placeholder="Email:"
                                />
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
                                    className="w-full bg-white border-2 border-[#d4af37] rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                    placeholder="Số lượng người tham gia:"
                                />
                            </div>
                        </div>
                    </form>

                    {/* Countdown Timer and Limited Offer */}
                    <div className="mx-auto flex flex-col md:flex-row gap-4 mb-6 w-4/6">
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
                        <div className="flex-1 bg-white/40 p-4 flex items-center gap-3">
                            <div className="text-3xl md:text-4xl"><Image src="/images/popup2/fire-flame.gif" alt="Logo" width={80} height={80} /></div>
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
                                    className="text-red-600 text-2xl md:text-6xl font-bold text-center"
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
                        className="cursor-pointer relative mx-auto w-4/6 text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-6 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Image src="/images/popup2/CTA.png" alt="Logo" width={200} height={50} className="absolute top-0 left-0 w-full object-cover" />
                        <Image src="/images/popup2/KC2.png" alt="Logo" width={147} height={147} className="absolute top-0 left-5 z-2 h-7/10 w-auto" />
                        <Image src="/images/popup2/KC2.png" alt="Logo" width={147} height={147} className="absolute top-2 right-2 z-2 h-7/10 w-auto rotate-90" />
                        <span className="uppercase z-10">
                            {isSubmitting ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ NHẬN VỀ MỜI NGAY"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

