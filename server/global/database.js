const mysql = require('mysql')
var util = require('util');


const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
});

const updateInsertData = (data) => {
  const keys = Object.keys(data);
  const values_data = [];
  let sql = "";

  let i = 0;
  for (const key of keys) {
    if (i++ > 0) {
      sql += ", ";
    }

    if (data[key] == null) {
      sql += `${key} = NULL`;
    }
    else if (typeof data[key] === "object") {
      if (data[key].type == "sql_function") sql += `${key} = ${data[key].value}`;
    }
    else {
      values_data.push(data[key]);
      sql += `${key} = ?`;
    }
  }

  return { query: sql, data: values_data };
}


db.query = util.promisify(db.query);

db.select = (table, where = undefined, ...param) => {
  let query = `SELECT * FROM ${table}`;

  if (where) {
    query += ` WHERE ${where}`;
  }

  return db.query(query, ...param);
}

db.insert = async (table, data) => {
  let query_sql = `INSERT INTO ${table} SET `;
  const updated_data = updateInsertData(data);

  const query = `${query_sql} ${updated_data.query}`;
  try {
    await db.query(query, updated_data.data);
  }
  catch(e) {
    console.log(query);
    console.error(e);
  }

  return (await db.query("SELECT LAST_INSERT_ID() as lid;"))[0]["lid"];
}

db.update = (table, data, where = undefined, ...param) => {
  const updated_data = updateInsertData(data);
  let query = `UPDATE ${table} SET ${updated_data.query}`;

  if (where) {
    query += ` WHERE ${where}`;
  }

  return db.query(query, [...updated_data.data, ...param]);
}

db.sqlEval = (value, ...params) => {
  return { type: "sql_function", value: value };
}

module.exports = db;