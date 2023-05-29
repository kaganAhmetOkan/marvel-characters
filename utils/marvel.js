import createURL from "./createURL";
import fetchData from "./fetchData";

export async function fetchCharacters({ nameStartsWith, page, id }) {
  const url = createURL({ nameStartsWith, page, id });
  const { data } = await fetchData(url);
  return data;
};

export async function fetchCharacterComics({ nameStartsWith, page, id }) {
  const url = createURL({ nameStartsWith, page, id, comics: true });
  const { data } = await fetchData(url);
  return data;
};