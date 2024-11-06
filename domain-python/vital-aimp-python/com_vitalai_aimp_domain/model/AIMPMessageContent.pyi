
import datetime
from vital_ai_vitalsigns.model.VITAL_Node import VITAL_Node


class AIMPMessageContent(VITAL_Node):
        aIMPMessageContentTypeURI: str
        encodedVoiceData: str
        generatedAccumulatedText: str
        generatedText: str
        messageContentJSON: str
        text: str

