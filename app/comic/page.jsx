import style from "./page.module.css";
import { fetchComics } from "@/utils/marvel";
import ComicPortrait from "@/components/ComicPortrait/ComicPortrait";

export default async function Comic({ searchParams }) {
  const { results: comic } = await fetchComics(searchParams);
  
  return (
    <main className={style.main}>
      <ComicPortrait comic={comic[0]} />
    </main>
  );
};