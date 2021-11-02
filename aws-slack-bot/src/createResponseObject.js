module.exports.createResponseObject = (statusCode, data) => {
    return {
        "statusCode": statusCode,
        "body": data
    };
}