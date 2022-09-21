const AWS = require("aws-sdk");

const getProducts = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb
      .scan({
        TableName: "productsTable",
      })
      .promise();

    const products = result.Items;

    return {
      //status: 200,
      products,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
};
