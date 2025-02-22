"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
type DataType = {
  mal_id: number;
  images: {
    jpg: {
      large_image_url: string;
    };
  };

  url: string;
  title_english: string;
  score: number;
  genres: { name: string; mal_id: number }[];
};

export default function AnimeShowcase() {
  const [page, _setPage] = useState(1);
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/seasons/now?page=${page}`
        );
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        const resultedData = result.data as DataType[];
        const uniqueData: DataType[] = Array.from(
          new Map(
            resultedData.map((anime: DataType) => [anime.mal_id, anime])
          ).values()
        );
        console.log(resultedData);

        setData(uniqueData);
      } catch (error) {
        console.error("Failed to fetch anime:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleNext = () => {
    if (currentIndex + 5 < data.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 5 >= 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <div className="max-w-6xl pt-20 pb-20 mx-auto text-white">
      <h1 className="mb-4 text-4xl font-bold">Top Animes</h1>
      <div className="flex gap-4 pb-4 mb-8 overflow-x-auto cursor-pointer">
        {loading
          ? [...Array(5)].map((_, index) => (
              <Skeleton
                key={index}
                className={`w-${
                  index === 0 ? "[350px] h-[500px]" : "[200px] h-[300px]"
                } rounded-lg bg-gray-300/40`}
                style={{ borderRadius: "8px" }}
              />
            ))
          : data.slice(0, 5).map((anime, index) => (
              <Link
                key={anime.mal_id}
                href={`/anime/animeSearch/${anime.mal_id}`}
                className={`relative group bg-cover   max-w-${
                  index === 0 ? "[350px] h-[500px]" : "[200px] h-[300px]"
                } rounded-md group`}
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  className={`relative group bg-cover   max-w-${
                    index === 0
                      ? "[350px] h-full max-h-[400px]"
                      : "[200px] h-full max-h-[300px]"
                  }`}
                  alt=""
                />
                <div
                  className={`absolute max-h-[400px]  inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300
                    `}
                >
                  <span className="group-hover:opacity-100 flex flex-col items-center text-lg font-bold text-center transition duration-300 opacity-0">
                    {anime.title_english}
                    <FaArrowRight className="mt-4 text-3xl" />
                  </span>
                </div>
              </Link>
            ))}
      </div>

      <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold">
        Anime to watch next
        <FaArrowRight className="ml-2" />
      </h2>
      <div className="h-[1px] w-full bg-gray-300"></div>

      <div className="flex items-center gap-4 px-4 mt-4 mb-4">
        <Button onClick={handlePrev} disabled={currentIndex === 0}>
          <FaArrowLeft />
        </Button>
        <div className="flex gap-4">
          {loading
            ? [...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="min-w-48 h-60 bg-gray-300/40 rounded-md"
                  style={{ borderRadius: "8px" }}
                />
              ))
            : data.slice(currentIndex, currentIndex + 5).map((anime) => (
                <Link
                  key={anime.mal_id}
                  href={`/anime/animeSearch/${anime.mal_id}`}
                  className={`relative group bg-cover   rounded-md group`}
                >
                  <img
                    src={anime.images.jpg.large_image_url}
                    className={`relative group bg-cover  `}
                    alt=""
                  />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300`}
                  >
                    <span className="group-hover:opacity-100 flex flex-col items-center text-lg font-bold text-center transition duration-300 opacity-0">
                      {anime.title_english}
                      <FaArrowRight className="mt-4 text-3xl" />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
        <Button onClick={handleNext} disabled={currentIndex + 5 >= data.length}>
          <FaArrowRight />
        </Button>
      </div>

      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">All Animes</h2>
        <div className="space-y-6">
          {loading
            ? [...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Skeleton
                    className="bg-gray-300/40 w-48 h-56 rounded-md"
                    style={{ borderRadius: "8px" }}
                  />
                  <div>
                    <Skeleton className="bg-gray-300/40 w-24 h-4 mb-1" />
                    <Skeleton className="bg-gray-300/40 w-40 h-6 mb-2" />
                    <Skeleton className="bg-gray-300/40 w-32 h-4" />
                  </div>
                </div>
              ))
            : data.slice(3, 15).map((anime) => (
                <div className="flex items-center gap-4">
                  <Link
                    key={anime.mal_id}
                    href={`/anime/animeSearch/${anime.mal_id}`}
                    className="relative flex items-center gap-4 cursor-pointer group bg-cover max-w-[200px] h-[300px] rounded-md"
                  >
                    <img
                      src={anime.images.jpg.large_image_url}
                      className="relative group bg-cover   max-w-[200px] h-full max-h-[300px]"
                      alt={anime.title_english}
                    />
                    <div className="group-hover:bg-opacity-50 absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0">
                      <span className="group-hover:opacity-100 flex flex-col items-center text-lg font-bold text-center transition duration-300 opacity-0">
                        {anime.title_english}
                        <FaArrowRight className="mt-4 text-3xl" />
                      </span>
                    </div>
                  </Link>
                  <div>
                    <h2 className="font-bold text-3xl line-clamp-2 max-w-[500px] -mt-20 mb-10">
                      {anime.title_english}
                    </h2>
                    <p className="flex items-center gap-5">
                      <span className="text-lg font-bold">
                        Score: {anime.score}
                      </span>
                      <span className="flex items-center">
                        {Array.from({
                          length: Math.floor(anime.score / 2),
                        }).map(() => (
                          <FaStar className="text-yellow-400" />
                        ))}
                      </span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-lg font-bold">Genres: </span>
                      <span>
                        {anime.genres.map((genre) => genre.name).join(", ")}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center mt-14">
        <Button onClick={() => _setPage(page - 1)} disabled={page === 1} className="rounded-md" style={{ borderRadius: "5px" }}>
          Prev
        </Button>
        <span className="text-lg font-bold border-b-2 border-gray-300 rounded-md p-2">{page}</span>
        <Button onClick={() => _setPage(page + 1)} disabled={page === 9} style={{ borderRadius: "5px" }}>
          Next
        </Button>
      </div>
    </div>
  );
}
