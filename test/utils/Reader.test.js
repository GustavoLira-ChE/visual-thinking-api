const Reader = require("./../../lib/utils/reader");

describe("Test for Reader class", () => {
    test("readJsonFile return a list of objects", () => {
        //arrange and act
        const visualPartners = Reader.readJsonFile("db/visualpartners.json");
        //assert
        for(let i = 0; i < visualPartners.length; i++){
            expect(typeof visualPartners[i]).toBe("object");
        }
    });
});