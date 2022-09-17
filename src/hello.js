"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello, im ready to de the ecommers",
        input: event,
      },
      null,
      2
    ),
  };
};
