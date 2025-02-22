"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
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
  streaming: {name: string ; url: string}[];
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
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const result = await response.json();
        setAnime(result.data);
        console.log(result.data);
      } catch (err) {
        setError("Failed to fetch anime data.");
        console.error(err);
      }
    };

    fetchAnime();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  if (!anime) {
    return (
      <div className="max-w-5xl mx-auto pt-32 px-4">
        <Skeleton className="h-12 w-80 mx-auto mb-4 bg-gray-300/50" />
        <Skeleton className="h-6 w-60 mx-auto mb-6 bg-gray-300/50" />
        <Skeleton className="h-96 w-full max-w-lg mx-auto bg-gray-300/50" />
        <div className="mt-6 space-y-3">
          {[...Array(8)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-5 w-full max-w-2xl mx-auto bg-gray-300/50"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pt-32 px-4 text-white pb-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        {anime.title_english || anime.title_japanese}
      </h1>
      {anime.title_english && (
        <h2 className="text-xl text-gray-400 text-center mb-6">
          {anime.title_japanese}
        </h2>
      )}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title_english}
          className="w-full max-w-md rounded-lg shadow-lg"
        />
        <div className="space-y-3 text-lg">
          <p>
            <span className="font-semibold text-blue-400">Score:</span>{" "}
            {anime.score || "N/A"} ({anime.scored_by} reviews)
          </p>
          <p>
            <span className="font-semibold text-green-400">Episodes:</span>{" "}
            {anime.episodes || "Unknown"}
          </p>
          <p>
            <span className="font-semibold text-orange-400">Duration:</span>{" "}
            {anime.duration}
          </p>
          <p>
            <span className="font-semibold text-purple-400">Rank:</span> #
            {anime.rank || "N/A"}
          </p>
          <p>
            <span className="font-semibold text-red-400">Favorites:</span>{" "}
            {anime.favorites}
          </p>
          <p>
            <span className="font-semibold text-yellow-400">Popularity:</span>{" "}
            {anime.popularity}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Genres:</span>{" "}
            {anime.genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      </div>
      {anime.trailer.embed_url && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
            Trailer
          </h2>
          <iframe
            src={anime.trailer.embed_url}
            title="Anime Trailer"
            allowFullScreen
            className="w-full aspect-video rounded-md shadow-md"
          />
        </div>
      )}
      <div className="mt-12  flex flex-col justify-center gap-2 items-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">Watch Now On</h2>
        <div className="text-gray-300 leading-relaxed flex gap-3 ">
          {anime.streaming.map((stream , index) => 
          <a key={index} href={stream.url}><Button variant="destructive" style={{ borderRadius: "6px" }}>{stream.name}</Button></a>
          )}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-2">Synopsis</h2>
        <p className="text-gray-300 leading-relaxed">
          {anime.synopsis || "No synopsis available."}
        </p>
      </div>
      {anime.background && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">Background</h2>
          <p className="text-gray-300 leading-relaxed">{anime.background}</p>
        </div>
      )}
      <div className="mt-10 text-center">
        <a
          href={anime.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-blocktransition"
        >
          <Button aria-label="View on MyAnimeList" role="link" style={{ borderRadius: "6px" }}>
            View on MyAnimeList
          </Button>
        </a>
      </div>
    </div>
  );
}
