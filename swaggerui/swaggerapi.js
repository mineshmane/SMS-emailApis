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
                        "description": "email sent  Successful"
                    },
                    "401": {
                        "description": "Wrong phone !"
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

        "/api/verification": {
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
                        "in": "path",
                        "required": true,
                        "description": "This api is used to store user data in database",
                        "schema": {
                            "$ref": "#/definitions/User Verification"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "email send Successful"
                    },
                    "401": {
                        "description": "Wrong email !"
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

        "/api/login": {
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
                        "description": "This api is used to login in to app",
                        "schema": {
                            "$ref": "#/definitions/User Login"
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
        "/api/getamount/{token}": {
            "get": {
                "tags": [
                    "Cash" 
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
                        "name": "token",
                        "in": "path",
                        "required": true,
                        "description": "This api is used to retrive the cash from account",
                        "schema": {
                            "$ref": "#/definitions/Cash GetAmount"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "amount retrived  Successful"
                    },
                    "401": {
                        "description": "token expired !"
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
        "/api/deposite/{token}": {
            "put": {
                "tags": [
                    "Cash" 
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
                        "name": "token",
                        "in": "path",
                        "required": true,
                        "description": "This api is used to deposite amount to account",
                        "schema": {
                            "$ref": "#/definitions/Cash Deposite"
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
        "/api/withdraw": {
            "put": {
                "tags": [
                    "Cash" 
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
                        "name": "token",
                        "in": "body",
                        "required": true,
                        "description": "This api is used to withdraw amount from  account",
                        "schema": {
                            "$ref": "#/definitions/Cash Withdraw"
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
                    "example": "username",
                    "required": true
                },
                "phone": {
                    "type": "string",
                    "example": "phone",
                    "required": true
                },
                "email": {
                    "type": "string",
                    "example": "user@gmail.com",
                    "required": true
                },
                
                "password": {
                    "type": "string",
                    "example": "123123",
                    "required": true
                }
            }
        },
        "User Login": {
            "properties": {
              
                "email": {
                    "type": "string",
                    "example": "user@gmail.com",
                    "required": true
                },
                
                "password": {
                    "type": "string",
                    "example": "123123",
                    "required": true
                }
            }
        },
        "User Verification": {
            "properties": {
                "token": {
                    "type": "string",
                    "example": "adminFirstName",
                    "required": true
                },
              
            }
        },
        "Cash GetAmount": {
            "properties": {
                "token": {
                    "type": "string",
                    "example": "token",
                    "required": true
                },
              
              
            }
        },
        "Cash Deposite": {
            "properties": {
                "token": {
                    "type": "string",
                    "example": "token",
                    "required": true
                },
                "amount": {
                    "type": "Number",
                    "example": "00",
                    "required": true
                },
              
            }
        },
        "Cash Withdraw": {
            "properties": {
                "token": {
                    "type": "string",
                    "example": "token",
                    "required": true
                },
                "amount": {
                    "type": "Number",
                    "example": "00",
                    "required": true
                },
              
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