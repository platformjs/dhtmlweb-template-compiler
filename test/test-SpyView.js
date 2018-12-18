const SpyView = require("../src/SpyView");
describe("SpyView", function() {
    describe("get", function() {
        it("should get value", function() {
            const view = new SpyView({
                a: 1,
                b: 2,
                "a.b": 3,
                c: [{d: 1, "c.e": 2, "k.k": {a: 1}}, {b: 3}],
                "2": 1
            });
            expect(view.get("a")).toEqual(1);
            expect(view.get("2")).toEqual(1);
            expect(view.get("['a.b']")).toEqual(3);
            expect(view.get("c[0].d")).toEqual(1);
            expect(view.get("c[0]['c.e']")).toEqual(2);
            expect(view.get("c[0]['k.k'].a")).toEqual(1);
            expect(view.get("c[0]['k.k']['a']")).toEqual(1);
        });
    });
});