import { getServerSession } from "next-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignOutButton } from "./auth-buttons";

export default async function LoginPage() {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen flex-col items-center mt-40">
      <Card className="w-full max-w-[500px] h-[400px] flex flex-col justify-center gap-5">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-4xl font-semibold">
            {session ? session.user?.name : "Login"}
          </CardTitle>
          <CardDescription className="text-xl">
            {session
              ? "Thanks for logging in! We'll provide you with the best experience."
              : "Please sign in to continue."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-2">
          {session ? (
            <p>Logged in as {session.user?.name}</p>
          ) : (
            <p>
              Login with GitHub to get the most out of this project. Being logged in helps keep your data and progress safe.
            </p>
          )}
        </CardContent>
        <CardFooter>
          {session ? <SignOutButton /> : <SignInButton />}
        </CardFooter>
      </Card>
    </div>
  );
}
