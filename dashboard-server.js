var net = require('net');


module.exports = function(RED) {
    function DashboardServer(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        // tcp client
        var client = new net.Socket();
        client.connect(parseInt(config.port), config.host, function() {
            node.log('connected to host: ' + config.host + ':' + config.port);
            node.status({fill:"green",shape:"dot",text:"connected"});
        });        
        client.on('data', function(data) {
            data = data.toString().replace('\n','');
            var result = {
                "payload"   : data,
                "topic"     : node.context()['last-ur-command'] ||'',
                "timestamp" : new Date().valueOf()
            }
            node.send(result);
        });
        client.on('close', function(reason) {
            node.log('disconnected from host: ' + config.host + ':' + config.port);
            node.status({fill:"red",shape:"ring",text:"disconnected"});
        });
        client.on('error', function(err) {
            node.error('error at tcp connection', err);
        });
        node.on('input', function(msg) {
            try {
                var arg = config.argument || '';
                var com = config.command  || '';
                var command = com + ' ' + arg + '\n';
                if(config.usemsgtopic === true){
                    command = msg.topic + '\n';
                }
                client.write(command);
                this.context()['last-ur-command'] = msg.topic || com + ' ' + arg;
            } catch (error) {
                node.error('error at input ', err);
            }
            
        });
    }
    RED.nodes.registerType("dashboard-server",DashboardServer);
}