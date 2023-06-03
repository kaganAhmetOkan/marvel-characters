import createURL from "./createURL";
import fetchData from "./fetchData";

export async function fetchCharacters(searchParams) {
  const path = searchParams?.id ? `/characters/${searchParams.id}` : `/characters`;
  const url = createURL({ path, searchParams });
  const { data } = await fetchData(url);
  return data;
};

export async function fetchCharacterComics(searchParams) {
  const path = `/characters/${searchParams.id}/comics`;
  const url = createURL({ path, searchParams });
  const { data } = await fetchData(url);
  return data;
};

export async function fetchComics(searchParams) {
  const path = searchParams.id ? `/comics/${searchParams.id}` : `/comics`;
  const url = createURL({ path, searchParams });
  const { data } = await fetchData(url);
  return data;
}