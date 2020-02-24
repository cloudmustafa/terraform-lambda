// 'Hello World' nodejs12.x runtime AWS Lambda function
exports.handler = (event, context, callback) => {
    console.log('Hello from terraform lambda, logs!');
    callback(null, 'The function ran successfully');
}
