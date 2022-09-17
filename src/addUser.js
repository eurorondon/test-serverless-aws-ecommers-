const AWS = require("aws-sdk");
const { v4 } = require("uuid");
//const bcrypt = require("bcryptjs");

const addUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { name, email, password, isadmin } = JSON.parse(event.body);
  const createAt = new Date();
  const id = v4();

  const newUser = {
    id,
    name,
    email,
    password,
    isadmin,
    createAt,
  };

  await dynamodb
    .put({
      TableName: "usersTable",
      Item: newUser,
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(newUser),
  };
};

module.exports = {
  addUser,
};
