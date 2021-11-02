const { getJoke } = require("./src/getJoke.js");
const { createResponseObject } = require("./src/createResponseObject.js");

module.exports.joke = async () => {
  try {
    return await getJoke();
  } catch (e) {
    return createResponseObject(500, e.message);
  };
};