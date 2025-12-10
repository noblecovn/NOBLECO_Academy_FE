"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface RegistrationData {
  avatar: string;
  name: string;
  timeAgo: string;
  course: string;
  duration: number; // Thời gian hiển thị popup (giây)
}

const fakeRegistrations: RegistrationData[] = [
  {
    avatar: "/images/notification/3.jpg",
    name: "Nguyễn Thị Hương",
    timeAgo: "2 phút trước",
    course: "Jewelry Advisor",
    duration: 5,
  },
  {
    avatar: "/images/notification/2.jpg",
    name: "Trần Văn Minh",
    timeAgo: "5 phút trước",
    course: "Jewelry Advisor",
    duration: 6,
  },
  {
    avatar: "/images/notification/4.jpg",
    name: "Lê Thị Lan",
    timeAgo: "8 phút trước",
    course: "Master Jewelry Stylist",
    duration: 7,
  },
  {
    avatar: "/images/notification/1.jpg",
    name: "Phạm Đức Anh",
    timeAgo: "12 phút trước",
    course: "Jewelry Advisor",
    duration: 5,
  },
  {
    avatar: "/images/notification/5.jpg",
    name: "Hoàng Thị Mai",
    timeAgo: "15 phút trước",
    course: "Senior Jewelry Consultant",
    duration: 6,
  },
  {
    avatar: "/images/notification/6.jpg",
    name: "Vũ Văn Tuấn",
    timeAgo: "18 phút trước",
    course: "Master Jewelry Stylist",
    duration: 7,
  },
  {
    avatar: "/images/notification/7.jpg",
    name: "Đỗ Thị Hoa",
    timeAgo: "22 phút trước",
    course: "Jewelry Advisor",
    duration: 5,
  },
  {
    avatar: "/images/notification/8.jpg",
    name: "Bùi Văn Hùng",
    timeAgo: "25 phút trước",
    course: "Senior Jewelry Consultant",
    duration: 6,
  },
];

export default function RegistrationNotificationPopup() {
  const [currentRegistration, setCurrentRegistration] = useState<RegistrationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Hàm lấy thời gian ngẫu nhiên từ 30-45 giây
  const getRandomInterval = () => {
    return Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000; // 30-45 giây tính bằng milliseconds
  };

  // Hàm chọn ngẫu nhiên một đăng ký
  const getRandomRegistration = () => {
    const randomIndex = Math.floor(Math.random() * fakeRegistrations.length);
    return fakeRegistrations[randomIndex];
  };

  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let nextShowTimer: NodeJS.Timeout;

    const showNextNotification = () => {
      // Chọn ngẫu nhiên một đăng ký
      const registration = getRandomRegistration();
      setCurrentRegistration(registration);
      setIsClosing(false);
      setIsVisible(true);

      // Tự động ẩn popup sau thời gian duration của registration đó
      hideTimer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsClosing(false);
          
          // Sau khi popup đã ẩn hoàn toàn, lên lịch hiển thị popup tiếp theo
          // với thời gian ngẫu nhiên từ 30-45 giây
          const nextInterval = getRandomInterval();
          nextShowTimer = setTimeout(() => {
            showNextNotification();
          }, nextInterval);
        }, 300); // Thời gian animation fade out
      }, registration.duration * 1000);
    };

    // Hiển thị popup đầu tiên sau 3 giây khi component mount
    showTimer = setTimeout(() => {
      showNextNotification();
    }, 3000);

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
      if (nextShowTimer) clearTimeout(nextShowTimer);
    };
  }, []);

  if (!currentRegistration || !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 left-4 z-999 max-w-sm w-[calc(100%-2rem)] md:w-auto transition-all duration-300 ${
        isClosing
          ? "opacity-0 -translate-x-full"
          : "opacity-100 translate-x-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header với gradient xanh lá */}
        <div className="bg-gradient-to-r from-[#265038] to-[#013817] px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-semibold">Đăng ký mới</span>
          </div>
        </div>

        {/* Nội dung */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0 w-12 h-12">
              <Image
                src={currentRegistration.avatar}
                alt={currentRegistration.name}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-full border-2 border-[#B6CCBE]"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Thông tin */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#013817] mb-1">
                {currentRegistration.name}
              </p>
              <p className="text-xs text-gray-600 mb-2">
                đã đăng ký khóa học
              </p>
              <p className="text-sm font-medium text-[#376048] mb-1">
                {currentRegistration.course}
              </p>
              <p className="text-xs text-gray-500">
                {currentRegistration.timeAgo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

