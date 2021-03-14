const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({ region: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

/*
var readAllParams = {
    TableName: 'Organization',
    KeyConditionExpression: "#pk = :pk",
    ExpressionAttributeNames: {
        "#pk": "pk"
    },
    ExpressionAttributeValues: {
        ":pk": 2
    }
};
dynamoDB.query(readAllParams, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
*/

/* 
var dynamodb = new AWS.DynamoDB();
var param = {}
dynamodb.listTables(param, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});
*/



// var getParams = {
//     TableName: 'Organization',
//     KeyConditionExpression: "sk = begins_with(:pk)",
//     Key:{
//         pk: 2,
//         sk: "Syed Udmer Hasan"
//     },
//     ExpressionAttributeValues: {
//         ":pk": 2
//     }
// };

// dynamoDB.get(getParams, function(err, data) {
//     if (err) {
//         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });

