const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({ region: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();

var org_guid = '6ad5818a-8d27-445d-b61f-82b7586540fd';
var emp_guid = uuidv4();

var insertParam = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + org_guid,
        sk : "EMP#" + emp_guid, 
        emp_name : "Syed Umer Hasan",
        years_of_exp : 3
    }
};

emp_guid = uuidv4();

dynamoDB.put(insertParam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});

var insertParam = {
    TableName : "Organization",
    Item:{
        id : "ORG#" + org_guid,
        sk : "EMP#" + emp_guid, 
        emp_name : "Muhammad Abdullah",
        years_of_exp : 1
    }
};

dynamoDB.put(insertParam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
