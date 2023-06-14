import style from "./Character.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Character({ character, index }) {
  const { name, thumbnail, id } = character;
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const delay = index * 50;

  return (
    <div className={style.main} data-image-not-found={imageNotFound} style={{
      animationDelay: `${delay}ms`,
    }}>
      <Link href={`/character?id=${id}`} className={style.container}>
        <div className={style.title}>{name}</div>
        <div className={style.image}>
          <Image alt={name} src={src} fill />
        </div>
      </Link>
    </div>
  );
};