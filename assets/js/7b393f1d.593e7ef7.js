"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72660],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=g(a),u=i,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(y,l(l({ref:t},m),{},{components:a})):n.createElement(y,l({ref:t},m))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=a(9668),i=(a(96540),a(15680));const r={description:"Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)",title:"Getting started with MR60FDA2",keywords:["mmwave","radar","MR60FDA2"],image:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",slug:"/getting_started_with_mr60fda2_mmwave_kit",last_update:{date:"08/19/2024",author:"Spencer"}},l="Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)",o={unversionedId:"Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/getting_started_with_mr60fda2",id:"Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/getting_started_with_mr60fda2",title:"Getting started with MR60FDA2",description:"Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)",source:"@site/docs/Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/getting_started_with_mr60fda2.md",sourceDirName:"Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit",slug:"/getting_started_with_mr60fda2_mmwave_kit",permalink:"/getting_started_with_mr60fda2_mmwave_kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/getting_started_with_mr60fda2.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1724025600,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{description:"Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)",title:"Getting started with MR60FDA2",keywords:["mmwave","radar","MR60FDA2"],image:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",slug:"/getting_started_with_mr60fda2_mmwave_kit",last_update:{date:"08/19/2024",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"mmWave for XIAO to Home Assistant via Bluetooth or Wifi",permalink:"/mmwave_for_xiao_to_ha_bt"},next:{title:"MR60FDA2 Fall detection Sensor with Home Assistant",permalink:"/ha_with_mr60fda2"}},s={},g=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Application",id:"application",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation method and sensing range",id:"installation-method-and-sensing-range",level:3},{value:"Software Preparation (Arduino)",id:"software-preparation-arduino",level:3},{value:"Usage",id:"usage",level:3},{value:"Fall Module",id:"fall-module",level:4},{value:"Blink RGB LED",id:"blink-rgb-led",level:4},{value:"Light Sensor (BH1750)",id:"light-sensor-bh1750",level:4},{value:"Fall Module API",id:"fall-module-api",level:2},{value:"Open for Customization",id:"open-for-customization",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],m={toc:g},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"getting-started-with-60ghz-mmwave-fall-detection-sensor-kit-with-xiao-esp32c6-mr60fda2"},"Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg",style:{width:"auto",height:"auto"}})),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.yg)("br",null),(0,i.yg)("p",null,"Introducing our advanced ",(0,i.yg)("strong",{parentName:"p"},"mmWave Sensor Modules")," for XIAO, designed to provide cutting-edge monitoring solutions for both fall detection and ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_mr60bha2_mmwave_kit/"},"heartbeat")," monitoring. Powered by the robust XIAO ESP32 microcontroller with built-in Wi-Fi and Bluetooth connectivity, these modules offer precise and reliable detection capabilities. Whether you need to monitor falls in real-time or track heartbeats with sensitive accuracy, our modules are equipped with state-of-the-art technology, including customizable RGB LEDs and ambient light sensing. With easy expansion options through Grove GPIO ports, these versatile modules are perfect for a wide range of applications, from smart home integration to healthcare monitoring."),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Wi-Fi & Bluetooth Enabled"),": Both modules are powered by XIAO ESP32 with pre-flashed ESPHome firmware, ensuring quick setup and customization."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Fall Detection Module"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Precise Fall Detection"),": Covers a 3x3x3 meter area with a 100\xb0 x 40\xb0 detection angle."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Static Presence Detection"),": Monitors stationary individuals up to 6 meters away.")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Environmental Sensing"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"BH1750 Light Sensor"),": Measures ambient light from 1 to 65,535 lux."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"WS2812 RGB LED"),": Customizable LED for visual feedback and DIY projects."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Expandable Connectivity"),": Includes Grove GPIO ports for adding additional sensors and modules.")),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"th"},"General Parameters")),(0,i.yg)("th",{parentName:"tr",align:null}))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"mmWave Firmware")),(0,i.yg)("td",{parentName:"tr",align:null},"Fall Detection Monitoring")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Detection Range")),(0,i.yg)("td",{parentName:"tr",align:null},"Human Static Presence Detection: up to 6 Meters",(0,i.yg)("br",null),"Fall Detection: ",(0,i.yg)("br",null),"- 3x3x3 meter range",(0,i.yg)("br",null),"- Horizontal Field of View (FoV) of 120\xb0",(0,i.yg)("br",null),"- Vertical FoV of 100\xb0")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"MCU")),(0,i.yg)("td",{parentName:"tr",align:null},"Seeed Studio XIAO ESP32C6")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"LED")),(0,i.yg)("td",{parentName:"tr",align:null},"WS2812 RGB LED")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Button")),(0,i.yg)("td",{parentName:"tr",align:null},"Rest")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Light Sensor")),(0,i.yg)("td",{parentName:"tr",align:null},"BH1750 Range: 1 to 65,535 lux with adjustable measurements up to 100,000 lux")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Connectivity")),(0,i.yg)("td",{parentName:"tr",align:null},"1 GPIO Port (D0, D10)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Pin Header Spacing")),(0,i.yg)("td",{parentName:"tr",align:null},"2.54mm")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Power Supply")),(0,i.yg)("td",{parentName:"tr",align:null},"5V/1A Input")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Power consumption")),(0,i.yg)("td",{parentName:"tr",align:null},"0.5w: Standby Mode",(0,i.yg)("br",null),"0.8w: Activation Mode",(0,i.yg)("br",null),"1.4w: work with Grove Relay status")))),(0,i.yg)("h2",{id:"application"},"Application"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Security Systems"),(0,i.yg)("li",{parentName:"ul"},"Haelthcare Monitoring"),(0,i.yg)("li",{parentName:"ul"},"Smart Home Automation"),(0,i.yg)("li",{parentName:"ul"},"Elderly Care")),(0,i.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg",style:{"border-radius":"12.8px"}})),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("h3",{id:"installation-method-and-sensing-range"},"Installation method and sensing range"),(0,i.yg)("p",null,"Top-mounted hanging height 2.2-3.0m, maximum sensing radius 2m, the side with the mmWave sensor needs to align with the direction of detection."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png",style:{width:600,height:"auto"}})),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png",style:{width:600,height:"auto"}})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Please use this module in an open space, and stay out of the following scenarios within the detecting range to prevent interference with the module:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Multiple radars installed too close together  "),(0,i.yg)("li",{parentName:"ul"},"Wind moves curtains and sways plants"),(0,i.yg)("li",{parentName:"ul"},"Water flow and water film  "),(0,i.yg)("li",{parentName:"ul"},"Large areas of metal and mirror reflections  "),(0,i.yg)("li",{parentName:"ul"},"Detection through glass and thin wooden boards  "),(0,i.yg)("li",{parentName:"ul"},"Installation location prone to vibrations  "),(0,i.yg)("li",{parentName:"ul"},"Use of low-quality power supplies  "))),(0,i.yg)("h3",{id:"software-preparation-arduino"},"Software Preparation (Arduino)"),(0,i.yg)("admonition",{title:"Attention",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"By default, the MR60BHA2 comes pre-assembled with the ",(0,i.yg)("a",{parentName:"p",href:"/xiao_esp32c6_getting_started"},"XIAO ESP32C6"),", but it's compatible with various other microcontrollers for communication and integration.")),(0,i.yg)("p",null,"If this is your first time using Arduino with the XIAO series, follow the appropriate setup guide for your board:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"XIAO ESP32S3"),": Refer to the ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/"},"XIAO ESP32S3 Getting Started Guide"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"XIAO ESP32C3"),": Follow the ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/"},"Getting Started with Seeed Studio XIAO ESP32C3")," guide."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"XIAO ESP32C6"),": Follow the ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/"},"Getting Started with Seeed Studio XIAO ESP32C6")," guide.")),(0,i.yg)("p",null,"Once your board is set up, proceed with the following steps:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Download the Seeed mmWave Library"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Download the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},"Seeed mmWave library")," from GitHub.")),(0,i.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"github_item",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Download the Code")))," ",(0,i.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Install the Library in Arduino IDE"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Open the Arduino IDE."),(0,i.yg)("li",{parentName:"ul"},"Navigate to ",(0,i.yg)("strong",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library..."),"."),(0,i.yg)("li",{parentName:"ul"},"Select the downloaded ",(0,i.yg)("inlineCode",{parentName:"li"},".zip")," file to install the library."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Connect Your XIAO Board"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Plug your XIAO board into your computer via USB."),(0,i.yg)("li",{parentName:"ul"},"In the Arduino IDE, go to ",(0,i.yg)("strong",{parentName:"li"},"Tools > Board")," and select your XIAO board model."),(0,i.yg)("li",{parentName:"ul"},"Choose the correct port under ",(0,i.yg)("strong",{parentName:"li"},"Tools > Port"),"."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Load an Example Sketch"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Go to ",(0,i.yg)("strong",{parentName:"li"},"File > Examples > Seeed Arduino mmWave"),"."),(0,i.yg)("li",{parentName:"ul"},"Select the relevant example for either Fall Detection."),(0,i.yg)("li",{parentName:"ul"},"Review the code and make any necessary adjustments."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Upload the Sketch"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Upload")," to flash the code to your XIAO board."),(0,i.yg)("li",{parentName:"ul"},"Open the ",(0,i.yg)("strong",{parentName:"li"},"Serial Monitor")," in the Arduino IDE to view real-time sensor data.")))),(0,i.yg)("h3",{id:"usage"},"Usage"),(0,i.yg)("p",null,"This section provides example code snippets to help you quickly start using the Seeed Arduino mmWave Library with various functionalities, including fall detection, RGB LED control, and light sensing."),(0,i.yg)("h4",{id:"fall-module"},"Fall Module"),(0,i.yg)("p",null,"This example shows how to use the ",(0,i.yg)("strong",{parentName:"p"},"MR60FDA2")," sensor for fall detection."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include "Seeed_Arduino_mmWave.h"\n\n#ifdef ESP32\n#  include <HardwareSerial.h>\nHardwareSerial mmWaveSerial(0);\n#else\n#  define mmWaveSerial Serial1\n#endif\n\nSEEED_MR60FDA2 mmWave;\n\nvoid setup() {\nSerial.begin(115200);\nmmWave.begin(&mmWaveSerial);\n\ndelay(1000);\n\nuint32_t sensitivity = 15;\nfloat height = 3.0, threshold = 1.0;\nfloat rect_XL, rect_XR, rect_ZF, rect_ZB;\n\nif (mmWave.setInstallationHeight(height)) {\n Serial.printf("setInstallationHeight success: %.2f\\n", height);\n} else {\n Serial.println("setInstallationHeight failed");\n}\n\nif (mmWave.setThreshold(threshold)) {\n Serial.printf("setThreshold success: %.2f\\n", threshold);\n} else {\n Serial.println("setThreshold failed");\n}\n\nif (mmWave.setSensitivity(sensitivity)) {\n Serial.printf("setSensitivity success %d\\n", sensitivity);\n} else {\n Serial.println("setSensitivity failed");\n}\n\nif (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,\n                             rect_XR, rect_ZF, rect_ZB)) {\n Serial.printf("height: %.2f\\tthreshold: %.2f\\tsensitivity: %d\\n", height,\n               threshold, sensitivity);\n Serial.printf(\n     "rect_XL: %.2f\\trect_XR: %.2f\\trect_ZF: %.2f\\trect_ZB: %.2f\\n", rect_XL,\n     rect_XR, rect_ZF, rect_ZB);\n} else {\n Serial.println("getRadarParameters failed");\n}\n}\n\nvoid loop() {\nif (mmWave.update(100)) {\n bool is_human = mmWave.getHuman();\n if (is_human) {\n   Serial.printf("People Exist: %s\\n", is_human ? "true" : "false");\n }\n\n bool is_fall = mmWave.getFall();\n if (is_fall) {\n   Serial.printf("isFall: %s\\n", is_fall ? "true" : "false");\n }\n}\n}\n')),(0,i.yg)("p",null,"The output will be as follows on Arduino Serial Monitor:"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/fall_detection.png",style:{width:700,height:"auto"}})),(0,i.yg)("h4",{id:"blink-rgb-led"},"Blink RGB LED"),(0,i.yg)("p",null,"This example demonstrates how to control an RGB LED using the NeoPixel library."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,i.yg)("inlineCode",{parentName:"li"},"Adafruit_NeoPixel")," library")),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("strong",{parentName:"p"},"Sketch > Include Liarbry > Manage Libraries..."),", and search ",(0,i.yg)("strong",{parentName:"p"},"Adafruit_NeoPixel"),", install the lastest version."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Copy following code to a new sketch:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Adafruit_NeoPixel.h>\n#include <Arduino.h>\n\nconst int pixelPin = D1;\n\nAdafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\nSerial.begin(115200);\npixels.begin();\npixels.clear();\npixels.show();\n}\n\nvoid loop() {\nfor (int i = 0; i < 10; i++) {\n pixels.setPixelColor(0, pixels.Color(255, 0, 0));\n pixels.show();\n delay(100);\n pixels.setPixelColor(0, pixels.Color(0, 0, 0));\n pixels.show();\n delay(100);\n}\n\nfor (int i = 255; i >= 0; i--) {\n pixels.setPixelColor(0, pixels.Color(i, 0, 0));\n pixels.show();\n delay(10);\n}\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Select the correct board and port number to upload the program.")),(0,i.yg)("p",null,"Once the program is successfully uploaded, you will see RGB LED on the right side of the mmWave Sensor Modules is blinking."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif",style:{width:700,height:"auto"}})),(0,i.yg)("h4",{id:"light-sensor-bh1750"},"Light Sensor (BH1750)"),(0,i.yg)("p",null,"This example shows how to read light intensity values using the BH1750 sensor."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,i.yg)("inlineCode",{parentName:"li"},"hp_BH1750")," library")),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("strong",{parentName:"p"},"Sketch > Include Liarbry > Manage Libraries..."),", and search ",(0,i.yg)("strong",{parentName:"p"},"hp_BH1750"),", install the lastest version."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Copy following code to a new sketch:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <hp_BH1750.h>\n\nhp_BH1750 BH1750;\n\nvoid setup() {\nSerial.begin(9600);\n\nbool avail = BH1750.begin(BH1750_TO_GROUND);\n\nif (!avail) {\n Serial.println("No BH1750 sensor found!");\n while (true) {}\n}\n\nSerial.printf("conversion time: %dms\\n", BH1750.getMtregTime());\nBH1750.start();\n}\n\nvoid loop() {\nif (BH1750.hasValue()) {\n float lux = BH1750.getLux();\n Serial.println(lux);\n\n BH1750.start();\n}\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Select the correct board and port number to upload the program.")),(0,i.yg)("p",null,"The output will be as follows on Arduino Serial Monitor:"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png",style:{width:700,height:"auto"}})),(0,i.yg)("h2",{id:"fall-module-api"},"Fall Module API"),(0,i.yg)("p",null,"This example uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"SEEED_MR60FDA2")," class to interface with the MR60FDA2 sensor for fall detection. Here\u2019s what each key function does:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.begin(&mmWaveSerial)")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Initializes the sensor for communication, setting up the serial connection between the XIAO board and the MR60FDA2 sensor."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.setInstallationHeight(float height)")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Sets the installation height of the radar, which is crucial for accurate fall detection. The ",(0,i.yg)("inlineCode",{parentName:"li"},"height")," parameter specifies the height (in meters) at which the sensor is installed, initialization\nsetting parameters is ",(0,i.yg)("inlineCode",{parentName:"li"},"2.2 m"),", with a valid range typically between 1 and 5 meters."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.setThreshold(float threshold)")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Sets the fall detection threshold. The default fall threshold of the radar is ",(0,i.yg)("inlineCode",{parentName:"li"},"0.6 m"),". This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.setSensitivity(uint32_t sensitivity)")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adjusts the sensitivity of the radar for fall detection. The sensitivity initial value is ",(0,i.yg)("inlineCode",{parentName:"li"},"3"),", which represents an average of 3 frames of data. And typically value ranges from 3 to 10, with higher values making the sensor more responsive to potential falls."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.getHuman()")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Checks if a human presence is detected by the radar. Returns ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," if a human is detected, and ",(0,i.yg)("inlineCode",{parentName:"li"},"false")," otherwise."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"mmWave.getFall()")),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Determines whether a fall has been detected. This function returns ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," if a fall is detected and ",(0,i.yg)("inlineCode",{parentName:"li"},"false")," if not.")))),(0,i.yg)("h2",{id:"open-for-customization"},"Open for Customization"),(0,i.yg)("p",null,"Want to tailor-make the kit to fit your unique applications?"),(0,i.yg)("p",null,"For more information about 3D point cloud data generation and interference zone configuration when customizing mmWave modules. Seeed provides one-stop R&D customization and manufacturing services for fast development from concept to production. Contact us at ",(0,i.yg)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")," to learn more."),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"STP"),": ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/xiao_mm_wave.stp"},"mmWave 3D Case")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"GitHub Repository"),": Access the full codebase and documentation at the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Love4yzp/Seeed-mmWave-library"},"Seeed mmWave Library GitHub page"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ESPHome Documentation"),": For further customization and integration, refer to the ",(0,i.yg)("a",{parentName:"li",href:"https://esphome.io/"},"ESPHome documentation"),".")),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}d.isMDXComponent=!0}}]);