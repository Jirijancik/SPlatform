
const returnData = new Map();
module.exports = {
    error: (type, data = undefined) => {
        const r = {
            status: false,
            error: type,
            created: Date.now()
        };
        if (data != void 0) r["data"] = data;

        return r;
    },
    addData: (key, value) =>{
        returnData.set(key, value);
    },
    ok: (data = undefined) => {
        const r = {
            status: true,
            created: Date.now()
        };
        
        if (data) {
            r["data"] = data;
        }
        else if (returnData.size > 0){
            r["data"] = Array.from(returnData);
        }

        return r;
    },
    print: (r, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(r));
    }
}