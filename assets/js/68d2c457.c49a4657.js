"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5026],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>p});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(a),d=i,p=g["".concat(l,".").concat(d)]||g[d]||h[d]||r;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),i=a(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(9668),i=a(96540),r=a(20053),o=a(23104),s=a(56347),l=a(57485),c=a(31682),u=a(89466);function g(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,c]=p({queryString:a,groupId:n}),[g,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),m=(()=>{const e=l??g;return d({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var m=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:g}=(0,o.a_)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(g(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},o,{className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=y(e);return i.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},i.createElement(w,(0,n.A)({},e,t)),i.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,m.A)();return i.createElement(b,(0,n.A)({key:String(t)},e))}},14714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=a(9668),i=(a(96540),a(15680)),r=a(11470),o=a(19365);const s={description:"SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs.",title:"Quick Start Guide",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg",slug:"/getting_started_with_watcher",sidebar_position:2,last_update:{date:"10/17/2024",author:"Citric"}},l="SenseCAP Watcher Quick Start Guide",c={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/sensecap_watcher_getting_started",id:"Sensor/SenseCAP/SenseCAP_Watcher/sensecap_watcher_getting_started",title:"Quick Start Guide",description:"SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/sensecap_watcher_getting_started.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher",slug:"/getting_started_with_watcher",permalink:"/getting_started_with_watcher",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/sensecap_watcher_getting_started.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1729123200,formattedLastUpdatedAt:"Oct 17, 2024",sidebarPosition:2,frontMatter:{description:"SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs.",title:"Quick Start Guide",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg",slug:"/getting_started_with_watcher",sidebar_position:2,last_update:{date:"10/17/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/watcher"},next:{title:"Price and Benefits",permalink:"/watcher_price"}},u={},g=[{value:"Quick Starter Guide Vedio",id:"quick-starter-guide-vedio",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Must-Do",id:"must-do",level:2},{value:"Step 1. Installation Packaging",id:"step-1-installation-packaging",level:3},{value:"Step 2. Power On",id:"step-2-power-on",level:3},{value:"Step 3. Device Binding",id:"step-3-device-binding",level:3},{value:"Schedule a task for Watcher",id:"schedule-a-task-for-watcher",level:2},{value:"To end a running task",id:"to-end-a-running-task",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],h={toc:g},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"sensecap-watcher-quick-start-guide"},"SenseCAP Watcher Quick Start Guide"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg",style:{width:1e3,height:"auto"}})),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now")))),(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.youtube.com/watch?v=ny22Z0cAIqE"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Watcher's Video")))),(0,i.yg)("a",{class:"get_one_now_item",href:"https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Github Repository"))))),(0,i.yg)("h2",{id:"quick-starter-guide-vedio"},"Quick Starter Guide Vedio"),(0,i.yg)("p",null,"This is SenseCAP Watcher Quick Starter Guide which will help you unbox and get hands-on the device for the first time."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yufEUFEB0Ic",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs. "),(0,i.yg)("p",null,"As a new comer for smart building / smart home system, SenseCAP Watcher is far more intelligent compared to current sensors and actuators. It understands what is happening within the space and then takes actions accordingly."),(0,i.yg)("h2",{id:"must-do"},"Must-Do"),(0,i.yg)("p",null,"Before using Watcher as a space assistant, we must ensure that the following three steps are performed successfully, which is the basis for all subsequent steps."),(0,i.yg)("h3",{id:"step-1-installation-packaging"},"Step 1. Installation Packaging"),(0,i.yg)("p",null,"The Watcher comes with a unique packaging that doubles as a stylish, calendar-like stand. By placing the Watcher inside this stand, you can create an attractive decoration for your home. Follow the step-by-step instructions below and refer to the accompanying video for a visual guide on how to install your Watcher in its stand."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("iframe",{width:"760",height:"415",src:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,i.yg)("h3",{id:"step-2-power-on"},"Step 2. Power On"),(0,i.yg)("p",null,"To power on your Watcher device, press and hold the wheel button located on the upper right corner for approximately 3 seconds until the Seeed Studio logo appears on the screen."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif",style:{width:650,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,"Once the logo is displayed, release the button and allow the device to complete its initialization process. After a few moments, the Watcher will display its main menu, indicating that it is ready for use."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If the device won't turn on with a long press, the device may be low on power and you may need to connect a cable to power it up before you can wake up the Watcher.")),(0,i.yg)("h3",{id:"step-3-device-binding"},"Step 3. Device Binding"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_price/"},"SenseCraft Pro")," will automatically activate the trial service when your device is tethered to the SenseCraft APP.")),(0,i.yg)("p",null,'After powering on your Watcher, if it has not been previously bound to a device, it will prompt you to connect to the SenseCraft app. Alternatively, you can find the "Connect to APP" option in the Settings menu. The Watcher will then display a QR code to download the SenseCraft app.'),(0,i.yg)("p",null,"You can either scan the QR code or use the provided link to download the app."),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://sensecraft-app-download.seeed.cc"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Download APP \ud83d\uddb1\ufe0f"))))),(0,i.yg)("br",null),(0,i.yg)("p",null,"To proceed with binding your Watcher to the SenseCraft app, follow these steps:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.")," On your Watcher, rotate the wheel button clockwise to enter the QR code interface for binding the device."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg",style:{width:550,height:"auto"}})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.")," Open the SenseCraft app on your mobile device and tap the plus sign (+) in the top right corner to add your Watcher by scanning the QR code."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Ensure that your mobile device's Bluetooth permissions are enabled, as the binding process requires a Bluetooth connection.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg",style:{width:550,height:"auto"}})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.")," After successfully scanning the QR code, the app will navigate to the network configuration page. Select a 2.4GHz Wi-Fi network to connect your Watcher to the internet."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg",style:{width:550,height:"auto"}})),(0,i.yg)("p",null,'Tap the "Next" button to proceed.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4.")," Choose a name for your Watcher and select an appropriate group for it."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg",style:{width:550,height:"auto"}})),(0,i.yg)("p",null,'Tap the "Finish" button to complete the setup process.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"5.")," The SenseCraft app will display a tutorial page, providing guidance on how to use your Watcher. Take a moment to familiarize yourself with the instructions."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg",style:{width:550,height:"auto"}})),(0,i.yg)("p",null,"Once the setup is complete, the app will open a chat window to communicate with your Watcher, while the Watcher will return to its main menu."),(0,i.yg)("p",null,"With the binding process finished, your Watcher is now connected to the SenseCraft app, and you can start exploring its features and capabilities. The app serves as a convenient way to interact with your Watcher, adjust settings, and receive notifications remotely."),(0,i.yg)("h2",{id:"schedule-a-task-for-watcher"},"Schedule a task for Watcher"),(0,i.yg)("p",null,"Next, select the method you want to use to schedule an executable task for Watcher."),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(o.A,{value:"Built-in task templates",label:"Built-in task templates",mdxType:"TabItem"},(0,i.yg)("p",null,"To run a task from the Task Templates on your Watcher, follow these steps:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.")," From the main menu, use the wheel button to navigate to the ",(0,i.yg)("strong",{parentName:"p"},"Task Templates")," option."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.")," Press the wheel button to enter the Task Templates submenu."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.")," Scroll through the available task templates using the wheel button until you find the desired model task."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4.")," Press the wheel button to select and start running the chosen task."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif",style:{width:650,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,"Once the task begins, the Watcher will display an animated emoji face on the screen. This emoji indicates that the device is actively monitoring for the target object specified by the selected task template."),(0,i.yg)("p",null,"When the Watcher detects the target object, the display will switch from the emoji animation to a real-time view of the detected object. This allows you to see what the Watcher has identified."),(0,i.yg)("p",null,"If the target object moves out of the Watcher's view or is no longer detected, the display will automatically return to the animated emoji face, signifying that the device is still monitoring for the target."),(0,i.yg)("p",null,"Task Templates:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Human Detection:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"This task template is designed to detect the presence of human beings."),(0,i.yg)("li",{parentName:"ul"},"When the Watcher identifies a ",(0,i.yg)("strong",{parentName:"li"},"person"),", it will trigger an alarm notification.")))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png",style:{width:210,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Pet Detection:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The Pet Detection task template focuses on recognizing cats or dogs."),(0,i.yg)("li",{parentName:"ul"},"If the Watcher detects a ",(0,i.yg)("strong",{parentName:"li"},"cat"),", it will trigger an alarm notification.")))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png",style:{width:210,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Gesture Detection:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'This task template is configured to identify the "paper" hand gesture.'),(0,i.yg)("li",{parentName:"ul"},"When the Watcher recognizes the ",(0,i.yg)("strong",{parentName:"li"},"paper gesture"),", it will trigger an alarm notification.")))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png",style:{width:210,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,"Each of these task templates has specific alarm triggering conditions based on the detection of their respective targets: humans, cats, or the paper gesture. By using these templates, you can quickly set up the Watcher to monitor for the desired object without the need for extensive configuration.")),(0,i.yg)(o.A,{value:"Through the APP",label:"Through the APP",mdxType:"TabItem"},(0,i.yg)("admonition",{type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:"),(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/watcher_price/"},"SenseCraft AI for Watcher Plans and Benefits")))),(0,i.yg)("p",null,"The SenseCraft APP allows you to send Tasks to your Watcher device. In this example, we will demonstrate the process of sending a task using one of the sample tasks provided by Watcher. Let's use the command ",(0,i.yg)("em",{parentName:"p"},"If you see a candles, please notify me"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.")," Open the SenseCraft APP and navigate to the chat window for your connected Watcher device."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg",style:{width:550,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.")," In the chat window, either select the desired task from the available options or manually type in the command ",(0,i.yg)("em",{parentName:"p"},"If you see a candles, please notify me"),". Send the command to your Watcher by tapping the send button or pressing enter."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.")," Upon receiving the command, Watcher will interpret it and break it down into a task flow consisting of ",(0,i.yg)("strong",{parentName:"p"},"When"),", ",(0,i.yg)("strong",{parentName:"p"},"Do"),", and ",(0,i.yg)("strong",{parentName:"p"},"Capture Frequency")," components."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg",style:{width:550,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,"Review the parsed task flow to ensure that Watcher has correctly understood your command. The app will display the interpreted task details for your verification. If any part of the task flow does not align with your intended command, you can modify the task details by accessing the ",(0,i.yg)("strong",{parentName:"p"},"Detail Config")," section within the app."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg",style:{width:550,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4.")," Once you have confirmed or adjusted the task details, click the ",(0,i.yg)("strong",{parentName:"p"},"Run")," button to send the finalized task to your Watcher."),(0,i.yg)("p",null,"Watcher will download the task instructions, and once the download is complete, it will transform into a vigilant monitoring system, ready to detect any instances of candles."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg",style:{width:700,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"5.")," If Watcher identifies a candles, it will send an alert based on the predefined settings, which may include flashing lights, audible alarms, and notifications through the SenseCraft APP."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg",style:{width:550,height:"auto"}})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Please note that due to the time constraints of the task flow, ",(0,i.yg)("strong",{parentName:"p"},"there will be a minimum interval between consecutive alerts to avoid excessive notifications"),".")),(0,i.yg)("p",null,"By following these steps, you can effectively send commands to your Watcher using the SenseCraft APP, enabling it to perform specific monitoring tasks and notify you when the specified conditions are met."),(0,i.yg)("p",null,"Remember to regularly review and adjust your Watcher's settings and task flows to ensure optimal performance and alignment with your monitoring requirements. For a more detailed description and explanation of the APP's tasks and options, as well as a detailed description of the intervals, please read ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"Watcher Task Assignment Guideline"))," to learn more.")),(0,i.yg)(o.A,{value:"By Voice",label:"By Voice",mdxType:"TabItem"},(0,i.yg)("admonition",{type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:"),(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/watcher_price/"},"SenseCraft AI for Watcher Plans and Benefits")))),(0,i.yg)("p",null,'The Watcher offers a convenient and intuitive way to send tasks or engage in conversation using voice commands, thanks to its "Push to Talk" feature. This functionality is accessible from any screen or interface on the device, making it easy to interact with the Watcher without navigating through menus. Here\'s a step-by-step guide on how to use this feature:'),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Activate Push to Talk:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Locate the Wheel Button on the top-right corner of the Watcher."),(0,i.yg)("li",{parentName:"ul"},"Press and hold the Wheel Button to enter the voice input interface.")))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif",style:{width:650,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Speak Your Command or Message:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"While holding the Wheel Button, clearly speak your task or message to the Watcher."),(0,i.yg)("li",{parentName:"ul"},'You can assign tasks, such as "Tell me if the baby is crying" or "If the dog is stealing food, say stop Copper". (Copper is the name of my dog.)'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Release the Wheel Button:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Once you have finished speaking, release the Wheel Button."),(0,i.yg)("li",{parentName:"ul"},"The Watcher will process your voice input and determine whether it is a task assignment."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Task Assignment:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"If the Watcher recognizes your voice input as a task assignment, it will automatically break down your task into relevant components."),(0,i.yg)("li",{parentName:"ul"},"The Watcher will display cards on its screen, showing the ",(0,i.yg)("strong",{parentName:"li"},"Object")," (what to monitor), ",(0,i.yg)("strong",{parentName:"li"},"Behavior")," (what action to look for), ",(0,i.yg)("strong",{parentName:"li"},"Notification")," (how to alert you), ",(0,i.yg)("strong",{parentName:"li"},"Time Range")," (when to monitor), and ",(0,i.yg)("strong",{parentName:"li"},"Frequency")," (how often to monitor)."),(0,i.yg)("li",{parentName:"ul"},"Review the displayed information to ensure it accurately represents your intended task."),(0,i.yg)("li",{parentName:"ul"},"If the details are correct, confirm the task, and the Watcher will begin executing it according to the specified parameters."),(0,i.yg)("li",{parentName:"ul"},"If Watcher misunderstands your task, long press the scroll wheel button and you can continue through the dialogue to try to correct Watcher's understanding of the task. If you still can't understand it correctly after several attempts, we recommend that you use the SenseCraft APP to place the task.")))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg",style:{width:650,height:"auto"}})),(0,i.yg)("p",null,"Tips for Optimal Usage:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Speak clearly and at a moderate pace to ensure accurate voice recognition."),(0,i.yg)("li",{parentName:"ul"},"When speaking, please get as close to Watcher as possible, about ",(0,i.yg)("strong",{parentName:"li"},"3 ~ 10cm")," distance speaking recognition accuracy is best."),(0,i.yg)("li",{parentName:"ul"},"Minimize background noise to improve the Watcher's ability to understand your voice commands."),(0,i.yg)("li",{parentName:"ul"},"Be specific and concise when assigning tasks to help the Watcher accurately interpret your intentions.")),(0,i.yg)("p",null,"By leveraging the Push to Talk feature, you can effortlessly send tasks and engage in conversations with the Watcher, making your interaction with the device more natural and efficient."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you encounter an error of ",(0,i.yg)("strong",{parentName:"p"},"0x7002"),", it means that the current Watcher's network status is not good and the audio service call failed, please change the network or location and retry again.")))),(0,i.yg)("h2",{id:"to-end-a-running-task"},"To end a running task"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Tap the screen once or press the wheel button.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"A confirmation popup will appear with two options: ",(0,i.yg)("strong",{parentName:"p"},"Main Menu")," and ",(0,i.yg)("strong",{parentName:"p"},"End Task"),". To terminate the task, either tap ",(0,i.yg)("strong",{parentName:"p"},"End Task"),' on the screen or use the scroll wheel to navigate to "End Task" and press the scroll wheel button to confirm.'))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png",style:{width:210,height:"auto"}})),(0,i.yg)("br",null),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Alternatively, you can end the task via the SenseCraft APP on your mobile device by pressing the ",(0,i.yg)("strong",{parentName:"li"},"End")," button on the task card.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png",style:{width:250,height:"auto"}})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);