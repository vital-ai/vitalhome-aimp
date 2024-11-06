
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from vital_ai_vitalsigns.model.VITAL_Node import VITAL_Node


class NlpEntityInstance(VITAL_Node):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasEntityAuthor', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasEntityOffset', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasEntityOffsetInSentence', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasExactString', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasLength', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasLengthInSentence', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasSentimentScore', 'prop_class': DoubleProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#hasSpanType', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-nlp#isSentimentMixed', 'prop_class': BooleanProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + NlpEntityInstance._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/vital-nlp#NlpEntityInstance'

