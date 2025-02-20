"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-center gap-4 pt-6 text-gray-400 font-semibold text-lg">
      <Link
        href="/"
        className={`transition-colors duration-500 hover:text-gray-300 ${
          pathname === "/" ? " text-white border-b-2 pb-1" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`transition-colors duration-500 hover:text-gray-300 ${
          pathname === "/about" ? " text-white border-b-2 pb-1" : ""
        }`}
      >
        About
      </Link>
      {session ? (
        <Link
          href="/login"
          className={`transition-colors duration-300 hover:text-gray-300 ${
            pathname === "/login" ? " text-white border-b-2 pb-1" : ""
          }`}
        >
          {session.user?.name}
        </Link>
      ) : (
        <Link
          href="/login"
          className={`transition-colors duration-500 hover:text-gray-300 ${
            pathname === "/login" ? " text-white border-b-2 pb-1" : ""
          }`}
        >
          Login
        </Link>
      )}
    </header>
  );
}
