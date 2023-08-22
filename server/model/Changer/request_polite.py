
from .changer import Changer

def get_polite(text):
    model = Changer()
    return model.changer(text)