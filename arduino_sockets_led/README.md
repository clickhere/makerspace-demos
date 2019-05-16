# Arduino / Socket.io / Johnny 5 / React

This demo illustrates how to integrate the Arduino Uno platform, with a simple React web app. 

## Technologies
- Arduino - Hardware
- Node.js - For server and socket communications
- Johnny Five - Integrating board with node.js
- React - Modern javascript library for front-end development

## Hardware Parts List
- 1 x Arduino Uno
- 2 x 1kΩ resistor
- 1 x LED
- 1 X TMP36 temperature sensor

## Software Requirements
- Arduino IDE [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)
- Node.js version v10.9.0 [https://nodejs.org/en/](https://nodejs.org/en/)
- npm 6.2.0 [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- yarn (Optional) [https://yarnpkg.com/en/docs/install#mac-stable] (https://yarnpkg.com/en/docs/install#mac-stable)

### Firmware
The StandardFirmataPlus firmware is used for Johnny-Five to communicate with the board.To install Firmata on your Arduino, follow these steps:
  
1. Open Arduino IDE
2. Verify correct port and board
3. Navigate to File > Examples > Firmata > StandardFirmataPlus
4. Load sketch onto board.
 
### Installation 
- `npm install` or `yarn install`

- Run `npm run start` or `yarn start`


### Project Overview
- `server.js` connects with the board, and emits messages via web sockets
- `src/index.js` React entry point
- `src/Appjsx` React App component, with `<LightSwitch/>` and `<Temperature/>` components



## Schematic
![alt text](src/assets/images/arduino_makerspace.png "LED on pin 13 (Arduino UNO)")

## Resources
- React Tutorial [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)
- Johnny 5 Examples [http://johnny-five.io/examples/](http://johnny-five.io/examples/)
- Arduino Programming Language Reference [https://www.arduino.cc/reference/en/] (https://www.arduino.cc/reference/en/)
- SparkFun - Arduino, Electronics shop [https://www.sparkfun.com/](https://www.sparkfun.com/)


Developed by: Muriel Gonzalez mgonzalez@clickherelabs.com


