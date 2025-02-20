import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default async function AnimeAi() {
  const session = await getServerSession();
  if (!session) {
    return (
      <div
        style={{ borderRadius: "8px" }}
        className="  mx-auto rounded-lg grid place-items-center  py-10 px-6 bg-white h-[430px] mt-40 max-w-[460px] "
      >
        <h1 className="text-4xl font-bold">Get Logged In First</h1>
        <h3 className="text-gray-600 text-center text-xl">
          You need to be logged in to access this page.
        </h3>
        <p className="text-gray-500 text-center text-md">
          We take security very seriously, and that's why we need you to login.
          Logging in helps us to keep your data and progress safe. And helps us
          to give you the best experience.
        </p>
        <Link href="/login">
          <Button style={{ borderRadius: "6px" }} className="rounded-md">
            Login <FaArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-16 max-w-[1280px] py-20 pt-40 mx-auto">
      <article className="flex items-center gap-12">
        <Link href="/anime/animeSearch">
          <div
            className="rounded-md shadow-white/70  shadow-md bg-white h-[400px] w-[400px] relative"
            style={{
              backgroundImage: `url(/allAnime.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group hover:bg-opacity-40 transition duration-300">
              <div className="flex items-center justify-center h-full">
                <div className="opacity-0 group-hover:opacity-100 text-white transition duration-500 cursor-pointer sele   text-4xl font-bold">
                  Anime Search
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="max-w-[650px] flex flex-col gap-6 text-left">
          <h2 className="text-5xl font-bold text-white">Anime Search</h2>
          <p className="text-gray-300 text-2xl leading-loose">
            Instantly find your favorite anime by searching through a vast
            database. Get detailed information like synopsis, ratings, episodes,
            and more.
          </p>
        </div>
      </article>

      <article className="flex items-center gap-12">
        <Link href="/anime/topAnime">
          <div
            className="rounded-md shadow-white/70 shadow-md bg-white h-[400px] w-[400px] relative"
            style={{
              backgroundImage: `url(/collage.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group hover:bg-opacity-40 transition duration-300">
              <div className="flex items-center justify-center h-full">
                <div className="opacity-0 group-hover:opacity-100 text-white transition duration-500 cursor-pointer sele   text-4xl font-bold">
                  Top Airing Anime
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="max-w-[650px] flex flex-col gap-6 text-left">
          <h2 className="text-5xl font-bold text-white">Top Airing Anime</h2>
          <p className="text-gray-300 text-2xl leading-loose">
            Stay updated with the most popular anime currently airing. View
            rankings, ratings, and episode schedules.
          </p>
        </div>
      </article>

      <article className="flex items-center gap-12">
        <Link href="/anime/animeId">
          <div
            className="rounded-md shadow-white/70 shadow-md bg-white h-[400px] w-[400px] relative"
            style={{
              backgroundImage: `url(/id.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group hover:bg-opacity-40 transition duration-300">
              <div className="flex items-center justify-center h-full">
                <div className="opacity-0 group-hover:opacity-100 text-white transition duration-500 cursor-pointer sele   text-4xl font-bold">
                  Search Anime by ID
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="max-w-[650px] flex flex-col gap-6 text-left">
          <h2 className="text-5xl font-bold text-white">Search Anime by ID</h2>
          <p className="text-gray-300 text-2xl leading-loose">
            Retrieve precise details of any anime by using its unique ID. Get
            metadata, character lists, and additional insights.
          </p>
        </div>
      </article>

      <article className="flex items-center gap-12">
        <Link href="/anime/randomQuote">
          <div
            className="rounded-md shadow-white/70 shadow-md bg-white h-[400px] w-[400px] relative"
            style={{
              backgroundImage: `url(/lines.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group hover:bg-opacity-40 transition duration-300">
              <div className="flex items-center justify-center h-full">
                <div className="opacity-0 group-hover:opacity-100 text-white transition duration-500 cursor-pointer sele   text-4xl font-bold">
                  Random Anime Quote
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="max-w-[650px] flex flex-col gap-6 text-left">
          <h2 className="text-5xl font-bold text-white">Random Anime Quote</h2>
          <p className="text-gray-300 text-2xl leading-loose">
            Get inspired by legendary anime quotes. Every refresh gives you a
            new memorable quote from various anime series.
          </p>
        </div>
      </article>
    </main>
  );
}
