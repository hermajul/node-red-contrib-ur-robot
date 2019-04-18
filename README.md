# node-red-contrib-ur-robot
Node-red nodes for the dashboard-server interface and decoding of the rtde interface.

## installation

navigate to your node red directory

`npm i node-red-contrib-ur-robot`

### usage

To use the dashboard server commands configure the node like in the picture below.
If the msg.topic is disabled, the node sends the commands which is choosed in the dropdown.
The command will be sent when any message triggers the node.
![https://user-images.githubusercontent.com/25501536/56346646-e8469400-61c2-11e9-830c-1ee97549d548.png](https://user-images.githubusercontent.com/25501536/56346646-e8469400-61c2-11e9-830c-1ee97549d548.png)


If you want to send the command via msg.topic, enable the option.
Set the command in msg.topic of the trigger message.
All commands are listed here: https://www.universal-robots.com/how-tos-and-faqs/how-to/ur-how-tos/dashboard-server-cb-series-port-29999-15690/
![https://user-images.githubusercontent.com/25501536/56346710-0d3b0700-61c3-11e9-92ba-e22a45a1d9f8.png](https://user-images.githubusercontent.com/25501536/56346710-0d3b0700-61c3-11e9-92ba-e22a45a1d9f8.png)


To read the real time data exchange, a tcp node is required
See the example configuration in the picture below:
![https://user-images.githubusercontent.com/25501536/56346792-322f7a00-61c3-11e9-8b25-a4cb57e938e4.png](https://user-images.githubusercontent.com/25501536/56346792-322f7a00-61c3-11e9-8b25-a4cb57e938e4.png)
