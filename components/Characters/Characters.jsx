"use client";
import style from "./Characters.module.css";
import Character from "../Character/Character";

export default function Characters({ characters: characters }) {
  console.log(characters);

  return (
    <div className={style.main}>
      {characters?.map((character) => {
        return <Character character={character} key={character?.id}/>;
      })}
    </div>
  );
};