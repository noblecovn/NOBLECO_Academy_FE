/**
 * Config để định nghĩa các routes cần ẩn Header/Footer
 * Thêm route path vào đây để ẩn Header/Footer cho route đó
 */
export const routesWithoutHeaderFooter = [
  "/register-course",
  // Thêm các routes khác cần ẩn Header/Footer ở đây
  // Ví dụ: "/admin", "/dashboard", etc.
];

/**
 * Kiểm tra xem route có cần ẩn Header/Footer không
 */
export function shouldHideHeaderFooter(pathname: string | null): boolean {
  if (!pathname) return false;
  
  return routesWithoutHeaderFooter.some((route) =>
    pathname.startsWith(route)
  );
}

