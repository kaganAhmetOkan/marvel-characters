import style from "./Comics.module.css";
import Comic from "../Comic/Comic";

export default function Comics({ comics }) {

  return (
    <div className={style.main}>
      {comics?.map((comic, index) => <Comic key={comic?.id} comic={comic} index={index} />)}
    </div>
  );
};