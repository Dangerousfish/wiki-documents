"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99521],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(9668),a=(n(96540),n(15680));const r={description:"How to use a model for SenseCAP Watcher",title:"for SenseCAP Watcher",image:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp",slug:"/sensecraft_ai_pretrained_models_for_watcher",sidebar_position:3,last_update:{date:"12/03/2024",author:"Citric"}},i=void 0,s={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_Watcher",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_Watcher",title:"for SenseCAP Watcher",description:"How to use a model for SenseCAP Watcher",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_Watcher.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models",slug:"/sensecraft_ai_pretrained_models_for_watcher",permalink:"/sensecraft_ai_pretrained_models_for_watcher",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_Watcher.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1733184e3,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:3,frontMatter:{description:"How to use a model for SenseCAP Watcher",title:"for SenseCAP Watcher",image:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp",slug:"/sensecraft_ai_pretrained_models_for_watcher",sidebar_position:3,last_update:{date:"12/03/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"for Grove Vision AI V2",permalink:"/sensecraft_ai_pretrained_models_for_grove_visionai_v2"},next:{title:"for reComputer Jetson",permalink:"/sensecraft_deploy_model_to_jetson"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1. Issuing a Monitoring Task to Watcher via the SenseCraft APP",id:"step-1-issuing-a-monitoring-task-to-watcher-via-the-sensecraft-app",level:2},{value:"Step 2. Enabling the Use of a Custom TinyML Model",id:"step-2-enabling-the-use-of-a-custom-tinyml-model",level:2},{value:"Step 3. Confirming the Task and Starting Monitoring",id:"step-3-confirming-the-task-and-starting-monitoring",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"SenseCAP Watcher is a powerful monitoring device that can be configured to recognize specific objects and trigger alarms based on user-defined tasks. To enhance Watcher's object recognition capabilities, users can leverage custom models from the SenseCraft AI model repository. This wiki article will guide you through the process of using these custom models in your Watcher monitoring tasks."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"Before you begin using custom models from the SenseCraft AI model repository, ensure that you have the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SenseCAP Watcher"),": You should have a SenseCAP Watcher device set up and ready to use. If you haven't already, follow the instructions in the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher/"},"SenseCAP Watcher Quick Start Guide")," to set up your device.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SenseCraft APP"),": Install the SenseCraft APP on your mobile device. The app is available for both iOS and Android platforms and can be downloaded from the respective app stores."))),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://sensecraft-app-download.seeed.cc"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Download APP \ud83d\uddb1\ufe0f"))))),(0,a.yg)("br",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SenseCraft Account"),": To access the SenseCraft AI model repository and use custom models, you need to have a SenseCraft AI account. If you don't have an account, sign up for one through the SenseCraft APP or the official SenseCraft AI website.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Network Connectivity"),": Ensure that your SenseCAP Watcher device and mobile device running the SenseCraft APP are connected to the internet. A stable network connection is required to access the SenseCraft AI model repository and download custom models."))),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg",style:{width:1e3,height:"auto"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now")))),(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.youtube.com/watch?v=ny22Z0cAIqE"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Watcher's Video")))),(0,a.yg)("a",{class:"get_one_now_item",href:"https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Github Repository"))))),(0,a.yg)("h2",{id:"step-1-issuing-a-monitoring-task-to-watcher-via-the-sensecraft-app"},"Step 1. Issuing a Monitoring Task to Watcher via the SenseCraft APP"),(0,a.yg)("p",null,"To begin, open the SenseCraft APP and navigate to the Watcher device you want to configure. The app provides an intuitive interface for creating and managing monitoring tasks. For this example, let's create a task that says, ",(0,a.yg)("em",{parentName:"p"},"If a keyboard is recognized, play the sound 'Keyboard is awesome'"),"."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png",style:{width:250,height:"auto"}})),(0,a.yg)("p",null,"When creating a task, it's essential to be clear and specific about the object you want Watcher to recognize and the action you want it to take when the object is detected. This helps ensure that Watcher understands and executes the task accurately."),(0,a.yg)("p",null,"If you don't know enough about how Watcher places an appropriate task, read the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"Task Assignment Guideline"),"."),(0,a.yg)("h2",{id:"step-2-enabling-the-use-of-a-custom-tinyml-model"},"Step 2. Enabling the Use of a Custom TinyML Model"),(0,a.yg)("p",null,"After issuing the task through the APP, click on the task card to enter the ",(0,a.yg)("strong",{parentName:"p"},"Detail Configs")," page. This page allows you to fine-tune various aspects of your monitoring task, including the selection of a custom TinyML model."),(0,a.yg)("p",null,"In the ",(0,a.yg)("strong",{parentName:"p"},"Scenario")," section at the top of the page, you'll find the ",(0,a.yg)("strong",{parentName:"p"},"Use TinyML Model")," option. By checking this option, you enable Watcher to use a custom model from the SenseCraft AI model repository for object recognition. Click on the model name field to search or directly select the desired model, such as a ",(0,a.yg)("strong",{parentName:"p"},"keyboard detection")," model."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"The SenseCraft AI model repository hosts a wide range of pre-trained models that can be used for various object recognition tasks. These models have been optimized for use with Watcher, ensuring high accuracy and performance."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"After selecting a model, the Watcher's alarm words may be cleared and need to be re-entered before the Run Task button can be clicked.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"After selecting the model, please reasonably configure the Confidence Threshold below the model. the default value is 0. If you directly send it to the task with 0 as the threshold, it may lead to anything being recognized as a wrong object, please adjust this value according to the actual situation to achieve the best detection effect.")))),(0,a.yg)("p",null,"In addition to the pre-trained models available in the SenseCraft AI model repository, you can also use your own custom-trained models. If you have a specific object or scenario that isn't covered by the existing models, you can train your own model and share it with the SenseCraft AI community."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Watcher can search and use private models under the same SenseCraft account. If you choose not to make your models public, you can also use your private models as long as Watcher is bound to your account.")),(0,a.yg)("h2",{id:"step-3-confirming-the-task-and-starting-monitoring"},"Step 3. Confirming the Task and Starting Monitoring"),(0,a.yg)("p",null,'After selecting the custom model and confirming other task configuration details, click the "Run Task" button to start the monitoring task. This action deploys the task to your Watcher device and begins the monitoring process.'),(0,a.yg)("p",null,"Upon receiving the task, Watcher will automatically download the selected model from the SenseCraft AI model repository and use it as the basis for triggering alarm actions. This seamless integration ensures that Watcher has the most up-to-date and relevant model for accurate object recognition."),(0,a.yg)("p",null,'With the custom model in place, Watcher will continuously monitor its environment for the presence of the specified object. In this example, when Watcher recognizes a keyboard using the selected model, it will trigger the specified alarm action\u2014playing the sound "Keyboard is awesome".'),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"The combination of custom models and user-defined tasks allows Watcher to adapt to a wide range of monitoring scenarios. By leveraging the power of the SenseCraft AI model repository and the flexibility of the SenseCraft APP, users can tailor Watcher's capabilities to their specific needs, ensuring reliable and accurate object recognition and alarm triggering."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Using custom models from the SenseCraft AI model repository empowers SenseCAP Watcher users to enhance the device's object recognition capabilities and expand its monitoring and alarm application scenarios. The SenseCraft APP provides an intuitive interface for searching, selecting, and applying these custom models to Watcher monitoring tasks. By following the steps outlined in this wiki article, users can easily configure Watcher to recognize specific objects and trigger alarms based on their unique requirements. Whether using pre-trained models or custom-trained models shared with the SenseCraft AI community, Watcher offers a powerful and adaptable solution for various monitoring needs."),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,a.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);