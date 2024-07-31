import swaggerJSDoc from 'swagger-jsdoc';
export const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API 문서',
            version: '1.0.0',
            description: 'A simple Express API'
        }
    },
    apis: ["src/**/routes/*.ts"]
};