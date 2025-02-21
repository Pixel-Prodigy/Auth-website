"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export type DataType = {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    embed_url: string;
  };
  status: string;
  source: string;
  url: string;
  title_english: string;
  title_japanese: string;
  episodes: number;
  duration: string;
  score: number;
  rank: number;
  rating: string;
  synopsis: string;
  background: string;
  genres: { name: string; mal_id: number }[];
  favorites: number;
  popularity: number;
  scored_by: number;
};

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchAnime = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/seasons/now?page=1`
        );
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const result = await response.json();
        const foundAnime = result.data.find(
          (anime: DataType) => anime.mal_id === Number(id)
        );

        if (!foundAnime) throw new Error("Anime not found");
        setAnime(foundAnime);
      } catch (err) {
        setError("Failed to fetch anime data.");
        console.error(err);
      }
    };

    fetchAnime();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!anime) {
    return (
      <div className="max-w-4xl mx-auto pt-32 ">
        <Skeleton
          className="h-10 bg-gray-300/50   w-[300px] mx-auto mb-2"
          style={{ borderRadius: "8px" }}
        />
        <Skeleton
          className="h-6  bg-gray-300/50  w-[200px] mx-auto mb-4"
          style={{ borderRadius: "8px" }}
        />
        <Skeleton
          className="h-80 bg-gray-300/50   w-full max-w-md mx-auto rounded-lg"
          style={{ borderRadius: "8px" }}
        />
        <div className="mt-4 space-y-2">
          {[...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-5 w-full bg-gray-300/50 max-w-[600px] mx-auto"
              style={{ borderRadius: "8px" }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-32 ">
      <h1 className="text-4xl font-bold line-clamp-1 max-w-[900px]  mb-2 text-white text-center">
        {anime.title_english || anime.title_japanese}
      </h1>
      <h2 className="text-2xl text-white text-center max-w-[700px] mx-auto mb-4">
        {anime.title_english ? anime.title_japanese : ""}
      </h2>

      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title_english || "Anime Image"}
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />
      <h3 className=" text-white mt-4 font-semibold text-4xl text-center mx-auto">
        Scored By {anime.scored_by} Watchers
      </h3>
      <h3 className="text-red-500 mt-2 text-start font-semibold text-2xl max-w-[450px] mx-auto">
        <span className="text-2xl text-white font-bold mr-6 ">
          Anime Score:
        </span>
        {anime.score}
      </h3>

      <div className="flex flex-col gap-20">
        <div className="mt-20 space-y-2 ">
          {anime.trailer.embed_url && (
            <div className="mt-4">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">Trailer</h2>
              <iframe
                src={anime.trailer.embed_url}
                title="Anime Trailer"
                allowFullScreen
                className="w-full aspect-video rounded-md shadow-md"
              />
            </div>
          )}

          <div className="flex flex-col gap-5">
            <h2 className="text-xl text-orange-500 font-semibold">
              Synopsis -
            </h2>
            <p className="text-gray-300">
              {anime.synopsis || "No synopsis available."}
            </p>
          </div>
          <div
            className="mt-4 bg-gray-300/50 max-w-[600px] h-[600px] mx-auto rounded-lg p-4"
            style={{ borderRadius: "8px" }}
          ></div>
          {anime.background && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Background</h2>
              <p className="text-gray-700">{anime.background}</p>
            </div>
          )}
        </div>
        <a
          href={anime.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View on MyAnimeList
        </a>
      </div>
    </div>
  );
}
