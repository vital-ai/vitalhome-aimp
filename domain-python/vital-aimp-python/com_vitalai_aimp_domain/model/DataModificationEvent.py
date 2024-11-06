
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


class DataModificationEvent(VITAL_Node):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/vital#hasAccountURI', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasClassURI', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasEventType', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasObjectURI', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasQueueName', 'prop_class': StringProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + DataModificationEvent._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/vital-aimp#DataModificationEvent'

