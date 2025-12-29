"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

interface PaginationData {
    current_page: number;
    data: SeminarRegistration[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: PaginationData;
}

export default function SeminarRegistrationsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [data, setData] = useState<PaginationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");
    
    // Query params
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "created_at");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
        (searchParams.get("sort_order") as "asc" | "desc") || "desc"
    );
    const [perPage, setPerPage] = useState(searchParams.get("per_page") || "15");
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page") || "1", 10));

    const fetchData = async () => {
        setLoading(true);
        setError("");

        try {
            const params = new URLSearchParams();
            if (search) params.append("search", search);
            if (sortBy) params.append("sort_by", sortBy);
            if (sortOrder) params.append("sort_order", sortOrder);
            if (perPage) params.append("per_page", perPage);
            params.append("page", currentPage.toString());

            const response = await fetch(`${API_ENDPOINT}?${params.toString()}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
            });

            const result: ApiResponse = await response.json();

            if (response.ok && result.success) {
                setData(result.data);
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

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, sortBy, sortOrder, perPage]);

    useEffect(() => {
        // Update URL when state changes (use replace to avoid adding to history)
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (sortBy) params.append("sort_by", sortBy);
        if (sortOrder) params.append("sort_order", sortOrder);
        if (perPage) params.append("per_page", perPage);
        if (currentPage > 1) params.append("page", currentPage.toString());

        router.replace(`/admin/seminar-registrations?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, sortBy, sortOrder, perPage, search]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const handleSort = (field: string) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setSortOrder("desc");
        }
        setCurrentPage(1);
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(e.target.value);
        setCurrentPage(1);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const getSortIcon = (field: string) => {
        if (sortBy !== field) return "↕️";
        return sortOrder === "asc" ? "↑" : "↓";
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Quản lý đăng ký Seminar
                    </h1>
                    <p className="text-gray-600">
                        Tổng số: {data?.total || 0} đăng ký
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Tìm kiếm theo tên, email hoặc số điện thoại..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Tìm kiếm
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setCurrentPage(1);
                            }}
                            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            Reset
                        </button>
                    </form>

                    <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
                        <label className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Hiển thị:</span>
                            <select
                                value={perPage}
                                onChange={handlePerPageChange}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span className="text-sm text-gray-600">bản ghi</span>
                        </label>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {/* Table */}
                {loading ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">Đang tải dữ liệu...</p>
                    </div>
                ) : data && data.data.length > 0 ? (
                    <>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSort("id")}
                                            >
                                                <div className="flex items-center gap-2">
                                                    ID {getSortIcon("id")}
                                                </div>
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSort("name")}
                                            >
                                                <div className="flex items-center gap-2">
                                                    Tên {getSortIcon("name")}
                                                </div>
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSort("email")}
                                            >
                                                <div className="flex items-center gap-2">
                                                    Email {getSortIcon("email")}
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Số điện thoại
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSort("participant_count")}
                                            >
                                                <div className="flex items-center gap-2">
                                                    Số lượng {getSortIcon("participant_count")}
                                                </div>
                                            </th>
                                            <th
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSort("created_at")}
                                            >
                                                <div className="flex items-center gap-2">
                                                    Ngày đăng ký {getSortIcon("created_at")}
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Thao tác
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data.data.map((registration) => (
                                            <tr key={registration.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {registration.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {registration.name || "-"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {registration.email || "-"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {registration.phone || "-"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {registration.participant_count}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatDate(registration.created_at)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <Link
                                                        href={`/admin/seminar-registrations/${registration.id}`}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        Xem chi tiết
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        {data.last_page > 1 && (
                            <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div className="text-sm text-gray-700">
                                        Hiển thị {data.from} đến {data.to} trong tổng số {data.total} kết quả
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                if (data.prev_page_url) {
                                                    setCurrentPage(currentPage - 1);
                                                }
                                            }}
                                            disabled={!data.prev_page_url}
                                            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                        >
                                            Trước
                                        </button>
                                        {data.links.map((link, index) => {
                                            if (link.label === "..." || !link.url) {
                                                return (
                                                    <span key={index} className="px-4 py-2">
                                                        {link.label}
                                                    </span>
                                                );
                                            }
                                            const pageNum = parseInt(link.label);
                                            if (isNaN(pageNum)) return null;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setCurrentPage(pageNum);
                                                    }}
                                                    className={`px-4 py-2 border rounded-lg ${
                                                        link.active
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "border-gray-300 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    {link.label}
                                                </button>
                                            );
                                        })}
                                        <button
                                            onClick={() => {
                                                if (data.next_page_url) {
                                                    setCurrentPage(currentPage + 1);
                                                }
                                            }}
                                            disabled={!data.next_page_url}
                                            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                        >
                                            Sau
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">Không có dữ liệu đăng ký nào.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

