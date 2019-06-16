
const crypto = require("crypto-js");
const db = require("../database");
var moment = require('moment');

async function generateToken() {
    // dodelat overeni v DB, aby nebyl duplicitni
    return crypto.SHA512(Date.now.toString() + Math.random().toFixed(36)).toString();
}

module.exports ={
    createToken: async (type, data) => {
        const token = await generateToken();
        switch (type) {
            case 1: { // User
                if (!data) throw Error();

                const token_id = await db.insert("tokens", {
                    type: type,
                    expired: moment().add(30, "days").format("YYYY-MM-DD"),
                    token: token
                });

                await db.insert("user_token", {
                    u_id: data.user_id,
                    t_id: token_id
                });

                return token;
            } ;
            default: return null;
        }

    }
}