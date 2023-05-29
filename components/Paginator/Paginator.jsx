import style from "./Paginator.module.css";
import Link from "next/link";

export default function Paginator({ pageIndex, maxPage, searchParams }) {
  const pages = [];
  const nameStartsWith = searchParams?.nameStartsWith ?? "";
  const pagesNumber = Math.min(3, maxPage);
  let remainder = 0;

  // TODO: use plain objects instead of react.nodes in pages array and map them in pages div. May be slowing down page load
  
  if (pageIndex !== 1 && pageIndex > pagesNumber + 1) pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=1`} >1</Link>);
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
  if (pageIndex !== maxPage && pageIndex < maxPage - pagesNumber) pages.push(<Link href={`?nameStartsWith=${nameStartsWith}&page=${maxPage}`}>{maxPage}</Link>);

  while (pages.length > maxPage) pages.pop();

  // TODO: make previous and next buttons unclickable when already in the first or last page

  // TODO: use icons instead of previous next here when can

  return (
    <div className={style.main}>
      <Link href={`?nameStartsWith=${nameStartsWith}&page=${Math.max(1, pageIndex - 1)}`}>Previous</Link>
      <div className={style.pages}>{pages}</div>
      <Link href={`?nameStartsWith=${nameStartsWith}&page=${Math.min(maxPage, pageIndex + 1)}`}>Next</Link>
    </div>
  );
};