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
  const roSearchParams = useSearchParams();
  const searchParams = new URLSearchParams(roSearchParams.toString());

  // TODO: clean up this code: path searchparams oldsearchparams

  const submitSearch = useCallback(debounce(500, (searchValue) => {
    if (path === "/character") {
      searchParams.set("titleStartsWith", searchValue);
      const href = `${path}?${searchParams.toString()}`
      router.push(href);
    } else {
      router.push(`?nameStartsWith=${searchValue}`);
    }
  }), [path]);

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    if (path === "/character") {
      searchParams.set("titleStartsWith", searchValue);
      const href = `${path}?${searchParams.toString()}`
      router.push(href);
    }
    else {
      router.push(`?nameStartsWith=${searchValue}`);
    };
  };

  return (
    <form className={style.main} onSubmit={(event) => handleSubmit(event)} data-focus={focused} >
      <label hidden htmlFor="searchbar-input">Search a Marvel Character</label>
      <input
        id="searchbar-input"
        name="searchbar-input"
        placeholder="Search Marvel characters"
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