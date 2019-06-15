const mysql = require('mysql')
var util = require('util');


const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  });
  

  db.query = util.promisify(db.query);
  db.insert = async (query) => {
    await db.query(query);
    return (await db.query("SELECT LAST_INSERT_ID() as lid;"))[0]["lid"];
  }

  // TODO: Treba predelat na bezpecnou verzi, jen pracovni verze. Resp predelat na tridu pro praci s DB
  module.exports = db;