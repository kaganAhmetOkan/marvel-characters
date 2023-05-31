import style from "./Character.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Character({ character: character }) {
  const { name, thumbnail, id } = character;
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = 200;

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <Link href={`/character?id=${id}`} className={style.container}>
        <div className={style.image}>
          <Image alt={name} src={src} width={size} height={size} />
        </div>
        <div className={style.title}>{name}</div>
      </Link>
    </div>
  );
};