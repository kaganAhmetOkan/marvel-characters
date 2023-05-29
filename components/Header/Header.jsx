import style from "./Header.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.main}>
      <Link href={"/"}>Marvel Characters</Link>
      <Searchbar />
    </header>
  );
}