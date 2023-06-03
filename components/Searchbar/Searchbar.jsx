"use client";
import style from "./Searchbar.module.css";
import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { debounce } from "throttle-debounce";

export default function Searchbar() {
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const placeholder = path.includes("character") ? "Search comics" : "Search characters";

  // TODO: placeholder needs to be updated
  // TODO: submitSearch and handleSubmit using the same block of code, create a function instead

  const submitSearch = useCallback(debounce(500, (searchValue) => {
    if (path === "/character" || path === "/comics") {
      newSearchParams.set("titleStartsWith", searchValue);
      newSearchParams.delete("page");
      const href = `${path}?${newSearchParams.toString()}`
      router.push(href);
    } else {
      router.push(`${path}?nameStartsWith=${searchValue}`);
    }
  }), [path]);

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    if (path === "/character" || path === "/comics") {
      newSearchParams.set("titleStartsWith", searchValue);
      newSearchParams.delete("page");
      const href = `${path}?${newSearchParams.toString()}`
      router.push(href);
    }
    else {
      router.push(`${path}?nameStartsWith=${searchValue}`);
    };
  };

  return (
    <form className={style.main} onSubmit={(event) => handleSubmit(event)} data-focus={focused} >
      <label hidden htmlFor="searchbar-input">Search a Marvel Character</label>
      <input
        id="searchbar-input"
        name="searchbar-input"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(event) => submitSearch(event?.target?.value)}
        autoComplete="off"
      ></input>
      <button type="submit">
        <Image alt="search icon" src={searchIcon} width={16} height={"auto"} />
      </button>
    </form>
  );
};