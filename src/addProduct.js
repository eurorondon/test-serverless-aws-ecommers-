const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const addProduct = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { name, image, description, price, countInStock, rating, numReviews } =
    JSON.parse(event.body);
  const createdAt = Date();
  const id = v4();

  const newProduct = {
    id,
    name,
    image,
    description,
    price,
    countInStock,
    rating,
    numReviews,
    createdAt,
  };

  await dynamodb
    .put({
      TableName: "productsTable",
      Item: newProduct,
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(newProduct),
  };
};

module.exports = {
  addProduct,
};
