"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9242],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,h=c["".concat(l,".").concat(u)]||c[u]||g[u]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(58168),o=(r(96540),r(15680));const i={description:"Send message from Watcher & Node-RED to p5js",title:"Watcher & Node-RED to P5JS",keywords:["watcher","p5js"],image:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png",slug:"/watcher_node_red_to_p5js",last_update:{date:"08/12/2024",author:"Allen"}},s="Watcher & Node-RED To p5.js Quick Start",a={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_p5js",id:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_p5js",title:"Watcher & Node-RED to P5JS",description:"Send message from Watcher & Node-RED to p5js",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_p5js.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration",slug:"/watcher_node_red_to_p5js",permalink:"/watcher_node_red_to_p5js",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_p5js.md",tags:[],version:"current",lastUpdatedBy:"Allen",lastUpdatedAt:1723420800,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{description:"Send message from Watcher & Node-RED to p5js",title:"Watcher & Node-RED to P5JS",keywords:["watcher","p5js"],image:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png",slug:"/watcher_node_red_to_p5js",last_update:{date:"08/12/2024",author:"Allen"}},sidebar:"ProductSidebar",previous:{title:"Watcher & Node-RED to kafka",permalink:"/watcher_node_red_to_kafka"},next:{title:"Watcher & Node-RED to Telegram",permalink:"/watcher_node_red_to_telegram"}},l={},d=[{value:"What is p5.js",id:"what-is-p5js",level:2},{value:"Node-RED configuration",id:"node-red-configuration",level:2},{value:"Step 1.Configuration",id:"step-1configuration",level:3},{value:"Step 2.Deployment",id:"step-2deployment",level:3},{value:"Build a server",id:"build-a-server",level:2},{value:"Step 3.Download server code",id:"step-3download-server-code",level:3},{value:"Step 4.Run the server",id:"step-4run-the-server",level:3},{value:"VScode configuration",id:"vscode-configuration",level:2},{value:"Step 5.Install extensions",id:"step-5install-extensions",level:3},{value:"Step 6.Open project",id:"step-6open-project",level:3},{value:"Step 7.Run project",id:"step-7run-project",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"watcher--node-red-to-p5js-quick-start"},"Watcher & Node-RED To p5.js Quick Start"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("iframe",{width:"1000",height:"500",src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,o.yg)("h2",{id:"what-is-p5js"},"What is p5.js"),(0,o.yg)("p",null,"p5.js is a JavaScript library that makes coding accessible for artists and designers. It provides an easy way to create graphics, animations, and interactive applications using a simple syntax. With features like drawing on a canvas, handling user input, and supporting multimedia, p5.js is ideal for creative coding projects, educational purposes, and digital art. Its vibrant community and extensive resources help users of all skill levels get started."),(0,o.yg)("h2",{id:"node-red-configuration"},"Node-RED configuration"),(0,o.yg)("h3",{id:"step-1configuration"},"Step 1.Configuration"),(0,o.yg)("p",null,"There are 4 modules you need to configure:"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png",style:{width:800,height:"auto"}})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"OpenStream:")," Get data from Watcher to Node-RED. ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_to_node_red/"},"Details please click here"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"function:")," To process data from Watcher. ",(0,o.yg)("strong",{parentName:"p"},"Double click")," the function module and past the following codes into it."))),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png",style:{width:800,height:"auto"}})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"msg.payload = {\n    content: msg.payload.value[0].content,\n    image_url: msg.payload.value[0].image_url\n};\nreturn msg;\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"http request:")," Send a ",(0,o.yg)("span",{id:"post"},"POST request")," to ",(0,o.yg)("strong",{parentName:"li"},"server")," and then to p5.js.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png",style:{width:800,height:"auto"}})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"debug:")," To see output infomation, to debug it.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png",style:{width:600,height:"auto"}})),(0,o.yg)("h3",{id:"step-2deployment"},"Step 2.Deployment"),(0,o.yg)("p",null,"When finish configuration, don't forget to ",(0,o.yg)("strong",{parentName:"p"},"Deploy")," it."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png",style:{width:800,height:"auto"}})),(0,o.yg)("h2",{id:"build-a-server"},"Build a server"),(0,o.yg)("h3",{id:"step-3download-server-code"},"Step 3.Download server code"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js"},"Please click this link")," to download the whole project code."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-4run-the-server"},"Step 4.Run the server"),(0,o.yg)("p",null,"Before running the server, you should install some packages first. "),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"npm install express body-parser cors ws")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"Unzip the package and get into it, and then run ",(0,o.yg)("inlineCode",{parentName:"p"},"node server.js")," to run the server."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"Now the server is listening port 3000, so the message from ",(0,o.yg)("a",{parentName:"p",href:"#post"},"Node-RED")," will be sent to this server, and then to p5.js."),(0,o.yg)("h2",{id:"vscode-configuration"},"VScode configuration"),(0,o.yg)("h3",{id:"step-5install-extensions"},"Step 5.Install extensions"),(0,o.yg)("p",null,"You need to install 2 extensions, there are ",(0,o.yg)("strong",{parentName:"p"},"Live Server")," and ",(0,o.yg)("strong",{parentName:"p"},"p5.vscode")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png",style:{width:600,height:"auto"}})),(0,o.yg)("h3",{id:"step-6open-project"},"Step 6.Open project"),(0,o.yg)("p",null,"Open the project you just download."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"The structure will like below image when open it."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png",style:{width:600,height:"auto"}})),(0,o.yg)("h3",{id:"step-7run-project"},"Step 7.Run project"),(0,o.yg)("p",null,"Open ",(0,o.yg)("strong",{parentName:"p"},"sketch.js")," and click the ",(0,o.yg)("strong",{parentName:"p"},"Go Live")," button, which will run the project locally on default browser."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"The effect will like below image, this servcie running on port 5500."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"When detected people, it will like this."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Congratulations on successfully completing your journey from Watcher to p5.js! You\u2019ve gained valuable skills, and there are many more exciting features waiting for you to explore. Keep experimenting and enjoy the creative possibilities ahead!"),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);