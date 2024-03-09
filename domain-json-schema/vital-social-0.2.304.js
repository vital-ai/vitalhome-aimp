if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_social_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-social",
  "name" : "vital-social-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "b4cbd23c84f17ba6cafb557504ed349d",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-nlp" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-social#CampaignAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasActionStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasMinutesBetweenTweets" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#DirectMessage",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasAuthorID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasDirectMessageID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasRecipientID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasRecipientName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasRecipientScreenName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasCampaignAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaCampaign" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#CampaignAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasCampaignActionDocument",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#CampaignAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasCampaignActionFilterElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#CampaignAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#FilterElement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasContextAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#TwitterContext" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasFanCountry",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#FanCountry" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasFilter",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaCampaign" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#Filter" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasFilterElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#Filter" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#FilterElement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasLocation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaCampaign" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#Location" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasSocialMediaAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#SocialMediaCampaign" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#TwitterContext" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasOAuthTokenSecret" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterOAuthToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#isStreamContextUser" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Edge_hasTwitterApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-social#TwitterContext" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-social#TwitterApp" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#FacebookAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasFacebookCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasFacebookID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasPageFansCountry" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#FanCountry",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasSocialLikeCount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Filter",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#FilterElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#InstagramAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasBio" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasFollowersCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasFollowingCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasInstagramID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasMediaCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasSocialUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasWebsite" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Location",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasLocation" : {
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
      "http://vital.ai/ontology/vital-social#hasLocationRadius" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasAccessToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasPictureURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialLikeCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#isTokenValid" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#SocialMediaApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#SocialMediaCampaign",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#SoundCloudAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasCity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasCountry" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasDiscogsName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasExpiresIn" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasFavoriteCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasFollowersCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasFollowingCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasMyspaceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasPermalink" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasPermalinkURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasPlaylistsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasRefreshToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSoundCloudID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasSoundCloudURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTracksCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasWebsite" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasWebsiteTitle" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TrackingHandle",
    "parent" : "http://vital.ai/ontology/vital-social#FilterElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TrackingHashTag",
    "parent" : "http://vital.ai/ontology/vital-social#FilterElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TrackingPhrase",
    "parent" : "http://vital.ai/ontology/vital-social#FilterElement",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#Tweet",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasAuthorID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasFavoriteCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasInReplyToScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasInReplyToTweetID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasInReplyToUserID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasOriginalAuthorID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasOriginalAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasOriginalAuthorScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasRetweetCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTweetID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTweetStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#isRetweet" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TwitterAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasFollowersCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasFollowingCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasOAuthTokenSecret" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasScreenName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTweetsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterOAuthToken" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TwitterApp",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaApp",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasConsumerKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasConsumerSecret" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasTwitterID" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#TwitterContext",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#YouTubeAccount",
    "parent" : "http://vital.ai/ontology/vital-social#SocialMediaAccount",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasCommentCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasCountry" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasExpiresIn" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasPublishedAt" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasRefreshToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSubscriberCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasVideoCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasViewCount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-social#YouTubeComment",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "properties" : {
      "http://vital.ai/ontology/vital-social#hasAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasCommentID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasSocialLikeCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasVideoID" : {
        "type" : "string"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-social#hasAccessToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "shortName" : "accessToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasActionStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#CampaignAction" ],
    "shortName" : "actionStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasAuthorID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage", "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "authorID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasAuthorName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage", "http://vital.ai/ontology/vital-social#Tweet", "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "authorName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasAuthorScreenName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage", "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "authorScreenName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasBio",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount" ],
    "shortName" : "bio",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasChannelID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount", "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "channelID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasCity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "city",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasCommentCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "commentCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasCommentID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "commentID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasConsumerKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#TwitterApp" ],
    "shortName" : "consumerKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasConsumerSecret",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#TwitterApp" ],
    "shortName" : "consumerSecret",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasCountry",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "country",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasDirectMessageID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage" ],
    "shortName" : "directMessageID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasDiscogsName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "discogsName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasExpiresIn",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "expiresIn",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFacebookCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#FacebookAccount" ],
    "shortName" : "facebookCategory",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFacebookID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#FacebookAccount" ],
    "shortName" : "facebookID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFavoriteCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "favoriteCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFollowersCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount", "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "followersCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFollowingCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount", "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "followingCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasInReplyToScreenName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "inReplyToScreenName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasInReplyToTweetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "inReplyToTweetID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasInReplyToUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "inReplyToUserID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasInstagramID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount" ],
    "shortName" : "instagramID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasLocation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Location" ],
    "shortName" : "location",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasLocationRadius",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Location" ],
    "shortName" : "locationRadius",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasMediaCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount" ],
    "shortName" : "mediaCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasMinutesBetweenTweets",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#CampaignAction" ],
    "shortName" : "minutesBetweenTweets",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasMyspaceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "myspaceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasOAuthTokenSecret",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount", "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "oAuthTokenSecret",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasOriginalAuthorID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "originalAuthorID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasOriginalAuthorName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "originalAuthorName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasOriginalAuthorScreenName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "originalAuthorScreenName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPageFansCountry",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#FacebookAccount" ],
    "shortName" : "pageFansCountry",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPermalink",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "permalink",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPermalinkURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "permalinkURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPictureURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "shortName" : "pictureURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPlaylistsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "playlistsCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasPublishedAt",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "publishedAt",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasRecipientID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage" ],
    "shortName" : "recipientID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasRecipientName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage" ],
    "shortName" : "recipientName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasRecipientScreenName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#DirectMessage" ],
    "shortName" : "recipientScreenName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasRefreshToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "refreshToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasRetweetCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "retweetCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasScreenName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "screenName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSocialDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount", "http://vital.ai/ontology/vital-social#TwitterAccount", "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "socialDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSocialLikeCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#FanCountry", "http://vital.ai/ontology/vital-social#SocialMediaAccount", "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "socialLikeCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSocialUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#FacebookAccount", "http://vital.ai/ontology/vital-social#InstagramAccount", "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "socialUsername",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSoundCloudID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "soundCloudID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSoundCloudURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "soundCloudURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasSubscriberCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "subscriberCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTracksCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "tracksCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTweetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "tweetID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTweetStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "tweetStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTweetsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "tweetsCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTwitterID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#TwitterAccount", "http://vital.ai/ontology/vital-social#TwitterApp" ],
    "shortName" : "twitterID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTwitterLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "twitterLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTwitterLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "twitterLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTwitterOAuthToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount", "http://vital.ai/ontology/vital-social#TwitterAccount" ],
    "shortName" : "twitterOAuthToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasVideoCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "videoCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasVideoID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "videoID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasViewCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeAccount" ],
    "shortName" : "viewCount",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasWebsite",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#InstagramAccount", "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "website",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasWebsiteTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SoundCloudAccount" ],
    "shortName" : "websiteTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#isRetweet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "retweet",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#isStreamContextUser",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount" ],
    "shortName" : "streamContextUser",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#isTokenValid",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#SocialMediaAccount" ],
    "shortName" : "tokenValid",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_social_0_2_304_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_social_0_2_304_schema;

}