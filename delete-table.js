var AWS = require("aws-sdk");
var uuid = require('uuid');

AWS.config.apiVersions = {
  dynamodb: '2012-08-10',
  // other service API versions
};

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Music"
};

dynamodb.deleteTable(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});

