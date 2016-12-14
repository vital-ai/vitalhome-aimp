if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_aimp_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-aimp",
  "name" : "vital-aimp-0.1.0",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-social" ],
  "schemas" : [ {
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
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAuthSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChannelURI" : {
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
      "http://vital.ai/ontology/vital-aimp#hasLocalTime" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueueName" : {
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
      "http://vital.ai/ontology/vital-aimp#hasTimezone" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#ArticleObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
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
    "id" : "http://vital.ai/ontology/vital-aimp#AudioObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSource" : {
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
      "http://vital.ai/ontology/vital-aimp#isPlaying" : {
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
      "http://vital.ai/ontology/vital-aimp#isGlobalBot" : {
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
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Channel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChoiceAnswer",
    "parent" : "http://vital.ai/ontology/vital-aimp#Answer",
    "properties" : {
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
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CurrentBotMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
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
      "http://vital.ai/ontology/vital-aimp#hasObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasQueueName" : {
        "type" : "string"
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
      "http://vital.ai/ontology/vital-aimp#isGlobalDialog" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogPart",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogAssignFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasExpression" : {
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogBegin",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogDatascript",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasFunctionName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasServiceName" : {
        "type" : "string"
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
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPersistFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogPredict",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
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
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
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
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogSwitchBot",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogText",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DialogTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DialogAction",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DirectMessageReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasBot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
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
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
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
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#BaseProfile" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#DialogSession" ],
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
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasExternalAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#AmazonEchoAccount", "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasIFrameTemplate",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#IFrameEndpoint" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#IFrameTemplate" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Edge_hasProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#UserProfile" ],
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
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasBccRecipients" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyHtml" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasBodyPlain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasCcRecipients" : {
        "type" : "string"
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
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#EmailReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPEmailMessage",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#EntityMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FacebookIncomingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#FacebookMessage",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
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
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FileUploadObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#FormDialog",
    "parent" : "http://vital.ai/ontology/vital-aimp#Dialog",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyFileUploadMessage",
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
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasMessagePayload",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasPredictionElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#PredictionFact" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasRecommendationElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#SolutionFact" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HyperEdge_hasResultElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#ResultListFact" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#IFrameEndpoint",
    "parent" : "http://vital.ai/ontology/vital-aimp#Endpoint",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#ImageObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
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
    "id" : "http://vital.ai/ontology/vital-aimp#InteractionModeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasInteractionMode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
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
    "id" : "http://vital.ai/ontology/vital-aimp#MemoryFact",
    "parent" : "http://vital.ai/ontology/vital-aimp#StringPropertyFact",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#isMultivalue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#OpenPanelCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasPanelName" : {
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
      "http://vital.ai/ontology/vital-aimp#hasRecipient" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
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
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ProcessorAreYouAliveMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#ProcessorMessage",
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
    "id" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
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
    "id" : "http://vital.ai/ontology/vital-aimp#RemoveCardCommand",
    "parent" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasCardURI" : {
        "type" : "string"
      }
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
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#SendSms",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SendTweet",
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
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      }
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
    "id" : "http://vital.ai/ontology/vital-aimp#SlackIncomingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#SlackMessage",
    "properties" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#SmsReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SolutionFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
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
    "id" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasFalseLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTrueLabel" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#TweetReceived",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "properties" : {
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
      "http://vital.ai/ontology/vital-aimp#hasIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStringValue" : {
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
    "id" : "http://vital.ai/ontology/vital-aimp#VideoObject",
    "parent" : "http://vital.ai/ontology/vital-aimp#Card",
    "properties" : {
      "http://vital.ai/ontology/vital-aimp#hasDurationSeconds" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSource" : {
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
      "http://vital.ai/ontology/vital-aimp#isPlaying" : {
        "type" : "boolean"
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
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DataModificationEvent" ],
    "shortName" : "accountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "address",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation" ],
    "shortName" : "amount",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAuthSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "authSessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBccRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "bccRecipients",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBindingNames",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
    "shortName" : "bindingNames",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBodyHtml",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "bodyHtml",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBodyPlain",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#Sms" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCalendars",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
    "shortName" : "calendars",
    "multipleValues" : true,
    "type" : "StringProperty"
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCcRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "ccRecipients",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataModificationEvent" ],
    "shortName" : "classURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasColor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device" ],
    "shortName" : "color",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCommand",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage", "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ],
    "shortName" : "command",
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDateSent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Sms" ],
    "shortName" : "dateSent",
    "multipleValues" : false,
    "type" : "DateProperty"
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage", "http://vital.ai/ontology/vital-aimp#QuestionMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage", "http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage", "http://vital.ai/ontology/vital-aimp#UserTextMessage" ],
    "shortName" : "dialogPageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
    "shortName" : "directionsEndAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
    "shortName" : "directionsJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDurationSeconds",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "durationSeconds",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEchoUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AmazonEchoAccount", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "echoUserID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "endpointURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasEventTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "eventTimestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasExpression",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCondition" ],
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "factPropertyName",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasFunctionName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogDatascript" ],
    "shortName" : "functionName",
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "geolocation",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogElement" ],
    "shortName" : "id",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#Device", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie" ],
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "index",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IntegerPropertyFact", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "integerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasInteractionMode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#InteractionModeMessage" ],
    "shortName" : "interactionMode",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLastActiveDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Device" ],
    "shortName" : "lastActiveDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#SearchResult" ],
    "shortName" : "longDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "longitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#Sms" ],
    "shortName" : "messageID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasMessageSerialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogInnerMessage" ],
    "shortName" : "messageSerialized",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
    "shortName" : "neLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DataModificationEvent", "http://vital.ai/ontology/vital-aimp#GetObjectMessage", "http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParentFactURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "parentFactURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasParentQuestionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "parentQuestionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPg",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "pg",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPreviousAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ],
    "shortName" : "previousAnswer",
    "multipleValues" : false,
    "type" : "StringProperty"
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasProgress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProgressObject" ],
    "shortName" : "progress",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#DialogPersistFact", "http://vital.ai/ontology/vital-aimp#DialogRemoveFact", "http://vital.ai/ontology/vital-aimp#PropertyFact", "http://vital.ai/ontology/vital-aimp#Question", "http://vital.ai/ontology/vital-aimp#UnsetFactMessage" ],
    "shortName" : "propertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "propertyType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogAssignFact", "http://vital.ai/ontology/vital-aimp#DialogCondition", "http://vital.ai/ontology/vital-aimp#PropertyFact" ],
    "shortName" : "propertyValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueryString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#MetaQLMessage" ],
    "shortName" : "queryString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuestionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogRestartQuestion" ],
    "shortName" : "questionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQuestionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage" ],
    "shortName" : "questionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasQueueName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DataModificationEvent" ],
    "shortName" : "queueName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRecipient",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PaymentConfirmation", "http://vital.ai/ontology/vital-aimp#Sms" ],
    "shortName" : "recipient",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRecipients",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "recipients",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRottenTomatoesRating",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "rottenTomatoesRating",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HyperEdge_hasResultElement" ],
    "shortName" : "score",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSearchString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#MapObject", "http://vital.ai/ontology/vital-aimp#SearchResultsList", "http://vital.ai/ontology/vital-aimp#WeatherForecast" ],
    "shortName" : "searchString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSender",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage", "http://vital.ai/ontology/vital-aimp#Sms" ],
    "shortName" : "sender",
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#ProgressItem", "http://vital.ai/ontology/vital-aimp#SearchResult" ],
    "shortName" : "shortDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackChannelID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#SlackMessage" ],
    "shortName" : "slackChannelID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#SlackMessage" ],
    "shortName" : "slackEventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackTeamID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#SlackMessage" ],
    "shortName" : "slackTeamID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSlackUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#SlackMessage" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "source",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#CalendarEntry", "http://vital.ai/ontology/vital-aimp#CalendarObject" ],
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogStatusMessage", "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage", "http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage", "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage", "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage", "http://vital.ai/ontology/vital-aimp#UserStatusMessage" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ProcessorResponseMessage" ],
    "shortName" : "statusMessage",
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "shortName" : "subject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
    "shortName" : "swLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
    "shortName" : "swLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTemplateID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#IFrameTemplate" ],
    "shortName" : "templateID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#Answer", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextToSpeak",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage", "http://vital.ai/ontology/vital-aimp#DialogTextMessage", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "textToSpeak",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#FacebookPost", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "thumbnailImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTimezone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "timezone",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#Movie", "http://vital.ai/ontology/vital-aimp#PaymentConfirmation", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTotalPages",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#QuestionsPageMessage" ],
    "shortName" : "totalPages",
    "multipleValues" : false,
    "type" : "IntegerProperty"
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ArticleObject", "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#EmbeddedCard", "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#ImageObject", "http://vital.ai/ontology/vital-aimp#SearchResult", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#hasYear",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Movie" ],
    "shortName" : "year",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasZoomLevel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#MapObject" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isChannelRandomized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Endpoint" ],
    "shortName" : "channelRandomized",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultBot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot" ],
    "shortName" : "defaultBot",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isDefaultDialog",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Edge_hasBotDialog" ],
    "shortName" : "defaultDialog",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalBot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Bot" ],
    "shortName" : "globalBot",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isGlobalDialog",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Dialog" ],
    "shortName" : "globalDialog",
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isMms",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Sms" ],
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
    "URI" : "http://vital.ai/ontology/vital-aimp#isPlaying",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AudioObject", "http://vital.ai/ontology/vital-aimp#VideoObject" ],
    "shortName" : "playing",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isProcessed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogInnerMessage" ],
    "shortName" : "processed",
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
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isSent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#DialogQuestion" ],
    "shortName" : "sent",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_aimp_0_1_0_schema);