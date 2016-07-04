if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_aimp_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-aimp",
  "name" : "vital-aimp-0.1.0",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AIMPDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ActivateMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#AnonymousProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AnonymousProfile",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AnonymousProfile",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AnonymousProfile" ]
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
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#Answer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Answer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Answer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Answer" ]
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
      "http://vital.ai/ontology/vital-aimp#hasText" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AnswerChoice" ]
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
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#BB8Device",
    "parent" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BB8Device",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BB8Device",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BB8Device" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BaseProfile",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ]
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
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BinaryMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#BooleanPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BooleanPropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BooleanPropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BooleanPropertyFact" ]
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
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#ChatMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ChatMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ChatMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ChatMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#ChatModeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ChatModeMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ChatModeMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ChatModeMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatMode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#Choice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Choice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Choice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Choice" ]
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
      "http://vital.ai/ontology/vital-aimp#hasChoiceLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChoiceValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#ChoiceAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ChoiceAnswer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ChoiceAnswer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ChoiceAnswer" ]
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
      "http://vital.ai/ontology/vital-aimp#hasText" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#CommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#CommandMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#CurrentBotMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#CurrentBotMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#CurrentBotMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#CurrentBotMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeactiveMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DialogSession",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DialogSession",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DialogSession" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#DialogStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DialogStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DialogStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DialogStatusMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DoublePropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DoublePropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DoublePropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DoublePropertyFact" ]
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
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Edge_hasChoice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Edge_hasChoice",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasChoice" ]
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
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogSession",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Edge_hasDialogSession",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogSession" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasDialogSession" ]
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
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/vital-aimp#FactsListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#FactsListMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#FactsListMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#FactsListMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#GetFactsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#GetFactsMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#GetFactsMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#GetFactsMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#GetObjectMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#GetObjectMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#GetObjectMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#GetObjectMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasNeLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasNeLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasZoomLevel" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyTextMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HueLightDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#InformationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#InformationMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#InformationMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#InformationMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#IntegerPropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact" ]
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
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#JiboDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#JiboDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#LightDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#LightDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#MetaQLMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#MetaQLMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#MetaQLMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#MetaQLMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBindingNames" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTotalResults" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#MotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#MotionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#MotionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#MotionMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#Question",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion" ]
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
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#PropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact" ]
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
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#Question",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Question",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Question",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Question" ]
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
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#RobotDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#RobotDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#Session",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Session",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Session",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Session" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatMode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#SetFactMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SetFactMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SetFactMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SetFactMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SettingsMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SpeechMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SpheroDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#StatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#StatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#StatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#StatusMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#StringPropertyFact" ]
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
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStringValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SwitchDevice" ]
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
    "id" : "http://vital.ai/ontology/vital-aimp#ThinkingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ThinkingMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ThinkingMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ThinkingMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#TickMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#TickMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#TickMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#TickMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#TrueFalseAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#TrueFalseAnswer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#TrueFalseAnswer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#TrueFalseAnswer" ]
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
      "http://vital.ai/ontology/vital-aimp#hasBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#Question",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#TrueFalseQuestion",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ]
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
      "http://vital.ai/ontology/vital-aimp#hasFalseLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTrueLabel" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#UnsetFactMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UnsetFactMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UnsetFactMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactClassname" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeSubclasses" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UpdateSessionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UpdateSessionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UpdateSessionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UpdateSessionMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserChatRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserChatRequestMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserChatRequestMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserChatRequestMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLeftApp" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLoggedIn" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLoggedOut" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserProfile",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserProfile" ]
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
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserProfileMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserStatusMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserTextMessage" ]
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
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
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
    "id" : "http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "parent" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#WeMoSwitch" ]
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
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "address",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAuthSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "authSessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBindingNames",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
    "shortName" : "bindingNames",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBooleanValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#BooleanPropertyFact", "http://vital.ai/ontology/vital-aimp#TrueFalseAnswer", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "booleanValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBotID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "botID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatMessage" ],
    "shortName" : "chatMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatMode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatModeMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "chatMode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCommand",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage", "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ],
    "shortName" : "command",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsEndAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsStartAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DoublePropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "doubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactClassname",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "factClassname",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FactsListMessage", "http://vital.ai/ontology/vital-aimp#GetFactsMessage", "http://vital.ai/ontology/vital-aimp#SetFactMessage", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "factScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFalseLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "falseLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "integerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "latitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLimit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
    "shortName" : "limit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage" ],
    "shortName" : "longDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "longitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "neLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "neLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#GetObjectMessage", "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage" ],
    "shortName" : "objectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
    "shortName" : "offset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "propertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact" ],
    "shortName" : "propertyValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "publicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueryString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLMessage" ],
    "shortName" : "queryString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "requestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSearchString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "searchString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "sessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasShortDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "shortDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogStatusMessage", "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage", "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#UserStatusMessage" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#StringPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "stringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "swLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "swLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Answer", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextToSpeak",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "textToSpeak",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "thumbnailImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTotalResults",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
    "shortName" : "totalResults",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTrueLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "trueLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "url",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#BaseProfile", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "userID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUserName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "shortName" : "userName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "weatherJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasZoomLevel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "zoomLevel",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAnswerSkipped",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerChoice", "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "answerSkipped",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isFinalResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "finalResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGoBackSelected",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "goBackSelected",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHelpRequested",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "helpRequested",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHistoryMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "historyMessage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#GetObjectMessage", "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage" ],
    "shortName" : "includeDependentObjects",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isIncludeSubclasses",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "includeSubclasses",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isQuestionClosed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "questionClosed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isReplyTo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "replyTo",
    "multipleValues" : false,
    "type" : "URIProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_aimp_0_1_0_schema);