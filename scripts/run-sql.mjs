// Runs a .sql file against the DB in the env (MySQL only).
//   node --env-file=.env.local scripts/run-sql.mjs database/mysql.sql
import { readFileSync } from "node:fs";
import mysql from "mysql2/promise";
const file = process.argv[2];
if (!file) { console.error("Usage: run-sql.mjs <file.sql>"); process.exit(1); }
const conn = await mysql.createConnection({
  host: process.env.DB_HOST, port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME, user: process.env.DB_USER, password: process.env.DB_PASSWORD,
  multipleStatements: true, connectTimeout: 20000,
});
await conn.query(readFileSync(file, "utf8"));
const [rows] = await conn.query("SHOW TABLES");
console.log("Tables:", rows.map((r) => Object.values(r)[0]).join(", "));
await conn.end();
