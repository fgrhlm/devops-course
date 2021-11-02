const { createResponseObject } = require("./createResponseObject.js");

describe("Create new response object", () => {
    it("should construct a new response object with given arguments.", () => {
        const testBody = "Success!";
        const r = createResponseObject(200, testBody);

        expect(typeof(r)).toBe("object");

        const statusCode = r["statusCode"];
        const body = r["body"];

        expect(statusCode).toBe(200);;

        expect(body).toBe(testBody);
    })
})