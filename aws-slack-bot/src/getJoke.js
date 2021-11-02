const axios = require("axios");
const { createResponseObject } = require("./createResponseObject.js");

module.exports.getJoke = async () => {
    // Axios response
    let jokeData;

    try {
        jokeData = await axios.get(process.env["JOKE_API_URL"]);
        const jokeString = jokeData["data"]["value"];
        return createResponseObject(200, jokeString);
    } catch (e) {
        return createResponseObject(500, "Im broken :( Help me!");
    }
}