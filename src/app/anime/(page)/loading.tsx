import { Skeleton } from "@/components/ui/skeleton";

export default function AnimeAi() {
  return (
    <main className="grid grid-cols-1 gap-16 max-w-[1280px] py-20 pt-40 mx-auto">
      {[...Array(4)].map((_, i) => (
        <article key={i} className="flex items-center gap-12">
          <Skeleton className="h-[400px] w-[400px] rounded-md bg-gray-400/30 shadow-md"  style={{ borderRadius: "8px" }} />
          <div className="flex flex-col gap-6 text-left">
            <Skeleton className="h-12 w-80 bg-gray-400/30"  style={{ borderRadius: "8px" }}/>
            <Skeleton className="h-14 w-48 bg-gray-400/30"  style={{ borderRadius: "8px" }}/>
          </div>
        </article>
      ))}
    </main>
  );
}
