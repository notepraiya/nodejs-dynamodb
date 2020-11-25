var AWS = require("aws-sdk");
var uuid = require('uuid');

AWS.config.apiVersions = {
  dynamodb: '2012-08-10',
  // other service API versions
};

var dynamodb = new AWS.DynamoDB();

var params = {
  Item: {
  "AlbumTitle": { S: "Somewhat Famous" }, 
  "Artist": { S: "No One You Know" }, 
  "SongTitle": { S: "Call Me Today" }
  },
  ReturnConsumedCapacity: "TOTAL", 
  TableName: "Music"
};

dynamodb.putItem(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
