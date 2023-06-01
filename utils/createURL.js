import md5 from "md5";

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const baseURL = process.env.BASE_URL;
const limit = process.env.LIMIT;

export default function createURL({ path, searchParams: { nameStartsWith, titleStartsWith, page } }) {
  if (!publicKey || !privateKey || !baseURL) return;

  const defaultLimit = 20;
  const url = new URL(baseURL + path);
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const offset = (Number.parseInt(page ?? 1) - 1) * Number.parseInt(limit ?? defaultLimit);

  url.searchParams.set("ts", ts);
  url.searchParams.set("apikey", publicKey);
  url.searchParams.set("hash", hash);
  url.searchParams.set("limit", limit ?? defaultLimit);

  if (nameStartsWith) url.searchParams.set("nameStartsWith", nameStartsWith);
  if (titleStartsWith) url.searchParams.set("titleStartsWith", titleStartsWith);
  if (page) url.searchParams.set("offset", offset);

  return url;
};