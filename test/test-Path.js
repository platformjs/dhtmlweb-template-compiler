const Path = require("../src/Path");
describe("Path", function() {
    it("should return string name", function() {
        const path = new Path("name");
        expect(path.next()).toEqual("name");
    });
    it("should return string address and zipcode", function() {
        const path = new Path("address.zipcode");
        expect(path.next()).toEqual("address");
        expect(path.next()).toEqual("zipcode");
    });
    it("should return correct path", function() {
        const pairs = [{
            value: "name",
            expect: ["name"]
        }, {
            value: "name.age",
            expect: ["name", "age"]
        }, {
            value: "[5].a",
            expect: [5, "a"]
        },  {
            value: "['5'].a",
            expect: ["5", "a"]
        }, {
            value: "addresses[2].zipcode",
            expect: ["addresses", 2, "zipcode"]
        }, {
            value: "employees[3]['user.name']",
            expect: ["employees", 3, "user.name"]
        }];
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i];
            const path = new Path(pair.value);
            let j = 0;
            let next;
            while ((next = path.next())) {
                expect(next).toEqual(pair.expect[j]);
                j++;
            }
        }
    });
});