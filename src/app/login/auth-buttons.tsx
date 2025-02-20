"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function SignInButton() {
  return (
    <>
      <Button
        className="w-full max-w-40 mx-auto rounded text-md font-semibold"
        onClick={() => signIn("github")}
      >
        Sign in with <FaGithub className="ml-2" />
      </Button>
      <Button
        className="w-full max-w-40 mx-auto rounded text-md font-semibold mt-2"
        onClick={() => signIn("google")}
      >
        Sign in with <FaGoogle className="ml-2" />
      </Button>
    </>
  );
}

export function SignOutButton() {
  return (
    <Button
      className="w-full max-w-40 mx-auto rounded text-md font-semibold"
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  );
}
