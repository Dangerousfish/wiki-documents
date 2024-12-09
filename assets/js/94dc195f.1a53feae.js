"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52896],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(n),y=r,c=g["".concat(s,".").concat(y)]||g[y]||m[y]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(9668),r=(n(96540),n(15680));const l={description:"Deploy model to Jetson on Sensecraft AI Platform",title:"for reComputer Jetson",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_deploy_model_to_jetson",sidebar_position:4,last_update:{date:"08/22/2024",author:"Frank"}},o=void 0,i={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/Deploy_model_to_Jetson",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/Deploy_model_to_Jetson",title:"for reComputer Jetson",description:"Deploy model to Jetson on Sensecraft AI Platform",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/Deploy_model_to_Jetson.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models",slug:"/sensecraft_deploy_model_to_jetson",permalink:"/sensecraft_deploy_model_to_jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/Deploy_model_to_Jetson.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1724284800,formattedLastUpdatedAt:"Aug 22, 2024",sidebarPosition:4,frontMatter:{description:"Deploy model to Jetson on Sensecraft AI Platform",title:"for reComputer Jetson",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_deploy_model_to_jetson",sidebar_position:4,last_update:{date:"08/22/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:"for SenseCAP Watcher",permalink:"/sensecraft_ai_pretrained_models_for_watcher"},next:{title:"Training",permalink:"/sensecraft_ai_training_main_page"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"<strong>Step 1  Install SenseCraft AI-Jetson</strong>",id:"step-1--install-sensecraft-ai-jetson",level:3},{value:"<strong>Step 2  Select device</strong>",id:"step-2--select-device",level:3},{value:"<strong>Step 3  Select Stream</strong>",id:"step-3--select-stream",level:3},{value:"<strong>Tech Support</strong>",id:"tech-support",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESPS3,etc. Enjoy seamless Edge AI model deployment now!",(0,r.yg)("br",null)),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Select or upload an AI model for Jetson device",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},'Visit the AI model detail and click "Deploy Model" button',(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png",alt:null})),(0,r.yg)("h3",{id:"step-1--install-sensecraft-ai-jetson"},(0,r.yg)("strong",{parentName:"h3"},"Step 1  Install SenseCraft AI-Jetson")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If your Jetson device has installed SenseCraft AI on device,go directly to step 2")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect Jetson to a display and power it on")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Plug a mouse and keyboard into the device and type the following command on a terminal to run the application"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png",alt:null})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"SenseCraft AI-Jetson install complete, please go to step 2",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png",alt:null})),(0,r.yg)("h3",{id:"step-2--select-device"},(0,r.yg)("strong",{parentName:"h3"},"Step 2  Select device")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If you have already added the device to the platform, you can directly select the device and click next to go to step 3",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png",alt:null})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'If your need add a new device, please click "Add Devic" Button and the Add Device window will appear.',(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Enter the device name ",(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png",alt:null})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Visit SenseCraft AI-Jetson Application on your device and go to Settings page",(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},'Enable "Bind to SenseCraft AI platform" setting and get the bind code ',(0,r.yg)("br",null)),(0,r.yg)("li",{parentName:"ol"},"Back to SenseCraft AI platform and enter the valid bind code to complete the addition",(0,r.yg)("br",null))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"if this bind code is duplicated, you need to enter the temporary name.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png",alt:null})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Now select the device and click next to step 3")),(0,r.yg)("h3",{id:"step-3--select-stream"},(0,r.yg)("strong",{parentName:"h3"},"Step 3  Select Stream")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'If you want to apply the AI model on the existing video stream of the device, please directly select the video stream and click "Send" to send the model down to the device.',(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png",alt:null})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'If you want to apply the AI model to a new video stream, click the "Add Stream" button and enter the new stream\'s information',(0,r.yg)("br",null))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png",alt:null})),(0,r.yg)("p",null,"Stream info detail please check the follow table "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Fields")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Content")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Stream Name")),(0,r.yg)("td",{parentName:"tr",align:null},"1 custom name for this stream.",(0,r.yg)("br",null),"2 Cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Type")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Ip camera\uff1aAccess a IP camera, need input a valid rtsp url",(0,r.yg)("br",null),"2 Usb camera\uff1aConnect the usb camera to the device, automatically recognize the usb, and then select the correct usb camera in the video path.",(0,r.yg)("br",null),"3 Video\uff1aVideo built into the device,and input in video path")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video Path")),(0,r.yg)("td",{parentName:"tr",align:null},'Video Path, format decided by "Video Type", if wrong, default video will be used.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Confidence Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Object confidence threshold for detection.",(0,r.yg)("br",null),"2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"IoU Threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"1 IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes2 Format:float ","[0, 1]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"FPS")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Frames per second of stream",(0,r.yg)("br",null),"2 Format: INT ","[1,60]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Quality")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Output stream quality.  Default: 50",(0,r.yg)("br",null),"2 Format: int ","[0,100]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Maximum Detections")),(0,r.yg)("td",{parentName:"tr",align:null},"1 maximum number of detections per image.Default:3002 Format: int ","[0,1000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Frame Rate")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the frame rate of the stream",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display FPS",(0,r.yg)("br",null),"\u25cf False: do not display FPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Display Clock")),(0,r.yg)("td",{parentName:"tr",align:null},"1 Whether to display the time",(0,r.yg)("br",null),"2 Format:Bool ","[True,False]",(0,r.yg)("br",null),"\u25cf True: display time",(0,r.yg)("br",null),"\u25cf False: do not display time")))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click \u201cSend\u201d button to send the model down to the device.The model deployment will take about 5mins, please feel free to close the preview page and check it in device workspace after the deployment is complete.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the new model on device or device workspace on AI platform",(0,r.yg)("br",null)))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png",alt:null})),(0,r.yg)("h2",{id:"tech-support"},(0,r.yg)("strong",{parentName:"h2"},"Tech Support")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,r.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);