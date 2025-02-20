"use client";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
export default function LoginPage() {
  const { data: session } = useSession();
  return (
    <div className="flex min-h-screen flex-col items-center mt-40">
      <Card className="w-full max-w-[500px] h-[400px] flex flex-col justify-center gap-5 ">
        <CardHeader className="flex flex-cold gap-2">
          <CardTitle className="text-4xl font-semibold">
            {session ? session.user?.name : "Login"}
          </CardTitle>
          <CardDescription className="text-xl">
            {session
              ? "Thx for being logged in we will try to provide you with the best experience"
              : "Please sign in to continue."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-2">
          {session ? (
            <p>Logged in as {session.user?.name}</p>
          ) : (
            <p>
              Login with GitHub to get the most out of this project. Being Login
              helps to keep your data safe and your progress safe too.
            </p>
          )}
        </CardContent>
        <CardFooter>
          {session ? (
            <Button
              className="w-full max-w-40 mx-auto rounded text-md font-semibold "
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          ) : (
            <Button
              className="w-full max-w-40 mx-auto rounded text-md font-semibold "
              onClick={() => signIn("github")}
            >
              Sign in with <FaGithub />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
