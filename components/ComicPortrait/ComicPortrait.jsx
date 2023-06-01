import style from "./ComicPortrait.module.css";
import Image from "next/image";

export default function ComicPortrait({ comic: { title, description, urls, thumbnail, creators } }) {
  const src = `${thumbnail.path}.${thumbnail.extension}`;
  const imageNotFound = src.includes("image_not_available");
  const size = { width: 256, height: 393 };

  creators.writers = [];
  creators.colorists = [];
  creators.editors = [];
  
  creators.items.forEach((creator) => {
    if (creator.role.includes("writer")) creators.writers.push(creator);
    else if (creator.role.includes("colorist")) creators.colorists.push(creator);
    else if (creator.role.includes("editor")) creators.editors.push(creator);
  });

  // TODO: might wanna simplify the html with some components here

  return (
    <div className={style.main} data-image-not-found={imageNotFound}>
      <div className={style.image}>
        <Image alt={title} src={src} width={size.width} height={size.height} />
        <a href={urls[0].url} target="_blank" className={style.external}>Learn more on Marvel.com</a>
      </div>
      <div className={style.details}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.description} data-no-description={description ? false : true}>{description ?? "No description found..."}</div>
        <div className={style.creators}>
          <div className={style.writers}>
            <h2 className={style.title}>Writers</h2>
            {creators.writers?.map(writer => <div key={writer.name}>{writer.name}</div>)}
          </div>
          <div className={style.colorists}>
            <h2 className={style.title}>Colorists</h2>
            {creators.colorists?.map(colorist => <div key={colorist.name}>{colorist.name}</div>)}
          </div>
          <div className={style.editors}>
            <h2 className={style.title}>Editors</h2>
            {creators.editors?.map(editor => <div key={editor.name}>{editor.name}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};