import createURL from "./createURL";
import fetchData from "./fetchData";

export async function fetchCharacters({ nameStartsWith, page, id }) {
  const url = createURL({ nameStartsWith: nameStartsWith, page: page, id: id });
  const { data } = await fetchData(url);
  console.log(data);
  return data;
};