"use client";
import React, { useContext } from "react";
import { AnimeContext } from "./Context";
export default function AnimeData() {
  const ctx = useContext(AnimeContext);
  if (!ctx) throw new Error("context is getting undefined in gettingTheData");
  const { data, loading, error } = ctx;
  console.log(data);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((anime) => (
            <li key={anime.mal_id}>{anime.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
