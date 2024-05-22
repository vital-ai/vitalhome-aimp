if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_wordnet_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-wordnet",
  "name" : "vital-wordnet-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "7c67d8dfe5fa99094ff74109fb3492b1",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-wordnet#AdjectiveSynsetNode",
    "parent" : "http://vital.ai/ontology/vital-wordnet#SynsetNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#AdverbSynsetNode",
    "parent" : "http://vital.ai/ontology/vital-wordnet#SynsetNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetAlsoSee",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetAntonym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetAttribute",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetCause",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetDerivationallyRelatedForm",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetDerivedFromAdjective",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetDomainOfSynset_Region",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetDomainOfSynset_Topic",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetDomainOfSynset_Usage",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetEntailment",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetHypernym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetHyponym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetInstanceHypernym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetInstanceHyponym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetMemberHolonym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetMemberMeronym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetMemberOfThisDomain_Region",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetMemberOfThisDomain_Topic",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetMemberOfThisDomain_Usage",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetPartHolonym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetPartMeronym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetParticiple",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetPertainym_PertainsToNouns",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetSimilarTo",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#AdjectiveSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#AdjectiveSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetSubstanceHolonym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetSubstanceMeronym",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#NounSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_WordnetVerbGroup",
    "parent" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#Edge_hasWordnetPointer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#NounSynsetNode",
    "parent" : "http://vital.ai/ontology/vital-wordnet#SynsetNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#SynsetNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-wordnet#hasGloss" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-wordnet#hasWordnetID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-wordnet#VerbSynsetNode",
    "parent" : "http://vital.ai/ontology/vital-wordnet#SynsetNode",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-wordnet#hasGloss",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "shortName" : "gloss",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-wordnet#hasWordnetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-wordnet#SynsetNode" ],
    "shortName" : "wordnetID",
    "multipleValues" : false,
    "type" : "StringProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_wordnet_0_2_304_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_wordnet_0_2_304_schema;

}