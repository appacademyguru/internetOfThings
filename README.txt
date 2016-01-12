Hi guys. Welcome to your Internet of Things Project!  
Hope you're ready. This one is going to require some code analysis on your part.

Overview:

There are 2 sub-projects in IoT: Get and Post.

Get:  You will program the Arduino to connect to a web page you create, get data from this page, then use that data to perform some task

Post: You will program the Arduino to connect to a web page you create, send data to it, then display or use that data on the website.

There are 4 folders in this repository:

arduread is the Meteor project that you will use to create your website.  It contains the fundamental code necessary to interpret both Get and Post commands from the Arduino.

ArduinoGet contains the Arduino sketch used to perform a Get request.


ArduinoPost contains the Arduino sketch used to perform a Post request.

CC3000_Library contains the Libraries the Arduino needs to run the Wifi module.  Place this folder in your Arduino/libraries folder.


*Hints*
The CC3000 wifi module uses several digital pins to communicate with the Arduino (precisely which pins are elisted in the Arduino sketches), so it might behoove you to block these pins so you don't forget and accidentally use them for something else.

http://pefarduino2.meteor.com is the unmodified version of the Meteor project. You can use it to test your code.  The buttons change the data value to 5 and 10, and you can input your own data value in the form. You can read the latest data value with http://pefarduino2.meteor.com/data


