'use strict';

const Pool = require('pg').Pool;

const pool = new Pool({
  user: "me",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "nearapogee"
});

module.exports = pool;