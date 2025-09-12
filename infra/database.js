import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSGRES_HOST,
    port: process.env.POSGRES_PORT,
    user: process.env.POSGRES_USER,
    database: process.env.POSGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect(); // comando assíncrono, por isso o await (oq torna a funçao assíncrona tb)
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
