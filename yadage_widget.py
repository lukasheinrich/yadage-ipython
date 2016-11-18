import ipywidgets as widgets
from traitlets import Unicode, validate

class WorkflowWidget(widgets.DOMWidget):
    _view_name = Unicode('WorkflowWidgetView').tag(sync=True)
    _view_module = Unicode('yadage').tag(sync=True)
    value = Unicode('{"dag": {"nodes": []}}').tag(sync=True)
    dotstring = Unicode('strict digraph {}').tag(sync = True)


import adage.visualize
import time
class ViewTracker(object):
    def __init__(self,widget):
        self.widget = widget
    def initialize(self,adageobj):
        pass
    def track(self,adageobj):
        self.widget.dotstring = adage.visualize.colorize_graph_at_time(adageobj.dag,time.time()).to_string() 
    def finalize(self,adageobj):
        self.widget.dotstring = adage.visualize.colorize_graph_at_time(adageobj.dag,time.time()).to_string() 
