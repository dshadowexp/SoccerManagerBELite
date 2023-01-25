import SwaggerJsdoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Soccer Manager BELite REST API Docs',
            version: '1.0.0',
            description: `A RESTful NodeJS API for a simple application where football/soccer fans will be able to create fantasy teams and will be able to buy or sell players`
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: ['./api/*/routes.js', './api/users/auth.js', './api/*/model.js']
};

const swaggerSpec = SwaggerJsdoc(options);

const swaggerDocs = function(app, port) {
    // Swagger page
    app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

    // Dcos in JSON format
    app.get('docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Docs available at http://localhost:${port}/api-docs`);
}

export default swaggerDocs;