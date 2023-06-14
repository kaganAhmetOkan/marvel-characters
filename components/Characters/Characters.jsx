import style from "./Characters.module.css";
import Character from "../Character/Character";

export default function Characters({ characters }) {
  return (
    <div className={style.main}>
      {characters?.map((character, index) => <Character index={index} key={character?.id} character={character} />)}
    </div>
  );
};