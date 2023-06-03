import style from "./ComicDetails.module.css";

export default function ComicDetails({ comic: { title, description, creators } }) {
  creators.writers = [];
  creators.colorists = [];
  creators.editors = [];
  
  creators.items.forEach((creator) => {
    if (creator.role.includes("writer")) creators.writers.push(creator);
    else if (creator.role.includes("colorist")) creators.colorists.push(creator);
    else if (creator.role.includes("editor")) creators.editors.push(creator);
  });

  return (
    <div className={style.main}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.description} data-no-description={description ? false : true}>{description ?? "No description found..."}</div>
      <div className={style.creators}>
        <div className={style.writers}>
          <h2 className={style.subtitle}>Writers</h2>
          {creators.writers?.map(writer => <div key={writer.name}>{writer.name}</div>)}
        </div>
        <div className={style.colorists}>
          <h2 className={style.subtitle}>Colorists</h2>
          {creators.colorists?.map(colorist => <div key={colorist.name}>{colorist.name}</div>)}
        </div>
        <div className={style.editors}>
          <h2 className={style.subtitle}>Editors</h2>
          {creators.editors?.map(editor => <div key={editor.name}>{editor.name}</div>)}
        </div>
      </div>
    </div>
  );
};