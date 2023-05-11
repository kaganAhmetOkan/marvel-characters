import style from "./page.module.css";
import { fetchCharacters } from "@/utils/marvel";

export default async function Home() {
  const characters = await fetchCharacters({});
  console.log(characters);

  return (
    <main className={style.main}>
      <h1>Home</h1>
    </main>
  );
}