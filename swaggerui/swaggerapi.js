module.exports = swaggerDefinition = {





    "swagger": "2.0",
    "info": {
        "description": "This is a REST API development server application made with Express.",
        "version": "1.0.0",
        "title": "Swagger Email -sms verification API Documentation"
    },
    "host": 'localhost:4000',
    "basePath": "/",
    "tags": [
        {
            "name": "User",
            "description": "Operations about User"
        },
    ],
    "schemes": [
        "http",
        "https"
    ],

    "paths": {
        "/api/register": {
            "post": {
                "tags": [
                    "User"
                ],
                "summary": "",
                "description": "",
                "produces": [
                    "application/json"
                ],
                "security": [
                    {
                        "token": []
                    }
                ],
                "parameters": [
                    {
                        "name": "User",
                        "in": "body",
                        "required": true,
                        "description": "This api is used to create User account",
                        "schema": {
                            "$ref": "#/definitions/User Registration"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Login Successful"
                    },
                    "401": {
                        "description": "Wrong password !"
                    },
                    "404": {
                        "description": "Not Found !"
                    },
                    "422": {
                        "description": "Invalid Credentials !"
                    },
                    "500": {
                        "description": "Something went wrong !"
                    }
                }
            }
        },

    },

    "definitions": {
        "User Registration": {
            "properties": {
                "username": {
                    "type": "string",
                    "example": "adminFirstName",
                    "required": true
                },
                "phone": {
                    "type": "string",
                    "example": "adminLastName",
                    "required": true
                },
                "email": {
                    "type": "string",
                    "example": "admin@gmail.com",
                    "required": true
                },
                
                "password": {
                    "type": "string",
                    "example": "admin",
                    "required": true
                }
            }
        },
    },
    "securityDefinitions": {
        "token": {
            "type": "apiKey",
            "name": "token",
            "in": "header"
        }
    }
 






 

};