"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83318],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),y=a,u=g["".concat(d,".").concat(y)]||g[y]||c[y]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},22349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={description:"SenseCAP T1000 tracker and Thingsboard Integrated",title:"ThingsBoard Integrated(via TTS)",keywords:["ThingsBoard","SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/thingsboard_integrated",last_update:{date:"8/20/2024",author:"Jessie"}},o=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/thingsboard_integrated",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/thingsboard_integrated",title:"ThingsBoard Integrated(via TTS)",description:"SenseCAP T1000 tracker and Thingsboard Integrated",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/thingsboard_integrated.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard",slug:"/thingsboard_integrated",permalink:"/thingsboard_integrated",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/thingsboard_integrated.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1724112e3,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{description:"SenseCAP T1000 tracker and Thingsboard Integrated",title:"ThingsBoard Integrated(via TTS)",keywords:["ThingsBoard","SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/thingsboard_integrated",last_update:{date:"8/20/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Ubidots Integrated(via TTS)",permalink:"/SenseCAP_T1000_tracker_Ubidots_TTS"},next:{title:"Ubidots Integrated(via Helium)",permalink:"/SenseCAP_T1000_tracker_Ubidots_Helium"}},d={},l=[{value:"Get Started",id:"get-started",level:2},{value:"Configura the ThingsBoard",id:"configura-the-thingsboard",level:2},{value:"Create Converter",id:"create-converter",level:3},{value:"Add integration",id:"add-integration",level:3},{value:"Data view",id:"data-view",level:3},{value:"Add Dashboard",id:"add-dashboard",level:3},{value:"Location map",id:"location-map",level:3},{value:"Other parameters",id:"other-parameters",level:3},{value:"Temperature",id:"temperature",level:4},{value:"Battery",id:"battery",level:4}],p={toc:l},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://thingsboard.io/"},"ThingsBoard")," is an open-source IoT platform that enables rapid development, management, and scaling of IoT projects. Our goal is to provide the out-of-the-box IoT cloud or on-premises solution that will enable server-side infrastructure for your IoT applications."),(0,a.yg)("p",null,"The content of this chapter will guide users how to connect the ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html"},"SenseCAP T1000 Tracker")," to ThingsBoard through TTN."),(0,a.yg)("h2",{id:"get-started"},"Get Started"),(0,a.yg)("p",null,"Before starting the setup, please check ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN"},"Connect SenseCAP T1000 to TTS")," to connect your SenseCAP T1000 Tracker to TTS first."),(0,a.yg)("h2",{id:"configura-the-thingsboard"},"Configura the ThingsBoard"),(0,a.yg)("p",null,"To get started, create an account with ",(0,a.yg)("a",{parentName:"p",href:"https://thingsboard.cloud/"},"ThingsBoard"),". "),(0,a.yg)("h3",{id:"create-converter"},"Create Converter"),(0,a.yg)("p",null,"First, we need to create an Uplink Data Converter which will be used for receiving messages from the TTS. "),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Data converters"),", click ",(0,a.yg)("inlineCode",{parentName:"p"},"Create new converter"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Name the converter, enable ",(0,a.yg)("inlineCode",{parentName:"p"},"Debug mode"),", copy the following code and click ",(0,a.yg)("inlineCode",{parentName:"p"},"Add"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"var data = decodeToJson(payload);\nvar deviceName = data.end_device_ids.device_id;\nvar deviceType = data.end_device_ids.application_ids.application_id;\n\nvar telemetry = {};\n\nvar messages = data.uplink_message.decoded_payload.messages[0];\nfor (var i = 0; i < messages.length; i++) {\n    var measurement = messages[i];\n    \n    var type = measurement.type.toLowerCase();\n    var typeKey = '';\n    for (var j = 0; j < type.length; j++) {\n        if (type[j] === ' ') {\n            typeKey += '_';\n        } else {\n            typeKey += type[j];\n        }\n    }\n\n    telemetry[typeKey] = measurement.measurementValue;\n}\n\nvar result = {\n    deviceName: deviceName,\n    deviceType: deviceType,\n    telemetry: telemetry\n};\n\nfunction decodeToString(payload) {\n    return String.fromCharCode.apply(String, payload);\n}\n\nfunction decodeToJson(payload) {\n    var str = decodeToString(payload);\n    var data = JSON.parse(str);\n    return data;\n}\n\nreturn result;\n")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"add-integration"},"Add integration"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Integration"),", click ",(0,a.yg)("inlineCode",{parentName:"p"},"Add Integration"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"The Things Stack Community"),(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Enable"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Enable integration"),"  ",(0,a.yg)("inlineCode",{parentName:"p"},"Debug mode"),"  ",(0,a.yg)("inlineCode",{parentName:"p"},"Allow create devices or assets")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Choose ",(0,a.yg)("inlineCode",{parentName:"p"},"Select existing"),", and select the one we create before."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Skip the ",(0,a.yg)("inlineCode",{parentName:"p"},"Downlink data converter"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Region"),": Region where your application was registered inside TTS",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Username"),": Username from TTS",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Password"),": Password from TTS",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Use API v3"),": Set ",(0,a.yg)("inlineCode",{parentName:"p"},"Enable")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Info can be found in TTS MQTT integration."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createNEW.png",alt:"pir",width:800,height:"auto"}))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"data-view"},"Data view"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Entities")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"Devices"),", here you can see that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a new device was registered in Thingsboard"),(0,a.yg)("li",{parentName:"ul"},"in the ",(0,a.yg)("inlineCode",{parentName:"li"},"Latest Telemetry")," section you will the update data from the device.")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"add-dashboard"},"Add Dashboard"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Dashboards"),", Click ",(0,a.yg)("inlineCode",{parentName:"p"},"Create new dashboard"),"."),(0,a.yg)("p",null,"Enter the dashboard title, and then click ",(0,a.yg)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Add ",(0,a.yg)("inlineCode",{parentName:"p"},"widget"),", select widget to add."),(0,a.yg)("h3",{id:"location-map"},"Location map"),(0,a.yg)("p",null,"Select a ",(0,a.yg)("inlineCode",{parentName:"p"},"map")," widget."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Device"),(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Device"),": The device we created.",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Data key"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"latitude"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"longitude")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h3",{id:"other-parameters"},"Other parameters"),(0,a.yg)("p",null,"Refer to the above steps to add other widgets."),(0,a.yg)("h4",{id:"temperature"},"Temperature"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Device"),": The device we created.",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Data key"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"air_temperature")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("h4",{id:"battery"},"Battery"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Device"),": The device we created.",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Data key"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"battery")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png",alt:"pir",width:800,height:"auto"})),(0,a.yg)("p",null,"Here is an basic example, you can customize your own dashboard."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png",alt:"pir",width:800,height:"auto"})))}c.isMDXComponent=!0}}]);