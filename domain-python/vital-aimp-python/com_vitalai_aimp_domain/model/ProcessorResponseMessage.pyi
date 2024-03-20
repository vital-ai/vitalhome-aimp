
import datetime
from com_vitalai_aimp_domain.model.ProcessorMessage import ProcessorMessage


class ProcessorResponseMessage(ProcessorMessage):
        requestURI: str
        status: str
        statusMessage: str

