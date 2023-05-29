import style from "./Paginator.module.css";
import Link from "next/link";
import Image from "next/image";
import iconLeft from "@/public/left.png";
import iconRight from "@/public/right.png";

export default function Paginator({ pageIndex, maxPage, path="/", searchParams }) {
  const pages = [];
  const nameStartsWith = searchParams?.nameStartsWith ?? "";
  const pagesNumber = Math.min(3, maxPage);
  let remainder = 0;
  const href = `${path}?${new URLSearchParams(searchParams).toString()}`;
  console.log(href);

  // NOTE: using react.nodes instead of plain objects in pages array may slow down page load or increase page size. Worth investigating
  
  if (pageIndex !== 1 && pageIndex > pagesNumber + 1) pages.push(<Link className={style.indexed} href={`?nameStartsWith=${nameStartsWith}&page=1`} >1</Link>);
  // { type: "link", class: "indexed", page: "1" }
  if (pageIndex > pagesNumber + 1) pages.push(<div className={style.dots}>...</div>);
  // { type: "div", class: "dots", page: "..." }

  for (let i = pageIndex - pagesNumber; i < pageIndex + pagesNumber + 1; i++) {
    if (i < 1 || i > maxPage) remainder++;
    else pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=${i}`} data-current={pageIndex === i} >{i}</Link>);
    // { type: "link", current: pageIndex === i, page: i }
  };

  for (let i = 0; i < remainder; i++) {
    if (pageIndex - pagesNumber <= 0) pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=${pageIndex + pagesNumber + 1 + i}`} >{pageIndex + pagesNumber + 1 + i}</Link>);
    // { type: "link", page: pageIndex + pagesNumber + 1 + i}
    else pages.splice(2, 0, <Link href={`?nameStartsWith=${nameStartsWith}&page=${pageIndex - pagesNumber - i}`}>{pageIndex - pagesNumber - i}</Link>)
    // { type: "link", page: pageIndex - pagesNumber - i }
  };

  if (pageIndex < maxPage - pagesNumber) pages.push(<div className={style.dots}>...</div>);
  // { type: div, class: "dots", page: "..." }
  if (pageIndex !== maxPage && pageIndex < maxPage - pagesNumber) pages.push(<Link className={style.indexed} href={`?nameStartsWith=${nameStartsWith}&page=${maxPage}`}>{maxPage}</Link>);
  // { type: "link", class: "indexed", page: maxPage }

  while (pages.length > maxPage) pages.pop();

  return (
    <div className={style.main}>
      <Link className={style.icon} href={`?nameStartsWith=${nameStartsWith}&page=${Math.max(1, pageIndex - 1)}`}>
        <Image alt="previous" src={iconLeft} height={24} width={"auto"} />
      </Link>
      <div className={style.pages}>{pages}</div>
      <Link className={style.icon} href={`?nameStartsWith=${nameStartsWith}&page=${Math.min(maxPage, pageIndex + 1)}`}>
        <Image alt="next" src={iconRight} height={24} width={"auto"} />
      </Link>
    </div>
  );
};