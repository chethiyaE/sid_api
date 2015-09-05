define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Test the api connection",
    "name": "TestConnection",
    "group": "Base_Router",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome to sID !!!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Welcome to sID !!!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Base_Router"
  },
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate an user",
    "name": "_authenticate",
    "group": "Base_Router",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Users email address.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"token\": \"{TOKEN}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Base_Router"
  },
  {
    "type": "post",
    "url": "/sendMail",
    "title": "Send verification Email",
    "name": "_sendEmail",
    "group": "Base_Router",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Users email address.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Email sent successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Email required.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Base_Router"
  },
  {
    "type": "post",
    "url": "/setup",
    "title": "Create a new user account",
    "name": "_setup",
    "group": "Base_Router",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Users email address.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"User created\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Base_Router"
  },
  {
    "type": "get",
    "url": "/verify",
    "title": "Verify an email address",
    "name": "_verify",
    "group": "Base_Router",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token containing user information.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"{username} verified\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Base_Router"
  },
  {
    "type": "get",
    "url": "/facebook",
    "title": "Ger Facebook User information",
    "name": "PostFacebook",
    "group": "Facebook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Token"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Facebook"
  },
  {
    "type": "post",
    "url": "/api/",
    "title": "Test the secure api connection",
    "name": "_api",
    "group": "Secure_Router",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token to authenticate the user.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Welcome to secure sID api !!!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes.js",
    "groupTitle": "Secure_Router"
  }
] });