import style from "./Header.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.main}>
      <Link className={style.hero} href={"/"}>Marvel Characters</Link>
      <nav className={style.nav}>
        <Link href="/">Characters</Link>
        <Link href="/comics">Comics</Link>
      </nav>
      <Searchbar />
    </header>
  );
}

// TODO: needs testing with mobile screens