"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import AnimeSearchImg from "@/components/ui/AnimeSearchImg";

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
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="max-w-6xl mx-auto pt-20 text-white pb-20">
      <h1 className="text-4xl font-bold mb-4">Top Animes</h1>
      <div className="flex gap-4 overflow-x-auto mb-8 pb-4 cursor-pointer">
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
              <div key={anime.mal_id} className="relative group">
                <AnimeSearchImg
                  animeId={anime.mal_id}
                  anime={anime.title_english}
                  animeSrc={anime.images.jpg.large_image_url}
                  className={`relative group bg-cover max-w-${
                    index === 0
                      ? "[350px] h-full max-h-[400px]"
                      : "[200px] h-full max-h-[300px]"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
                    index === 0
                      ? "[350px] h-full max-h-[400px]"
                      : "[200px] h-full max-h-[300px]"
                  }`}
                >
                  <span className="text-lg text-center flex flex-col items-center font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    {anime.title_english}
                    <FaArrowRight className="mt-4 text-3xl" />
                  </span>
                </div>
              </div>
            ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        Anime to watch next
        <FaArrowRight className="ml-2" />
      </h2>
      <div className="h-[1px] w-full bg-gray-300"></div>

      <div className="flex items-center gap-4 mt-4 mb-4 px-4">
        <Button onClick={handlePrev} disabled={currentIndex === 0}>
          <FaArrowLeft />
        </Button>
        <div className="flex gap-4">
          {loading
            ? [...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="min-w-48 h-60 rounded-md bg-gray-300/40"
                  style={{ borderRadius: "8px" }}
                />
              ))
            : data.slice(currentIndex, currentIndex + 5).map((anime) => (
                <div key={anime.mal_id} className="relative group">
                  <AnimeSearchImg
                    animeId={anime.mal_id}
                    anime={anime.title_english}
                    animeSrc={anime.images.jpg.large_image_url}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                    <span className="text-lg flex flex-col items-center text-center font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                      {anime.title_english}
                      <FaArrowRight className="mt-4 text-3xl" />
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <Button onClick={handleNext} disabled={currentIndex + 5 >= data.length}>
          <FaArrowRight />
        </Button>
      </div>

      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Animes</h2>
        <div className="space-y-6">
          {loading
            ? [...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Skeleton
                    className="w-48 h-56 rounded-md bg-gray-300/40"
                    style={{ borderRadius: "8px" }}
                  />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1 bg-gray-300/40" />
                    <Skeleton className="h-6 w-40 mb-2 bg-gray-300/40" />
                    <Skeleton className="h-4 w-32 bg-gray-300/40" />
                  </div>
                </div>
              ))
            : data.slice(0, 15).map((anime) => (
                <div
                  key={anime.mal_id}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <div className="group relative">
                    {" "}
                    <AnimeSearchImg
                      animeId={anime.mal_id}
                      anime={anime.title_english}
                      animeSrc={anime.images.jpg.large_image_url}
                    />{" "}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                      <span className="text-lg flex flex-col items-center text-center font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                        {anime.title_english}
                        <FaArrowRight className="mt-4 text-3xl" />
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 h-full gap-2">
                    <h3 className="text-2xl line-clamp-2 max-w-[400px] font-semibold -mt-16">
                      {anime.title_english}
                    </h3>
                    <span>
                      <p className="text-sm text-gray-450">
                        Score: {anime.score ? anime.score : "N/A"}
                      </p>
                      <p className="text-sm text-gray-400">
                        Genres: {anime.genres.map((g) => g.name).join(", ")}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
