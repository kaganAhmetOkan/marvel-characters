export default async function fetchData(url) {
  const options = {
    method: "GET",
    cache: "default",
    next: { revalidate: 600 },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};