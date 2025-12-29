"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/register-seminar`
    : "https://api.noblecovn.com/api/register-seminar";

interface SeminarRegistration {
    id: number;
    name: string;
    email: string;
    phone: string;
    participant_count: number;
    created_at: string;
    updated_at: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data?: SeminarRegistration;
}

export default function SeminarRegistrationDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [data, setData] = useState<SeminarRegistration | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(`${API_ENDPOINT}/${id}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });

                const result: ApiResponse = await response.json();

                if (response.ok && result.success && result.data) {
                    setData(result.data);
                } else if (response.status === 404) {
                    setError(result.message || "Không tìm thấy đăng ký seminar");
                } else {
                    setError(result.message || "Có lỗi xảy ra khi tải dữ liệu.");
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Không thể kết nối đến server. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <Link
                        href="/admin/seminar-registrations"
                        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
                    >
                        ← Quay lại danh sách
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Chi tiết đăng ký Seminar
                    </h1>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">Đang tải dữ liệu...</p>
                    </div>
                )}

                {/* Detail Card */}
                {data && !loading && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Thông tin đăng ký #{data.id}
                            </h2>
                        </div>
                        <div className="p-6">
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        ID
                                    </dt>
                                    <dd className="text-sm text-gray-900">{data.id}</dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Tên
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {data.name || <span className="text-gray-400">-</span>}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Email
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {data.email ? (
                                            <a
                                                href={`mailto:${data.email}`}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {data.email}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Số điện thoại
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {data.phone ? (
                                            <a
                                                href={`tel:${data.phone}`}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {data.phone}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Số lượng người tham gia
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {data.participant_count} người
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Ngày đăng ký
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {formatDate(data.created_at)}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">
                                        Cập nhật lần cuối
                                    </dt>
                                    <dd className="text-sm text-gray-900">
                                        {formatDate(data.updated_at)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                )}

                {/* Back Button */}
                {!loading && (
                    <div className="mt-6">
                        <Link
                            href="/admin/seminar-registrations"
                            className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Quay lại danh sách
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

