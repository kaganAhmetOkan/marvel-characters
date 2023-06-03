import style from "./Paginator.module.css";
import Link from "next/link";
import Image from "next/image";
import iconLeft from "@/public/left.png";
import iconRight from "@/public/right.png";

export default function Paginator({ pageIndex, maxPage, path="/", searchParams }) {
  const pages = [];
  const pagesNumber = 2
  let remainder = 0;
  console.log(searchParams);

  // TODO: make paginator client component and use useSearchparams and usePathname hooks

  // NOTE: using react.nodes instead of plain objects in pages array may slow down page load or increase page size. Worth investigating

  function generateHREF(page) {
    const href = `${path}?${new URLSearchParams({ ...searchParams, page: page }).toString()}`;
    return href;
  };

  if (pageIndex !== 1 && pageIndex > pagesNumber + 1) {
    const href = generateHREF(1)
    pages.push(<Link className={style.indexed} href={href} >1</Link>);
  };
  if (pageIndex > pagesNumber + 1) pages.push(<div className={style.dots}>...</div>);

  for (let i = pageIndex - pagesNumber; i < pageIndex + pagesNumber + 1; i++) {
    if (i < 1 || i > maxPage) remainder++;
    else {
      const href = generateHREF(i);
      pages.push(<Link href={href} data-current={pageIndex === i} >{i}</Link>);
    };
  };

  for (let i = 0; i < remainder; i++) {
    if (pageIndex - pagesNumber <= 0) {
      const href = generateHREF(pageIndex + pagesNumber + 1 + i);
      pages.push(<Link href={href} >{pageIndex + pagesNumber + 1 + i}</Link>);
    }
    else {
      const href = generateHREF(pageIndex - pagesNumber - i);
      pages.splice(2, 0, <Link href={href}>{pageIndex - pagesNumber - i}</Link>)
    };
  };

  if (pageIndex < maxPage - pagesNumber) pages.push(<div className={style.dots}>...</div>);
  if (pageIndex !== maxPage && pageIndex < maxPage - pagesNumber) {
    const href = generateHREF(maxPage);
    pages.push(<Link className={style.indexed} href={href}>{maxPage}</Link>)
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