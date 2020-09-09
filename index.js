var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context) => {
    let winningChoice
    let yourchoice = event["choice"]

    switch (yourchoice) {
        case "rock":
            winningChoice = "paper"
            break;
        case "paper":
            winningChoice = "scissors"
            break;
        case "scissors":
            winningChoice = "rock"
            break;
        default:
            break;
    }

    var params = {
        Body: `You chose ${yourchoice}. but I chose ${winningChoice}. I win!`,
        Bucket: "mtech-rock-paper-scissors",
        Key: "lukegiles/results.txt"
    }

    s3.putObject(params, function (err, data) {
        // if (err) console.log(err, err.stack);
        
    });
};
