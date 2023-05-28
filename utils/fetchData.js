export default async function fetchData(url) {
  const res = await fetch(url, { next: { revalidate: 600 } });
  const data = await res.json();
  return data;
};