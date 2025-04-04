
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
from com_vitalai_aimp_domain.model.AIMPMessage import AIMPMessage


class HaleyMessage(AIMPMessage):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasRecipient', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientThreadID', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#isDirectMessageResponse', 'prop_class': BooleanProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#isSlackResponse', 'prop_class': BooleanProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#isSmsResponse', 'prop_class': BooleanProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#isTweetResponse', 'prop_class': BooleanProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasInReplyToScreenName', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasInReplyToTweetID', 'prop_class': LongProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HaleyMessage._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/vital-aimp#HaleyMessage'

