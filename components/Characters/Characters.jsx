"use client";
import style from "./Characters.module.css";
import Character from "../Character/Character";
import { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchCharacters } from "@/utils/marvel";

export default function Characters({ initialCharacters }) {
  const [characters, setCharacters] = useState(initialCharacters.results);
  let offset = useRef(initialCharacters.offset + initialCharacters.limit);

  async function loadMore() {
    const data = await fetchCharacters({ offset: offset.current});
    setCharacters((current) => [...current, ...data.results]);
    offset.current += data.limit;
    console.log(offset.current, data.limit);
  };

  return (
    <InfiniteScroll
      className={style.main}
      dataLength={characters?.length ?? 0}
      next={loadMore}
      loader={<div>Loading...</div>}
      hasMore={true}
    >  
      {characters ? characters?.map((character) => {
        return <Character character={character} key={character?.id}/>;
      }) : <div>Loading...</div>}
    </InfiniteScroll>
  );
};