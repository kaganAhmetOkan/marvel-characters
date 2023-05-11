import style from "./Header.module.css";
import Searchbar from "../Searchbar/Searchbar";

export default function Header() {
  return (
    <header className={style.main}>
      <h1>Marvel Characters</h1>
      <Searchbar />
    </header>
  );
}