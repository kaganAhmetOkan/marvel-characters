import style from "./Paginator.module.css";
import Link from "next/link";
import Image from "next/image";
import iconLeft from "@/public/left.png";
import iconRight from "@/public/right.png";

export default function Paginator({ pageIndex, maxPage, searchParams }) {
  const pages = [];
  const nameStartsWith = searchParams?.nameStartsWith ?? "";
  const pagesNumber = Math.min(3, maxPage);
  let remainder = 0;

  // NOTE: using react.nodes instead of plain objects in pages array may slow down page load or increase page size. Worth investigating
  
  if (pageIndex !== 1 && pageIndex > pagesNumber + 1) pages.push(<Link className={style.indexed} href={`?nameStartsWith=${nameStartsWith}&page=1`} >1</Link>);
  if (pageIndex > pagesNumber + 1) pages.push(<div className={style.dots}>...</div>);

  for (let i = pageIndex - pagesNumber; i < pageIndex + pagesNumber + 1; i++) {
    if (i < 1 || i > maxPage) remainder++; // check if this works with (maxPage < i < 1)
    else pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=${i}`} data-current={pageIndex === i} >{i}</Link>);
  };

  for (let i = 0; i < remainder; i++) {
    if (pageIndex - pagesNumber <= 0) pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=${pageIndex + pagesNumber + 1 + i}`} >{pageIndex + pagesNumber + 1 + i}</Link>);
    else pages.splice(2, 0, <Link href={`?nameStartsWith=${nameStartsWith}&page=${pageIndex - pagesNumber - i}`}>{pageIndex - pagesNumber - i}</Link>)
  };

  if (pageIndex < maxPage - pagesNumber) pages.push(<div className={style.dots}>...</div>);
  if (pageIndex !== maxPage && pageIndex < maxPage - pagesNumber) pages.push(<Link className={style.indexed} href={`?nameStartsWith=${nameStartsWith}&page=${maxPage}`}>{maxPage}</Link>);

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