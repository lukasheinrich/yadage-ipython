import ipywidgets as widgets
from traitlets import Unicode, validate

class WorkflowWidget(widgets.DOMWidget):
    _view_name = Unicode('WorkflowWidgetView').tag(sync=True)
    _view_module = Unicode('yadage').tag(sync=True)
    value = Unicode('{"dag": {"nodes": []}}').tag(sync=True)
    dotstring = Unicode('strict digraph {}').tag(sync = True)
