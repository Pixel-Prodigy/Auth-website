"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex items-center justify-center gap-4 pt-6 text-black font-semibold text-lg">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {session ? (
        <Link href="/login">{session.user?.name}</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
}
