if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_nlp_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-nlp",
  "name" : "vital-nlp-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "d74669a7de80731577337cb4567fef20",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-nlp#Abbreviation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasLongForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortForm" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#AbbreviationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasLongForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongFormEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongFormStart" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortFormEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortFormStart" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Annotation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAnnotationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasAnnotationValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Content",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Document",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAnalyzedBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasDmozPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLang" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceDomain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrlRoot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAnnotation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasContent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Content" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntityInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Entity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceRelationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEventRole" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventTrigger",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasImageReference",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasNormConfidence" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasNormConfidence" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNounPhrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasPhraseNormalizedEntity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Phrase" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasPosTag",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#PosTag" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasRelationRole" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentence",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceEntityInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTagElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTextBlock",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasToken",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Token" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTopic",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTranslation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Entity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasRelevance" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasWikipediaURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#EntityInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExactString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasLengthInSentence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasOffsetInSentence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSpanType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEquivalenceType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#EventInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#FlowPredictModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasModelPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasModelType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Image",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#ImageReference",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#NormalizedEntity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasContext" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEntityType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasNameVariants" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortname" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSymbol" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTicker" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasWikipediaURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWordnetURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#NormalizedTopic",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasNameVariants" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortname" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#NounPhrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Phrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#PosTag",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasConfidence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTagValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#RelationInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasRelationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Sentence",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentenceNumber" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokensPositionsString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokensTextString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#TagElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTagValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isClosingTag" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#isOpeningTag" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#isStandaloneTag" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#TargetNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasModelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetStringValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#TextBlock",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTextBlockLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTextBlockOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTransformationVector" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Token",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokenText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#Topic",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasClassifierName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-nlp#VerbPhrase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex" : {
        "type" : "number"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAnalyzedBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "analyzedBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAnnotationName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
    "shortName" : "annotationName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAnnotationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
    "shortName" : "annotationValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAuthor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance", "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance", "http://vital.ai/ontology/vital-nlp#EventInstance", "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "shortName" : "author",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Content", "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "body",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "category",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasClassifierName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "classifierName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasConfidence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#PosTag" ],
    "shortName" : "confidence",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Content", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "contentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasContext",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "context",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasDmozPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "dmozPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEndPosition",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence", "http://vital.ai/ontology/vital-nlp#TagElement", "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "endPosition",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase", "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
    "shortName" : "endTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEntityType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "entityType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEquivalenceType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
    "shortName" : "equivalenceType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEventRole",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement" ],
    "shortName" : "eventRole",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
    "shortName" : "eventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExactString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "exactString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "shortName" : "extractSource",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractedText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "extractedText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractedTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "extractedTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasHeightPx",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "heightPx",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image" ],
    "shortName" : "imageData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "imageDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLang",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "lang",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "length",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLengthInSentence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "lengthInSentence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongForm",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation", "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longForm",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongFormEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longFormEnd",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongFormStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longFormStart",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#FlowPredictModel" ],
    "shortName" : "modelPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#FlowPredictModel" ],
    "shortName" : "modelType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "modelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasNameVariants",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "nameVariants",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasNormConfidence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity", "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic" ],
    "shortName" : "normConfidence",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "offset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOffsetInSentence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "offsetInSentence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic", "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "openCalaisURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "posTagsConfidenceString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "posTagsValuesString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "publicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelationRole",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement" ],
    "shortName" : "relationRole",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "shortName" : "relationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelevance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "shortName" : "relevance",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "score",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSentenceNumber",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "sentenceNumber",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSentimentScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "sentimentScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortForm",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation", "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortForm",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortFormEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortFormEnd",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortFormStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortFormStart",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortname",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "shortname",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSourceDomain",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "sourceDomain",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSourceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "sourceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSpanType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "spanType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasStartPosition",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence", "http://vital.ai/ontology/vital-nlp#TagElement", "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "startPosition",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase", "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
    "shortName" : "startTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSymbol",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "symbol",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTagValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#PosTag", "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "tagValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTextBlockLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "textBlockLength",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTextBlockOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "textBlockOffset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTicker",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "ticker",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokenText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "tokenText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokensPositionsString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "tokensPositionsString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokensTextString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "tokensTextString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTransformationVector",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "transformationVector",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "url",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasUrlRoot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "urlRoot",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWidthPx",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "widthPx",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWikipediaURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "wikipediaURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWordnetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "wordnetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isClosingTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "closingTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isOpeningTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "openingTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isSentimentMixed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "sentimentMixed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isStandaloneTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "standaloneTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_nlp_0_2_304_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_nlp_0_2_304_schema;

}