#yadage ipython interface

this package is exploring a interactive IPython interface/widget for yadage workflows. This enables the free mixing of linear and non-linear computation aided by a distributed compute resource.

To test it out you can use the pre-build `yadageipython` docker image

    docker run -v /var/run/docker.sock:/var/run/docker.sock -p 9999:8888 -v $PWD/docker:$PWD/docker -w $PWD/docker -it lukasheinrich/yadageipython
    curl https://raw.githubusercontent.com/lukasheinrich/yadage-ipython/master/testnotebook.ipynb > $PWD/docker/testnotebook.ipynb

open a browser at http://localhost:9999
