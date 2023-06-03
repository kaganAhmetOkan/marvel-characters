import style from "./page.module.css";
import Characters from "@/components/Characters/Characters";
import Paginator from "@/components/Paginator/Paginator";
import { fetchCharacters } from "@/utils/marvel";

export default async function CharactersPage({ searchParams }) {
  const { results: characters, total, limit } = await fetchCharacters(searchParams);
  const maxPage = Math.ceil(total / limit);
  const pageIndex = Number.parseInt(searchParams?.page ?? 1);

  const nodeCharacters = (
    <>
      <Paginator maxPage={maxPage} pageIndex={pageIndex} />
      <Characters characters={characters} />
      <Paginator maxPage={maxPage} pageIndex={pageIndex} />
    </>
  );

  const nodeNotFound = (
    <h1>{`No characters found with a name "${searchParams?.nameStartsWith}"...`}</h1>
  );

  return (
    <main className={style.main}>
      {total > 0 ? nodeCharacters : nodeNotFound}
    </main>
  );
}