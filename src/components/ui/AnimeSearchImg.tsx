import React from "react";
import Link from "next/link";

export default function AnimeSearchImg({
  anime,
  animeSrc,
  className,
  animeId,
}: {
  anime: string;
  animeSrc: string;
  className?: string;
  animeId: number;
}) {
  return (
    <Link
      href={`/anime/animeSearch/${animeId}`}
      className={`min-w-48 h-60 relative cursor-pointer rounded-md group ${className}`}
    >
      <img
        src={animeSrc}
        className={`min-w-48 h-60 rounded-md ${className}`}
        alt=""
      />
    </Link>
  );
}
