import style from "./ComicPortrait.module.css";
import Image from "next/image";

export default function ComicPortrait({ comic: { title, urls, thumbnail } }) {
  const src = `${thumbnail.path}.${thumbnail.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = { width: 256, height: 393 };

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <div className={style.image}>
        <Image alt={title} src={src} width={size.width} height={size.height} />
        <a href={urls[0].url} target="_blank" className={style.external}>Learn more on Marvel.com</a>
      </div>
    </div>
  );
};