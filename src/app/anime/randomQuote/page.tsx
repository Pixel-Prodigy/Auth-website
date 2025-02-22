"use client";
import { useEffect, useState } from "react";
type Details = {
  character: { name: string };
  anime: { name: string };
  data: { content: string };
};
export default function RandomQuote() {
  const [details, setDetails] = useState<Details | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(
          "https://animechan.io/api/v1/quotes/random"
        );
        if (!response.ok)
          throw new Error(`Error in Random Quote: ${response.statusText}`);

        const data = await response.json();
        console.log(data);
        setDetails({
          character: { name: data.character.name },
          anime: { name: data.anime.name },
          data: { content: data.data.content },
        });
      } catch (err) {
        console.error(`Random Quote giving this error: ${err}`);
      } finally {
        setLoading(false);
      }
    }
    fetchQuote();
  }, []);

  return (
    <div
      className="bg-gray-200/20 text-white w-full h-full max-w-[700px] mx-auto max-h-[400px] mt-32 p-4"
      style={{ borderRadius: "8px" }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-xl font-bold">Random Quote</h1>
          <p>{details?.character.name}</p>
          <p>{details?.anime.name}</p>
          <p className="mt-2 italic">{details?.data.content}</p>
        </div>
      )}
    </div>
  );
}
