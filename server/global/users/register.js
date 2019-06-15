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

        const sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 1 AND string_value = ? LIMIT 1`, [ user.email ]);
        
        if (sql_res.length > 0) return r.error("user-exist");

        const pwd_hash = await pwd.create_hash(user.password);

        const user_id = await db.insert("users", { "unique_id": user.email });

        await db.insert("user_attrs", {
            user_id: user_id,
            type: 1,
            string_value: user.email
        });

        await db.insert("user_attrs", {
            user_id: user_id,
            type: 2,
            string_value: pwd_hash
        });
        await db.insert("user_attrs", {
            user_id: user_id,
            type: 3,
            string_value: user.firstname
        });
        await db.insert("user_attrs", {
            user_id: user_id,
            type: 4,
            string_value: user.surname
        });
        await db.insert("user_attrs", {
            user_id: user_id,
            type: 5,
            string_value: null
        });

        return r.ok();
    },
    login: async (username, password) => {
        let sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 1 AND string_value = ? LIMIT 1`, [username]);

        if (sql_res.length == 0) return r.error("user-not-exist");

        const user_id = sql_res[0].user_id;
        sql_res = await db.query(`SELECT * FROM user_attrs WHERE type = 2 AND user_id = ? LIMIT 1`, [user_id]);

        const pwd_hash = sql_res[0].string_value;

        if (await pwd.check(password, pwd_hash)) {

            await db.update("user_attrs", { "updated": db.sqlEval("now()") }, "user_id = ? AND type = 5", user_id);

            // Dodelat vygenerovani login tokenu
            return r.ok();
        }
        else return r.error("user-not-exist");
    }
}