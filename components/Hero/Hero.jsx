import style from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={style.main}>
      <Link href="/characters">Characters</Link>
      <Link href="/comics">Comics</Link>
    </div>
  );
};

// TODO: needs more styling