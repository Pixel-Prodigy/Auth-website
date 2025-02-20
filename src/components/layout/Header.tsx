"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-center absolute top-0 left-0 right-0 gap-4 pt-6 text-gray-400 font-semibold text-lg">
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
      <Link
        href="/anime"
        className={`transition-colors duration-500 hover:text-gray-300 ${
          pathname === "/anime" ? " text-white border-b-2 pb-1" : ""
        }`}
      >
        Anime
      </Link>
      {session ? (
        <Link
          href="/login"
          className={`transition-colors duration-300 hover:text-gray-300 flex items-center gap-2 ${
            pathname === "/login" ? " text-white border-b-2 pb-1" : ""
          }`}
        >
          <p>{session.user?.name}</p>
          {session.user?.image && (
            <img
              src="{session.user?.image}"
              className="w-8 h-8 z-10 rounded-full"
              alt=""
            />
          )}
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
