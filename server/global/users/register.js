const validator = require('email-validator');
const r = require("../json_data");
const pwd = require("../users/password");
const db = require("../database");

module.exports = {
    registerUser: async function (user) {
        // { firstname: string, surname: string, email: string, password: string }
        if (!user.firstname || !user.surname || !user.email || !user.password) {
            return r.error("input-is-empty");
        }

        if (!validator.validate(user.email)) {
            return r.error("not-valid-email");
        }

        const pwd_validation_result = pwd.validate(user.password);
        if (!pwd_validation_result.status) return pwd_validation_result;

        // TODO: Upravit databazi na bezpecnou proti MySql Injection
        const sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 1 AND string_value = '${user.email}' LIMIT 1`);
        
        if (sql_res.length > 0) return r.error("user-exist");

        const pwd_hash = await pwd.create_hash(user.password);

        const user_id = await db.insert(`INSERT INTO users (unique_id) VALUES ('${user.email}')`);

        await db.insert(`INSERT INTO user_attrs (user_id, type, string_value) VALUES (${user_id}, 1, '${user.email}')`);
        await db.insert(`INSERT INTO user_attrs (user_id, type, string_value) VALUES (${user_id}, 2, '${pwd_hash}')`);
        await db.insert(`INSERT INTO user_attrs (user_id, type, string_value) VALUES (${user_id}, 3, '${user.firstname}')`);
        await db.insert(`INSERT INTO user_attrs (user_id, type, string_value) VALUES (${user_id}, 4, '${user.surname}')`);

        return r.ok();
    },
    login: async (username, password) => {
        let sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 1 AND string_value = '${username}' LIMIT 1`);

        if (sql_res.length == 0) return r.error("user-not-exist");

        const user_id = sql_res[0].user_id;
        sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 2 AND user_id = '${user_id}' LIMIT 1`);

        const pwd_hash = sql_res[0].string_value;

        if (await pwd.check(password, pwd_hash)) {
            // Dodelat vygenerovani login tokenu
            return r.ok();
        }
        else return r.error("user-not-exist");
    }
}