if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley",
  "name" : "haley-0.1.0",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-aimp" ],
  "schemas" : [ {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "extends" : "http://vital.ai/ontology/vital#Account",
    "title" : "Extension to http://vital.ai/ontology/vital#Account",
    "description" : "Extension to upper ontology class: http://vital.ai/ontology/vital#Account",
    "properties" : {
      "http://vital.ai/ontology/haley#isEnableEcho" : {
        "type" : "boolean"
      }
    }
  }, {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "extends" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "title" : "Extension to http://vital.ai/ontology/vital-aimp#UserProfile",
    "description" : "Extension to upper ontology class: http://vital.ai/ontology/vital-aimp#UserProfile",
    "properties" : {
      "http://vital.ai/ontology/haley#hasEchoUserID" : {
        "type" : "string"
      }
    }
  }, {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "extends" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "title" : "Extension to http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "description" : "Extension to upper ontology class: http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "properties" : {
      "http://vital.ai/ontology/haley#hasEchoUserID" : {
        "type" : "string"
      }
    }
  }, {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "extends" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "title" : "Extension to http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "description" : "Extension to upper ontology class: http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "properties" : {
      "http://vital.ai/ontology/haley#hasEchoUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley#ChatMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#ChatMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#ChatMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#ChatMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasCreatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isOwn" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#ChatMessageWithImage",
    "parent" : "http://vital.ai/ontology/haley#ChatMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#ChatMessageWithImage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#ChatMessageWithImage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#ChatMessageWithImage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasAttachedImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasCreatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isOwn" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#ChatMessageWithLink",
    "parent" : "http://vital.ai/ontology/haley#ChatMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#ChatMessageWithLink",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#ChatMessageWithLink",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#ChatMessageWithLink" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasAttachedLinkURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasCreatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isOwn" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#ChatMessageWithWeather",
    "parent" : "http://vital.ai/ontology/haley#ChatMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#ChatMessageWithWeather",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#ChatMessageWithWeather",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#ChatMessageWithWeather" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasCreatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isOwn" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#ChatStoryMessage",
    "parent" : "http://vital.ai/ontology/haley#ChatMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#ChatStoryMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#ChatStoryMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasCreatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryCreatorAvatarURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryCreatorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryDate" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStoryURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#isOwn" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyChannel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#HaleyChannel",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#HaleyChannel",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#HaleyChannel" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyChannelAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#HaleyChannelAnswer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#HaleyChannelAnswer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#HaleyChannelAnswer" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#HaleyChannelQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#HaleyChannelQuestion",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#HaleyChannelQuestion",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#HaleyChannelQuestion" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/haley#LinkAccountRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/haley#LinkAccountRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/haley#LinkAccountRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/haley#LinkAccountRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/haley#hasEchoUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasRandomCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley#hasAttachedImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatMessageWithImage" ],
    "shortName" : "attachedImageURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasAttachedLinkURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatMessageWithLink" ],
    "shortName" : "attachedLinkURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasCreatorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatMessage" ],
    "shortName" : "creatorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasEchoUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#LinkAccountRequest", "http://vital.ai/ontology/vital-aimp#UserProfile", "http://vital.ai/ontology/vital-aimp#UserProfileMessage", "http://vital.ai/ontology/vital-aimp#UserTextMessage" ],
    "shortName" : "echoUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasRandomCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#LinkAccountRequest" ],
    "shortName" : "randomCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryCreatorAvatarURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyCreatorAvatarURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryCreatorName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyCreatorName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyDate",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#hasStoryURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatStoryMessage" ],
    "shortName" : "storyURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isEnableEcho",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "enableEcho",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley#isOwn",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ChatMessage" ],
    "shortName" : "own",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(haley_0_1_0_schema);