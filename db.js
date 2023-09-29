// Do not expose your Neon credentials to the browser
// .env
PGHOST='ep-tiny-dawn-42998238.us-east-2.aws.neon.tech'
PGDATABASE='neondb'
PGUSER='tiagolimar'
PGPASSWORD='Z1jKPfI3yVXc'
ENDPOINT_ID='ep-tiny-dawn-42998238'

// app.js
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();