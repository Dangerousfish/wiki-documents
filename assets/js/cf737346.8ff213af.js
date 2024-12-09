"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60026],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,c=m["".concat(d,".").concat(u)]||m[u]||g[u]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(9668),r=(a(96540),a(15680));const l={description:"Nvidia Jetson Workspace on SenseCraft AI Platform",title:"reComputer Jetson Workspace",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/nvidia_jetson_workspace",sidebar_position:2,last_update:{date:"08/22/2024",author:"Frank"}},i=void 0,o={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/Nvidia_Jetson_Workspace",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/Nvidia_Jetson_Workspace",title:"reComputer Jetson Workspace",description:"Nvidia Jetson Workspace on SenseCraft AI Platform",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/Nvidia_Jetson_Workspace.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson",slug:"/nvidia_jetson_workspace",permalink:"/nvidia_jetson_workspace",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/Nvidia_Jetson_Workspace.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1724284800,formattedLastUpdatedAt:"Aug 22, 2024",sidebarPosition:2,frontMatter:{description:"Nvidia Jetson Workspace on SenseCraft AI Platform",title:"reComputer Jetson Workspace",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/nvidia_jetson_workspace",sidebar_position:2,last_update:{date:"08/22/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:"Tolkit for reComputer Jetson",permalink:"/sensecraft_ai_jetson"},next:{title:"Applications",permalink:"/sensecraft_ai_applications_main_page"}},d={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Add Device",id:"add-device",level:3},{value:"Device Information",id:"device-information",level:3},{value:"General Info",id:"general-info",level:3},{value:"Delete Device",id:"delete-device",level:3},{value:"Video Stream  Management",id:"video-stream--management",level:3},{value:"Real-time inference",id:"real-time-inference",level:4},{value:"Add Stream",id:"add-stream",level:4},{value:"Stream detail",id:"stream-detail",level:4},{value:"Edit Stream",id:"edit-stream",level:4},{value:"Delete Stream",id:"delete-stream",level:4},{value:"Device AI Model",id:"device-ai-model",level:3},{value:"<strong>Tech Support</strong>",id:"tech-support",level:2}],p={toc:s},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"Before adding a Jetson device to workspace, please first install the SenseCraft AI app to the jetson."),(0,r.yg)("p",null,'SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks! '),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hardware Requirements")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NVIDIA Jetson device"),(0,r.yg)("li",{parentName:"ul"},"Internet connectivity via Ethernet/ WiFi"),(0,r.yg)("li",{parentName:"ul"},"Display")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Software Requirements")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1.2 (L4T 35.4.1)"),(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1.1 (L4T 35.3.1)"),(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1 (L4T 35.2.1)")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Start"),(0,r.yg)("br",null)),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Connect Jetson to a display and power it on",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Plug a mouse and keyboard into the device and type the following command on a terminal to run the application")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"During application installation, you need to set the following optional configurations, so please set them according to your needs ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? ","[y/n]"," (default: y): y"),(0,r.yg)("br",null),"\nprovides the jetson_clocks script to maximize Jetson  performance by setting static max frequency to CPU, GPU, and EMC clocks.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) ","[y/n]"," (default: n): n"),(0,r.yg)("br",null),"\nIn the case of insufficient memory (especially jetson nano), it is better to enable swap to ensure the normal operation of the program.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Do you want to create or change the size of the Swap Memory? (/swapfile)?"),(0,r.yg)("br",null),"\nTo get better performance out of nano, turn on Swap.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Use external \xb7 to store the Docker data directory? (for docker images & volumes)?"),(0,r.yg)("br",null))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"(Recommended if your root partition is smaller than 32 GB). ","[y/n]"," (default: n): n"),(0,r.yg)("br",null)))),(0,r.yg)("p",null,"The edge ai program requires a minimum of 32G of storage space to run, if not, you can choose to mount the docker data volume to an external disk."),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Now you can experience SenseCraft AI-Jetson")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png",alt:null})),(0,r.yg)("h3",{id:"add-device"},"Add Device"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Click "Add Device" button on Device Workspace Page'),(0,r.yg)("li",{parentName:"ol"},"Enter a device custom name and get the bind code from device.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png",alt:null})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Back to device\u2018s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bind Code: enter the correct and valid bind code on SenseCraft AI-Model Zoo to finish binding the device."),(0,r.yg)("li",{parentName:"ul"},"Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png",alt:null})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'enter the correct and valid bind code and click "Comfirm" button')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Bind successfully,now you can manage the device "))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"every account only add 5 free device ")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png",alt:null})),(0,r.yg)("h3",{id:"device-information"},"Device Information"),(0,r.yg)("p",null,"The device information is divided into three parts, general information, video stream information and AI model."),(0,r.yg)("h3",{id:"general-info"},"General Info"),(0,r.yg)("p",null,"The device information is divided into three parts, general information, Video stream information and AI model. Please check the table below for details "),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png",alt:null})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Fields")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Content")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Device Name")),(0,r.yg)("td",{parentName:"tr",align:null},"Device custom name, user can change the name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Device SN")),(0,r.yg)("td",{parentName:"tr",align:null},"Unique production serial number of the device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Device EUI")),(0,r.yg)("td",{parentName:"tr",align:null},"Device EUI")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Online Status")),(0,r.yg)("td",{parentName:"tr",align:null},"Online: device is online",(0,r.yg)("br",null),"Offline: device is offline,user can\u2018t operate offline device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Equipped Module")),(0,r.yg)("td",{parentName:"tr",align:null},"The device's module")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"CPU Usage")),(0,r.yg)("td",{parentName:"tr",align:null},"Device CPU usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Memory")),(0,r.yg)("td",{parentName:"tr",align:null},"Device RAM usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Storage")),(0,r.yg)("td",{parentName:"tr",align:null},"Device disk usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"IP Address")),(0,r.yg)("td",{parentName:"tr",align:null},"The device network IP address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"MAC Address")),(0,r.yg)("td",{parentName:"tr",align:null},"The device MAC address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SenseCraft AI Version")),(0,r.yg)("td",{parentName:"tr",align:null},"Version of the SenseCraft AI Application installed on the device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Collect Time")),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the last information was collected from the device")))),(0,r.yg)("h3",{id:"delete-device"},"Delete Device"),(0,r.yg)("p",null,"If you have completed the deployment of the AI Model and do not need to manage the device remotely, you can remove the device from the platform and the device can do local inference, stream management and AI model management independently on the edge."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png",alt:null})),(0,r.yg)("h3",{id:"video-stream--management"},"Video Stream  Management"),(0,r.yg)("p",null,"Video Stream can view the real-time inference results remote and manage device video stream. supported add stream, edit stream  view stream,and delete stream."),(0,r.yg)("h4",{id:"real-time-inference"},"Real-time inference"),(0,r.yg)("p",null,"If video streams have been added to the device, users can view real-time inference results for all streams on the platform. Enables real-time monitoring of inference results and exceptions"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png",alt:null})),(0,r.yg)("h4",{id:"add-stream"},"Add Stream"),(0,r.yg)("p",null,'Click "Add Stream" and enter valid stream info, and then  click "Confirm" button to send the new stream to the device.   It takes time for the device to add a new stream, the platform information will be updated later. please check the below table for detail info.'),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The device must be online to add a new stream")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Fields")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Content")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Stream Name")),(0,r.yg)("td",{parentName:"tr",align:null},"1 custom name for this stream.",(0,r.yg)("br",null),"2 Cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Type")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Ip camera\uff1aAccess a IP camera, need input a valid rtsp url",(0,r.yg)("br",null),"2 Usb camera\uff1aConnect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Path")),(0,r.yg)("td",{parentName:"tr",align:null},'Video Path, format decided by "Video Type", if wrong, default video will be used.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Device AI Model")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Select an AI model which already downloaded on the device",(0,r.yg)("br",null),"2 If there is no AI model on your device, please go to AI Models page to download the model to your device.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Confidence Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Object confidence threshold for detection.",(0,r.yg)("br",null),"2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"IoU Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"FPS")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Frames per second of stream",(0,r.yg)("br",null),"2 Format: INT ","[1,60]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Quality")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Output stream quality.  Default: 50",(0,r.yg)("br",null),"2 Format: int ","[0,100]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Maximum Detections")),(0,r.yg)("td",{parentName:"tr",align:null},"1 maximum number of detections per image.Default:3002 Format: int ","[0,1000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Frame Rate")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the frame rate of the stream",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display FPS",(0,r.yg)("br",null),"\u25cf False: do not display FPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Clock")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the time",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display time",(0,r.yg)("br",null),"\u25cf False: do not display time")))),(0,r.yg)("h4",{id:"stream-detail"},"Stream detail"),(0,r.yg)("p",null,'Click the stream "Eye" icon,you will view the stream  detail info'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png",alt:null})),(0,r.yg)("h4",{id:"edit-stream"},"Edit Stream"),(0,r.yg)("p",null,'Click the stream "Edit" icon, users can edit all configurations of the stream and click "Confirm" button to send the modified stream info to the device.  It takes time for the device to update the streaming configuration, the platform information will be updated later'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png",alt:null})),(0,r.yg)("h4",{id:"delete-stream"},"Delete Stream"),(0,r.yg)("p",null,'Click the stream "Delete" icon to delete the stream. It takes time for the device to delete stream, the platform information will be updated later'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png",alt:null})),(0,r.yg)("h3",{id:"device-ai-model"},"Device AI Model"),(0,r.yg)("p",null,"Manage all AI models that have been downloaded on the device and support add model , view the model detail and delete model."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png",alt:null})),(0,r.yg)("h2",{id:"tech-support"},(0,r.yg)("strong",{parentName:"h2"},"Tech Support")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,r.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);