import style from "./page.module.css";
import { fetchCharacters, fetchCharacterComics } from "@/utils/marvel";
import Portrait from "@/components/Portrait/Portrait";
import Paginator from "@/components/Paginator/Paginator";
import Comics from "@/components/Comics/Comics";
import { redirect } from "next/navigation";

export default async function Character({ searchParams }) {
  if (!searchParams?.id) redirect("/");

  const { results: character } = await fetchCharacters(searchParams);
  const { results: comics, total, limit } = await fetchCharacterComics(searchParams);
  const maxPage = Math.ceil(total / limit);
  const pageIndex = Number.parseInt(searchParams?.page ?? 1);

  const nodeComic = (
    <>
      <Paginator pageIndex={pageIndex} maxPage={maxPage} />
      <Comics comics={comics} />
      <Paginator pageIndex={pageIndex} maxPage={maxPage} />
    </>
  );

  const nodeNotFound = <h2>No comics found...</h2>;
  
  return (
    <main className={style.main}>
      <Portrait character={character[0]} />
      <div className={style.comics}>
        <h1 className={style.title}>{`Comics of ${character[0].name}`}</h1>
        {total > 0 ? nodeComic : nodeNotFound}
      </div>
    </main>
  );
};