import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignOutButton } from "./auth-buttons";
import Image from "next/image";
import InteractiveCards from "@/components/ui/InteractiveCards";

export default async function LoginPage() {
  let session: Session | null = null;

  try {
    session = await getServerSession();
  } catch (error) {
    console.error("Error fetching session:", error);
  }

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Card className="w-full max-w-[500px] p-6 shadow-lg border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-semibold">Login</CardTitle>
            <CardDescription className="text-xl mt-2">
              Please login to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-700">
            <p>
              Login to get the most out of this project. Being logged in helps
              keep your data and progress safe while enhancing your experience.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <SignInButton />
          </CardFooter>
        </Card>
      </main>
    );
  }

  return (
    <main
      style={{ borderRadius: "8px" }}
      className="flex flex-col items-center gap-8 py-14 rounded-lg px-20 bg-gray-200/20 max-w-[480px] mx-auto mt-40"
    >
      <section className="flex flex-col items-center gap-2">
        {session.user?.image && (
          <InteractiveCards
            src={session.user?.image}
            variant="profile-image"
            width={200}
            height={200}
            className="rounded-full profile-image  shadow-lg "
          />
        )}
        <h2 className="mt-4 text-white text-4xl font-bold">
          {session.user?.name}
        </h2>
      </section>
      <p className="text-gray-300">{session.user?.email}</p>
      <p className="mt-4 text-lg font-medium text-center text-gray-800">
        Welcome back,{" "}
        <span className="text-blue-300 font-semibold">
          {session.user?.name}
        </span>
        ! 🚀 Your journey continues—let's make something amazing today!
      </p>

      <SignOutButton />
    </main>
  );
}
