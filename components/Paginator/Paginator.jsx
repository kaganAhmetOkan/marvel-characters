"use client";
import style from "./Paginator.module.css";
import Link from "next/link";
import Image from "next/image";
import iconLeft from "@/public/left.png";
import iconRight from "@/public/right.png";
import { usePathname, useSearchParams } from "next/navigation";

export default function Paginator({ pageIndex, maxPage }) {
  const pages = [];
  const pagesNumber = 2
  const path = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  let remainder = 0;

  // NOTE: using react.nodes instead of plain objects in pages array may slow down page load or increase page size. Worth investigating

  function generateHREF(page) {
    newSearchParams.set("page", page);
    const href = `${path}?${newSearchParams.toString()}`;
    return href;
  };

  if (pageIndex !== 1 && pageIndex > pagesNumber + 1) {
    const href = generateHREF(1)
    pages.push(<Link key={href} className={style.indexed} href={href} >1</Link>);
  };
  if (pageIndex > pagesNumber + 1) pages.push(<div key={"dots1"} className={style.dots}>...</div>);

  for (let i = pageIndex - pagesNumber; i < pageIndex + pagesNumber + 1; i++) {
    if (i < 1 || i > maxPage) remainder++;
    else {
      const href = generateHREF(i);
      pages.push(<Link key={href} href={href} data-current={pageIndex === i} >{i}</Link>);
    };
  };

  for (let i = 0; i < remainder; i++) {
    if (pageIndex - pagesNumber <= 0) {
      const href = generateHREF(pageIndex + pagesNumber + 1 + i);
      pages.push(<Link key={href} href={href} >{pageIndex + pagesNumber + 1 + i}</Link>);
    }
    else {
      const href = generateHREF(pageIndex - pagesNumber - i);
      pages.splice(2, 0, <Link key={href} href={href}>{pageIndex - pagesNumber - i}</Link>)
    };
  };

  if (pageIndex < maxPage - pagesNumber) pages.push(<div key={"dots2"} className={style.dots}>...</div>);
  if (pageIndex !== maxPage && pageIndex < maxPage - pagesNumber) {
    const href = generateHREF(maxPage);
    pages.push(<Link key={href} className={style.indexed} href={href}>{maxPage}</Link>)
  };

  while (pages.length > maxPage) pages.pop();

  const previousHREF = generateHREF(Math.max(pageIndex - 1, 1));
  const nextHREF = generateHREF(Math.min(pageIndex + 1, maxPage));

  return (
    <div className={style.main}>
      <Link className={style.icon} href={previousHREF}>
        <Image alt="previous" src={iconLeft} height={24} width={"auto"} />
      </Link>
      <div className={style.pages}>{pages}</div>
      <Link className={style.icon} href={nextHREF}>
        <Image alt="next" src={iconRight} height={24} width={"auto"} />
      </Link>
    </div>
  );
};