var AWS = require("aws-sdk");
var uuid = require('uuid');

AWS.config.apiVersions = {
  dynamodb: '2012-08-10',
  // other service API versions
};

var dynamodb = new AWS.DynamoDB();
var params = {
  AttributeDefinitions: [
  { AttributeName: "Artist", AttributeType: "S" }, 
  { AttributeName: "SongTitle", AttributeType: "S" }
  ], 
  KeySchema: [
  { AttributeName: "Artist", KeyType: "HASH" }, 
  { AttributeName: "SongTitle", KeyType: "RANGE" }
  ], 
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }, 
  TableName: "Music"
};

dynamodb.createTable(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});


