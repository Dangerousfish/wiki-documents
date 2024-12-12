"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12195],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(y,o(o({ref:t},g),{},{components:a})):n.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(9668),r=(a(96540),a(15680));const l={description:"SenseCraft AI Jetson",title:"Tolkit for reComputer Jetson",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_ai_jetson",sidebar_position:1,last_update:{date:"08/16/2024",author:"Frank"}},o=void 0,i={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/SenseCraft_AI_Jetson",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/SenseCraft_AI_Jetson",title:"Tolkit for reComputer Jetson",description:"SenseCraft AI Jetson",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/SenseCraft_AI_Jetson.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson",slug:"/sensecraft_ai_jetson",permalink:"/sensecraft_ai_jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Output/recomputer_jetson/SenseCraft_AI_Jetson.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1723766400,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:1,frontMatter:{description:"SenseCraft AI Jetson",title:"Tolkit for reComputer Jetson",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_ai_jetson",sidebar_position:1,last_update:{date:"08/16/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:"Use SSCMACore library output model info",permalink:"/sensecraft_ai_sscmacore_library"},next:{title:"reComputer Jetson Workspace",permalink:"/nvidia_jetson_workspace"}},s={},p=[{value:"Install SenseCraft AI-Jetson",id:"install-sensecraft-ai-jetson",level:2},{value:"<strong>Deploy new models</strong>",id:"deploy-new-models",level:3},{value:"<strong>Streams management</strong>",id:"streams-management",level:3},{value:"<strong>Add Stream</strong>",id:"add-stream",level:4},{value:"<strong>Delete Stream</strong>",id:"delete-stream",level:4},{value:"<strong>AI Model Management</strong>",id:"ai-model-management",level:3},{value:"<strong>Settings</strong>",id:"settings",level:3},{value:"<strong>About</strong>",id:"about",level:4},{value:"<strong>Bind to SenseCraft AI platform</strong>",id:"bind-to-sensecraft-ai-platform",level:4},{value:"<strong>Ubind</strong>",id:"ubind",level:4},{value:"<strong>App Update</strong>",id:"app-update",level:3},{value:"<strong>Tech Support</strong>",id:"tech-support",level:2}],g={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,'SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks! '),(0,r.yg)("p",null,"In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif",alt:null})),(0,r.yg)("h2",{id:"install-sensecraft-ai-jetson"},"Install SenseCraft AI-Jetson"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hardware Requirements")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NVIDIA Jetson device"),(0,r.yg)("li",{parentName:"ul"},"Internet connectivity via Ethernet/ WiFi"),(0,r.yg)("li",{parentName:"ul"},"Display")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Software Requirements")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1.2 (L4T 35.4.1)"),(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1.1 (L4T 35.3.1)"),(0,r.yg)("li",{parentName:"ul"},"JetPack 5.1 (L4T 35.2.1)")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Start"),(0,r.yg)("br",null)),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Connect Jetson to a display and power it on",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Plug a mouse and keyboard into the device and type the following command on a terminal to run the application")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"During application installation, you need to set the following optional configurations, so please set them according to your needs ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? ","[y/n]"," (default: y): y"),(0,r.yg)("br",null),"\nprovides the jetson_clocks script to maximize Jetson  performance by setting static max frequency to CPU, GPU, and EMC clocks.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) ","[y/n]"," (default: n): n"),(0,r.yg)("br",null),"\nIn the case of insufficient memory (especially jetson nano), it is better to enable swap to ensure the normal operation of the program.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Do you want to create or change the size of the Swap Memory? (/swapfile)?"),(0,r.yg)("br",null),"\nTo get better performance out of nano, turn on Swap.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Optional]"," Use external \xb7 to store the Docker data directory? (for docker images & volumes)?"),(0,r.yg)("br",null))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"(Recommended if your root partition is smaller than 32 GB). ","[y/n]"," (default: n): n"),(0,r.yg)("br",null)))),(0,r.yg)("p",null,"The edge ai program requires a minimum of 32G of storage space to run, if not, you can choose to mount the docker data volume to an external disk."),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Now you can experience SenseCraft AI-Jetson")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png",alt:null})),(0,r.yg)("h3",{id:"deploy-new-models"},(0,r.yg)("strong",{parentName:"h3"},"Deploy new models")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Visis \u201cAI Models\u201c Page  and select a AI model you need",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png",alt:null})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Click "Deploy Model" button')),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png",alt:null})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Check the read me to ensure the device have install SenseCraft AI-Jetson and the AI model adapt to the device type.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png",alt:null})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Select a online device ")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png",alt:null})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"AI model need apply a video stream, if there is no stream please add a valid stream firstly. Model zoo will send the stream info to the device directly.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"more stream info describe please check Streams Management")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png",alt:null})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Send the AI model and stream info to device. AI model deployment takes a few minutes, so you can leave the current page and go to the device after a few minutes to view the deployed AI model")),(0,r.yg)("h3",{id:"streams-management"},(0,r.yg)("strong",{parentName:"h3"},"Streams management")),(0,r.yg)("p",null,"SenseCraft AI-Jetson supports add multiple video streams and supports add USB camera and IP camera as your needed."),(0,r.yg)("p",null,"The number of video streams that can be added depends on the CPU and memory resources of the device. Pay attention to the resource usage of the device."),(0,r.yg)("h4",{id:"add-stream"},(0,r.yg)("strong",{parentName:"h4"},"Add Stream")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Visit Streams page and  click + icon",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png",alt:null})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Setup the new video stream valid message, please check the table below for details",(0,r.yg)("br",null),(0,r.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png",alt:null}))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Fields")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Content")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Stream Name")),(0,r.yg)("td",{parentName:"tr",align:null},"1 custom name for this stream.",(0,r.yg)("br",null),"2 Cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Type")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Ip camera\uff1aAccess a IP camera, need input a valid rtsp url",(0,r.yg)("br",null),"2 Usb camera\uff1aConnect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Path")),(0,r.yg)("td",{parentName:"tr",align:null},'Video Path, format decided by "Video Type", if wrong, default video will be used.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Device AI Model")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Select an AI model which already downloaded on the device",(0,r.yg)("br",null),"2 If there is no AI model on your device, please go to AI Models page to download the model to your device.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Confidence Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Object confidence threshold for detection.",(0,r.yg)("br",null),"2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"IoU Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"FPS")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Frames per second of stream",(0,r.yg)("br",null),"2 Format: INT ","[1,60]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Quality")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Output stream quality.  Default: 50",(0,r.yg)("br",null),"2 Format: int ","[0,100]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Maximum Detections")),(0,r.yg)("td",{parentName:"tr",align:null},"1 maximum number of detections per image.Default:3002 Format: int ","[0,1000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Frame Rate")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the frame rate of the stream",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display FPS",(0,r.yg)("br",null),"\u25cf False: do not display FPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Clock")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the time",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display time",(0,r.yg)("br",null),"\u25cf False: do not display time")))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Click "Save" button and back to home page to check the new stream and AI detection result.')),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png",alt:null})),(0,r.yg)("h4",{id:"delete-stream"},(0,r.yg)("strong",{parentName:"h4"},"Delete Stream")),(0,r.yg)("p",null,'Go to the stream details and click "Delete" icon to delete the stream',(0,r.yg)("br",null),"\n",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png",alt:null})),(0,r.yg)("h3",{id:"ai-model-management"},(0,r.yg)("strong",{parentName:"h3"},"AI Model Management")),(0,r.yg)("p",null,"Manage all AI models that have been downloaded on the device."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The AI model will show the name of the stream that uses the model.",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ul"},"AI models not used on stream can be deleted",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png",alt:null})),(0,r.yg)("h3",{id:"settings"},(0,r.yg)("strong",{parentName:"h3"},"Settings")),(0,r.yg)("h4",{id:"about"},(0,r.yg)("strong",{parentName:"h4"},"About")),(0,r.yg)("p",null,"The device info, more info please check the follow table ",(0,r.yg)("br",null),"\n",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png",alt:null})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Fields")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Content")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Product")),(0,r.yg)("td",{parentName:"tr",align:null},"The device's module")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"IP")),(0,r.yg)("td",{parentName:"tr",align:null},"The device network IP address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Serial number")),(0,r.yg)("td",{parentName:"tr",align:null},"Unique production serial number of the device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"MAC address")),(0,r.yg)("td",{parentName:"tr",align:null},"Network MAC address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"CPU Usage")),(0,r.yg)("td",{parentName:"tr",align:null},"Device CPU usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"RAM")),(0,r.yg)("td",{parentName:"tr",align:null},"Device RAM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Swap")),(0,r.yg)("td",{parentName:"tr",align:null},"Device swap")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Disk usage")),(0,r.yg)("td",{parentName:"tr",align:null},"Device disk usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Cuda version")),(0,r.yg)("td",{parentName:"tr",align:null},"The version of Cuda installed on the device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Jetpack version")),(0,r.yg)("td",{parentName:"tr",align:null},"The version of jetpack installed on the device")))),(0,r.yg)("h4",{id:"bind-to-sensecraft-ai-platform"},(0,r.yg)("strong",{parentName:"h4"},"Bind to SenseCraft AI platform")),(0,r.yg)("p",null,"SenseCraft AI -Jetson is designed for edge AI. AI inference and video stream processing is done locally on the device, only if you need to download more AI models you need to bind the device to the ",(0,r.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/home"},"SenseCraft AI-Model Zoo"),", and you can remove the device from the platform once downloaded."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Visist ",(0,r.yg)("a",{parentName:"li",href:"https://sensecraft.seeed.cc/ai/#/home"},"SenseCraft AI-Model Zoo"),(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Register with a valid email address. The SenseCraft-AI Model Zoo account is the same as the SenseCAP cloud account, if you already have a SenseCAP Cloud account, you can log in directly.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png",alt:null})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Visit "Device Workspace" and click \u201cAdd Device\u201d button.',(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Enter a device custom name and get the bind code from device.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png",alt:null})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},'Back to device\u2018s SenseCraft AI application. Click "Bind to SenseCraft AI platform",and then application will display bind code and temporary name.')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bind Code: enter the correct and valid bind code on ",(0,r.yg)("a",{parentName:"li",href:"https://sensecraft.seeed.cc/ai/#/home"},"SenseCraft AI-Model Zoo")," to finish binding the device.",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ul"},"Temporary Name: if the bind code is duplicated then you need to enter the correct temporay name.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png",alt:null})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},'enter the correct and valid bind code and click "Comfirm" button',(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Bind successfully,now you can add new AI models from model zoo")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png",alt:null})),(0,r.yg)("h4",{id:"ubind"},(0,r.yg)("strong",{parentName:"h4"},"Ubind")),(0,r.yg)("p",null,"If you no need remote manage your device on AI platform you can detele the device from your AI platform's accout. You can unbind from the device or on the platform",(0,r.yg)("br",null)),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'Unbind the device from AI mode zoo, Click "Delete"',(0,r.yg)("br",null),"\n",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png",alt:null}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'Unbind the device by disable "Bind to SenseCraft AI platform"',(0,r.yg)("br",null),"\n",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png",alt:null})))),(0,r.yg)("h3",{id:"app-update"},(0,r.yg)("strong",{parentName:"h3"},"App Update")),(0,r.yg)("p",null,"SenseCraft AI App updates are categorized into automatic and manual updates, which you can set according to your needs."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Automatic update"),": check for updates every 5 minutes, when a new version is detected, the information will be automatically updated, no need to do it manually."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Manual update"),": manually check for updates, and click the Update button to update when a new version is detected"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png",alt:null})),(0,r.yg)("h2",{id:"tech-support"},(0,r.yg)("strong",{parentName:"h2"},"Tech Support")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,r.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);