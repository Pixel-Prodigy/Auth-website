import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative flex flex-col gap-10 pt-24 items-center justify-center about pointer-events-auto">
      <h1 className="text-6xl text-white font-bold tracking-wide">About Us</h1>
      <article className="text-lg text-gray-300 max-w-2xl text-center">
        Welcome to our anime hub! We bring you the best anime quotes, character
        insights, and discussions. Whether you&apos;re a casual watcher or a
        hardcore otaku, our platform is designed to fuel your anime passion.
      </article>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white">Why Choose Us?</h2>
        <ul className="text-lg text-gray-300 list-disc list-inside">
          <li className="flex items-center gap-2">
            <FaCheck className="text-green-500" /> Curated anime quotes from all
            genres
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-green-500" /> Deep character insights and
            analysis
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-green-500" /> A community for anime lovers
            like you
          </li>
        </ul>
      </div>
    </section>
  );
}
