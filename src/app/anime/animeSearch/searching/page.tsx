import Link from "next/link";

import React from "react";
import SearchBar from "./SearchBar";
export default function page() {
  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center pt-28">
      <SearchBar />
      <Link href="/anime/animeSearch">
        <div className="min-h-screen min-w-screen bg-black/70 -z-10 fixed inset-0"></div>
      </Link>
    </div>
  );
}
