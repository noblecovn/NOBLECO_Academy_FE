"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegisterCourseDetail {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth?: string;
  levelOfInterest?: string;
  desire?: string;
  time?: string;
  referral?: string;
  created_at: string;
  updated_at?: string;
}

interface RegisterCourseDetailModalProps {
  id: number | null;
  isOpen: boolean;
  onClose: () => void;
}

const API_BASE_URL = "https://api.noblecovn.com/api/register-course";

export default function RegisterCourseDetailModal({
  id,
  isOpen,
  onClose,
}: RegisterCourseDetailModalProps) {
  const [detail, setDetail] = useState<RegisterCourseDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDetail = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);

      if (!response.ok) {
        throw new Error("Không thể tải thông tin chi tiết");
      }

      const responseData = await response.json();
      // Xử lý response có thể có success wrapper hoặc trả về trực tiếp data
      if (responseData.success && responseData.data) {
        setDetail(responseData.data);
      } else if (responseData.id) {
        // Nếu trả về trực tiếp object detail
        setDetail(responseData);
      } else {
        throw new Error("Định dạng dữ liệu không hợp lệ");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isOpen && id) {
      fetchDetail();
    } else {
      setDetail(null);
      setError(null);
    }
  }, [isOpen, id, fetchDetail]);

  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 transition-opacity duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#265038] to-[#013817] px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Chi tiết đăng ký khóa học
          </h2>
          <button
            onClick={handleClose}
            aria-label="Đóng"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#265038]" />
            </div>
          )}

          {error && (
            <div className="py-12 text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={fetchDetail} variant="outline">
                Thử lại
              </Button>
            </div>
          )}

          {!loading && !error && detail && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    ID
                  </label>
                  <p className="mt-1 text-gray-900">{detail.id}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Họ và tên
                  </label>
                  <p className="mt-1 text-gray-900">{detail.name}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Email
                  </label>
                  <p className="mt-1 text-gray-900 break-all">
                    {detail.email || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Số điện thoại
                  </label>
                  <p className="mt-1 text-gray-900">{detail.phoneNumber}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Ngày sinh
                  </label>
                  <p className="mt-1 text-gray-900">
                    {detail.dateOfBirth || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Cấp độ quan tâm
                  </label>
                  <p className="mt-1 text-gray-900">
                    {detail.levelOfInterest || "N/A"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-gray-600">
                    Mong muốn
                  </label>
                  <p className="mt-1 text-gray-900 whitespace-pre-wrap">
                    {detail.desire || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Thời gian
                  </label>
                  <p className="mt-1 text-gray-900">{detail.time || "N/A"}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Nguồn giới thiệu
                  </label>
                  <p className="mt-1 text-gray-900">
                    {detail.referral || "N/A"}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Ngày đăng ký
                  </label>
                  <p className="mt-1 text-gray-900">
                    {formatDate(detail.created_at)}
                  </p>
                </div>

                {detail.updated_at && (
                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Ngày cập nhật
                    </label>
                    <p className="mt-1 text-gray-900">
                      {formatDate(detail.updated_at)}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t flex justify-end">
                <Button onClick={handleClose} variant="outline">
                  Đóng
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

