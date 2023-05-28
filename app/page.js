import style from "./page.module.css";
import Characters from "@/components/Characters/Characters";
import { fetchCharacters } from "@/utils/marvel";

export default async function Home({ searchParams }) {
  const { results: characters, total, limit } = await fetchCharacters(searchParams);

  return (
    <main className={style.main}>
      <Characters characters={characters} />
    </main>
  );
}