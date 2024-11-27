"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72004],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>c});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(o),g=a,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return o?n.createElement(c,r(r({ref:t},d),{},{components:o})):n.createElement(c,r({ref:t},d))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},114:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(9668),a=(o(96540),o(15680));const l={description:"SenseCraft AI",title:"SenseCraft AI Introduction",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_ai",last_update:{date:"12/28/2023",author:"Seraphina"}},r=void 0,i={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/SenseCraft_AI_JETSON/SenseCraft_AI",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/SenseCraft_AI_JETSON/SenseCraft_AI",title:"SenseCraft AI Introduction",description:"SenseCraft AI",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/SenseCraft_AI_JETSON/SenseCraft_AI.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/SenseCraft_AI_JETSON",slug:"/sensecraft_ai",permalink:"/sensecraft_ai",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/SenseCraft_AI_JETSON/SenseCraft_AI.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1703721600,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{description:"SenseCraft AI",title:"SenseCraft AI Introduction",keywords:["Cloud and Chain","SenseCraft","SenseCraft AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/sensecraft_ai",last_update:{date:"12/28/2023",author:"Seraphina"}},sidebar:"ProductSidebar",previous:{title:"SenseCraft AI Jetson",permalink:"/sensecraft_ai_jetson"},next:{title:"Technology Topics",permalink:"/topicintroduction"}},s={},p=[{value:"<strong>User Account</strong>",id:"user-account",level:2},{value:"<strong>Sign up</strong>",id:"sign-up",level:4},{value:"<strong>Sign in</strong>",id:"sign-in",level:4},{value:"<strong>Forget password</strong>",id:"forget-password",level:4},{value:"<strong>Change password</strong>",id:"change-password",level:4},{value:"AI Models",id:"ai-models",level:2},{value:"Model Management",id:"model-management",level:3},{value:"Model list",id:"model-list",level:4},{value:"Add Model",id:"add-model",level:4},{value:"Custom AI Model Management",id:"custom-ai-model-management",level:4},{value:"Deploy model to XIAO ESP32S3",id:"deploy-model-to-xiao-esp32s3",level:3},{value:"Deploy model to Grove - Vision AI V2",id:"deploy-model-to-grove---vision-ai-v2",level:3},{value:"Deploy model to Jetson",id:"deploy-model-to-jetson",level:3},{value:"Device Workspace",id:"device-workspace",level:2},{value:"XIAO ESP32S3 Workspace",id:"xiao-esp32s3-workspace",level:3},{value:"Grove-Vision AI v2 Workspace",id:"grove-vision-ai-v2-workspace",level:3},{value:"Nvidia Jeson Workspace",id:"nvidia-jeson-workspace",level:3},{value:"SenseCraft AI-Jetson",id:"sensecraft-ai-jetson",level:2},{value:"<strong>Tech Support</strong>",id:"tech-support",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/model"},"SenseCraft AI")," empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices such as ",(0,a.yg)("strong",{parentName:"p"},"Recomputer (Jetson)"),",",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"XIAO ESP32S3 Sense"),",  ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html"},"Grove Vision AI v2")," and SenseCAP Watcher and  provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with just a few clicks. Say goodbye to complex configurations and coding \u2013 with SenseCraft AI Studio, you can effortlessly unlock the power of AI on your devices."),(0,a.yg)("p",null,"Model Sharing and Collaboration: SenseCraft AI Studio allows you to upload and share your own trained AI models with the community. By publishing your models, you contribute to a growing library of shared knowledge, fostering collaboration and innovation among AI enthusiasts."),(0,a.yg)("h2",{id:"user-account"},(0,a.yg)("strong",{parentName:"h2"},"User Account")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/model"},"SenseCraft AI")," is an open platform that allows users to browse all public AI models and Home pages without logging in. You need to sign up and sign in only when you need to deploy a model, or share your own model."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/model"},"SenseCraft AI")," and ",(0,a.yg)("a",{parentName:"p",href:"https://sensecap.seeed.cc/portal/#/login"},"SenseCraft Data Platform")," ( original SenseCAP Cloud Platform) are both software services provided by seeed studio for users, users only need to sign up for an account on any one of the platforms, and then they can use the same account to sign in on both platforms."),(0,a.yg)("h4",{id:"sign-up"},(0,a.yg)("strong",{parentName:"h4"},"Sign up")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'Enter your name and valid email,and then click "get capcha"',(0,a.yg)("br",null))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png",alt:null})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Get the verification code from your email and enter it on sign up page")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"verification code is valid for 10min, please complete the registration within 10 minutes")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png",alt:null})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Enter your password and other user information to complete your registration. ",(0,a.yg)("br",null))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png",alt:null})),(0,a.yg)("h4",{id:"sign-in"},(0,a.yg)("strong",{parentName:"h4"},"Sign in")),(0,a.yg)("p",null,"Sign in with your registered email account"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png",alt:null})),(0,a.yg)("h4",{id:"forget-password"},(0,a.yg)("strong",{parentName:"h4"},"Forget password")),(0,a.yg)("p",null,"If you forget your account password, please enter your valid account and get verification code to set a new password.",(0,a.yg)("br",null),"\nThe validity period of the verification code is 10min, please complete the reset within 10 minutes",(0,a.yg)("br",null)),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png",alt:null})),(0,a.yg)("h4",{id:"change-password"},(0,a.yg)("strong",{parentName:"h4"},"Change password")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'Visist user account page and click "Change your password" button',(0,a.yg)("br",null)),(0,a.yg)("li",{parentName:"ol"},"Enter the old password and new password to change password",(0,a.yg)("br",null))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png",alt:null})),(0,a.yg)("h2",{id:"ai-models"},"AI Models"),(0,a.yg)("h3",{id:"model-management"},"Model Management"),(0,a.yg)("h4",{id:"model-list"},"Model list"),(0,a.yg)("p",null,"Public AI models show all published AI models\uff1bCustom AI models show all your own uploaded AI models.  The model is displayed on the list as follows"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Model inference example image"),(0,a.yg)("li",{parentName:"ul"},"Model Name"),(0,a.yg)("li",{parentName:"ul"},"Model describe"),(0,a.yg)("li",{parentName:"ul"},"This model task type like detection,classification,segmentation,pose, generation"),(0,a.yg)("li",{parentName:"ul"},"Supported Device:Device that support deployment of this model"),(0,a.yg)("li",{parentName:"ul"},"The username that published this model")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Search model"),(0,a.yg)("br",null),"\nProvides search feature based on various types of key information in the model like model name, model task, surpported device,model publisher"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Favorite model"),(0,a.yg)("br",null),"\nUsers can favorite public models"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png",alt:null})),(0,a.yg)("h4",{id:"add-model"},"Add Model"),(0,a.yg)("p",null,"SenseCraft AI is a platform that supports content co-creation for developers and modelers! Share your results with the global developer community. Meanwhile, through our AI open platform, you will have the opportunity to combine your AI models with commercialization needs, providing valuable solutions for enterprises and users in different industries. We look forward to your participation and contribution to jointly realize the innovation and application of AI technology in the commercial field!"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"To add a model you need to complete the following information, ")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Basic model info"),(0,a.yg)("br",null)),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Model Name"),(0,a.yg)("li",{parentName:"ul"},"Model Excerpt:A simple description of the model"),(0,a.yg)("li",{parentName:"ul"},"Model Introduction\uff1adetailed description of the model"),(0,a.yg)("li",{parentName:"ul"},"Model Deployment Perparation\uff1aPre-requisite for model deployment, not required"),(0,a.yg)("li",{parentName:"ul"},"Supported Device:Choose which device the model will be deployed on, currently the platform supports Jetson devices, XIAO ESPS3, etc."),(0,a.yg)("li",{parentName:"ul"},"Model Inference Example Image \uff1aUpload an image of the model's inference results")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Click next when the information is completed.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Model"),(0,a.yg)("br",null)),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Enter the follow information about the model parameters"),(0,a.yg)("li",{parentName:"ol"},"Publish the model to the public AI model library is checked by default, the model will be visible to everyone after saving, if unchecked, the model will be visible only to you after saving.")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null},"Content"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Model Format"),(0,a.yg)("td",{parentName:"tr",align:null},"1 The correct format for the model",(0,a.yg)("br",null),"2 Option:ONNX, Tensor RT, Pytorch",(0,a.yg)("br",null),"3 Platform will support more model formats")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Task"),(0,a.yg)("td",{parentName:"tr",align:null},"1 The task type of the model",(0,a.yg)("br",null),"2 Option:Detection,Classification,Segment,Pose")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"AI Framework"),(0,a.yg)("td",{parentName:"tr",align:null},"1 The AI framework of the model",(0,a.yg)("br",null),"2 Option:YOLOV5,YOLOV8,FOMO,ModileNetV2,PFLD",(0,a.yg)("br",null),"3 Platform will support more AI framwork")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Classes"),(0,a.yg)("td",{parentName:"tr",align:null},"1 Classes or labels that the model categorizes for a specific task or problem",(0,a.yg)("br",null),"2 Please make sure the class id and class name matches correctly.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Model File"),(0,a.yg)("td",{parentName:"tr",align:null},"Upload a model file in the format of your choice.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Model Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"1 model precision",(0,a.yg)("br",null),"2 Option:Int8,Float16,Float32")))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png",alt:null})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To ensure the healthy development of our platform, we will review the models and content posted by users. If any illegal, non-compliant, or infringing content is found, it will not be allowed to be published and may be deleted accordingly.\nThank you for your understanding and support in maintaining a healthy platform environment!")),(0,a.yg)("h4",{id:"custom-ai-model-management"},"Custom AI Model Management"),(0,a.yg)("p",null,"Users have all the permissions to operate their own models"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Publish Model"),": Publish a private model that will be available to all users."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Privatize Model"),":Privatize a public model, the model is only visible to yourself"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Delete Model"),": Delete a private model, public models are not allowed to be deleted"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Edit Model"),":Allow to modify all information of the model"),(0,a.yg)("h3",{id:"deploy-model-to-xiao-esp32s3"},"Deploy model to XIAO ESP32S3"),(0,a.yg)("p",null,"SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESP32S3 Sense,etc. Enjoy seamless Edge AI model deployment now!"),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Deploy_model_to_XIAO_ESP32S3/"},"Deploy model to XIAO ESP32S3 documentation"),"."),(0,a.yg)("h3",{id:"deploy-model-to-grove---vision-ai-v2"},"Deploy model to Grove - Vision AI V2"),(0,a.yg)("p",null,"SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson ,XIAO ESP32S3 Sense,Grove-Vision AI v2, SenseCAP Watcher. Enjoy seamless Edge AI model deployment now!"),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Deploy_model_to_Grove_Vision_AI_V2/"},"Deploy model to Grove - Vision AI V2 documentation"),"."),(0,a.yg)("h3",{id:"deploy-model-to-jetson"},"Deploy model to Jetson"),(0,a.yg)("p",null,"SenseCraft AI platform provide a very simple way to deploy AI model to edge device such as Jetson orin ,XIAO ESPS3,etc. Enjoy seamless Edge AI model deployment now!"),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/sensecraft_deploy_model_to_jetson/"},"Deploy model to Jetson documentation"),"."),(0,a.yg)("h2",{id:"device-workspace"},"Device Workspace"),(0,a.yg)("p",null,"The SenseCraft AI platform provides an AI model zoo for users to share and download AI models, and also has a device workspace where users can view the inference results of their devices in real time and manage their devices to improve the convenience and flexibility of device management."),(0,a.yg)("h3",{id:"xiao-esp32s3-workspace"},"XIAO ESP32S3 Workspace"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png",alt:null})),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_ESP32S3_Workspace/"},"XIAO ESP32S3 Workspace documentation"),"."),(0,a.yg)("h3",{id:"grove-vision-ai-v2-workspace"},"Grove-Vision AI v2 Workspace"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png",alt:null})),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_Vision_AI_v2_Workspace/"},"Grove-Vision AI v2 Workspace documentation"),"."),(0,a.yg)("h3",{id:"nvidia-jeson-workspace"},"Nvidia Jeson Workspace"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png",alt:null})),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Nvidia_Jeson_Workspace/"},"Nvidia Jeson Workspace documentation"),"."),(0,a.yg)("h2",{id:"sensecraft-ai-jetson"},"SenseCraft AI-Jetson"),(0,a.yg)("p",null,'SenseCraft AI-Jetson is a development toolkit and platform designed for NVIDIA Jetson Edge AI devices. Simply run the "Quickstart Script" and you will be presented with an interactive user interface to view an example application with a pre-loaded video and a pre-loaded AI model. If you want to add your own USB camera, IP camera you can simply do it in a few clicks! '),(0,a.yg)("p",null,"In addition to the various built-in AI models we offer out-of-the-box,  you can access to a large number of public models on SenseCraft AI platform and you will be able to download and deploy AI models for specific scenarios and create personalized AI solutions based on your needs. SenseCraft AI is your intelligent decision-making partner for vision ai, providing you with simple, flexible and efficient inferencing and solution building capabilities."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif",alt:null})),(0,a.yg)("p",null,"You can learn more through the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SenseCraft_AI_Jetson/"},"SenseCraft AI-Jetson documentation"),"."),(0,a.yg)("h2",{id:"tech-support"},(0,a.yg)("strong",{parentName:"h2"},"Tech Support")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,a.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);