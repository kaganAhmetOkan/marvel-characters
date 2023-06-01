import createURL from "./createURL";
import fetchData from "./fetchData";

export async function fetchCharacters({ nameStartsWith, page, id="" }) {
  const path = id ? `/characters/${id}` : `/characters`;
  const url = createURL({ path, searchParams: { nameStartsWith, page } });
  const { data } = await fetchData(url);
  return data;
};

export async function fetchCharacterComics({ nameStartsWith, page, id }) {
  const path = `/characters/${id}/comics`;
  const url = createURL({ path, searchParams: { nameStartsWith, page } });
  const { data } = await fetchData(url);
  return data;
};

export async function fetchComics({ titleStartsWith, page, id }) {
  const path = id ? `/comics/${id}` : `/comics`;
  const url = createURL({ path, searchParams: { titleStartsWith, page } });
  const { data } = await fetchData(url);
  return data;
}