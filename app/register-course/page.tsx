"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, ChevronLeft, ChevronRight, Eye, Loader2, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegisterCourseDetailModal from "@/components/RegisterCourseDetailModal";

interface RegisterCourse {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth?: string;
  levelOfInterest?: string;
  created_at: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: RegisterCourse[];
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    path: string;
  };
}

const API_BASE_URL = "https://api.noblecovn.com/api/register-course";

export default function RegisterCoursePage() {
  const [registrations, setRegistrations] = useState<RegisterCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage] = useState(15);
  
  // Search & Sort
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  // Modal
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setCurrentPage(1); // Reset to first page on search
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch data
  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      
      if (searchQuery) {
        params.append("search", searchQuery);
      }
      
      params.append("sort_by", sortBy);
      params.append("sort_order", sortOrder);
      params.append("per_page", perPage.toString());
      params.append("page", currentPage.toString());

      const response = await fetch(`${API_BASE_URL}?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Không thể tải danh sách đăng ký");
      }

      const responseData: ApiResponse = await response.json();
      
      // Xử lý response theo cấu trúc từ API
      if (responseData.success && responseData.data && Array.isArray(responseData.data.data)) {
        setRegistrations(responseData.data.data);
        setTotalPages(responseData.data.last_page);
        setTotalItems(responseData.data.total);
      } else {
        throw new Error("Định dạng dữ liệu không hợp lệ");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
      setRegistrations([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, sortBy, sortOrder, perPage, currentPage]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const handleViewDetail = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Danh sách đăng ký khóa học
          </h1>
          <p className="text-gray-600">
            Quản lý và xem danh sách đăng ký khóa học NOBLECO Academy
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên, email, số điện thoại..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265038] focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Button
                onClick={handleSort}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowUpDown className="w-4 h-4" />
                Sắp xếp: {sortOrder === "desc" ? "Mới nhất" : "Cũ nhất"}
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        {loading && (
          <div className="bg-white rounded-lg shadow-sm p-12 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#265038]" />
          </div>
        )}

        {error && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={fetchRegistrations} variant="outline">
              Thử lại
            </Button>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#265038] to-[#013817] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Họ và tên
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Số điện thoại
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Cấp độ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Ngày đăng ký
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registrations.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-6 py-12 text-center text-gray-500"
                        >
                          Không có dữ liệu đăng ký nào
                        </td>
                      </tr>
                    ) : (
                      registrations.map((registration) => (
                        <tr
                          key={registration.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {registration.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {registration.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.email || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.phoneNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.levelOfInterest || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {formatDate(registration.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                            <Button
                              onClick={() => handleViewDetail(registration.id)}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              <Eye className="w-4 h-4" />
                              Xem
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between bg-white rounded-lg shadow-sm p-4">
                <div className="text-sm text-gray-600">
                  Hiển thị{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * perPage + 1}
                  </span>{" "}
                  đến{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * perPage, totalItems)}
                  </span>{" "}
                  trong tổng số <span className="font-medium">{totalItems}</span>{" "}
                  kết quả
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Trước
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          className="min-w-[40px]"
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    variant="outline"
                    size="sm"
                  >
                    Sau
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Summary */}
            {totalPages === 1 && totalItems > 0 && (
              <div className="mt-4 text-sm text-gray-600 text-center">
                Tổng cộng: <span className="font-medium">{totalItems}</span> đăng
                ký
              </div>
            )}
          </>
        )}

        {/* Modal */}
        {selectedId && (
          <RegisterCourseDetailModal
            id={selectedId}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

