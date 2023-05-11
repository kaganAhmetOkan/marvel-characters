import style from "./page.module.css";
import { fetchCharacters } from "@/utils/marvel";
import Characters from "@/components/Characters/Characters";

export default async function Home() {
  const characters = await fetchCharacters({});
  
  return (
    <main className={style.main}>
      <Characters characters={characters} />
    </main>
  );
}