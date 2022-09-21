const AWS = require("aws-sdk");

const getUsers = async (event) => {
  dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb
    .scan({
      TableName: "usersTable",
    })
    .promise();

  const Users = result.Items;

  return {
    status: 200,
    body: {
      Users,
    },
  };
};

module.exports = {
  getUsers,
};
