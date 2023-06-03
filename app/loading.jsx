import style from "./page.module.css";
import Image from "next/image";
import iconLoading from "@/public/loading.png";

export default function Loading() {
  const sillyTitles = [
    "Communicating with intergalactic aliens...",
    "Establishing connection with Sun Station...",
    "Starting Fusion Reactor 007...",
    "Mending the Elder Ring...",
    "Calling the cavalry...",
    "Initializing the space-time continuum...",
  ];

  function selectSillyTitle() {
    const rand = Math.floor(Math.random() * sillyTitles.length);
    return sillyTitles[rand];
  };

  const sillyTitle = selectSillyTitle();

  return (
    <main className={style.main}>
      <Image alt="loading..." src={iconLoading} height={64} width={"auto"} />
      <h1>
        {sillyTitle}
      </h1>
    </main>
  );
};