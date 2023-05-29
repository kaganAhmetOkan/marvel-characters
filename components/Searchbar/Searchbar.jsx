"use client";
import style from "./Searchbar.module.css";
import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const [focused, setFocused] = useState(false);
  const router = useRouter()

  function handleSubmit(event) {
    event.preventDefault();
    const nameStartsWith = event.target[0].value;
    router.push(`?nameStartsWith=${nameStartsWith}`);
  };

  return (
    <form className={style.main} onSubmit={(event) => handleSubmit(event)} data-focus={focused}>
      <label hidden htmlFor="searchbar-input">Search a Marvel Character</label>
      <input id="searchbar-input" name="searchbar-input" placeholder="Search a character" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}></input>
      <button type="submit">
        <Image alt="search icon" src={searchIcon} width={16} height={"auto"} />
      </button>
    </form>
  );
};