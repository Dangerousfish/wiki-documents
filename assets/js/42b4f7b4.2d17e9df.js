"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72284],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(9668),i=(n(96540),n(15680));const r={description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",title:"Pin Multiplexing",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_Pin_Multiplexing",last_update:{date:"07/25/2024",author:"Spencer"}},l="Pin Multiplexing",o={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing",title:"Pin Multiplexing",description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/XIAO_ESP32C3_Pin_Multiplexing",permalink:"/XIAO_ESP32C3_Pin_Multiplexing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1721865600,formattedLastUpdatedAt:"Jul 25, 2024",frontMatter:{description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",title:"Pin Multiplexing",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_Pin_Multiplexing",last_update:{date:"07/25/2024",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio XIAO ESP32C3",permalink:"/XIAO_ESP32C3_Getting_Started"},next:{title:"WiFi Usage",permalink:"/XIAO_ESP32C3_WiFi_Usage"}},s={},p=[{value:"Digital",id:"digital",level:2},{value:"Digital as PWM",id:"digital-as-pwm",level:2},{value:"Analog",id:"analog",level:2},{value:"Serial - UART",id:"serial---uart",level:2},{value:"Regular method - choose one of USB serial or UART0 serial to use",id:"regular-method---choose-one-of-usb-serial-or-uart0-serial-to-use",level:3},{value:"Special way - use USB serial and UART0/UART1 at the same time",id:"special-way---use-usb-serial-and-uart0uart1-at-the-same-time",level:3},{value:"Serial1 Usage",id:"serial1-usage",level:3},{value:"Software Serial",id:"software-serial",level:3},{value:"I2C",id:"i2c",level:2},{value:"Hardware connection",id:"hardware-connection",level:3},{value:"Software setup",id:"software-setup",level:3},{value:"SPI",id:"spi",level:2},{value:"Hardware connection",id:"hardware-connection-1",level:3},{value:"Software setup",id:"software-setup-1",level:3},{value:"Note on XIAO ESP32C3 IO allocation",id:"note-on-xiao-esp32c3-io-allocation",level:2},{value:"D9",id:"d9",level:3},{value:"D6",id:"d6",level:3},{value:"D8",id:"d8",level:3}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"pin-multiplexing"},"Pin Multiplexing"),(0,i.yg)("p",null,"Seeed Studio XIAO ESP32C3 has rich interfaces. There are ",(0,i.yg)("strong",{parentName:"p"},"11 digital I/O")," that can be used as ",(0,i.yg)("strong",{parentName:"p"},"PWM pins")," and ",(0,i.yg)("strong",{parentName:"p"},"4 analog inputs")," that can be used as ",(0,i.yg)("strong",{parentName:"p"},"ADC pins"),". It supports four serial communication interfaces such as ",(0,i.yg)("strong",{parentName:"p"},"UART, I2C, SPI and I2S"),". This wiki will be helpful to learn about these interfaces and implement them in your next projects!"),(0,i.yg)("h2",{id:"digital"},"Digital"),(0,i.yg)("p",null,"Connect a pushbutton to Pin D6 and an LED to Pin D10. Then upload the following code to control the ON/OFF of LED using the pushbutton."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},"const int buttonPin = D6;     // pushbutton connected to digital pin 6\nconst int ledPin =  D10;      // LED connected to digital pin 10\n \nint buttonState = 0;         // variable for reading the pushbutton status\n \nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n \nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n \n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED on:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED off:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,i.yg)("h2",{id:"digital-as-pwm"},"Digital as PWM"),(0,i.yg)("p",null,"Connect an LED to Pin D10. Then upload the following code to see the LED gradually fading."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"int ledPin = D10;    // LED connected to digital pin 10\n\nvoid setup() {\n  // declaring LED pin as output\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  // fade in from min to max in increments of 5 points:\n  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n\n  // fade out from max to min in increments of 5 points:\n  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n}\n")),(0,i.yg)("h2",{id:"analog"},"Analog"),(0,i.yg)("p",null,"Connect a potentiometer to Pin A0 and an LED to Pin D10. Then upload the following code to control the blinking interval of the LED by rotating the potentiometer knob."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"The ADC mapping range is 0-2500mV.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},"const int sensorPin = A0;\nconst int ledPin =  D10; \n\nvoid setup() {\n  pinMode(sensorPin, INPUT);  // declare the sensorPin as an INPUT\n  pinMode(ledPin, OUTPUT);   // declare the ledPin as an OUTPUT\n}\n\nvoid loop() {\n  // read the value from the sensor:\n  int sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,i.yg)("h2",{id:"serial---uart"},"Serial - UART"),(0,i.yg)("h3",{id:"regular-method---choose-one-of-usb-serial-or-uart0-serial-to-use"},"Regular method - choose one of USB serial or UART0 serial to use"),(0,i.yg)("p",null,"There are 2 serial interfaces on this board:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"USB Serial"),(0,i.yg)("li",{parentName:"ul"},"UART0 Serial")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"There is no ",(0,i.yg)("inlineCode",{parentName:"p"},"Serial2")," for XIAO ESP32 C3.\nAlso If you need to use ",(0,i.yg)("inlineCode",{parentName:"p"},"Serial1"),", you must define the pins; otherwise, it may not receive data. For XIAO ESP32 series, use ",(0,i.yg)("inlineCode",{parentName:"p"},"Serial1")," as follows:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"Serial1.begin(115200, SERIAL_8N1, D7, D6); // RX, TX\n"))),(0,i.yg)("p",null,"By default, USB serial is enabled, which means you can connect the board to a PC via USB Type-C and open serial monitor on Arduino IDE to view data sent via serial."),(0,i.yg)("p",null,"However, if you want to use UART0 as the serial, you need to connect pin D6 as the TX pin and pin D7 as RX pin with a USB-Serial adapter."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,"Also, you need to set ",(0,i.yg)("strong",{parentName:"p"},"USB CDC On Boot")," to ",(0,i.yg)("strong",{parentName:"p"},"Disabled")," from Arduino IDE."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE: Change photo when board shows up on Arduino Board Manager")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("p",null,'Upload the following code to Arduino IDE to send the string "Hello World!" via serial'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(115200);\n    while (!Serial);\n}\n \nvoid loop() {\n    Serial.println("Hello World!");\n    delay(1000);\n}\n')),(0,i.yg)("p",null,"The output will be as follows on Arduino Serial Monitor"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg",alt:"pir",width:450,height:"auto"})),(0,i.yg)("h3",{id:"special-way---use-usb-serial-and-uart0uart1-at-the-same-time"},"Special way - use USB serial and UART0/UART1 at the same time"),(0,i.yg)("p",null,"Very often, we need to use UART sensors to connect to XIAO ESP32C3 hardware serial port to get data, and at the same time, you may need to use the USB serial to display the data on the serial monitor. This can be achieved by some special methods."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Example program:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'// Need this for the lower level access to set them up.\n#include <HardwareSerial.h>\n\n//Define two Serial devices mapped to the two internal UARTs\nHardwareSerial MySerial0(0);\nHardwareSerial MySerial1(1);\n\nvoid setup()\n{\n    // For the USB, just use Serial as normal:\n    Serial.begin(115200);\n\n    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)\n    MySerial0.begin(9600, SERIAL_8N1, -1, -1);\n    MySerial0.print("MySerial0");\n\n    // And configure MySerial1 on pins RX=D9, TX=D10\n    MySerial1.begin(115200, SERIAL_8N1, 9, 10);\n    MySerial1.print("MySerial1");\n}\n\nvoid loop()\n{\n\n}\n')),(0,i.yg)("p",null,"As you can see, the XIAO ESP32C3 actually has three UARTs available."),(0,i.yg)("p",null,"In the following, we will take the ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"},"60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module"),", which is available for sale, as an example, and explain how to use the D6 and D7 hardware serial ports and the USB serial port."),(0,i.yg)("p",null,"Please be prepared for the following."),(0,i.yg)("table",{align:"center"},(0,i.yg)("tr",null,(0,i.yg)("th",null,"XIAO ESP32C3"),(0,i.yg)("th",null,"60GHz mmWave Sensor -",(0,i.yg)("br",null),"Human Resting Breathing",(0,i.yg)("br",null),"and Heartbeat Module")),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:120,src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"}))),(0,i.yg)("td",null,(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:240,src:"https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"})))),(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},"Get One Now")),(0,i.yg)("td",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"},"Get One Now")))),(0,i.yg)("p",null,"Download the sensor library to your computer. And add it to the Arduino IDE."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("a",{href:"https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/",target:"_blank"},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"})))),(0,i.yg)("p",null,"Here, we want to parse the heartbeat and respiration data information, then you can rewrite your program like this."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'#include "Arduino.h"\n#include <60ghzbreathheart.h>\n#include <HardwareSerial.h>\n\nHardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7\n\n// can also try hardware serial with\nBreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  MySerial.begin(115200, SERIAL_8N1, -1, -1); // at CPU Freq is 40MHz, work half speed of defined.\n\n  while(!Serial);   //When the serial port is opened, the program starts to execute.\n\n  Serial.println("Readly");\n\n  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.\n  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.\n}\n\nvoid loop()\n{\n  // put your main code here, to run repeatedly:\n  radar.Breath_Heart();           //Breath and heartbeat information output\n  if(radar.sensor_report != 0x00){\n    switch(radar.sensor_report){\n      case HEARTRATEVAL:\n        Serial.print("Sensor monitored the current heart rate value is: ");\n        Serial.println(radar.heart_rate, DEC);\n        Serial.println("----------------------------");\n        break;\n      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on\n        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");\n        Serial.print(radar.heart_point_1);\n        Serial.print(", point 2 : ");\n        Serial.print(radar.heart_point_2);\n        Serial.print(", point 3 : ");\n        Serial.print(radar.heart_point_3);\n        Serial.print(", point 4 : ");\n        Serial.print(radar.heart_point_4);\n        Serial.print(", point 5 : ");\n        Serial.println(radar.heart_point_5);\n        Serial.println("----------------------------");\n        break;\n      case BREATHNOR:\n        Serial.println("Sensor detects current breath rate is normal.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHRAPID:\n        Serial.println("Sensor detects current breath rate is too fast.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHSLOW:\n        Serial.println("Sensor detects current breath rate is too slow.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHNONE:\n        Serial.println("There is no breathing information yet, please wait...");\n        Serial.println("----------------------------");\n        break;\n      case BREATHVAL:\n        Serial.print("Sensor monitored the current breath rate value is: ");\n        Serial.println(radar.breath_rate, DEC);\n        Serial.println("----------------------------");\n        break;\n      case BREATHWAVE:  //Valid only when real-time data transfer mode is on\n        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");\n        Serial.print(radar.breath_point_1);\n        Serial.print(", point 2 : ");\n        Serial.print(radar.breath_point_2);\n        Serial.print(", point 3 : ");\n        Serial.print(radar.breath_point_3);\n        Serial.print(", point 4 : ");\n        Serial.print(radar.breath_point_4);\n        Serial.print(", point 5 : ");\n        Serial.println(radar.breath_point_5);\n        Serial.println("----------------------------");\n        break;\n    }\n  }\n  delay(200);                       //Add time delay to avoid program jam\n}\n')),(0,i.yg)("p",null,"Please upload the program, then open the serial monitor and set the baud rate to 115200."),(0,i.yg)("p",null,"Next, we can connect the sensor to the XIAO ESP32C3 using the following connection method."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"})),(0,i.yg)("p",null,"If all goes well, you will see data messages on the serial monitor."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png",alt:"pir",width:"800",height:"auto"})),(0,i.yg)("h3",{id:"serial1-usage"},"Serial1 Usage"),(0,i.yg)("p",null,"According to the above XIAO ESP32C3 Pin diagrams for specific parameters, we can observe that there are TX pin and RX pin.\nThis is different from serial communication, but the usage is also very similar, except that a few parameters need to be added.\nSo next, we will use the pins led out by the chip for serial communication."),(0,i.yg)("p",null,"Core Function that need to be include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);")," -- enalbe Serial1,the function prototype : ",(0,i.yg)("inlineCode",{parentName:"li"},"<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"baud"),"  :baud rate"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"config"),":Configuration bit"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"rxPin")," :Receive Pin"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"txPin")," :Send Pin")))),(0,i.yg)("p",null,"It is worth nothing that if we use digital pin port to define,this place should be",(0,i.yg)("inlineCode",{parentName:"p"},"#define RX_PIN D7"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"#define TX_PIN D6"),",please refer to the pin diagrams of different XIAO Series for specific parameters."),(0,i.yg)("p",null,"Here is an example program:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c"},'#define RX_PIN D7\n#define TX_PIN D6\n#define BAUD 115200\n\nvoid setup() {\n    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);\n}\n \nvoid loop() {\n  if(Serial1.available() > 0)\n  {\n    char incominByte = Serial1.read();\n    Serial1.print("I received : ");\n    Serial1.println(incominByte);\n  }\n  delay(1000);\n}\n')),(0,i.yg)("p",null,'After uploading the program, open the Serial Monitor in Arduino IDE and set the baud rate to 115200.then,you can send content you want in the XIAO ESP32C3 through the serial monitor Serial ,and XIAO will print out each byte of the content you send.,In here,the content i entered is "Hello Everyone",my result chart is as follows'),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png",style:{width:600,height:"auto"}})),(0,i.yg)("h3",{id:"software-serial"},"Software Serial"),(0,i.yg)("p",null,"To use software serial, install the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/plerup/espsoftwareserial"},"EspSoftwareSerial")," library."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Currently we recommend version 7.0.0 of the EspSoftwareSerial library. Other versions may have varying degrees of problems that prevent the soft serial port from working properly.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <SoftwareSerial.h>\n\nSoftwareSerial mySerial(D7, D6); // RX, TX\n\nvoid setup() {\n  Serial.begin(9600);\n  mySerial.begin(9600);\n}\n\nvoid loop() {\n  if (mySerial.available()) {\n    char data = mySerial.read();\n    Serial.print("Received via software serial: ");\n    Serial.println(data);\n  }\n\n  if (Serial.available()) {\n    char data = Serial.read();\n    mySerial.print("Received via hardware serial: ");\n    mySerial.println(data);\n  }\n}\n')),(0,i.yg)("p",null,"This example sets up software serial on pins ",(0,i.yg)("inlineCode",{parentName:"p"},"D7 (RX)")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"D6 (TX)")," at 9600 baud. It monitors both the hardware serial (USB) and software serial ports, echoing received data between them."),(0,i.yg)("h2",{id:"i2c"},"I2C"),(0,i.yg)("h3",{id:"hardware-connection"},"Hardware connection"),(0,i.yg)("p",null,"Connect a ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html"},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)")," to XIAO ESP32C3 by following the hardware connection as follows."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)"),(0,i.yg)("th",{parentName:"tr",align:null},"XIAO ESP32C3"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SCL"),(0,i.yg)("td",{parentName:"tr",align:null},"SCL")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SDA"),(0,i.yg)("td",{parentName:"tr",align:null},"SDA")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"VCC"),(0,i.yg)("td",{parentName:"tr",align:null},"5V")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"GND"),(0,i.yg)("td",{parentName:"tr",align:null},"GND")))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"software-setup"},"Software setup"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Open Arduino IDE, navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Sketch > Include Library > Manage Libraries..."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Search for ",(0,i.yg)("strong",{parentName:"p"},"u8g2")," and install it"))),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Upload the following code to display text strings on the OLED Display")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'//#include <Arduino.h>\n#include <U8g2lib.h>\n \n#ifdef U8X8_HAVE_HW_SPI\n#include <SPI.h>\n#endif\n#ifdef U8X8_HAVE_HW_I2C\n#include <Wire.h>\n#endif\n\nU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C\n \nvoid setup(void) {\n  u8g2.begin();\n//  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180\n}\n \nvoid loop(void) {\n  u8g2.clearBuffer();                   // clear the internal memory\n  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font\n  u8g2.drawStr(0,15,"Hello World!");    // write something to the internal memory\n  u8g2.drawStr(0,30,"Hello World!");\n  u8g2.drawStr(0,40,"Hello World!");\n  u8g2.sendBuffer();                    // transfer internal memory to the display\n//  delay(1000);  \n}\n')),(0,i.yg)("h2",{id:"spi"},"SPI"),(0,i.yg)("h3",{id:"hardware-connection-1"},"Hardware connection"),(0,i.yg)("p",null,"Connect a ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html"},"Grove - High Precision Barometric Pressure Sensor (DPS310)")," to XIAO ESP32C3 by following the hardware connection as follows."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Grove - High Precision Barometric Pressure Sensor (DPS310)"),(0,i.yg)("th",{parentName:"tr",align:null},"XIAO ESP32C3"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"3V3"),(0,i.yg)("td",{parentName:"tr",align:null},"3V3")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SDI"),(0,i.yg)("td",{parentName:"tr",align:null},"MOSI")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"GND"),(0,i.yg)("td",{parentName:"tr",align:null},"GND")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SDO"),(0,i.yg)("td",{parentName:"tr",align:null},"MISO")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"CSK"),(0,i.yg)("td",{parentName:"tr",align:null},"SCK")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"CS"),(0,i.yg)("td",{parentName:"tr",align:null},"CS")))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"software-setup-1"},"Software setup"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1"),". Download ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_DPS310"},"Seeed_Arduino_DPS310 Library")," as a zip file")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2"),". Open Arduino IDE, navigate to ",(0,i.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,i.yg)("inlineCode",{parentName:"li"},"File > Examples > DigitalPressureSensor > spi_background")," to open the ",(0,i.yg)("strong",{parentName:"li"},"spi_background")," example")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png",alt:"pir",width:450,height:"auto"})),(0,i.yg)("p",null,"Alternatively you can copy the code from below as well"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Dps310.h>\n\n// Dps310 Opject\nDps310 Dps310PressureSensor = Dps310();\n\nvoid setup() {\n    //pin number of your slave select line\n    //XMC2GO\n    int16_t pin_cs = SS;\n    //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line\n    //int16_t pin_cs = 10;\n\n    Serial.begin(9600);\n    while (!Serial);\n\n\n    //Call begin to initialize Dps310\n    //The parameter pin_nr is the number of the CS pin on your Microcontroller\n    Dps310PressureSensor.begin(SPI, pin_cs);\n\n    //temperature measure rate (value from 0 to 7)\n    //2^temp_mr temperature measurement results per second\n    int16_t temp_mr = 2;\n    //temperature oversampling rate (value from 0 to 7)\n    //2^temp_osr internal temperature measurements per result\n    //A higher value increases precision\n    int16_t temp_osr = 2;\n    //pressure measure rate (value from 0 to 7)\n    //2^prs_mr pressure measurement results per second\n    int16_t prs_mr = 2;\n    //pressure oversampling rate (value from 0 to 7)\n    //2^prs_osr internal pressure measurements per result\n    //A higher value increases precision\n    int16_t prs_osr = 2;\n    //startMeasureBothCont enables background mode\n    //temperature and pressure ar measured automatically\n    //High precision and hgh measure rates at the same time are not available.\n    //Consult Datasheet (or trial and error) for more information\n    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);\n    //Use one of the commented lines below instead to measure only temperature or pressure\n    //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);\n    //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);\n\n\n    if (ret != 0) {\n        Serial.print("Init FAILED! ret = ");\n        Serial.println(ret);\n    } else {\n        Serial.println("Init complete!");\n    }\n}\n\n\n\nvoid loop() {\n    uint8_t pressureCount = 20;\n    float pressure[pressureCount];\n    uint8_t temperatureCount = 20;\n    float temperature[temperatureCount];\n\n    //This function writes the results of continuous measurements to the arrays given as parameters\n    //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called\n    //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays\n    //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won\'t save any new measurement results\n    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);\n\n    if (ret != 0) {\n        Serial.println();\n        Serial.println();\n        Serial.print("FAIL! ret = ");\n        Serial.println(ret);\n    } else {\n        Serial.println();\n        Serial.println();\n        Serial.print(temperatureCount);\n        Serial.println(" temperature values found: ");\n        for (int16_t i = 0; i < temperatureCount; i++) {\n            Serial.print(temperature[i]);\n            Serial.println(" degrees of Celsius");\n        }\n\n        Serial.println();\n        Serial.print(pressureCount);\n        Serial.println(" pressure values found: ");\n        for (int16_t i = 0; i < pressureCount; i++) {\n            Serial.print(pressure[i]);\n            Serial.println(" Pascal");\n        }\n    }\n\n    //Wait some time, so that the Dps310 can refill its buffer\n    delay(10000);\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Upload the codes and open the ",(0,i.yg)("strong",{parentName:"li"},"Serial Monitor"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,i.yg)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("p",null,"Now you will see the temperature and pressure data displayed one after the other on the serial monitor as above!"),(0,i.yg)("h2",{id:"note-on-xiao-esp32c3-io-allocation"},"Note on XIAO ESP32C3 IO allocation"),(0,i.yg)("h3",{id:"d9"},"D9"),(0,i.yg)("p",null,"The XIAO ESP32C3's D9 connects to the ESP32-C3's GPIO9 (15), pull-up resistor (R6), and BOOT button.The BOOT button (and RESET button) allows you to manually switch the ESP32-C3's Boot Mode."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("p",null,"Pressing the BOOT button connects D9 to GND. ",(0,i.yg)("strong",{parentName:"p"},"So it is better to use D9 as a switch input"),"."),(0,i.yg)("h3",{id:"d6"},"D6"),(0,i.yg)("p",null,"D6 of the XIAO ESP32C3 is connected to U0TXD (28) of the ESP32-C3. The operating status of the 1st/2nd stage bootloader is output as text to U0TXD."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png",alt:"pir",width:400,height:"auto"})),(0,i.yg)("p",null,"D6 is set as a UART output at startup, so if you use D6 as an input, you may accidentally generate a high current. ",(0,i.yg)("strong",{parentName:"p"},"So it is recommended to use the D6 pin only in output mode"),"."),(0,i.yg)("p",null,"However, since this D6 is a UART output, you have to be careful about a few things: one is that it is HIGH in standby mode when not communicating. The other is the text output of the 1st/2nd stage bootloader. The signal flaps HIGH/LOW immediately after start-up and must be counteracted if necessary."),(0,i.yg)("p",null,"So try not to use D6. (It's okay to use it after you understand it, of course.)"),(0,i.yg)("h3",{id:"d8"},"D8"),(0,i.yg)("p",null,"D8 of the Seeed Studio XIAO ESP32C3 is connected to GPIO8 (14) of the ESP32-C3. "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png",alt:"pir",width:300,height:"auto"})),(0,i.yg)("p",null,"GPIO8 is referenced when the boot mode is set to download boot by holding down the BOOT button and must be HIGH at that time. (",(0,i.yg)("a",{parentName:"p",href:"https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf"},"Here"),' it says: "The strapping combination of GPIO8 = 0 and GPIO9 = 0 is invalid and will trigger unexpected behaviour.")'),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png",alt:"pir",width:700,height:"auto"})),(0,i.yg)("p",null,"If you use download boot, ",(0,i.yg)("strong",{parentName:"p"},"add a pullup resistor to make GPIO8 HIGH at boot time"),"."),(0,i.yg)("p",null,"A special thanks to SeeedJP colleague ",(0,i.yg)("strong",{parentName:"p"},"matsujirushi")," for testing and contributing to this section. Here is the reference link to the original article."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://lab.seeed.co.jp/entry/2023/04/03/120000"},"Seeed Studio XIAO ESP32C3\u306eI/O\u5272\u308a\u4ed8\u3051\u306b\u6ce8\u610f"))))}g.isMDXComponent=!0}}]);