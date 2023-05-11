import style from "./Character.module.css";
import Image from "next/image";

export default function Character({ character: character }) {
  const {name, thumbnail} = character;
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
  let imageNotFound = false;

  if (image.includes("image_not_available")) imageNotFound = true;

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <div className={style.container}>
        <Image alt={name} src={image} width={200} height={200} />
        <div className={style.title}>{name}</div>
      </div>
    </div>
  );
};