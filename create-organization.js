const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({ region: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

var guid = uuidv4();
var insertParam = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + guid,
        sk : "METADATA#" + guid, 
        name: "Code For Geeks",
        address: `Theodore Lowe
        Ap #867-859 Sit Rd.
        Azusa New York 39531
        (793) 151-6230`,
        registered : true
    }
};

dynamoDB.put(insertParam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});

/** New GUID for new Organization */
guid = uuidv4();

insertParam = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + guid,
        sk : "METADATA#" + guid, 
        name: "Angular Experts",
        address: `Calista Wise
        7292 Dictum Av.
        San Antonio MI 47096
        (492) 709-6392`,
        registered : false
    }
};

dynamoDB.put(insertParam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
