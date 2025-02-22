"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import InteractiveCards from "../ui/InteractiveCards";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Anime", href: "/anime" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header style={{ borderRadius: "8px" }} className="flex items-center justify-center w-fit mx-auto px-5 bg-[#0f172a] h-[45px] absolute top-2 left-0 right-0 gap-4 pt-6 text-gray-400 font-semibold text-lg">
      <div className="relative flex -translate-y-3 gap-6">
        {links.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={`relative transition-colors duration-300 hover:text-white ${pathname === href ? 'text-white font-bold ' : ''}`}
          >
            {name}
            {pathname === href && (
              <motion.div
                layoutId="active-link"
                className="absolute -bottom-[1px]  -right-2 h-[31px] w-[70px] bg-gray-400/40 rounded-md"
                style={{ borderRadius: "8px" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {session && (
        <Link
          href="/login"
          className="transition-colors duration-300 -translate-y-3 hover:text-gray-300"
        >
          <div className="flex items-center gap-2">
            {session.user?.image && (
              <InteractiveCards
                src={session.user?.image}
                variant="profile-imageSmall"
                className="rounded-full"
                width={25}
                height={25}
              />
            )}
          </div>
        </Link>
      )}
    </header>
  );
}
