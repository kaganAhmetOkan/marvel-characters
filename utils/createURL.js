import md5 from "md5";

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const baseURL = process.env.BASE_URL;

export default function createURL({ nameStartsWith, titleStartsWith, page, id, comics }) {
  if (!publicKey || !privateKey || !baseURL) return;

  const url = new URL(baseURL);
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const limit = 20;
  const offset = (Number.parseInt(page ?? 1) - 1) * limit;

  url.searchParams.set("ts", ts);
  url.searchParams.set("apikey", publicKey);
  url.searchParams.set("hash", hash);
  url.searchParams.set("limit", limit);

  if (nameStartsWith) url.searchParams.set("nameStartsWith", nameStartsWith);
  if (titleStartsWith) url.searchParams.set("titleStartsWith", titleStartsWith);
  if (page) url.searchParams.set("offset", offset);
  if (id) url.pathname += `/${id}`;
  if (comics) url.pathname += `/comics`;

  return url;
};