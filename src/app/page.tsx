import { getServerSession } from "next-auth";
import AuthProvider from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import InteractiveCards from "@/components/ui/InteractiveCards";

export default async function Home() {
  const session = await getServerSession();

  return (
    <AuthProvider>
      <section className="flex flex-col gap-10 pt-40 items-center justify-center">
        <h1 className="text-7xl text-white font-bold tracking-wide">
          Hello, {session ? session.user?.name : "Unknown User"}!
        </h1>
        {session ? (
          <p className="text-lg text-gray-400">
            We promise to provide the best experience to our users to the best of our ability.
          </p>
        ) : (
          <p className="text-lg text-gray-500">
            New users! Login to get the best experience.
          </p>
        )}
        <Link href="/login">
          <Button className="w-full max-w-40 mx-auto rounded text-md font-semibold">
            {session ? "Logged" : "Login"}
            {session ? <FaCheck className="ml-2" /> : <FaArrowRight className="ml-2" />}
          </Button>
        </Link>
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
      </section>
    </AuthProvider>
  );
}
