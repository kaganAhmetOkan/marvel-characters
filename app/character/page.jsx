import style from "./page.module.css";
import { fetchCharacters } from "@/utils/marvel";
import Portrait from "@/components/Portrait/Portrait";

export default async function Character({ searchParams }) {
  const { results: character } = await fetchCharacters(searchParams);
  // TODO: fetch comics also
  
  return (
    <main className={style.main}>
      <Portrait character={character[0]} />
    </main>
  );
};