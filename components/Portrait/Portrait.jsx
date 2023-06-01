import style from "./Portrait.module.css";
import Image from "next/image";

export default function Portrait({ character: { name, thumbnail, description, urls } }) {
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = 400;

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <h1 className={style.title}>{name}</h1>
      <a className={style.image} title="Learn more on Marvel.com" href={urls[0].url} target="_blank">
        <Image alt={name} src={src} width={size} height={size} />
      </a>
      <div className={style.description}>{description}</div>
    </div>
  );
};