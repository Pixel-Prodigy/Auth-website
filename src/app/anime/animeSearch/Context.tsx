"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";

interface Anime {
  mal_id: number;
  title: string;
}

interface AnimeContextType {
  data: Anime[] | null;
  loading: boolean;
  error: string | null;
}

export const AnimeContext = createContext<AnimeContextType>({
  data: null,
  loading: true,
  error: null,
});

export const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Anime[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/seasons/now");
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();

        setData(result.data);
      } catch (err) {
        setError("Error fetching anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AnimeContext.Provider value={{ data, loading, error }}>
      {children}
    </AnimeContext.Provider>
  );
};
