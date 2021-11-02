const { getJoke } = require("./getJoke.js");

describe("Fetches a random joke from chucknorris.io API", () => {
    // This depends on the chucknorris.io API to be online and functioning
    it("should fetch the joke and return it along with the status code", async () => {
        process.env["JOKE_API_URL"] = "https://api.chucknorris.io/jokes/random";
        
        const joke = await getJoke();

        expect(typeof(joke)).toBe("object");
        expect(joke["statusCode"]).toBe(200);

        expect(joke["body"].length).toBeGreaterThan(0);
    });    

    it("should fail and return 500", async () => {
        process.env["JOKE_API_URL"] = "https://invalidaddress:112233";
        
        const joke = await getJoke();

        expect(typeof(joke)).toBe("object");
        expect(joke["statusCode"]).toBe(500);
    });    
});