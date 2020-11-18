const Pool = require("pg").Pool;

export const pool = new Pool({
  user: "",
  password: "",
  host: "localhost",
  port: 5432,
  database: "",
});
