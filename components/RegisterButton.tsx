import Link from "next/link";

const RegisterButton = () => {
    return (
        <Link href="#register">
            <div className="flex justify-center">
                <div className="rounded-full bg-gradient-to-t from-[#c9956b] via-[#eab788] to-[#ffe4c7] p-1">
                    <button className="cursor-pointer relative px-12 py-4 text-4xl font-bold uppercase tracking-wider rounded-full bg-[#043022] hover:bg-[#043022]/80 transition-all duration-300 shadow-lg">
                        <span className="relative z-10 text-white">ĐĂNG KÝ NGAY</span>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default RegisterButton;