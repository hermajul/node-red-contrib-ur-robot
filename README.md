# node-red-contrib-ur-robot
Node-red nodes for the dashboard-server interface and decoding of the rtde interface.

## installation

navigate to your node red directory

`npm i node-red-contrib-ur-robot`

### usage

To use the dashboard server commands configure the node like in the picture below.
If the msg.topic is disabled, the node sends the commands which is choosed in the dropdown.
The command will be sent when any message triggers the node.
![alt text](https://github.com/hermajul/node-red-contrib-ur-robot/blob/master/img/node-red-dashboardserver-topic-disabled.png)


If you want to send the command via msg.topic, enable the option.
Set the command in msg.topic of the trigger message.
All commands are listed here: https://www.universal-robots.com/how-tos-and-faqs/how-to/ur-how-tos/dashboard-server-cb-series-port-29999-15690/
![alt text](https://github.com/hermajul/node-red-contrib-ur-robot/blob/master/img/node-red-dashboardserver-topic-enabled.png)


To read the real time data exchange, a tcp node is required
See the example configuration in the picture below:
![alt text](https://github.com/hermajul/node-red-contrib-ur-robot/blob/master/img/node-red-rtde-config-tcp.png)
