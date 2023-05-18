import createURL from "./createURL";
import fetchData from "./fetchData";

export async function fetchCharacters({ nameStartsWith, offset }) {
  const url = createURL({ nameStartsWith: nameStartsWith, offset: offset });
  const { data } = await fetchData(url);
  return data;
};