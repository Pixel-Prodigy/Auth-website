import { redirect } from "next/navigation";
import SearchFetch from "./SearchFetch";
import { getServerSession } from "next-auth/next";

export default async function AnimeSearch() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <SearchFetch />
    </div>
  );
}
