import style from "./Paginator.module.css";
import Link from "next/link";

export default function Paginator({ pageIndex, maxPage }) {
  const pages = [];
  let remainder = 0;

  // TODO: make variable to simplify pageIndex - 3 and pageIndex + 5

  // TODO: use plain objects insteal of react.nodes in pages array and map them in pages div. May be slowing down page load
  
  if (pageIndex !== 1 && pageIndex > 4) pages.push(<Link href="/" >1</Link>);
  if (pageIndex > 4) pages.push(<div className={style.dots}>...</div>);

  for (let i = pageIndex - 3; i < pageIndex + 5; i++) {
    if (i < 1 || i > maxPage) remainder++; // check if this works with (maxPage < i < 1)
    else pages.push(<Link href={`?page=${i}`} data-current={pageIndex === i} >{i}</Link>);
  };

  for (let i = 0; i < remainder; i++) {
    if (pageIndex - 3 <= 0) pages.push(<Link href={`?page=${pageIndex + 5 + i}`} >{pageIndex + 5 + i}</Link>);
    else pages.splice(2, 0, <Link href={`?page=${pageIndex - 3 - i}`}>{pageIndex - 3 - i}</Link>)
  };

  if (pageIndex < maxPage - 3) pages.push(<div className={style.dots}>...</div>);
  if (pageIndex !== maxPage && pageIndex < maxPage - 3) pages.push(<Link href={`?page=${maxPage}`}>{maxPage}</Link>);

  // TODO: make previous and next buttons unclickable when already in the first or last page

  // TODO: use icons instead of previous next here when can

  return (
    <div className={style.main}>
      <Link href={`?page=${Math.max(1, pageIndex - 1)}`}>Previous</Link>
      <div className={style.pages}>{pages}</div>
      <Link href={`?page=${Math.min(maxPage, pageIndex + 1)}`}>Next</Link>
    </div>
  );
};