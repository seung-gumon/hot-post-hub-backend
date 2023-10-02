import {APIGatewayProxyEvent, APIGatewayProxyResult, Handler} from 'aws-lambda';

const hello: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World!"
        })
    };
};

export {hello};