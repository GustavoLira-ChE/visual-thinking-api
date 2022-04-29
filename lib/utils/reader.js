const fs = require('fs');

class Reader {
    static readJsonFile(file){
        const rawdata = fs.readFileSync(file);
        const visualPartners = JSON.parse(rawdata);
        return visualPartners
    }
}

module.exports = Reader;