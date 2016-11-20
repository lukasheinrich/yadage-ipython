define('yadage',['jquery','vis'],function($,vis){
  return {hello: function(el){
    console.log(el)
    var container = document.createElement('div');
    container.style.height="500px";
    container.style.width="500px";
    container.style.border="solid black 1px";
    el.appendChild(container);

    $.ajax('http://localhost:8000/state.json',{
      success: function(data){
        console.log(data.dag.nodes)
        console.log(data.dag.edges)
      }
    })


    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1', title: 'I have a popup!'},
        {id: 2, label: 'Node 2', title: 'I have a popup!'},
        {id: 3, label: 'Node 3', title: 'I have a popup!'},
        {id: 4, label: 'Node 4', title: 'I have a popup!'},
        {id: 5, label: 'Node 5', title: 'I have a popup!'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

    // create a network
    // var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {interaction:{hover:true}};
    var network = new vis.Network(container, data, options);

    network.on("click", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
    });


  }}
});
