"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8626],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,y=c["".concat(l,".").concat(u)]||c[u]||g[u]||r;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(9668),a=(n(96540),n(15680));const r={description:"Guide on how to transfer recognition data from Vision AI V2 via RS485",title:"RS485 transmission of Vision AI V2 data",keywords:["RS485","Vision AI"],image:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp",slug:"/grove_vision_ai_v2_rs485",last_update:{date:"12/19/2024",author:"Jason"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove_vision_ai_v2_RS485",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove_vision_ai_v2_RS485",title:"RS485 transmission of Vision AI V2 data",description:"Guide on how to transfer recognition data from Vision AI V2 via RS485",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove_vision_ai_v2_RS485.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2",slug:"/grove_vision_ai_v2_rs485",permalink:"/grove_vision_ai_v2_rs485",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Grove_vision_ai_v2_RS485.md",tags:[],version:"current",lastUpdatedBy:"Jason",lastUpdatedAt:1734566400,formattedLastUpdatedAt:"Dec 19, 2024",frontMatter:{description:"Guide on how to transfer recognition data from Vision AI V2 via RS485",title:"RS485 transmission of Vision AI V2 data",keywords:["RS485","Vision AI"],image:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp",slug:"/grove_vision_ai_v2_rs485",last_update:{date:"12/19/2024",author:"Jason"}},sidebar:"ProductSidebar",previous:{title:"Deploying Models from Datasets to Grove Vision AI V2",permalink:"/grove_vision_ai_v2_sscma"},next:{title:"Developing Grove Vision AI V2 using Himax SDK",permalink:"/grove_vision_ai_v2_himax_sdk"}},l={},p=[{value:"Hadware Preparation",id:"hadware-preparation",level:3},{value:"Connection method",id:"connection-method",level:3},{value:"Software Prearation",id:"software-prearation",level:2},{value:"Sender Code",id:"sender-code",level:3},{value:"Code Detailed Functions",id:"code-detailed-functions",level:3},{value:"Receiver Code",id:"receiver-code",level:3},{value:"Code Detailed Functions",id:"code-detailed-functions-1",level:3},{value:"Results Chart",id:"results-chart",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.jpg",style:{width:500,height:"auto"}})),(0,a.yg)("h3",{id:"hadware-preparation"},"Hadware Preparation"),(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Seeed Studio XIAO ESP32S3"),(0,a.yg)("th",null,"Grove Vision AI V2"),(0,a.yg)("th",null,"OV5647-62 FOV Camera Module",(0,a.yg)("br",null),"for Raspberry Pi 3B+4B"),(0,a.yg)("th",null,"Seeed Studio XIAO RS485-Expansion-Board")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))))),(0,a.yg)("h3",{id:"connection-method"},"Connection method"),(0,a.yg)("p",null,"First of all, prepare two expansion boards, two XIAO series development boards, and one Vision AI V2, and connect the corresponding pins according to the diagram\uff0cThis routine uses the XIAO ESP32C3 as a demo."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1 . Prepare two RS485 expansion boards and two XIAO series development boards and connect the pins according to the following figure")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connect_modifg.png",style:{width:700,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2 . Prepare Vision AI V2 to be mounted on the reverse side of one of the two RS485 expansion boards as a sender")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/11.jpg",style:{width:500,height:"auto"}})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you are using an RS485 expansion board for the first time and are not sure how to wire it, click on this link(",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO-RS485-Expansion-Board/"},"https://wiki.seeedstudio.com/XIAO-RS485-Expansion-Board/"),")"),(0,a.yg)("p",{parentName:"admonition"},"If you don't know how to burn the model and add the model output code, click on this link(",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/"},"https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/"),"), which will tell you each step in detail"),(0,a.yg)("p",{parentName:"admonition"},"For better subsequent use, do not skip these two steps\uff01")),(0,a.yg)("h2",{id:"software-prearation"},"Software Prearation"),(0,a.yg)("h3",{id:"sender-code"},"Sender Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Seeed_Arduino_SSCMA.h>\n\n#ifdef ESP32\n#include <HardwareSerial.h>\n\nHardwareSerial Serial3(1); \n\n// Define two Serial devices mapped to the two internal UARTs\nHardwareSerial atSerial(0);\n\n#else\n#define atSerial Serial1\n#endif\n\n#define enable_pin D2 // Define the enable pin as D2\n\nSSCMA AI;\n\nvoid setup()\n{\n    Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit\n    Serial.begin(9600); // Initialize Serial for debugging output\n    AI.begin(&atSerial); // Initialize the AI module with the AT serial\n\n    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output\n    digitalWrite(enable_pin, HIGH); // Set the enable pin to high to enable the AI module\n}\n\nvoid loop()\n{\n    if (!AI.invoke(1, false, true)) { // Invoke the AI to start processing\n\n        Serial.println("invoke success"); // Print success message\n\n        // Print performance metrics\n        Serial.print("perf: prepocess=");\n        Serial.print(AI.perf().prepocess);\n        Serial.print(", inference=");\n        Serial.print(AI.perf().inference);\n        Serial.print(", postpocess=");\n        Serial.println(AI.perf().postprocess);\n\n        // Loop through detected boxes\n        for (int i = 0; i < AI.boxes().size(); i++) {\n            Serial.print("Box[");\n            Serial.print(i);\n            Serial.print("] target=");\n            Serial.print(AI.boxes()[i].target);\n            Serial.print(", score=");\n            Serial.print(AI.boxes()[i].score);\n            Serial.print(", x=");\n            Serial.print(AI.boxes()[i].x);\n            Serial.print(", y=");\n            Serial.print(AI.boxes()[i].y);\n            Serial.print(", w=");\n            Serial.print(AI.boxes()[i].w);\n            Serial.print(", h=");\n            Serial.println(AI.boxes()[i].h);\n        }\n\n        // Loop through detected classes\n        for (int i = 0; i < AI.classes().size(); i++) {\n            Serial.print("Class[");\n            Serial.print(i);\n            Serial.print("] target=");\n            Serial.println(AI.classes()[i].target);\n\n            // Check the target class and send corresponding status\n            if (AI.classes()[i].target == 0) {\n                String status_a = "no people detected"; // Define status for no people detected\n                Serial3.println(status_a); // Send status to Serial3\n                Serial.println(status_a); // Print status to Serial monitor\n            } else if (AI.classes()[i].target == 1) {\n                String status_b = "people detected"; // Define status for people detected\n                Serial3.println(status_b); // Send status to Serial3\n                Serial.println(status_b); // Print status to Serial monitor\n            }\n        }\n        delay(1000); // Wait for 1 second before the next loop iteration\n    }\n}\n')),(0,a.yg)("h3",{id:"code-detailed-functions"},"Code Detailed Functions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Library Inclusion")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Include the ",(0,a.yg)("inlineCode",{parentName:"li"},"HardwareSerial")," library to use hardware serial functionality."),(0,a.yg)("li",{parentName:"ul"},"Include the ",(0,a.yg)("inlineCode",{parentName:"li"},"Seeed_Arduino_SSCMA")," library for AI module control."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Serial Object Creation")," "),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"HardwareSerial Serial3(1); \nHardwareSerial atSerial(0);\n")),(0,a.yg)("p",{parentName:"li"},"  Create Serial3 and atSerial objects for serial communication.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"AI Object Creation")," "),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"SSCMA AI;\n")),(0,a.yg)("p",{parentName:"li"},"  Create an instance of the SSCMA class for AI processing.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Performance Metrics")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'Serial.print("perf: prepocess=");\nSerial.print(AI.perf().prepocess);\nSerial.print(", inference=");\nSerial.print(AI.perf().inference);\nSerial.print(", postpocess=");\nSerial.println(AI.perf().postprocess);\n')),(0,a.yg)("p",{parentName:"li"},"  Print performance metrics of the AI processing stages: preprocessing, inference, and postprocessing."))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Detected Boxes Loop")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'\nfor (int i = 0; i < AI.boxes().size(); i++) {\n    Serial.print("Box[");\n    Serial.print(i);\n    Serial.print("] target=");\n    Serial.print(AI.boxes()[i].target);\n    Serial.print(", score=");\n    Serial.print(AI.boxes()[i].score);\n    Serial.print(", x=");\n    Serial.print(AI.boxes()[i].x);\n    Serial.print(", y=");\n    Serial.print(AI.boxes()[i].y);\n    Serial.print(", w=");\n    Serial.print(AI.boxes()[i].w);\n    Serial.print(", h=");\n    Serial.println(AI.boxes()[i].h);\n}\n')),(0,a.yg)("p",{parentName:"li"},"  Loop through detected boxes and print their details, including target, score, and bounding box coordinates.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Detected Classes Loop")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'for (int i = 0; i < AI.classes().size(); i++) {\n   Serial.print("Class[");\n   Serial.print(i);\n   Serial.print("] target=");\n   Serial.println(AI.classes()[i].target);\n')),(0,a.yg)("p",{parentName:"li"},"  Loop through detected classes and print their targets."))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Macro Definition")," ",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"pinMode(enable_pin, OUTPUT); // Set the enable pin as an output\ndigitalWrite(enable_pin, LOW);\n")),"  Define the enable pin as D2.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Send Message")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'// Check the target class and send corresponding status\nif (AI.classes()[i].target == 0) {\n    String status_a = "no people detected"; // Define status for no people detected\n    Serial3.println(status_a); // Send status to Serial3\n    Serial.println(status_a); // Print status to Serial monitor\n} else if (AI.classes()[i].target == 1) {\n    String status_b = "people detected"; // Define status for people detected\n    Serial3.println(status_b); // Send status to Serial3\n    Serial.println(status_b); // Print status to Serial monitor\n}\n')),(0,a.yg)("p",{parentName:"li"},"  Determine whether a person is detected, if a person is detected it is sent to the receiver PEOPLE DETECTED, if no person is detected it is sent to the receiver NO PEOPLE DETECTED."))),(0,a.yg)("h3",{id:"receiver-code"},"Receiver Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <HardwareSerial.h>\n\nHardwareSerial Serial3(1); // Use UART2\n#define enable_pin D2 // Define the enable pin as D2\n\n\nvoid setup() {\n  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200\n  Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit (RX=D4(GPIO4), TX=D5(GPIO5))\n  \n  // Wait for the hardware serial to be ready\n  while(!Serial3);\n  while(!Serial); // This line is generally unnecessary as Serial.begin() is ready immediately\n\n  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output\n  digitalWrite(enable_pin, LOW); // Set the enable pin to low to enable the device\n}\n\nvoid loop() {\n    delay(100); // Delay for 100 milliseconds\n    // Check if there is data available from the hardware serial\n    if (Serial3.available()) {\n        String receivedData = Serial3.readStringUntil('\\n'); // Read string until newline character\n        Serial.print(\"Received data: \"); // Print label for received data\n        Serial.println(receivedData); // Directly print the received data\n    }\n}\n")),(0,a.yg)("h3",{id:"code-detailed-functions-1"},"Code Detailed Functions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Library Inclusion")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Include the ",(0,a.yg)("inlineCode",{parentName:"li"},"HardwareSerial")," library to use hardware serial functionality."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Serial Object Creation")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Create a ",(0,a.yg)("inlineCode",{parentName:"li"},"Serial3")," object using UART2."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Macro Definition")," "),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"pinMode(enable_pin, OUTPUT); // Set the enable pin as an output\ndigitalWrite(enable_pin, LOW);\n")),(0,a.yg)("p",{parentName:"li"},"  Define the enable pin as D2.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Setup Function")," "),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Serial3.begin(115200, SERIAL_8N1, 7, 6);\n")),(0,a.yg)("p",{parentName:"li"},"  nitialize the main serial and Serial3, setting baud rate, data bits, etc.this is the serial port that communicates with the vision ai v2 to transfer data."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"while(!Serial3);\nwhile(!Serial); \n")),(0,a.yg)("p",{parentName:"li"},"  Wait for the all serial ports to be ready, set the enable pin as output, and pull it low to enable the device.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Loop Function")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"if (Serial3.available());"),": wCheck every 100 milliseconds if there is data available on Serial3."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"String receivedData = Serial3.readStringUntil('\\n');"),":If data is available, read it until a newline character and print the received data to the main serial."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Print results")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'Serial.print("Received data: "); \nSerial.println(receivedData); \n')),(0,a.yg)("p",{parentName:"li"},"  Printing the sender's message"))),(0,a.yg)("h3",{id:"results-chart"},"Results Chart"),(0,a.yg)("p",null,"However, the camera will send ",(0,a.yg)("strong",{parentName:"p"},"\u201cpeople detected\u201d")," when it recognizes a person and ",(0,a.yg)("strong",{parentName:"p"},'"no people detected"')," when it does not recognize a person, and the receiver will display the result of the sender's recognition on the serial port."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS485_V2AI/photo/result.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);