import style from "./Comic.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Comic({ comic: { title, thumbnail, id } }) {
  const src = `${thumbnail?.path}.${thumbnail?.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = { width: imageNotFound ? 352 : 200, height: 300 };

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <Link className={style.container} href={`/comic?id=${id}`}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.image}>
          <Image alt={title} src={src} width={size.width} height={size.height} />
        </div>
      </Link>
    </div>
  );
};