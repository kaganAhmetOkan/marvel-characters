import style from "./Portrait.module.css";
import Image from "next/image";

export default function Portrait({ character }) {
  const { name, thumbnail, description } = character;
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  let imageNotFound = src.includes("image_not_available");
  const size = 400;

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <h1 className={style.title}>{name}</h1>
      <div className={style.image}>
        <Image alt={name} src={src} width={size} height={size} />
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};