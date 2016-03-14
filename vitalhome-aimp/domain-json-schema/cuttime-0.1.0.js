if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var cuttime_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/cuttime",
  "name" : "cuttime-0.1.0",
  "vitalsignsVersion" : "0.2.302",
  "parents" : [ "http://vital.ai/ontology/vital-commerce", "http://vital.ai/ontology/vital-social" ],
  "schemas" : [ {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "extends" : "http://vital.ai/ontology/vital-social#Tweet",
    "title" : "Extension to http://vital.ai/ontology/vital-social#Tweet",
    "description" : "Extension to upper ontology class: http://vital.ai/ontology/vital-social#Tweet",
    "properties" : {
      "http://vital.ai/ontology/cuttime#hasGeoLocation" : {
        "type" : "object",
        "properties" : {
          "longitude" : {
            "type" : "number"
          },
          "latitude" : {
            "type" : "number"
          }
        },
        "required" : [ "longitude", "latitude" ],
        "additionalProperties" : false
      },
      "http://vital.ai/ontology/cuttime#hasRetweetCount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/cuttime#Age",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Age",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Age",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Age" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Archetype",
    "parent" : "http://vital.ai/ontology/cuttime#Descriptor",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Archetype",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Archetype",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Archetype" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Brand",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Brand",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Brand",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Brand" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasBannerPicture" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasContact" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasProfilePicture" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasType" : {
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
    "id" : "http://vital.ai/ontology/cuttime#BrandAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#BrandAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#BrandAccount",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#BrandAccount" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasEmail" : {
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
    "id" : "http://vital.ai/ontology/cuttime#BrandCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Category",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#BrandCategory",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#BrandCategory",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#BrandCategory" ]
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
    "id" : "http://vital.ai/ontology/cuttime#BrandPartnership",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#BrandPartnership",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#BrandPartnership",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#BrandPartnership" ]
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
    "id" : "http://vital.ai/ontology/cuttime#BrandReport",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#BrandReport",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#BrandReport",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#BrandReport" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasSavedMusicArtist" : {
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
    "id" : "http://vital.ai/ontology/cuttime#DeliverySchedule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#DeliverySchedule",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#DeliverySchedule",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#DeliverySchedule" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasSchedule" : {
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
    "id" : "http://vital.ai/ontology/cuttime#Descriptor",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Descriptor",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Descriptor",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Descriptor" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasAffinityWith",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#Brand" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasAffinityScore" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith1",
    "parent" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith1",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasAffinityWith1",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#BrandReport" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith1" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasAffinityScore" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith2",
    "parent" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith2",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasAffinityWith2",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtistReport" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Brand" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith2" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasAffinityScore" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasAge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasAge",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasAge",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Age" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasAge" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasAnalysisTweet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasAnalysisTweet",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasAnalysisTweet",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasAnalysisTweet" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasArchetype",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasArchetype",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasArchetype",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Archetype" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasArchetype" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasBrand",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasBrand",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasBrand",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#BrandAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Brand" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasBrand" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasBrandPartnership",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasBrandPartnership",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasBrandPartnership",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#BrandPartnership" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasBrandPartnership" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasBrandReport",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasBrandReport",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasBrandReport",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#BrandAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#BrandReport" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasBrandReport" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasDeliverySchedule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasDeliverySchedule",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasDeliverySchedule",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#BrandReport", "http://vital.ai/ontology/cuttime#MusicArtistReport" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#DeliverySchedule" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasDeliverySchedule" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasDescriptors",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasDescriptors",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasDescriptors",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Descriptor" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasDescriptors" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasGender",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasGender",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasGender",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Gender" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasGender" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasKeyphrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasKeyphrase",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasKeyphrase",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Keyphrase" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasKeyphrase" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasLocation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasLocation",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasLocation",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Location" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasLocation" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasMessage",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Message" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasMessage" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasMood",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasMood",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasMood",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Mood" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasMood" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasMusic",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasMusic",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasMusic",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Music" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasMusic" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasMusicArtist",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasMusicArtist",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasMusicArtist",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtistAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasMusicArtist" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasMusicArtistReport",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasMusicArtistReport",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasMusicArtistReport",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist", "http://vital.ai/ontology/cuttime#MusicArtistAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtistReport" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasMusicArtistReport" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasNews",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasNews",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasNews",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#News" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasNews" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasQuotes",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasQuotes",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasQuotes",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Quote" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasQuotes" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasSimilarityTo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasSimilarityTo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasSimilarityTo",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasSimilarityTo" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasSimilarityScore" : {
        "type" : "number"
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisAccount",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisAccount" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisFollower",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisFollower",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisFollower",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasTwitterAnalysisFollower" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Edge_hasVideo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Edge_hasVideo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Edge_hasVideo",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "destinationDomains" : [ "http://vital.ai/ontology/cuttime#Video" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Edge_hasVideo" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Gender",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Gender",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Gender",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Gender" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Keyphrase",
    "parent" : "http://vital.ai/ontology/cuttime#Descriptor",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Keyphrase",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Keyphrase",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Keyphrase" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Location",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Location",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Location",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Location" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Message",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Message",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Message",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Message" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Mood",
    "parent" : "http://vital.ai/ontology/cuttime#Descriptor",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Mood",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Mood",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Mood" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Music",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Music",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Music",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Music" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasMusicURL" : {
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
    "id" : "http://vital.ai/ontology/cuttime#MusicArtist",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#MusicArtist",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#MusicArtist",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#MusicArtist" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasBannerPicture" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasContact" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasProfilePicture" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasType" : {
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
    "id" : "http://vital.ai/ontology/cuttime#MusicArtistAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#MusicArtistAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#MusicArtistAccount",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#MusicArtistAccount" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasEmail" : {
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
    "id" : "http://vital.ai/ontology/cuttime#MusicArtistReport",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#MusicArtistReport",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#MusicArtistReport",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#MusicArtistReport" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasSavedBrand" : {
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
    "id" : "http://vital.ai/ontology/cuttime#News",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#News",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#News",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#News" ]
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
    "id" : "http://vital.ai/ontology/cuttime#Quote",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Quote",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Quote",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Quote" ]
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
    "id" : "http://vital.ai/ontology/cuttime#SoundCloudAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#SoundCloudAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#SoundCloudAccount",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#SoundCloudAccount" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasPlaybackCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasSoundCloudID" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasAccessToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasLikesCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasPictureURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#isTokenValid" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#TwitterAnalysisAccount",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasDistanceFromSource" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasFollowersBatchCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasFollowersFriendsUpdateTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasFollowersNextCursor" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasFriendsBatchCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasFriendsNextCursor" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasLastAgeGenderUpdateTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasLastTweetID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasLastTweetsCheckTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasPredictedAge" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasPredictedGender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/cuttime#hasTwitterHandle" : {
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
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterID" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/cuttime#Video",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#Video",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#Video",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#Video" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasVideoURL" : {
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
    "id" : "http://vital.ai/ontology/cuttime#YouTubeAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/cuttime#YouTubeAccount",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/cuttime#YouTubeAccount",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/cuttime#YouTubeAccount" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/cuttime#hasPlaybackCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasSubscriberCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasSubscribingCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/cuttime#hasYouTubeID" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasAccessToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasLikesCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasPictureURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#isTokenValid" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/cuttime#hasAffinityScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Edge_hasAffinityWith" ],
    "shortName" : "affinityScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasBannerPicture",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "shortName" : "bannerPicture",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasContact",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "shortName" : "contact",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasDistanceFromSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "distanceFromSource",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#BrandAccount", "http://vital.ai/ontology/cuttime#MusicArtistAccount" ],
    "shortName" : "email",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasFollowersBatchCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "followersBatchCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasFollowersFriendsUpdateTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "followersFriendsUpdateTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasFollowersNextCursor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "followersNextCursor",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasFriendsBatchCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "friendsBatchCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasFriendsNextCursor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "friendsNextCursor",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasGeoLocation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "geoLocation",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasLastAgeGenderUpdateTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "lastAgeGenderUpdateTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasLastTweetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "lastTweetID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasLastTweetsCheckTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "lastTweetsCheckTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasMusicURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Music" ],
    "shortName" : "musicURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasPlaybackCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#SoundCloudAccount", "http://vital.ai/ontology/cuttime#YouTubeAccount" ],
    "shortName" : "playbackCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasPredictedAge",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "predictedAge",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasPredictedGender",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "predictedGender",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasProfilePicture",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "shortName" : "profilePicture",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasRetweetCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "retweetCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSavedBrand",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#MusicArtistReport" ],
    "shortName" : "savedBrand",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSavedMusicArtist",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#BrandReport" ],
    "shortName" : "savedMusicArtist",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSchedule",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#DeliverySchedule" ],
    "shortName" : "schedule",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSimilarityScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Edge_hasSimilarityTo" ],
    "shortName" : "similarityScore",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSoundCloudID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#SoundCloudAccount" ],
    "shortName" : "soundCloudID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSubscriberCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#YouTubeAccount" ],
    "shortName" : "subscriberCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasSubscribingCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#YouTubeAccount" ],
    "shortName" : "subscribingCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasTwitterHandle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#TwitterAnalysisAccount" ],
    "shortName" : "twitterHandle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Brand", "http://vital.ai/ontology/cuttime#MusicArtist" ],
    "shortName" : "type",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasVideoURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#Video" ],
    "shortName" : "videoURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/cuttime#hasYouTubeID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/cuttime#YouTubeAccount" ],
    "shortName" : "youTubeID",
    "multipleValues" : false,
    "type" : "LongProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(cuttime_0_1_0_schema);