import style from "./page.module.css";
import Characters from "@/components/Characters/Characters";
import Paginator from "@/components/Paginator/Paginator";
import { fetchCharacters } from "@/utils/marvel";

export default async function Home({ searchParams }) {
  const { results: characters, total, limit } = await fetchCharacters(searchParams);
  const maxPage = Math.ceil(total / limit);
  const pageIndex = Number.parseInt(searchParams?.page ?? 1);
  
  return (
    <main className={style.main}>
      <Paginator maxPage={maxPage} pageIndex={pageIndex} searchParams={searchParams} />
      <Characters characters={characters} />
      <Paginator maxPage={maxPage} pageIndex={pageIndex} searchParams={searchParams} />
    </main>
  );
}

// TODOS
// Caching doesnt seem to work