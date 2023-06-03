import style from "./page.module.css";
import { fetchComics } from "@/utils/marvel";
import Paginator from "@/components/Paginator/Paginator";
import Comics from "@/components/Comics/Comics";

export default async function ComicsPage({ searchParams }) {
  const { results: comics, total, limit } = await fetchComics(searchParams);
  const maxPage = Math.ceil(total / limit);
  const pageIndex = Number.parseInt(searchParams?.page ?? 1);

  const nodeComics = (
    <>
      <Paginator maxPage={maxPage} pageIndex={pageIndex} />
      <Comics comics={comics} />
      <Paginator maxPage={maxPage} pageIndex={pageIndex} />
    </>
  );

  const nodeNotFound = (
    <h1>{`No comics found with a name "${searchParams?.titleStartsWith}"...`}</h1>
  );

  return (
    <main className={style.main}>
      {comics.length > 0 ? nodeComics : nodeNotFound}
    </main>
  );
};