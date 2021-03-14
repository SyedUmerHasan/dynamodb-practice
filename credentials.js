const AWS  = require('aws-sdk');
AWS.config.update({ region : 'us-east-1'});

/** Get Credentials from AWS Config */
AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
});