
import datetime
from com_vitalai_aimp_domain.model.UserCommandMessage import UserCommandMessage


class AIMPCommand(UserCommandMessage):
        aIMPCommandOperationType: str
        aIMPCommandTargetClassURI: str
        aIMPCommandTargetObjectURI: str
        aIMPCommandTargetRootURI: str
        aIMPCommandType: str

