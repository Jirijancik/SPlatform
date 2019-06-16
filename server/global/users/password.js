
const r = require("../json_data");
const bcrypt = require("bcrypt");

module.exports = {
    validate: (password) => {
        if (typeof password !== "string") r.error(process.env.CONST_PWD_ERROR, "not-valid-format");

        if (password.length < 5) return r.error(process.env.CONST_PWD_ERROR, "too-short");

        return r.ok();
    },
    check: (plain_pwd, password_hash) => bcrypt.compare(plain_pwd, password_hash),
    create_hash: (plain_pwd) => bcrypt.hash(plain_pwd, parseInt(process.env.PWD_SALT_ROUND))
}