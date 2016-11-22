#yadage ipython interface

this package is exploring a interactive IPython interface/widget for yadage workflows. This enables the free mixing of linear and non-linear computation aided by a distributed compute resource.

To test it out you can use the pre-build `yadageipython` docker image

    mkdir demo
    curl https://raw.githubusercontent.com/lukasheinrich/yadage-ipython/master/weinberg_demonotebook.ipynb > demo/notebook.ipynb
    docker run -it -p 9999:8888 -w $PWD/demo -v $PWD/demo:$PWD/demo -v /var/run/docker.sock:/var/run/docker.sock --rm lukasheinrich/yadageipython

open a browser at http://localhost:9999/notebooks/testnotebook.ipynb
