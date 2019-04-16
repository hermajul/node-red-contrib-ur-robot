var net = require('net');
var ur = require('ur-rtde/ur.js');


module.exports = function(RED) {
    function rtdeInterface(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        node.on('input', function(msg) {
            var buf = Buffer.from(msg.payload);
            var result = new ur().onData(buf)
            if(result !== undefined){
                msg.payload = result;
            node.send(msg);
            }
        });
    }
    RED.nodes.registerType("rtde-interface",rtdeInterface);
}