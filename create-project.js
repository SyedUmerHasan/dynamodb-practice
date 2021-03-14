const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({ region: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

var org_guid = '6ad5818a-8d27-445d-b61f-82b7586540fd';
var pro_guid = uuidv4();

var insertParam = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + org_guid,
        sk : "PROJECT#agile#" + pro_guid, 
        project_name: "Code for geeks",
        website : "www.codeforgeeks.com"
    }
};

dynamoDB.put(insertParam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});

/** Assigns new project id for new project */
pro_guid = uuidv4();

var insertParam2 = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + org_guid,
        sk : "PROJECT#scrum#" + pro_guid, 
        project_name: "Angular experts",
        website : "www.angularexperts.com"
    }
};

dynamoDB.put(insertParam2, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
