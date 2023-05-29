import style from "./Comic.module.css";
import Image from "next/image";

export default function Comic({ comic }) {
  const { title, thumbnail } = comic;
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = { width: imageNotFound ? 352 : 200, height: 300 };

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <div className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.image}>
          <Image alt={title} src={src} width={size.width} height={size.height} />
        </div>
      </div>
    </div>
  );
};