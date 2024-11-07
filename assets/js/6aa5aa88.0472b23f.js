"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17264],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(a),h=o,u=g["".concat(l,".").concat(h)]||g[h]||p[h]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(9668),o=(a(96540),a(15680));const r={description:"Meshtastic based on Wio SX1262 with XIAO esp32s3 module",title:"Get Started for Meshtastic",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_xiao_esp32s3_for_meshtastic",sidebar_position:2,last_update:{date:"09/30/2024",author:"Evelyn Chen"}},i=void 0,s={unversionedId:"Network/LoRa_Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Get_Started_meshtastic",id:"Network/LoRa_Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Get_Started_meshtastic",title:"Get Started for Meshtastic",description:"Meshtastic based on Wio SX1262 with XIAO esp32s3 module",source:"@site/docs/Network/LoRa_Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Get_Started_meshtastic.md",sourceDirName:"Network/LoRa_Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit",slug:"/wio_sx1262_xiao_esp32s3_for_meshtastic",permalink:"/wio_sx1262_xiao_esp32s3_for_meshtastic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/LoRa_Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Get_Started_meshtastic.md",tags:[],version:"current",lastUpdatedBy:"Evelyn Chen",lastUpdatedAt:1727654400,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:2,frontMatter:{description:"Meshtastic based on Wio SX1262 with XIAO esp32s3 module",title:"Get Started for Meshtastic",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_xiao_esp32s3_for_meshtastic",sidebar_position:2,last_update:{date:"09/30/2024",author:"Evelyn Chen"}},sidebar:"ProductSidebar",previous:{title:"Wio-SX1262 with XIAO ESP32S3 Kit Introduction",permalink:"/wio_sx1262_with_xiao_esp32s3_kit"},next:{title:"Single Channel LoRaWAN Gateway",permalink:"/wio_sx1262_xiao_esp32s3_for_single_channel_gateway"}},l={},d=[{value:"Flash Firmware",id:"flash-firmware",level:2},{value:"Software Overview",id:"software-overview",level:2},{value:"Device Connection",id:"device-connection",level:2},{value:"Method 1: Connected to Expansion board",id:"method-1-connected-to-expansion-board",level:3},{value:"Method 2: Serial port tool",id:"method-2-serial-port-tool",level:3},{value:"Communicate with Wio Tracker T1000-E",id:"communicate-with-wio-tracker-t1000-e",level:2},{value:"Sensor Connection",id:"sensor-connection",level:2},{value:"Temperature and Humidity Sensor",id:"temperature-and-humidity-sensor",level:3},{value:"GNSS Sensor",id:"gnss-sensor",level:3},{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Radio Configuration",id:"radio-configuration",level:3},{value:"Module Configuration",id:"module-configuration",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},g="wrapper";function p(e){let{components:t,...a}=e;return(0,o.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Meshtastic is an open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices. Seeed Studio provides a comprehensive range of ready-to-go Meshtastic devices for hobbyists and industrial users. Wio-SX1262 with XIAO ESP32S3 kit is flexible solution for meshtastic developer and maker."),(0,o.yg)("h2",{id:"flash-firmware"},"Flash Firmware"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Please flash the firmware before using Meshtastic.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),": Firstly, open a browser and visit ",(0,o.yg)("a",{parentName:"p",href:"https://flasher.meshtastic.org/#"},"https://flasher.meshtastic.org/#")," requires Chrome or Edge browser."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),": Then, use a suitable USB cable to connect the device to the PC. You may need to turn off, then ",(0,o.yg)("strong",{parentName:"p"},"press and hold the BOOT button")," while plugging in the USB cable."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),': Follow the following instruction provided to perform the subsequent flashing operations. Select the Device as "',(0,o.yg)("strong",{parentName:"p"},"Seeed XIAO S3"),'", Firmware as ',(0,o.yg)("strong",{parentName:"p"},"the lastest"),' one, and then click "',(0,o.yg)("strong",{parentName:"p"},"Flash"),'". Don\'t forget to tick "',(0,o.yg)("strong",{parentName:"p"},"Full Erase and Install"),'" if you want to cover previous firmware.'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif",style:{width:700,height:"auto"}})),(0,o.yg)("h2",{id:"software-overview"},"Software Overview"),(0,o.yg)("p",null,"Meshtastic provides multiple platform softwares for users to choose from, including Android app, Apple app, web client. It also provides Python CLI, Linux Native and integration methods for developers to use."),(0,o.yg)("p",null,"For specific information, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://meshtastic.org/docs/software/"},"the official website of Meshtastic"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/category/android-app/"},"Android App"),": Android application is available on F-Droid repo and Google Play Store. This allows you to connect to your Meshtastic device from your Android phone via Bluetooth, Wi-Fi (if on the same network) or USB On-The-Go (OTG)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/category/apple-apps/"},"Apple App"),": It is available on app store. By default, the Meshtastic app for iOS supports the use of native offline Apple Maps."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/software/web-client/"},"Web Client"),": Meshtastic Web is a Meshtastic client that runs directly in your browser."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/software/python/cli/"},"Python CLI"),': The python pip package installs a "meshtastic" command line executable, which displays packets sent over the network as JSON and lets you see serial debugging information from the meshtastic devices.'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/software/linux-native/"},"Linux Native"),": The device software can also run on a native Linux machine thanks to the Portduino framework."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://meshtastic.org/docs/software/integrations/"},"Meshtastic Integrations"),": The Meshtastic ecosystem is highly extensible and allows easy integration with a number of existing software products and projects.")),(0,o.yg)("h2",{id:"device-connection"},"Device Connection"),(0,o.yg)("p",null,"Before using Meshtastic, the device needs to be connected first. There are two connection methods. The first one is to use an expansion board, and the corresponding information will be displayed on the display. Then, the configuration can be carried out on the corresponding platform according to the reflected information. The second one is to connect the XIAO and the Wio SX1262 module, and use a serial port tool to obtain the node ID and password. "),(0,o.yg)("h3",{id:"method-1-connected-to-expansion-board"},"Method 1: Connected to Expansion board"),(0,o.yg)("p",null,"After flashing firmware and downloading Meshtastic app, Expansion board would be a good tool\nfor connection and additional application such as adding grove sensors and modules easily."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),': Ensure that the device to be connected (such as "device") is turned on and in a discoverable state. And open the Meshtastic app on your mobile phone.'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),': In the Meshtastic app, there is an "+" icon on bottom right. Click it to let the app start scanning for nearby connectable devices. Then select the corresponding device ID showing on OLED display.'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),": Once selected correctly, enter the code showing on OLED display. Press the botton to switch display."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Button Functions:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Press once to switch the screen."),(0,o.yg)("li",{parentName:"ul"},"Press twice to broadcast."),(0,o.yg)("li",{parentName:"ul"},"Press three times to switch the GPS mode.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4"),": Set the Lora region, then the device will reboot."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5"),": Finish reboot, the device status can be checked on Meshtastic app and OLED display."),(0,o.yg)("iframe",{class:"youtube-video-r",src:"https://www.youtube.com/embed/dzqx32lBJso",title:"Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,o.yg)("h3",{id:"method-2-serial-port-tool"},"Method 2: Serial port tool"),(0,o.yg)("p",null,"Select a serial port debugging tool you like. I will take Comtool on mac as an example below. Select the ",(0,o.yg)("strong",{parentName:"p"},"serial")," connection, choose ",(0,o.yg)("strong",{parentName:"p"},"the corresponding port"),", configure the baud rate as ",(0,o.yg)("strong",{parentName:"p"},"115200"),", and turn on ",(0,o.yg)("strong",{parentName:"p"},"RTS and DTR"),'. Open the connection and you can see the connection data.\nSearch for "',(0,o.yg)("strong",{parentName:"p"},"nodenum"),'" to find the corresponding node ID. Its default ',(0,o.yg)("strong",{parentName:"p"},"password is 123456"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png",style:{width:700,height:"auto"}})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},'The last four digits of nodenum are the device number ID discovered by the meshtastic app. For example, "nodenum 0x9e20d02c" is "Meshtastic_d02c" in meshtastic.')),(0,o.yg)("h2",{id:"communicate-with-wio-tracker-t1000-e"},"Communicate with Wio Tracker T1000-E"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),". Connect Wio Tracker T1000-E following ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/sensecap_t1000_e/#get-started-1"},"wiki"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),". Make sure the following setting is same as your configuration on XIAO ESP32S3 for Meshatastic. "),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Device activation and setup")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ensure that both devices are turned on and in normal working condition."),(0,o.yg)("li",{parentName:"ul"},"The wireless communication function of the device (such as Bluetooth, LoRa, etc.) should be enabled. Check the relevant settings to ensure that it is not accidentally turned off or restricted.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Distance and signal strength")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The distance between the two devices cannot be too far. After initail testing, the communication distance of XIAO ESP32S3 for Meshtastic with 2 dbm IPEX antenna is over 2.5 km. Generally speaking, in a more open environment, can be over 20 km.")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Network Settings")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ensure that the devices are in the same network mode or channel setting. Easily set to same 'lora region' and 'Modem preset' using Meshtastic APP.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png",style:{width:350,height:"auto"}})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),". Communicate with Wio Tracker T1000-E"),(0,o.yg)("p",null,"Once connected, you can start sending and receiving messages through the Meshtastic network. Messages can be text-based or may support additional features depending on the capabilities of the devices and the app. You can also monitor the network activity and see which devices are currently connected and active."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif",style:{width:350,height:"auto"}})),(0,o.yg)("iframe",{class:"youtube-video-r",src:"https://www.youtube.com/embed/vJN_4A8s4z0",title:"Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,o.yg)("h2",{id:"sensor-connection"},"Sensor Connection"),(0,o.yg)("p",null,"In the meshtastic application, the Wio SX1262 with XIAO esp32s3 kit is capable of supporting a wide range of sensors. When used in conjunction with the XIAO expansion board, it can support numerous grove sensors, please check ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10"},"here"),". Additionally, when combined with the GNSS add on module, it forms the smallest module within meshtastic that has GPS functionality."),(0,o.yg)("h3",{id:"temperature-and-humidity-sensor"},"Temperature and Humidity Sensor"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"DHT20 Temperature & Humidity Sensor")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg",style:{width:250,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),": Connect the Grove DHT20 sensor of the XIAO Expansion Board"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),": Enable ",(0,o.yg)("inlineCode",{parentName:"p"},"Detection Sensor")," in Meshtastic APP"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG",style:{width:350,height:"auto"}})),(0,o.yg)("h3",{id:"gnss-sensor"},"GNSS Sensor"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"L76K GNSS Module for XIAO")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg",style:{width:250,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"For more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://meshtastic.org/docs"},"Meshtastic"),".")),(0,o.yg)("h3",{id:"radio-configuration"},"Radio Configuration"),(0,o.yg)("p",null,"There are several config sections in the Meshtastic firmware, these are broken out so they can be sent as small admin messages over the mesh. "),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/bluetooth/"},"Bluetooth")),(0,o.yg)("td",{parentName:"tr",align:null},"Bluetooth config options are: Enabled, Pairing Mode and Fixed PIN.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/channels/"},"Channels")),(0,o.yg)("td",{parentName:"tr",align:null},"Channels config options are: Index, Role and Settings.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/device/"},"Device")),(0,o.yg)("td",{parentName:"tr",align:null},"Device config options are: Device Role, Serial Output, Debug Log and Factory Reset.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/display/"},"Display")),(0,o.yg)("td",{parentName:"tr",align:null},"Display config options are: Screen On Duration, Auto Carousel Interval, Always Point North, and GPS Format.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/lora/"},"LoRa")),(0,o.yg)("td",{parentName:"tr",align:null},"The LoRa config options are: Region, Modem Preset, Max Hops, Transmit Power, Bandwidth, Spread Factor, Coding Rate, Frequency Offset, Transmit Disabled and Ignore Incoming Array.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/network/"},"Network")),(0,o.yg)("td",{parentName:"tr",align:null},"Network config options are: WiFi Enabled, WiFi SSID, WiFi PSK, WiFi Mode and NTP Server.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/position/"},"Position")),(0,o.yg)("td",{parentName:"tr",align:null},"Position config options are: GPS Enabled, GPS Update Interval, GPS Attempt Time, Fixed Position, Smart Broadcast, Broadcast Interval and Position Packet Flags.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/power/"},"Power")),(0,o.yg)("td",{parentName:"tr",align:null},"Power config options are: Charge Current, Power Saving, Shutdown after losing power, ADC Multiplier Override Wait Bluetooth Interval, Light Sleep Interval and Minimum Wake Interval.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/radio/user/"},"User")),(0,o.yg)("td",{parentName:"tr",align:null},"User config options are: Long Name, Short Name, and Is Licensed.")))),(0,o.yg)("h3",{id:"module-configuration"},"Module Configuration"),(0,o.yg)("p",null,"Modules are included in the firmware and allow users to extend the functionality of their mesh or device."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/ambient-lighting/"},"Ambient Lighting")),(0,o.yg)("td",{parentName:"tr",align:null},"Adjust the brightness of NCP5623 I2C RGB LEDs.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/audio/"},"Audio")),(0,o.yg)("td",{parentName:"tr",align:null},"Enable Support for Codec2 Voice Comms on certain devices.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/canned-message/"},"Canned Message")),(0,o.yg)("td",{parentName:"tr",align:null},"Set a number of predefined messages to send out directly from the device with the use of an input device like a rotary encoder.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/detection-sensor/"},"Detection Sensor")),(0,o.yg)("td",{parentName:"tr",align:null},"Configure a GPIO pin to be monitored for specified high/low status and send text alerts.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/external-notification/"},"External Notification")),(0,o.yg)("td",{parentName:"tr",align:null},"Incoming messages are able to alert you using circuits you attach to the device (LEDs, Buzzers, etc).")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/mqtt/"},"MQTT")),(0,o.yg)("td",{parentName:"tr",align:null},"Forward packets along to an MQTT server. This allows users on the local mesh to communicate with users on another mesh over the internet.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/neighbor-info/"},"Neighbor Info")),(0,o.yg)("td",{parentName:"tr",align:null},"Send info on 0-hop neighbors to the mesh.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/paxcounter/"},"Paxcounter")),(0,o.yg)("td",{parentName:"tr",align:null},"Count the number of BLE and Wifi devices passing by a node.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/range-test/"},"Range Test")),(0,o.yg)("td",{parentName:"tr",align:null},"Send messages with GPS location at an interval to test the distance your devices can communicate. Requires (at least) one device set up as a sender and one as a receiver. The receiver(s) will log all incoming messages to a CSV.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/remote-hardware/"},"Remote Hardware")),(0,o.yg)("td",{parentName:"tr",align:null},"Set and read a GPIO status remotely over the mesh.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/serial/"},"Serial Module")),(0,o.yg)("td",{parentName:"tr",align:null},"Send messages across the mesh by sending strings over a serial port.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/store-and-forward-module/"},"Store & Forward")),(0,o.yg)("td",{parentName:"tr",align:null},"Stores messages on a device for delivery after disconnected clients rejoin the mesh.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/telemetry/"},"Telemetry")),(0,o.yg)("td",{parentName:"tr",align:null},"Attach sensors to the device and transmit readings on a regular interval to the mesh.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://meshtastic.org/docs/configuration/module/traceroute/"},"Traceroute")),(0,o.yg)("td",{parentName:"tr",align:null},"Track which nodes are used to hop a message to a certain destination.")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);