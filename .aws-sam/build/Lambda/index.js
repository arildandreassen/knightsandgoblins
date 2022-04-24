const AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-west-1" });
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
exports.handler = (event) => {
  const params = {
    TableName: "Games",
    Item: {
      GameId: { S: "sdfdsf23" },
      GameName: { S: "Richard Roe" },
    },
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};
