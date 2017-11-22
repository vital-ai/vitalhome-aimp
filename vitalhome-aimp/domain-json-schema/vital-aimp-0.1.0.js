if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_aimp_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-aimp",
  "name" : "vital-aimp-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "3ce64b7d26216d371a4a75e29bf3bdcc",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-social" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRoleURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasSecurityProfile" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasSecurityProfile" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasSecurityProfile" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasSecurityProfile" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDocuSignEnvelopeID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDocuSignStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isSignedVersion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPEmailMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPEvent",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelsHistory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEncryptedPayload" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEndpointURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGeolocation" : {
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
      "http://vital.ai/ontology/vital-aimp#hasIpAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasKeyHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLocalTime" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMasterUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPayload" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueueName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipientIdentity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSenderIdentity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSignature" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThreadURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimezone" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAuthLoginTunnel" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isContainsPII" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isFinalResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPMessageFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#APIEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#APILogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AdUnitEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AgentError",
    "parent" : "http://vital.ai/ontology/vital-aimp#ErrorNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AlexaEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAlexaUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AlexaLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AlexaProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAlexaUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AmazonEchoAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEchoUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnonymousLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnonymousProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Answer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSlackResponse" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ApnsEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ArticleObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Asset",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAssetID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAssetType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AssetConditionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AssetMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasHumidity" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasTemperature" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AssetLocationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AssetMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLocation" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AssetMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPEvent",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAssetURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Audio",
    "parent" : "http://vital.ai/ontology/vital-aimp#Media",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AudioObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
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
      "http://vital.ai/ontology/vital-aimp#isAutoPlay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDownloadEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isPlaying" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isProgressBarEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSynchronize" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BB8Device",
    "parent" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BooleanPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBooleanValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Bot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isAcceptSystemTicks" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGlobalBot" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isVitalRulesEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BuilderClassBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#Bot",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBuilderClass" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BuilderDesignerBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#Bot",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BuilderStringBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#Bot",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBuilderString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Button",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ButtonClickedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasButton" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasButtonURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Calendar",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CalendarEntry",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStartDate" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CalendarEvent",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCalendarURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLocationString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isFullDayEvent" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CalendarObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCalendars" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasStartDate" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Card",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isSendAsAttachment" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Channel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBotURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasOrderInUI" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasOrientationInUI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isChildChannel" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDefaultChannel" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDisplayInUI" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDontBroadcastToAllSessions" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHaleyMessageTextHidden" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTextEntryHidden" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChannelClosedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChildChannelURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasMinTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPage" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSenderOrRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTotalPages" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChannelViewLeftMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChannelViewSwitchedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Chart",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChartData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChartOptions" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChartType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatDialog",
    "parent" : "http://vital.ai/ontology/vital-aimp#Dialog",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChatMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatModeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChatMode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChatRuleID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatRulePattern" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatRuleResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatRuleSetURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatRuleSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isGlobalChatRuleSet" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatRuleSetFile",
    "parent" : "http://vital.ai/ontology/vital#FileNode",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasMd5checksum" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CheckItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasItemStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CheckList",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Choice",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChoiceLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChoiceAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ClearChatHistory",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasClearScope" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CloseIFrame",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEndpointURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isPurgeSession" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ClosePanelCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPanelName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CloseSessionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Contact",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPhoneNumber" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ContextChangedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Contract",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChargeAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasCurrencySymbol" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CreateEndpointProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfileMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CurrentBotMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Customer",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DataModificationEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueueName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DataScript",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasScriptBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGlobalDatascript" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DataScriptInput",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasParameterValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DateTimePropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDateValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Device",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChannels" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasColor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDeviceType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLastActiveDate" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDeviceName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDeviceNewState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDeviceOldState" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDeviceStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceStatusRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Dialog",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogMode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDebugEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGlobalDialog" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDebugMessageAfter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDebugMessageBefore" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogAd",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogAssignFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasExpression" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogBegin",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogButton",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogButtonClickedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogCallDialog",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogChatRules",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChatRuleProcessingType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIntentPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasOutputCardsPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasOutputMessagePropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusPropertyName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogCondition",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasComparator" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasConditionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasExpression" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSubpropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isSubpropertyEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogDatascript",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFunctionName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasServiceName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasScriptBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogDownloadFile",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital#hasFileScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetChannel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isBroadcastOnly" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStateSerialized" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogEnd",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogExitBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isKeepChannelEntryText" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogExitDialog",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasExpression" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasNextExecutionDateMinutesSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isKeepChannelEntryText" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogGenerator",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogInnerMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isProcessed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogLoop",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasTargetStep" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPageElementMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPassThrough",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPayment",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPersistFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPersistFactOperationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasProfileURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentProfile" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPredict",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPredictAction",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogProcess",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogQuery",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasResultListFactURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasServiceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCreateResultListFact" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogQueryAction",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCriteriaType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDestinationFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDestinationFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueryType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRelationshipFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRelationshipFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSourceFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSourceFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetService" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactClassName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasParentFactURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasValidationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isSent" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogQuestionEnd",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogQuestionStart",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasExpression" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimeoutPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isConsumeImmediately" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTimeoutEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogRecommend",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogRecommendations",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSolutionFactURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCreateSolutionFact" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogRemoveFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isRemoveWholeProfile" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogRestartQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQuestionID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogResume",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogRow",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasComments" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCommentedOut" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetChannel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isBroadcastOnly" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSerialize",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogStep",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasComments" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCommentedOut" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSubroutine",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSwitchBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSwitchToBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogText",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogTextCard",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasTargetChannel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isBroadcastOnly" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogUploadFile",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital#hasFileScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFileUploadProcessingType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFileFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFileFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetChannel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isBroadcastOnly" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSkippable" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogWorkflow",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DirectMessageReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DirectTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasDirectMessageID" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DoublePropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDoubleValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EMailTag",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAPILogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#APILogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAlexaLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#AlexaLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAnonymousLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#AnonymousLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAssetNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Asset" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAssignedPerson",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#Contact" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasAttendee",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#CalendarEvent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#Contact" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasBot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasBotChatRuleSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ChatRuleSet" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasBotDialog",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isDefaultDialog" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChannel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel", "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isDefaultBot" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChatRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ManagedChatRuleSet" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ChatRule" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChatRuleSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ChatRuleSet" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChatRuleSetFile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#FileChatRuleSet" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ChatRuleSetFile" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChildChannel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasContract",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Customer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Contract" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasCustomer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Customer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDataScript",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DataScript" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDataScriptInput",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DataScriptInput" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDependentProjectTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialog",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogCondition",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogRow" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogRow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogRow", "http://vital.ai/ontology/vital-aimp#DialogStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogRow" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDialogSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile", "http://vital.ai/ontology/vital-aimp#Channel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogSession" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasDocument",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital-aimp#Contract", "http://vital.ai/ontology/vital-aimp#Folder", "http://vital.ai/ontology/vital-aimp#Opportunity", "http://vital.ai/ontology/vital-aimp#Proposal" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEmailAttachment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailAttachment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEmailLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEmailSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEndpoint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEndpointProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EndpointProfile" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEntityProperty",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#EntitySet" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EntityProperty" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasEntitySet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EntitySet" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasExternalAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#AmazonEchoAccount", "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasFacebookLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#FacebookLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasFileNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital-aimp#Folder", "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasFolder",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital-aimp#Folder" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Folder" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasIFrameTemplate",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#AdUnitEndpoint", "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#IFrameTemplate" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Contract" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Invoice" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasLinkedCustomer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Customer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasLoginChannelBot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Invoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Payment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProfileSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Session" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProjectList",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Project" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectList" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProjectStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectList", "http://vital.ai/ontology/vital-aimp#ProjectStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectStep" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProjectTask",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProposal",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Customer", "http://vital.ai/ontology/vital-aimp#Opportunity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Proposal" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Query" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasQueryCriterion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction", "http://vital.ai/ontology/vital-aimp#EntityCommandMessage", "http://vital.ai/ontology/vital-aimp#RelationshipCommandMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#QueryCriterion" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQueryCriterionGroup" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasRelationship",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Entity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Entity" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRelationshipSetURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasRelationshipProperty",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#RelationshipSet" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#RelationshipProperty" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasRelationshipSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#RelationshipSet" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSelectedDataScript",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DataScript" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSelectedQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Query" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSessionChannel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Session" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLastActivityTime" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSignedDocument",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSlackLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#SlackLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasSmsLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#SmsLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasTwitterLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#TwitterLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasUserAvatar",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#UserAvatar" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailAttachment",
    "parent" : "http://vital.ai/ontology/vital#FileNode",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasInternalID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailMessage",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAttachmentsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasBccRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyHtml" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyPlain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCcRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDeliveryDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasEMailTagURI" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasEventTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasOptionalData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSubject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isRead" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTrackingOpens" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEmail" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPEmailMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAttachmentsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasBccRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyHtml" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyPlain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCcRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEMailTagURI" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasEventTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSubject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isRead" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTrackingOpens" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailsList",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmbeddedCard",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasButton" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCardType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLink" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMenu" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EnclosingPageNotification",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasNotificationJsonBody" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EnclosingPageURLButtonClickedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEndpointID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isChannelRandomized" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDefaultEndpoint" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTunnelingEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isAuthLoginProfile" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EndpointProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EndpointProfilesMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfileMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EnlargeCardCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Entity",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEntitySetURI" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EntityCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EntityFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#GraphObjectFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EntityMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EntityProperty",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEntityPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isMultivalueProperty" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EntitySet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isGlobalEntitySet" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ErrorNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageSerialized" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueueName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStackTrace" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEntryText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGettingStartedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGreetingText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPersistedMenuJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGetStartedButtonEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookIncomingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#FacebookMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFacebookUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookOutgoingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#FacebookMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookPost",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCommentsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLikesCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFirstName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLastName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLocale" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasProfilePic" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasFacebookID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FactsListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FavoriteTweet",
    "parent" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FileAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "properties" : {
      "http://vital.ai/ontology/vital#hasFileLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasFileName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFileNodeClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasParentObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isDeleteOnSuccess" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FileChatRuleSet",
    "parent" : "http://vital.ai/ontology/vital-aimp#ChatRuleSet",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FileQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#Question",
    "properties" : {
      "http://vital.ai/ontology/vital#hasFileScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxFileLength" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FileUploadObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Folder",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FormDialog",
    "parent" : "http://vital.ai/ontology/vital-aimp#Dialog",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GeoLocationAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasGeolocation" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GeoLocationPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGeolocation" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasMinTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSenderOrRecipient" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GetFactsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GetJoinedChannels",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GetObjectMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#GraphObjectFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyAudioMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyCalendarMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyChannelCardsListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyChartMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyCheckListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyDeviceDetailsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyEmailsListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyFacebookMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyFacebookStatusPanelMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasNewStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyFileDownloadMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital#hasFileLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasFileName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFileNodeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyFileUploadMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyImageGalleryMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
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
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasZoomLevel" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isDirectMessageResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSlackResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSmsResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isTweetResponse" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasInReplyToScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasInReplyToTweetID" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMovieDetailsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMoviesRecommendationsListMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyPaymentConfirmationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyProductMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyProgressMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleySearchResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyShoppingCartMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyThingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTranslationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTweetMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTwitterStatusPanelMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasNewStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyVideoMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyWebviewMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HeartbeatMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLastActivityTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isDistribute" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasCardPart",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasChannelCard",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasDialogPart",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogPart", "http://vital.ai/ontology/vital-core#VITAL_Edge" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasGraphObjectFactElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#GraphObjectFact" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasListFactElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ListFact" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasMessagePayload",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasProjectListElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ProjectList" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#Contact", "http://vital.ai/ontology/vital-aimp#Edge_hasAssignedPerson", "http://vital.ai/ontology/vital-aimp#Edge_hasDependentProjectTask", "http://vital.ai/ontology/vital-aimp#Edge_hasProjectStep", "http://vital.ai/ontology/vital-aimp#Edge_hasProjectTask", "http://vital.ai/ontology/vital-aimp#ProjectStep", "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IFrameEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasColor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGreetingText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCustomerServiceEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOpenInitially" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IFrameEventMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IFrameTemplate",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasTemplateID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Image",
    "parent" : "http://vital.ai/ontology/vital-aimp#Media",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ImageGallery",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ImageObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#InformationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Intent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasIntent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasParseString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IntentMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasIntent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#InteractionModeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasInteractionMode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#InvalidateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasMessageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#InvalidateQuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQuestionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Invoice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChargeAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasCurrencySymbol" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IosDeviceProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUuid" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isNotificationsEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#JoinChannel",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#LeaveChannel",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ListChannelsRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ListChannelsResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ListEndpointProfilesMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfileMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ListJoinedChannelsResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#LoginDataEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEntityURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLoginURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ManagedChatRuleSet",
    "parent" : "http://vital.ai/ontology/vital-aimp#ChatRuleSet",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MapObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
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
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasZoomLevel" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Media",
    "parent" : "http://vital.ai/ontology/vital#FileNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MemoryFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MenuClickedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasMenu" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMenuURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MetaQLMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQueryString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTotalResults" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MmsAttachment",
    "parent" : "http://vital.ai/ontology/vital#FileNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Movie",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasGenre" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImdbRating" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPg" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRottenTomatoesRating" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasYear" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MoviesList",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#Question",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChoiceListSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isMultivalue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isRenderQuickReplies" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#NextAudioCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#NotificationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#OpenIFrame",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEndpointURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIntent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isPurgeSession" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#OpenPanelCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPanelName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Opportunity",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PauseMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Payment",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChargeAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasCurrencySymbol" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFullName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PaymentConfirmation",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasAvatarURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCurrencySymbol" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrencyISymbolnFrontOf" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isUrlAvailable" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PlayAudioCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PlayVideoCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PredictionFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorAreYouAliveMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorError",
    "parent" : "http://vital.ai/ontology/vital-aimp#ErrorNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorHeartbeatMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorJoinedMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorLeftMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasProcessorID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasProcessorType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProgressItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasItemStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProgressObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasProgress" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Project",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProjectList",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProjectStep",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProjectTask",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDueDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPecrentComplete" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPriority" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasProjectTag" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Proposal",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PushNotification",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBadge" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasExpirationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasOptionalData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSound" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTokens" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Query",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isGlobalQuery" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#QueryCriterion",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasComparator" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCriterionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Question",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChatRulesOutputChannelFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatRulesOutputFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDialogToCallName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDialogToCallScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasHandlerResultFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInternalProcessingChoice" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxRetriesCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQuestionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasScriptBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetChannel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextChannelFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextFactName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isBroadcastOnly" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHandlerEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isInternalAnswerProcessingEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isProcessWithChatRules" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSkippable" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasParentQuestionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPreviousAnswer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isSlackResponse" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPage" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTotalPages" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isGoodbyePage" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#QuestionsPageNavigationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRequestedPage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RealtimeTickMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#TickMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RefreshChannelCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RelationFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RelationshipCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RelationshipMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RelationshipProperty",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRelationshipPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isMultivalueProperty" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RelationshipSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isGlobalRelationshipSet" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RemoveCardCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RemoveEndpointProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfileMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQuestionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ResultListFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTotalResults" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SearchResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SearchResultsList",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendDirectMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendEmail",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPEmailMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendPushNotificationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendSms",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendTweet",
    "parent" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendVoiceMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Session",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatMode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLastLeftAppMessageTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SessionEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SessionExpiredMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SetFactMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFactScope" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ShoppingCart",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasQuantityData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShippingFee" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasTax" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ShrinkCardCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackIncomingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#SlackMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSlackChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackOutgoingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#SlackMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSlackTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SlackTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSlackChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackTeamID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSlackUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Sms",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBodyPlain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDateSent" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isMms" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SmsEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPhoneNumber" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SmsLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SmsProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPhoneNumber" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SmsReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SmsTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isMms" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SolutionFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#ListFact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StopAudioCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StopVideoCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStringValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StripePayment",
    "parent" : "http://vital.ai/ontology/vital-aimp#Payment",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasJson" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasToken" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SwitchEnclosingPageToURL",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SystemTickMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#TickMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Task",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#haslLastRunTimestamp" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ThingCard",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
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
      "http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
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
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
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
      "http://vital.ai/ontology/vital-aimp#hasZoomLevel" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isDetailsEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ThinkingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TickMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TimeoutMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Translation",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSourceLanguage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSourcePronounciation" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSourceText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetLanguage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetPronounciation" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTargetText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TrendResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TrueFalseAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBooleanValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion",
    "parent" : "http://vital.ai/ontology/vital-aimp#Question",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasChoiceListSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasFalseLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputFactScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasInputPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTrueLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isRenderQuickReplies" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TruthPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasTruthValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TweetReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCampaignURIs" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TweetTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTweetID" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasOAuthSecret" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasOAuthToken" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterLogin",
    "parent" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#EndpointProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterID" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMinTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRadius" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTweetIDs" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/vital-aimp#isCountOnly" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#TwitterMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMaxTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasMinTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRadius" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTweetIDs" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/vital-aimp#isCountOnly" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#URIPropertyFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasUriValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UnsetFactMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasGeolocation" : {
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
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTruthValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isIncludeSubclasses" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UpdateSessionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserAvatar",
    "parent" : "http://vital.ai/ontology/vital#FileNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserChatRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isGoBackSelected" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "parent" : "http://vital.ai/ontology/vital-aimp#BaseProfile",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasEchoUserID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDialogPageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Video",
    "parent" : "http://vital.ai/ontology/vital-aimp#Media",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#VideoObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI" : {
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
      "http://vital.ai/ontology/vital-aimp#isAutoPlay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isDownloadEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isPlaying" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isProgressBarEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isSynchronize" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#VirtualLoginRequestMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#VirtualLoginResponseMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatusMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#VoiceMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBodyPlain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDateSent" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasFileNodeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasMessageID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSender" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "parent" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#WeatherForecast",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#WebviewCard",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWebviewHeightRatio" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHideShareButton" : {
        "type" : "boolean"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DataModificationEvent", "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary", "http://vital.ai/ontology/vital-aimp#ErrorNode", "http://vital.ai/ontology/vital-aimp#Task" ],
    "shortName" : "accountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAccountURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "accountURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#GeoLocationPropertyFact", "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#Payment", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "address",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAlexaUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AlexaEndpoint", "http://vital.ai/ontology/vital-aimp#AlexaProfile" ],
    "shortName" : "alexaUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "amount",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAssetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Asset" ],
    "shortName" : "assetID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAssetType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Asset" ],
    "shortName" : "assetType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAssetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AssetMessage" ],
    "shortName" : "assetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAttachmentsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "attachmentsCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAuthSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "authSessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAvatarURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "avatarURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBadge",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PushNotification" ],
    "shortName" : "badge",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBccRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "bccRecipients",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBindingNames",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact" ],
    "shortName" : "bindingNames",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBodyHtml",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "bodyHtml",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBodyPlain",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary", "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "bodyPlain",
    "multipleValues" : false,
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBotURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "botURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBuilderClass",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#BuilderClassBot" ],
    "shortName" : "builderClass",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBuilderString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#BuilderStringBot" ],
    "shortName" : "builderString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasButton",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ButtonClickedMessage", "http://vital.ai/ontology/vital-aimp#EmbeddedCard" ],
    "shortName" : "button",
    "multipleValues" : false,
    "type" : "StringProperty",
    "parent" : "http://vital.ai/ontology/vital-aimp#hasLink"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasButtonURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ButtonClickedMessage" ],
    "shortName" : "buttonURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCalendarURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEvent" ],
    "shortName" : "calendarURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCalendars",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
    "shortName" : "calendars",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCampaignURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TweetReceived" ],
    "shortName" : "campaignURIs",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCardType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmbeddedCard" ],
    "shortName" : "cardType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCardURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EnlargeCardCommand", "http://vital.ai/ontology/vital-aimp#NextAudioCommand", "http://vital.ai/ontology/vital-aimp#PlayAudioCommand", "http://vital.ai/ontology/vital-aimp#PlayVideoCommand", "http://vital.ai/ontology/vital-aimp#RemoveCardCommand", "http://vital.ai/ontology/vital-aimp#ShrinkCardCommand", "http://vital.ai/ontology/vital-aimp#StopAudioCommand", "http://vital.ai/ontology/vital-aimp#StopVideoCommand" ],
    "shortName" : "cardURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "category",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCcRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "ccRecipients",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Task" ],
    "shortName" : "channelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChannels",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device" ],
    "shortName" : "channels",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChannelsHistory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "channelsHistory",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChargeAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Contract", "http://vital.ai/ontology/vital-aimp#Invoice", "http://vital.ai/ontology/vital-aimp#Payment" ],
    "shortName" : "chargeAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChartData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Chart" ],
    "shortName" : "chartData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChartOptions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Chart" ],
    "shortName" : "chartOptions",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChartType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Chart" ],
    "shortName" : "chartType",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRuleID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRule" ],
    "shortName" : "chatRuleID",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRulePattern",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRule" ],
    "shortName" : "chatRulePattern",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRuleProcessingType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogChatRules" ],
    "shortName" : "chatRuleProcessingType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRuleResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRule" ],
    "shortName" : "chatRuleResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRuleSetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRule" ],
    "shortName" : "chatRuleSetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRulesOutputChannelFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "chatRulesOutputChannelFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatRulesOutputFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "chatRulesOutputFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChildChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelClosedMessage" ],
    "shortName" : "childChannelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceListSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion", "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "choiceListSource",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataModificationEvent" ],
    "shortName" : "classURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasClearScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ClearChatHistory" ],
    "shortName" : "clearScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasColor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device", "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "shortName" : "color",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCommand",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CommandMessage", "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage", "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ],
    "shortName" : "command",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasComments",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRow", "http://vital.ai/ontology/vital-aimp#DialogStep" ],
    "shortName" : "comments",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCommentsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookPost" ],
    "shortName" : "commentsCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasComparator",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#QueryCriterion" ],
    "shortName" : "comparator",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasConditionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
    "shortName" : "conditionType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCriteriaType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "criteriaType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCriterionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QueryCriterion" ],
    "shortName" : "criterionType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCurrencySymbol",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Contract", "http://vital.ai/ontology/vital-aimp#Invoice", "http://vital.ai/ontology/vital-aimp#Payment", "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "currencySymbol",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDateSent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "dateSent",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DateTimePropertyFact" ],
    "shortName" : "dateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDebugMessageAfter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAction" ],
    "shortName" : "debugMessageAfter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDebugMessageBefore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAction" ],
    "shortName" : "debugMessageBefore",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeliveryDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "deliveryDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDestinationFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "destinationFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDestinationFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "destinationFactScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeviceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DeviceMessage" ],
    "shortName" : "deviceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeviceNewState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage" ],
    "shortName" : "deviceNewState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeviceOldState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage" ],
    "shortName" : "deviceOldState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeviceStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage" ],
    "shortName" : "deviceStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDeviceType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device" ],
    "shortName" : "deviceType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDialogMode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "shortName" : "dialogMode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDialogPageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#DialogPageElementMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage", "http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage", "http://vital.ai/ontology/vital-aimp#UserTextMessage" ],
    "shortName" : "dialogPageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDialogToCallName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "dialogToCallName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDialogToCallScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "dialogToCallScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "directionsEndAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "directionsJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "directionsStartAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDocuSignEnvelopeID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "docuSignEnvelopeID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDocuSignStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "docuSignStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DoublePropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "doubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDueDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "shortName" : "dueDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDurationSeconds",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#PauseMessage", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "durationSeconds",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEMailTagURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "eMailTagURI",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEchoUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AmazonEchoAccount", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "echoUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Contact", "http://vital.ai/ontology/vital-aimp#EmailProfile" ],
    "shortName" : "email",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEncryptedPayload",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "encryptedPayload",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#CalendarEvent", "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
    "shortName" : "endDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEndpointID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "shortName" : "endpointID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEndpointURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#CloseIFrame", "http://vital.ai/ontology/vital-aimp#OpenIFrame" ],
    "shortName" : "endpointURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEntityPropertyType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EntityProperty" ],
    "shortName" : "entityPropertyType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEntitySetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Entity" ],
    "shortName" : "entitySetURI",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEntityURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#LoginDataEvent" ],
    "shortName" : "entityURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEntryText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookEndpoint" ],
    "shortName" : "entryText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#DialogPayment", "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "errorMessagePropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEventTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "eventTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataModificationEvent", "http://vital.ai/ontology/vital-aimp#IFrameEventMessage", "http://vital.ai/ontology/vital-aimp#LoginDataEvent" ],
    "shortName" : "eventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasExpirationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PushNotification" ],
    "shortName" : "expirationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasExpression",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#DialogExitDialog", "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage" ],
    "shortName" : "expression",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFacebookUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookMessage" ],
    "shortName" : "facebookUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactClassName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "factClassName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactClassname",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "factClassname",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion", "http://vital.ai/ontology/vital-aimp#DialogUploadFile" ],
    "shortName" : "factPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCallDialog", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#DialogDatascript", "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogExitDialog", "http://vital.ai/ontology/vital-aimp#DialogPersistFact", "http://vital.ai/ontology/vital-aimp#DialogRemoveFact", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogSwitchToBot", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#FactsListMessage", "http://vital.ai/ontology/vital-aimp#GetFactsMessage", "http://vital.ai/ontology/vital-aimp#PropertyFact", "http://vital.ai/ontology/vital-aimp#SetFactMessage", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFileNodeClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FileAnswer" ],
    "shortName" : "fileNodeClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFileNodeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FileAnswer", "http://vital.ai/ontology/vital-aimp#HaleyFileDownloadMessage", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "fileNodeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFileUploadProcessingType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogUploadFile" ],
    "shortName" : "fileUploadProcessingType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFirstName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookProfile" ],
    "shortName" : "firstName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFullName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Payment" ],
    "shortName" : "fullName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFunctionName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascript" ],
    "shortName" : "functionName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasGender",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookProfile" ],
    "shortName" : "gender",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasGenre",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "genre",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasGeolocation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#GeoLocationAnswer", "http://vital.ai/ontology/vital-aimp#GeoLocationPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "geolocation",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasGettingStartedText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookEndpoint" ],
    "shortName" : "gettingStartedText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasGreetingText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookEndpoint", "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "shortName" : "greetingText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasHandlerResultFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "handlerResultFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasHumidity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AssetConditionMessage" ],
    "shortName" : "humidity",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Button", "http://vital.ai/ontology/vital-aimp#DialogButton", "http://vital.ai/ontology/vital-aimp#DialogButtonClickedMessage", "http://vital.ai/ontology/vital-aimp#DialogElement", "http://vital.ai/ontology/vital-aimp#DialogPayment", "http://vital.ai/ontology/vital-aimp#Payment", "http://vital.ai/ontology/vital-aimp#WebviewCard" ],
    "shortName" : "id",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "imageFileNodeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#Choice", "http://vital.ai/ontology/vital-aimp#Device", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImdbRating",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "imdbRating",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice", "http://vital.ai/ontology/vital-aimp#DialogPageElementMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "index",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInputFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogChatRules", "http://vital.ai/ontology/vital-aimp#DialogPersistFact", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion", "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "inputFactScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInputFileFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogUploadFile" ],
    "shortName" : "inputFileFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInputFileFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogUploadFile" ],
    "shortName" : "inputFileFactScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInputPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogChatRules", "http://vital.ai/ontology/vital-aimp#DialogPersistFact", "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion", "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "inputPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "integerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIntent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Intent", "http://vital.ai/ontology/vital-aimp#IntentMessage", "http://vital.ai/ontology/vital-aimp#OpenIFrame" ],
    "shortName" : "intent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIntentPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogChatRules" ],
    "shortName" : "intentPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInteractionMode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#InteractionModeMessage" ],
    "shortName" : "interactionMode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInternalID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailAttachment" ],
    "shortName" : "internalID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInternalProcessingChoice",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "internalProcessingChoice",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIpAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "ipAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasItemStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CheckItem", "http://vital.ai/ontology/vital-aimp#ProgressItem" ],
    "shortName" : "itemStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasJson",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#StripePayment" ],
    "shortName" : "json",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasKeyHash",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "keyHash",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLastActiveDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device" ],
    "shortName" : "lastActiveDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLastActivityTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasSessionChannel", "http://vital.ai/ontology/vital-aimp#HeartbeatMessage" ],
    "shortName" : "lastActivityTime",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLastLeftAppMessageTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "lastLeftAppMessageTime",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLastName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookProfile" ],
    "shortName" : "lastName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "latitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLikesCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookPost" ],
    "shortName" : "likesCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLimit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact" ],
    "shortName" : "limit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLink",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmbeddedCard" ],
    "shortName" : "link",
    "multipleValues" : false,
    "type" : "StringProperty",
    "parent" : "http://vital.ai/ontology/vital-aimp#hasUrl"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLocalTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "localTime",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLocale",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookProfile" ],
    "shortName" : "locale",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLocation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AssetLocationMessage" ],
    "shortName" : "location",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLocationString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEvent" ],
    "shortName" : "locationString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#LoginDataEvent" ],
    "shortName" : "loginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#SearchResult" ],
    "shortName" : "longDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "longitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMasterUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "masterUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMaxFileLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FileQuestion" ],
    "shortName" : "maxFileLength",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMaxRetriesCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "maxRetriesCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMaxTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "maxTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMd5checksum",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRuleSetFile" ],
    "shortName" : "md5checksum",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMenu",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmbeddedCard", "http://vital.ai/ontology/vital-aimp#MenuClickedMessage" ],
    "shortName" : "menu",
    "multipleValues" : false,
    "type" : "StringProperty",
    "parent" : "http://vital.ai/ontology/vital-aimp#hasLink"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMenuURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MenuClickedMessage" ],
    "shortName" : "menuURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary", "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "messageID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#DialogInnerMessage", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#ErrorNode" ],
    "shortName" : "messageSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#InvalidateMessage" ],
    "shortName" : "messageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage" ],
    "shortName" : "messageURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMinTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "minTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasRelationship" ],
    "shortName" : "name",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "neLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "neLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNewStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyFacebookStatusPanelMessage", "http://vital.ai/ontology/vital-aimp#HaleyTwitterStatusPanelMessage" ],
    "shortName" : "newStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNextExecutionDateMinutesSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogExitDialog" ],
    "shortName" : "nextExecutionDateMinutesSource",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNotificationJsonBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EnclosingPageNotification" ],
    "shortName" : "notificationJsonBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOAuthSecret",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TwitterEndpoint" ],
    "shortName" : "oAuthSecret",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOAuthToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TwitterEndpoint" ],
    "shortName" : "oAuthToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataModificationEvent", "http://vital.ai/ontology/vital-aimp#EntityCommandMessage", "http://vital.ai/ontology/vital-aimp#EntityMessage", "http://vital.ai/ontology/vital-aimp#GetObjectMessage", "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage", "http://vital.ai/ontology/vital-aimp#RelationshipCommandMessage", "http://vital.ai/ontology/vital-aimp#RelationshipMessage" ],
    "shortName" : "objectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact" ],
    "shortName" : "offset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOptionalData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#PushNotification" ],
    "shortName" : "optionalData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOrderInUI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "orderInUI",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOrientationInUI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "orientationInUI",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOutputCardsPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogChatRules" ],
    "shortName" : "outputCardsPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasOutputMessagePropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogChatRules" ],
    "shortName" : "outputMessagePropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage" ],
    "shortName" : "page",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPanelName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ClosePanelCommand", "http://vital.ai/ontology/vital-aimp#OpenPanelCommand" ],
    "shortName" : "panelName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParameterValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataScriptInput" ],
    "shortName" : "parameterValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParentFactURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "parentFactURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParentObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FileAnswer" ],
    "shortName" : "parentObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParentQuestionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "parentQuestionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParseString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Intent" ],
    "shortName" : "parseString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPayload",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "payload",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPecrentComplete",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "shortName" : "pecrentComplete",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPersistFactOperationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogPersistFact" ],
    "shortName" : "persistFactOperationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPersistedMenuJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookEndpoint" ],
    "shortName" : "persistedMenuJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPg",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "pg",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPhoneNumber",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Contact", "http://vital.ai/ontology/vital-aimp#SmsEndpoint", "http://vital.ai/ontology/vital-aimp#SmsProfile" ],
    "shortName" : "phoneNumber",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPreviousAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "previousAnswer",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPriority",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "shortName" : "priority",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProcessorID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProcessorMessage" ],
    "shortName" : "processorID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProcessorType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProcessorMessage" ],
    "shortName" : "processorType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProfilePic",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookProfile" ],
    "shortName" : "profilePic",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProfileURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogPersistFact" ],
    "shortName" : "profileURI",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProgress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProgressObject" ],
    "shortName" : "progress",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProjectTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProjectTask" ],
    "shortName" : "projectTag",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCallDialog", "http://vital.ai/ontology/vital-aimp#DialogChatRules", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogExitDialog", "http://vital.ai/ontology/vital-aimp#DialogPayment", "http://vital.ai/ontology/vital-aimp#DialogPersistFact", "http://vital.ai/ontology/vital-aimp#DialogQueryAction", "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogRemoveFact", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogSwitchToBot", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#GraphObjectFact", "http://vital.ai/ontology/vital-aimp#ListFact", "http://vital.ai/ontology/vital-aimp#PropertyFact", "http://vital.ai/ontology/vital-aimp#QueryCriterion", "http://vital.ai/ontology/vital-aimp#Question", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "propertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogChatRules", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "propertyType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#IFrameEventMessage", "http://vital.ai/ontology/vital-aimp#IntentMessage", "http://vital.ai/ontology/vital-aimp#OpenIFrame", "http://vital.ai/ontology/vital-aimp#PropertyFact", "http://vital.ai/ontology/vital-aimp#QueryCriterion" ],
    "shortName" : "propertyValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "publicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuantityData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ShoppingCart" ],
    "shortName" : "quantityData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueryCriterionGroup",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasQueryCriterion" ],
    "shortName" : "queryCriterionGroup",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueryString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLMessage", "http://vital.ai/ontology/vital-aimp#Query", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage" ],
    "shortName" : "queryString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueryType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "queryType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuestionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRestartQuestion" ],
    "shortName" : "questionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuestionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "questionType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuestionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#InvalidateQuestionMessage", "http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage" ],
    "shortName" : "questionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueueName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DataModificationEvent", "http://vital.ai/ontology/vital-aimp#ErrorNode" ],
    "shortName" : "queueName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRadius",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "radius",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRecipient",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#PaymentConfirmation", "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#SmsTextMessage", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "recipient",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRecipientIdentity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "recipientIdentity",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "recipients",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRelationshipFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "relationshipFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRelationshipFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "relationshipFactScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRelationshipPropertyType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#RelationshipProperty" ],
    "shortName" : "relationshipPropertyType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRelationshipSetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasRelationship" ],
    "shortName" : "relationshipSetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRequestType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCallDialog", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogSwitchToBot", "http://vital.ai/ontology/vital-aimp#Question", "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "requestType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage" ],
    "shortName" : "requestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRequestedPage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionsPageNavigationMessage" ],
    "shortName" : "requestedPage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasResultListFactURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuery" ],
    "shortName" : "resultListFactURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRoleURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Login" ],
    "shortName" : "roleURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRottenTomatoesRating",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "rottenTomatoesRating",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HyperEdge_hasListFactElement" ],
    "shortName" : "score",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasScriptBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataScript", "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "scriptBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSearchString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#SearchResultsList", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "searchString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSecurityProfile",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "securityProfile",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSender",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#DirectTextMessage", "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage", "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#SmsTextMessage", "http://vital.ai/ontology/vital-aimp#TweetTextMessage", "http://vital.ai/ontology/vital-aimp#VoiceMessage" ],
    "shortName" : "sender",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSenderIdentity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "senderIdentity",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSenderOrRecipient",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage" ],
    "shortName" : "senderOrRecipient",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasServiceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascript", "http://vital.ai/ontology/vital-aimp#DialogQuery" ],
    "shortName" : "serviceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "sessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasShippingFee",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ShoppingCart" ],
    "shortName" : "shippingFee",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasShortDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#CalendarEvent", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageGallery", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ProgressItem", "http://vital.ai/ontology/vital-aimp#ProjectTask", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "shortDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSignature",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "signature",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackChannelID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#SlackMessage", "http://vital.ai/ontology/vital-aimp#SlackTextMessage" ],
    "shortName" : "slackChannelID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#SlackMessage", "http://vital.ai/ontology/vital-aimp#SlackTextMessage" ],
    "shortName" : "slackEventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "slackRecipientChannelID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "slackRecipientTeamID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "slackRecipientUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackTeamID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#SlackMessage", "http://vital.ai/ontology/vital-aimp#SlackProfile", "http://vital.ai/ontology/vital-aimp#SlackTextMessage" ],
    "shortName" : "slackTeamID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#SlackMessage", "http://vital.ai/ontology/vital-aimp#SlackProfile", "http://vital.ai/ontology/vital-aimp#SlackTextMessage" ],
    "shortName" : "slackUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSolutionFactURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRecommendations" ],
    "shortName" : "solutionFactURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSound",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PushNotification" ],
    "shortName" : "sound",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "source",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSourceFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "sourceFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSourceFactScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "sourceFactScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSourceLanguage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "sourceLanguage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSourcePronounciation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "sourcePronounciation",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSourceText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "sourceText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStackTrace",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ErrorNode" ],
    "shortName" : "stackTrace",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#CalendarEvent", "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
    "shortName" : "startDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStateSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogElement" ],
    "shortName" : "stateSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#DialogExitDialog", "http://vital.ai/ontology/vital-aimp#DialogStatusMessage", "http://vital.ai/ontology/vital-aimp#EndpointProfilesMessage", "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage", "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage", "http://vital.ai/ontology/vital-aimp#UserStatusMessage", "http://vital.ai/ontology/vital-aimp#VirtualLoginResponseMessage" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogExitDialog", "http://vital.ai/ontology/vital-aimp#EndpointProfilesMessage", "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact", "http://vital.ai/ontology/vital-aimp#VirtualLoginResponseMessage" ],
    "shortName" : "statusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatusPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogChatRules", "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#DialogPayment", "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "statusPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#StringPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "stringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSubject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "subject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSubpropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
    "shortName" : "subpropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "swLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "swLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetChannel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "targetChannel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetLanguage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "targetLanguage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetPronounciation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "targetPronounciation",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetService",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQueryAction" ],
    "shortName" : "targetService",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetStep",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogLoop" ],
    "shortName" : "targetStep",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTargetText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Translation" ],
    "shortName" : "targetText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTax",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ShoppingCart" ],
    "shortName" : "tax",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTemperature",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AssetConditionMessage" ],
    "shortName" : "temperature",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTemplateID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IFrameTemplate" ],
    "shortName" : "templateID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Answer", "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogTextCard", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#ErrorNode", "http://vital.ai/ontology/vital-aimp#PushNotification", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextChannelFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "textChannelFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextFactName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "textFactName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextToSpeak",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "textToSpeak",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThreadURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "threadURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#FacebookPost", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "thumbnailImageFileNodeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#FacebookPost", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "thumbnailImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTimeoutPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage" ],
    "shortName" : "timeoutPropertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#DialogPayment", "http://vital.ai/ontology/vital-aimp#DialogQueryAction", "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage" ],
    "shortName" : "timeoutSeconds",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTimezone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "timezone",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#PaymentConfirmation", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IosDeviceProfile", "http://vital.ai/ontology/vital-aimp#StripePayment" ],
    "shortName" : "token",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTokens",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PushNotification" ],
    "shortName" : "tokens",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTotalPages",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage" ],
    "shortName" : "totalPages",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTotalResults",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ResultListFact" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTruthValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TruthPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "truthValue",
    "multipleValues" : false,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTweetIDs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "tweetIDs",
    "multipleValues" : true,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUriValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#URIPropertyFact" ],
    "shortName" : "uriValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#Button", "http://vital.ai/ontology/vital-aimp#EmbeddedCard", "http://vital.ai/ontology/vital-aimp#EnclosingPageURLButtonClickedMessage", "http://vital.ai/ontology/vital-aimp#FileAnswer", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#PaymentConfirmation", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#SwitchEnclosingPageToURL", "http://vital.ai/ontology/vital-aimp#ThingCard", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "url",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#BaseProfile", "http://vital.ai/ontology/vital-aimp#Session", "http://vital.ai/ontology/vital-aimp#Task" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUuid",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IosDeviceProfile" ],
    "shortName" : "uuid",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasValidationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "validationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "weatherJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasWebviewHeightRatio",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#WebviewCard" ],
    "shortName" : "webviewHeightRatio",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasYear",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "year",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasZoomLevel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "zoomLevel",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#haslLastRunTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Task" ],
    "shortName" : "lLastRunTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAcceptSystemTicks",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "shortName" : "acceptSystemTicks",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAnswerSkipped",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerChoice", "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "answerSkipped",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAuthLoginProfile",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EndpointProfile" ],
    "shortName" : "authLoginProfile",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAuthLoginTunnel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "authLoginTunnel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Bot", "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "shortName" : "autoLoadUserProfile",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAutoPlay",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "autoPlay",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isBroadcastOnly",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "broadcastOnly",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isChannelRandomized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "shortName" : "channelRandomized",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isChildChannel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "childChannel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCommentedOut",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRow", "http://vital.ai/ontology/vital-aimp#DialogStep" ],
    "shortName" : "commentedOut",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isConsumeImmediately",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage" ],
    "shortName" : "consumeImmediately",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isContainsPII",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "containsPII",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCountOnly",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#TwitterQueryRequestMessage", "http://vital.ai/ontology/vital-aimp#TwitterQueryResultsMessage" ],
    "shortName" : "countOnly",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCreateResultListFact",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuery" ],
    "shortName" : "createResultListFact",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCreateSolutionFact",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRecommendations" ],
    "shortName" : "createSolutionFact",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCurrencyISymbolnFrontOf",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "currencyISymbolnFrontOf",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "currentChannelTarget",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCurrentProfile",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogPersistFact" ],
    "shortName" : "currentProfile",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isCustomerServiceEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "shortName" : "customerServiceEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDebugEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "shortName" : "debugEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultBot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot" ],
    "shortName" : "defaultBot",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultChannel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "defaultChannel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultDialog",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasBotDialog" ],
    "shortName" : "defaultDialog",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "shortName" : "defaultEndpoint",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDeleteOnSuccess",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FileAnswer" ],
    "shortName" : "deleteOnSuccess",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDetailsEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ThingCard" ],
    "shortName" : "detailsEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDirectMessageResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "directMessageResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDisplayInUI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "displayInUI",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDistribute",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HeartbeatMessage" ],
    "shortName" : "distribute",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDontBroadcastToAllSessions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "dontBroadcastToAllSessions",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDownloadEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "downloadEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasBotDialog", "http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot" ],
    "shortName" : "enabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isFinalResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "finalResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isFullDayEvent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEvent" ],
    "shortName" : "fullDayEvent",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGetStartedButtonEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#FacebookEndpoint" ],
    "shortName" : "getStartedButtonEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalBot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "shortName" : "globalBot",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalChatRuleSet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatRuleSet" ],
    "shortName" : "globalChatRuleSet",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalDatascript",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataScript" ],
    "shortName" : "globalDatascript",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalDialog",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "shortName" : "globalDialog",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalEntitySet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EntitySet" ],
    "shortName" : "globalEntitySet",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalQuery",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Query" ],
    "shortName" : "globalQuery",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalRelationshipSet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#RelationshipSet" ],
    "shortName" : "globalRelationshipSet",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGoBackSelected",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "goBackSelected",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGoodbyePage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage" ],
    "shortName" : "goodbyePage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogDatascriptAction", "http://vital.ai/ontology/vital-aimp#DialogQueryAction", "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage", "http://vital.ai/ontology/vital-aimp#GraphObjectFact", "http://vital.ai/ontology/vital-aimp#ListFact" ],
    "shortName" : "graphObjectsLinked",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHaleyMessageTextHidden",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "haleyMessageTextHidden",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHandlerEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "handlerEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHelpRequested",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "helpRequested",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHideShareButton",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#WebviewCard" ],
    "shortName" : "hideShareButton",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isInternalAnswerProcessingEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "internalAnswerProcessingEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isKeepChannelEntryText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogExitBot", "http://vital.ai/ontology/vital-aimp#DialogExitDialog" ],
    "shortName" : "keepChannelEntryText",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isMms",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Sms", "http://vital.ai/ontology/vital-aimp#SmsTextMessage" ],
    "shortName" : "mms",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isMultivalue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion" ],
    "shortName" : "multivalue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isMultivalueProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EntityProperty", "http://vital.ai/ontology/vital-aimp#RelationshipProperty" ],
    "shortName" : "multivalueProperty",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isNotificationsEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IosDeviceProfile" ],
    "shortName" : "notificationsEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isOpenInitially",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "shortName" : "openInitially",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isOtherChannelTarget",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDownloadFile", "http://vital.ai/ontology/vital-aimp#DialogSendAIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "otherChannelTarget",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isPlaying",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "playing",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isProcessWithChatRules",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "processWithChatRules",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isProcessed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogInnerMessage" ],
    "shortName" : "processed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isProgressBarEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "progressBarEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isPurgeSession",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CloseIFrame", "http://vital.ai/ontology/vital-aimp#OpenIFrame" ],
    "shortName" : "purgeSession",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isQuestionClosed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "questionClosed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isRead",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "read",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isRemoveWholeProfile",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRemoveFact" ],
    "shortName" : "removeWholeProfile",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isRenderQuickReplies",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion", "http://vital.ai/ontology/vital-aimp#TrueFalseQuestion" ],
    "shortName" : "renderQuickReplies",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isReplyTo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "replyTo",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isRetired",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AlexaLogin", "http://vital.ai/ontology/vital-aimp#AnonymousLogin", "http://vital.ai/ontology/vital-aimp#EmailLogin", "http://vital.ai/ontology/vital-aimp#FacebookLogin", "http://vital.ai/ontology/vital-aimp#SlackLogin", "http://vital.ai/ontology/vital-aimp#SmsLogin", "http://vital.ai/ontology/vital-aimp#TwitterLogin" ],
    "shortName" : "retired",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSendAsAttachment",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Card" ],
    "shortName" : "sendAsAttachment",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "sent",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSignedVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "signedVersion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSkippable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogUploadFile", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "skippable",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSlackResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "slackResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSmsResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "smsResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSubpropertyEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
    "shortName" : "subpropertyEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSynchronize",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "synchronize",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isTextEntryHidden",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Channel" ],
    "shortName" : "textEntryHidden",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isTimeoutEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage" ],
    "shortName" : "timeoutEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isTrackingOpens",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#EmailSummary" ],
    "shortName" : "trackingOpens",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isTunnelingEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "shortName" : "tunnelingEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isTweetResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "tweetResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isUrlAvailable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "urlAvailable",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isVitalRulesEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "shortName" : "vitalRulesEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_aimp_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_aimp_0_1_0_schema;

}