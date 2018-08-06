export default {
    "$id": "http://example.com/example.json",
    "type": "object",
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "comments": {
        "$id": "/properties/comments",
        "type": "array",
        "items": {
          "$id": "/properties/comments/items",
          "type": "string",
          "title": "The 0th Schema ",
          "default": "",
          "examples": [
            "commetn one",
            "comment two"
          ]
        }
      },
      "loggedIn": {
        "$id": "/properties/loggedIn",
        "type": "boolean",
        "title": "The Loggedin Schema ",
        "default": false,
        "examples": [
          true
        ]
      }
    }
  }