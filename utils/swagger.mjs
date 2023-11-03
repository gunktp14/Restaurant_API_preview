const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Grab Restaurant API",
        "description": "All RESTful API Endpoint for Grab Restaurant",
        "version": "0.0.1"
    },
    "paths": {
        "/api/v1/auth/login": {
            "post": {
                "tags": [
                    "Authentication"
                ],
                "summary": "Sign in to Grab Restaurant",
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully signed in",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "user":{
                                            "username": {
                                                "type": "string"
                                            },
                                            "email": {
                                                "type": "string"
                                            },
                                            "password": {
                                                "type": "string"
                                            },
                                            "role": {
                                                "type":"string"
                                            },"updatedAt":{
                                                "type":"date"
                                            },"createdAt":{
                                                "type":"date"
                                            }
                                        },
                                        "accessToken": {
                                            "type": "string"
                                        },
                                        "refreshToken":{
                                            "type":"string"
                                        }
                                    },
                                    "example": {
                                        "user": {
                                          "username": "test01",
                                          "email": "test01@gmail.com",
                                          "password": "$2a$10$vyLY02h2lT5wC1wJYhWBge7F9FrjkZNOmbGjSUih6pq57o6V54kPW",
                                          "role": "user",
                                          "updatedAt": "2023-10-30T05:43:55.629Z",
                                          "createdAt": "2023-10-30T05:43:55.629Z"
                                        },
                                        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QwMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NjQ0NjM1LCJleHAiOjE2OTg2NDgyMzV9.HJ-Fn4Ck9merhMe2Gfcafv5WRNnjUzBPd0iQLyY5quI",
                                        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QwMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NjQ0NjM1LCJleHAiOjE2OTg3MzEwMzV9.alzkg4AulCU0ln2dvIad9rhnpKxMv88nFMIehwRAw0w"
                                      }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/v1/auth/register": {
            "post": {
                "tags": [
                    "Authentication"
                ],
                "summary": "Sign up for Grab Restaurant",
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                },
                                
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully signed up",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "user":{
                                            "username": {
                                                "type": "string"
                                            },
                                            "email": {
                                                "type": "string"
                                            },
                                            "password": {
                                                "type": "string"
                                            },
                                            "role": {
                                                "type":"string"
                                            },"updatedAt":{
                                                "type":"date"
                                            },"createdAt":{
                                                "type":"date"
                                            }
                                        },
                                        "accessToken": {
                                            "type": "string"
                                        },
                                        "refreshToken":{
                                            "type":"string"
                                        }
                                    },
                                    "example": {
                                        "user": {
                                          "username": "test01",
                                          "email": "test01@gmail.com",
                                          "password": "$2a$10$vyLY02h2lT5wC1wJYhWBge7F9FrjkZNOmbGjSUih6pq57o6V54kPW",
                                          "role": "user",
                                          "updatedAt": "2023-10-30T05:43:55.629Z",
                                          "createdAt": "2023-10-30T05:43:55.629Z"
                                        },
                                        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QwMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NjQ0NjM1LCJleHAiOjE2OTg2NDgyMzV9.HJ-Fn4Ck9merhMe2Gfcafv5WRNnjUzBPd0iQLyY5quI",
                                        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QwMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NjQ0NjM1LCJleHAiOjE2OTg3MzEwMzV9.alzkg4AulCU0ln2dvIad9rhnpKxMv88nFMIehwRAw0w"
                                      }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/v1/restaurant": {
            "get": {
                "tags": [
                    "Restaurant"
                ],
                "summary": "Get a list of restaurants",
                "responses": {
                    "200": {
                        "description": "Successfully retrieved list of restaurants",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "type": "number"
                                            },
                                            "name": {
                                                "type": "string"
                                            },
                                            "type": {
                                                "type": "string"
                                            },
                                            "img": {
                                                "type": "string"
                                            }
                                        }
                                    },"example":[
                                        {
                                            "id": 39,
                                            "name": "รสชาติกะเพรา - เสาชิงช้า",
                                            "type": "Coupon, ฟาสต์ฟู้ด",
                                            "img": "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CZCZSEAUT3DJJT/list/7e583585-1278-4fe6-8371-83c5c53f9f14__listing_photo__2023__03__01__16__52__32.webp",
                                            "createdAt": "2023-10-09T03:32:33.192Z",
                                            "updatedAt": "2023-10-09T03:32:33.192Z"
                                          },
                                        {
                                            "id": 41,
                                            "name": "100 หอยทอด อาหารจานเดี่ยว สี่แยกคอกวัว - ถนนตะนาว",
                                            "type": "อาหารตามสั่ง",
                                            "img": "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C4AWN4DJBCNYT6/list/b8c33b8f20ae4a18b9a7926f021cb9c4_1681437602381131532.webp",
                                            "createdAt": "2023-10-09T03:33:49.724Z",
                                            "updatedAt": "2023-10-09T03:33:49.724Z"
                                          },
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "tags": [
                    "Restaurant"
                ],
                "summary": "Create a new restaurant",
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "img": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully created a new restaurant"
                    }
                }
            }
        },
        "/res/{id}": {
            "get": {
                "tags": [
                    "Restaurant"
                ],
                "summary": "Get Restaurant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully get restaurant by Id",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "number"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "type": {
                                            "type": "string"
                                        },
                                        "img": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "tags": [
                    "Restaurant"
                ],
                "summary": "Update a restaurant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    },
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "img": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully updated restaurant by Id"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Restaurant"
                ],
                "summary": "Delete a restaurant by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successfully deleted restaurant by Id"
                    }
                }
            }
        }
    }
  }

  export default swaggerDocument

