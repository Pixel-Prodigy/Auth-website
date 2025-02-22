import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import InteractiveCards from "@/components/ui/InteractiveCards";
import TypeWriter from "@/components/ui/TypeWriter";
import LandingPage from "@/components/ui/LandingPage";
export default async function Home() {
  const session = await getServerSession();

  return (
    <section className="flex flex-col gap-10 pt-40 items-center justify-center">
      <LandingPage />
      <h1 className="text-7xl text-white font-bold tracking-wide">
        Hello, {session ? session.user?.name : "Unknown User"}!
      </h1>

      {session ? (
        <p className="text-lg text-gray-400">
          We promise to provide the best experience to our users to the best of
          our ability.
        </p>
      ) : (
        <p className="text-lg text-gray-500">
          New users! Login to get the best experience.
        </p>
      )}
      <Link href="/login">
        <Button className="w-full max-w-40 mx-auto rounded text-md font-semibold">
          {session ? "Logged" : "Login"}
          {session ? (
            <FaCheck className="ml-2" />
          ) : (
            <FaArrowRight className="ml-2" />
          )}
        </Button>
      </Link>
      <article>
        <TypeWriter />
      </article>
      <div className="grid grid-cols-2 gap-20 mt-28">
        <InteractiveCards
          variant="single"
          src="/jaraya.jpg"
          width={400}
          height={300}
          className="rounded-lg bg-cover translate-x-1"
        />
        <InteractiveCards
          variant="multi"
          src="/AceLast.jpeg"
          width={406}
          height={300}
          className="rounded-lg bg-cover translate-y-[3px]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 place-items-center mt-80">
        <InteractiveCards
          variant="double"
          src="/onepiece.jpg"
          width={800}
          height={300}
          className="rounded-lg bg-cover"
        />
        <article className="text-white text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            "The Rise of a Future King"
          </h2>
          <p className="text-lg leading-relaxed">
            "Amidst the chaos of Wano, where samurai rise and legends fall, one
            man stands unshaken. With the will of D, the fire of a warrior, and
            the dream of a free world, Monkey D. Luffy steps forward. Kaido’s
            reign trembles, the drums of liberation echo, and the new era draws
            near. The pirate king’s journey has never burned brighter!"
          </p>
        </article>
      </div>
      <div className="grid grid-cols-2 gap-4 place-items-center mt-80">
        <article className="text-white text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">"The Fall of Konoha"</h2>
          <p className="text-lg leading-relaxed">
            "From the skies, a god descends. With a single command—'Almighty
            Push'— the will of the Akatsuki shakes the Hidden Leaf to its core.
            Buildings crumble, screams echo, and despair spreads like wildfire.
            The shinobi world stands frozen as Pain delivers his divine
            retribution. In this moment, Konoha’s greatest trial has begun, and
            only one stands against the storm."
          </p>
        </article>
        <InteractiveCards
          variant="third"
          src="/pain.webp"
          width={800}
          height={300}
          className="rounded-lg bg-cover"
        />
      </div>
    </section>
  );
}
