import style from "./page.module.css";
import Characters from "@/components/Characters/Characters";
import { fetchCharacters } from "@/utils/marvel";

export default async function Home() {
  const initialCharacters = await fetchCharacters({});

  return (
    <main className={style.main}>
      <Characters initialCharacters={initialCharacters}/>
    </main>
  );
}