# Arduino / Socket.io / Johnny 5 / React

This demo illustrates how to integrate the Arduino Uno platform, with a simple React web app. 

## Technologies
- Arduino - Hardware
- Node.js - For server and socket communications
- Johnny Five - Integrating board with node.js
- React - Modern javascript library for front-end development

## Hardware Requirements

### Parts List
- 1 x Arduino Uno
- 2 x 1kΩ resistor
- 1 x LED
- 1 X TMP36 temperature sensor

### Firmware
   
The StandardFirmataPlus firmware is the one that is used for Johnny-Five to communicate with the board. That means you have to install it first, then you can execute the nodejs programs. Arduiono IDE
   
1. Open Arduino IDE
2. Verify correct port and board
3. Navigate to File > Examples > Firmata > StandardFirmataPlus
4. Load sketch onto board.
 
## Software Requirements
- Node.js version v10.9.0
- npm 6.2.0
- yarn (Optional)

### Installation 
- `npm install` or `yarn install`

- Run `npm run start` or `yarn start`

## Schematic
![alt text](src/assets/images/arduino_makerspace.png "LED on pin 13 (Arduino UNO)")

Developed by: Muriel Gonzalez mgonzalez@clickherelabs.com