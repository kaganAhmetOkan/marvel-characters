import style from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  let previous;
  const avengers = [
    "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/6/10/53176a1e7c0d5.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg",
    "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg",
  ];

  function getRandomAvenger() {
    const rand = Math.floor(Math.random() * avengers.length);
    if (previous && previous === rand) return avengers[(rand + 1) % avengers.length];
    else {
      previous = rand;
      return avengers[rand];
    };
  };

  // TODO: unique random doesnt work

  const src1 = getRandomAvenger();
  const src2 = getRandomAvenger();

  return (
    <div className={style.main}>
      <Link className={style.button} href="/characters">
        <div className={style.title}>Characters</div>
        <Image alt="characters" src={src1} fill />
      </Link>
      <Link className={style.button} href="/comics">
        <div className={style.title}>Comics</div>
        <Image alt="comics" src={src2} fill />
      </Link>
    </div>
  );
};

// TODO: I'm still not happy with this part