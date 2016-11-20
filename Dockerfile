FROM lukasheinrich/yadage
WORKDIR /notebook
ADD yadage_widget.py yadage_widget.py
ADD manualui.py manualui.py
RUN pip install jupyter
RUN jupyter nbextension enable --py --sys-prefix widgetsnbextension
ENV PYTHONPATH /notebook

# Add Tini. Tini operates as a process subreaper for jupyter. This prevents
# kernel crashes.
ENV TINI_VERSION v0.13.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/bin/tini
RUN chmod +x /usr/bin/tini
ENTRYPOINT ["/usr/bin/tini", "--"]

EXPOSE 8888
CMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0"]
