import AnimeData from "./AnimeData";
import {AnimeProvider} from "./Context";
export default function AnimeSearch() {
  return (
    <AnimeProvider>
      <AnimeData />
    </AnimeProvider>
  );
}
