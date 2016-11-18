define('yadage',['vis'],function(vis){
  return {hello: function(el){
    console.log(el)
    var container = document.createElement('div');
    container.style.height="500px";
    container.style.width="500px";
    container.style.border="solid black 1px";
    el.appendChild(container);

    var DOTstring = 'strict digraph {1->2->3;4->3;}';
    var parsedData = vis.network.convertDot(DOTstring);
    var netdata = {
      nodes: parsedData.nodes,
      edges: parsedData.edges
    }

    netdata.nodes[0].title = 'hello'
    netdata.nodes[0].label = 'firstlabel'

    console.log(netdata.nodes[0])

    var net_options = parsedData.options;
    net_options.layout = {
        hierarchical: {
            direction: 'UD',
            sortMethod: 'directed'
        }
    }
    net_options.interaction = {
      dragNodes: false,
      dragView: false,
      hover: true,
      selectConnectedEdges: false
    }
    var network = new vis.Network(container, netdata, net_options);
    network.on('click',function(data){
      console.log('got a network event!!')
      console.log(data.nodes)
      var thenodes = network.selectNodes(data.nodes);
      console.log(thenodes)
    })
  }}
});
