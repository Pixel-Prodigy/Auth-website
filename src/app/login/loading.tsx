import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main
      className="flex min-h-screen flex-col gap-4 items-center justify-center"
      style={{ borderRadius: "8px" }}
    >
      <Skeleton
        className="w-full max-w-[500px] h-[440px] p-6 shadow-lg bg-gray-400/30 border-none rounded-lg"
        style={{ borderRadius: "8px" }}
      >
        <div className="text-center">
          <Skeleton
            className="h-32 w-32 mx-auto mb-8 "
            style={{ borderRadius: "50%" }}
          />
          <Skeleton
            className="h-10 w-32 mx-auto mb-2"
            style={{ borderRadius: "6px" }}
          />
          <Skeleton
            className="h-6 w-48 mx-auto"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="text-center mt-4">
          <Skeleton
            className="h-5 w-3/4 mx-auto"
            style={{ borderRadius: "6px" }}
          />
          <Skeleton
            className="h-5 w-2/3 mx-auto mt-2"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="flex gap-10 justify-center mt-6">
          <Skeleton className="h-10 w-32" style={{ borderRadius: "6px" }} />
          <Skeleton className="h-10 w-32" style={{ borderRadius: "6px" }} />
        </div>
      </Skeleton>
    </main>
  );
}
