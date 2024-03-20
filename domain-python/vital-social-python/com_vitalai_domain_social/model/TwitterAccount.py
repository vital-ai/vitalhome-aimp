
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
from com_vitalai_domain_social.model.SocialMediaAccount import SocialMediaAccount


class TwitterAccount(SocialMediaAccount):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/vital-social#hasFollowersCount', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasFollowingCount', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasOAuthTokenSecret', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasScreenName', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasSocialDescription', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasTweetsCount', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasTwitterID', 'prop_class': LongProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-social#hasTwitterOAuthToken', 'prop_class': StringProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + TwitterAccount._allowed_properties

