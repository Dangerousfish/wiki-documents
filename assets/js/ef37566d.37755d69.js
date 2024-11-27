"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47359],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>y});var s=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,s,r=function(e,t){if(null==e)return{};var i,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=s.createContext({}),g=function(e){var t=s.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=g(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),c=g(i),p=r,y=c["".concat(o,".").concat(p)]||c[p]||u[p]||a;return i?s.createElement(y,l(l({ref:t},d),{},{components:i})):s.createElement(y,l({ref:t},d))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[c]="string"==typeof e?e:r,l[1]=n;for(var g=2;g<a;g++)l[g]=i[g];return s.createElement.apply(null,l)}return s.createElement.apply(null,i)}p.displayName="MDXCreateElement"},64037:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>g});var s=i(9668),r=(i(96540),i(15680));const a={description:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0\u4ecb\u7ecd",title:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Getting_Started",last_update:{date:"11/27/2024",author:"\u4e8e\u5251\u950b\u3001\u8042\u51e1\u6dde"}},l=void 0,n={unversionedId:"zh-CN/CN_Getting_Started",id:"zh-CN/CN_Getting_Started",title:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0",description:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0\u4ecb\u7ecd",source:"@site/docs/zh-CN/CN_Getting_Started.md",sourceDirName:"zh-CN",slug:"/cn/Getting_Started",permalink:"/cn/Getting_Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/CN_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"\u4e8e\u5251\u950b\u3001\u8042\u51e1\u6dde",lastUpdatedAt:1732665600,formattedLastUpdatedAt:"Nov 27, 2024",frontMatter:{description:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0\u4ecb\u7ecd",title:"\u77fd\u9012\u79d1\u6280 Wiki \u6587\u6863\u5e73\u53f0",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Getting_Started",last_update:{date:"11/27/2024",author:"\u4e8e\u5251\u950b\u3001\u8042\u51e1\u6dde"}},sidebar:"CNSidebar",next:{title:"Grove Ecosystem Introduction",permalink:"/cn/Grove_System"}},o={},g=[{value:"wiki \u6587\u6863\u5e73\u53f0\u5185\u5bb9\u6897\u6982",id:"wiki-\u6587\u6863\u5e73\u53f0\u5185\u5bb9\u6897\u6982",level:2},{value:"\u7269\u7406\u4e16\u754c\u4fe1\u606f\u6570\u5b57\u5316\u548c\u6570\u5b57\u4fe1\u53f7\u4f20\u64ad\u8bbe\u5907",id:"\u7269\u7406\u4e16\u754c\u4fe1\u606f\u6570\u5b57\u5316\u548c\u6570\u5b57\u4fe1\u53f7\u4f20\u64ad\u8bbe\u5907",level:2},{value:"\u8ba1\u7b97\u8bbe\u5907\uff0c\u5355\u677f\u7535\u8111\u548c\u8ba1\u7b97\u6a21\u7ec4",id:"\u8ba1\u7b97\u8bbe\u5907\u5355\u677f\u7535\u8111\u548c\u8ba1\u7b97\u6a21\u7ec4",level:2},{value:"\u8bfe\u7a0b\u4e0e\u5957\u4ef6",id:"\u8bfe\u7a0b\u4e0e\u5957\u4ef6",level:2},{value:"\u4e91\u670d\u52a1",id:"\u4e91\u670d\u52a1",level:2},{value:"\u2728 Contributor \u8ba1\u5212",id:"-contributor-\u8ba1\u5212",level:2},{value:"\u6211\u4eec\u5982\u4f55\u4e0e Contributor \u5408\u4f5c\uff1f",id:"\u6211\u4eec\u5982\u4f55\u4e0e-contributor-\u5408\u4f5c",level:3},{value:"\u4efb\u52a1\u7684\u5177\u4f53\u5185\u5bb9",id:"\u4efb\u52a1\u7684\u5177\u4f53\u5185\u5bb9",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:g},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,s.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/seeed_logo/Wiki_Platform_GT_Logo.jpg",alt:"pir",width:1e3,height:"auto"})),(0,r.yg)("strong",null,(0,r.yg)("font",{color:"8DC215",size:"5"},"\u6b22\u8fce\u6765\u5230\u77fd\u9012\u79d1\u6280 wiki \u6587\u6863\u5e73\u53f0")),(0,r.yg)("p",null,'\u4f5c\u4e3a\u4e00\u5bb6\u521b\u65b0\u578b\u7269\u8054\u7f51\u79d1\u6280\u516c\u53f8\uff0c\u77fd\u9012\u79d1\u6280\u79c9\u627f\u7740\u201c\u8ba9\u79d1\u6280\u968f\u624b\u53ef\u5f97\u201d\u7684\u4f7f\u547d\uff0c\u4ee5\u8f6f\u786c\u4ef6\u8bbe\u8ba1\u7814\u53d1\u80fd\u529b\u4e3a\u6838\u5fc3\uff0c\u4e0e\u5168\u7403\u5f00\u53d1\u8005\u5171\u540c\u5408\u4f5c\u521b\u65b0\uff0c\u81f4\u529b\u4e8e\u6574\u5408\u65b0\u4e00\u4ee3\u4fe1\u606f\u6280\u672f\uff0c\u4e3a\u5e7f\u57df\u7269\u8054\u7f51\u573a\u666f\u6253\u9020\u5b8c\u6574\u5f00\u653e\u7684"\u6a21\u7ec4-\u8bbe\u5907-\u89e3\u51b3\u65b9\u6848"\u7684\u4ea7\u54c1\u4f53\u7cfb\u3002'),(0,r.yg)("p",null,"\u6211\u4eec\u7684 wiki \u6587\u6863\u5e73\u53f0\u662f\u4e00\u4e2a\u7efc\u5408\u6027\u7684\u4fe1\u606f\u4ea4\u6d41\u548c\u77e5\u8bc6\u5206\u4eab\u5e73\u53f0\uff0c\u65e8\u5728\u4e3a\u7528\u6237\u63d0\u4f9b\u8be6\u5c3d\u7684\u4ea7\u54c1\u8bf4\u660e\u3001\u4f7f\u7528\u6307\u5357\u548c\u5e94\u7528\u9879\u76ee\u6587\u6863\u3002\u6211\u4eec\u4f1a\u4e0d\u65ad\u52aa\u529b\uff0c\u63d0\u4f9b\u6e05\u6670\u3001\u51c6\u786e\u4e14\u6613\u4e8e\u7406\u89e3\u7684\u6587\u6863\uff0c\u4ee5\u5e2e\u52a9\u60a8\u66f4\u597d\u5730\u4e86\u89e3\u548c\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u3002"),(0,r.yg)("h2",{id:"wiki-\u6587\u6863\u5e73\u53f0\u5185\u5bb9\u6897\u6982"},"wiki \u6587\u6863\u5e73\u53f0\u5185\u5bb9\u6897\u6982"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6211\u4eec\u5c06\u6240\u6709\u5185\u5bb9\u8fdb\u884c\u4e86\u5206\u7ec4\uff0c\u5305\u542b\u56db\u4e2a\u4e3b\u9898\uff0c\u6bcf\u4e2a\u4e3b\u9898\u90fd\u5305\u542b\u4e24\u5230\u4e09\u4e2a\u5927\u90e8\u5206\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u60c5\u51b5\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728\u8fd9\u4e2a\u6587\u6863\u5e73\u53f0\u4e2d\u627e\u5230\u5173\u4e8e\u73b0\u5b9e\u90e8\u7f72\u7684\u8fb9\u7f18\u8ba1\u7b97\u8bbe\u5907\u548c\u5de5\u4e1a\u7269\u8054\u7f51\u573a\u666f\u7684\u8d44\u6599\uff0c\u540c\u65f6\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u5f00\u653e\u5f0f\u5f00\u53d1\u5de5\u5177\u7684\u6587\u6863\u548c\u8bfe\u7a0b\uff0c\u5e2e\u52a9\u60a8\u6784\u5efa\u81ea\u5df1\u7684\u89e3\u51b3\u65b9\u6848\u3002"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u76ee\u524d\u5185\u5bb9\u4e3a\u6d4b\u8bd5\u7248\u3002\u6700\u65b0\u66f4\u65b0\u5728\uff1a",(0,r.yg)("strong",null,(0,r.yg)("a",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"8DC215",size:"4"}," 2024 \u5e74 11 \u6708 27 \u53f7 ")))))),(0,r.yg)("h2",{id:"\u7269\u7406\u4e16\u754c\u4fe1\u606f\u6570\u5b57\u5316\u548c\u6570\u5b57\u4fe1\u53f7\u4f20\u64ad\u8bbe\u5907"},"\u7269\u7406\u4e16\u754c\u4fe1\u606f\u6570\u5b57\u5316\u548c\u6570\u5b57\u4fe1\u53f7\u4f20\u64ad\u8bbe\u5907"),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#industrial-sensors-and-probes",class:"getting_started_label2"},"SenseCAP \u5de5\u4e1a\u7ea7\u4f20\u611f\u5668"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#data-logger-with-configuration-guide",class:"getting_started_label2"}," - \u6570\u636e\u50a8\u5b58\u5668"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#gateway-for-multiple-platform",class:"getting_started_label2"}," - \u7f51\u5173\u8bbe\u5907 "),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#routers-for-other-network-infrastructure",class:"getting_started_label2"}," - \u8def\u7531\u5668 "))),(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#grove-ecosystem-sensors",class:"getting_started_label2"},"Grove \u521d\u5b66\u8005\u4f20\u611f\u5668"),(0,r.yg)("br",null),"          ",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Sensor_Network/#grove-communication-modules",class:"getting_started_label2"},"Grove \u521d\u5b66\u8005\u901a\u4fe1\u6a21\u7ec4 ")))),(0,r.yg)("h2",{id:"\u8ba1\u7b97\u8bbe\u5907\u5355\u677f\u7535\u8111\u548c\u8ba1\u7b97\u6a21\u7ec4"},"\u8ba1\u7b97\u8bbe\u5907\uff0c\u5355\u677f\u7535\u8111\u548c\u8ba1\u7b97\u6a21\u7ec4"),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#devices",class:"getting_started_label2"},"\u8ba1\u7b97\u8bbe\u5907"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#os-installation--firmware-updating",class:"getting_started_label3"},"> \u7cfb\u7edf\u5b89\u88c5\u548c\u56fa\u4ef6\u66f4\u65b0"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#extensions--carrier-board",class:"getting_started_label3"},"- \u8bbe\u5907\u6269\u5c55\u677f"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#application--software",class:"getting_started_label3"},"- IoT \u573a\u666f\u5e94\u7528 / AI \u6a21\u578b\u90e8\u7f72 / \u8f6f\u4ef6\u5b89\u88c5")))),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#microcontrollers",class:"getting_started_label2"},"\u8ba1\u7b97\u6a21\u7ec4\uff08\u5355\u7247\u673a\uff09"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#easy-iot-applications",class:"getting_started_label3"},"> IoT \u6a21\u578b\u5f00\u53d1"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#embedded-ml-scenarios",class:"getting_started_label3"},"> \u8fb9\u7f18 AI \u5e94\u7528"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#extensions",class:"getting_started_label3"},"- \u6a21\u7ec4\u6269\u5c55\u7ec4\u4ef6 "),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#accessories",class:"getting_started_label3"},"- \u6a21\u7ec4\u5916\u56f4\u8bbe\u5907"))),(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#single-board-computers",class:"getting_started_label2"},"\u5355\u677f\u7535\u8111"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#os-installation--firmware-updating-1",class:"getting_started_label3"},"> \u7cfb\u7edf\u5b89\u88c5\u548c\u56fa\u4ef6\u66f4\u65b0"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#extensions-1",class:"getting_started_label3"},"- \u7535\u8111\u6269\u5c55\u7ec4\u4ef6"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#application--software-1",class:"getting_started_label3"},"- IoT \u573a\u666f\u5e94\u7528 / AI \u6a21\u578b\u90e8\u7f72 / \u8f6f\u4ef6\u5b89\u88c5")))),(0,r.yg)("h2",{id:"\u8bfe\u7a0b\u4e0e\u5957\u4ef6"},"\u8bfe\u7a0b\u4e0e\u5957\u4ef6"),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#kit-with-courses",class:"getting_started_label2"},"\u57fa\u4e8e\u5355\u7247\u673a\u7684\u8bfe\u7a0b\u4e0e\u5957\u4ef6"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#tutorials",class:"getting_started_label3"},"- \u5b9e\u7528\u6559\u7a0b"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#kit-with-courses",class:"getting_started_label3"},"- \u514d\u8d39\u8bfe\u7a0b"))),(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#kit-with-courses-1",class:"getting_started_label2"},"\u57fa\u4e8e\u5355\u677f\u7535\u8111\u7684\u8bfe\u7a0b\u4e0e\u5957\u4ef6"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#tutorials--faq",class:"getting_started_label3"},"- \u5b9e\u7528\u6559\u7a0b"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/Edge_Computing/#kit-with-courses-1",class:"getting_started_label3"},"- \u514d\u8d39\u8bfe\u7a0b")))),(0,r.yg)("h2",{id:"\u4e91\u670d\u52a1"},"\u4e91\u670d\u52a1"),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"getting_started"},(0,r.yg)("div",{class:"start_card_wrapper"},(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/CloudnChain/#sensecap-cloud-production",class:"getting_started_label2"},"SenseCAP \u4e91\u670d\u52a1"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/CloudnChain/#sensecap-ai",class:"getting_started_label2"},"SenseCAP \u4e91 AI"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/CloudnChain/#sensecap-hotspot-app",class:"getting_started_label3"},"HotSpot \u8f6f\u4ef6"),",",(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/CloudnChain/#sensecap-mate-app",class:"getting_started_label3"},"Mate \u8f6f\u4ef6"),",",(0,r.yg)("a",{href:"https://wiki.seeedstudio.com/CloudnChain/#sensecap-api",class:"getting_started_label3"},"SenseCAP \u4e91 API")))),(0,r.yg)("h2",{id:"-contributor-\u8ba1\u5212"},"\u2728 Contributor \u8ba1\u5212"),(0,r.yg)("p",null,"\u77fd\u9012 Contributor \u8ba1\u5212\u662f\u4e00\u4e2a\u5bf9\u5916\u5408\u4f5c\u8ba1\u5212\uff0c\u65e8\u5728\u56e2\u7ed3\u793e\u533a\u7684\u6709\u5171\u540c\u7231\u597d\u7684\u5f00\u53d1\u8005\uff0c\u5171\u540c\u6784\u5efa\u521b\u65b0\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://www.seeedstudio.com/blog/wp-content/uploads/2023/08/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230817161402.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h3",{id:"\u6211\u4eec\u5982\u4f55\u4e0e-contributor-\u5408\u4f5c"},"\u6211\u4eec\u5982\u4f55\u4e0e Contributor \u5408\u4f5c\uff1f"),(0,r.yg)("p",null,"\u6211\u4eec\u6b22\u8fce\u6240\u6709\u80fd\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb wiki \u6587\u6863\u5e73\u53f0\u7684\u8d21\u732e\u8005\u548c\u4ed6\u4eec\u7684\u8d21\u732e\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4efb\u52a1\uff08\u6301\u7eed\u66f4\u65b0\uff09\u4f9b\u8d21\u732e\u8005\u9009\u62e9\uff0c\u6bcf\u4e2a\u4efb\u52a1\u90fd\u6709\u8be6\u7ec6\u7684\u63cf\u8ff0\uff0c\u610f\u5728\u5c06 wiki \u6587\u6863\u5e73\u53f0\u8fdb\u884c\u66f4\u597d\u4f18\u5316\u3002")),(0,r.yg)("p",null,"\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u63d0\u4f9b\u4e00\u7cfb\u5217\u5956\u52b1\u5411\u6211\u4eec\u7684\u8d21\u732e\u8005\u8868\u793a\u611f\u8c22\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6839\u636e\u4efb\u52a1\u7684\u96be\u5ea6\u7b49\u7ea7\uff08Tier 0/1/2/3\uff09\u3001\u6211\u4eec\u671f\u671b\u7684\u5b8c\u6210\u65f6\u95f4\uff081\u5929/3\u5929/7\u5929/15\u5929\uff09\u3001\u5b9e\u9645\u63d0\u4ea4\u65f6\u95f4\u4ee5\u53ca\u5b9e\u9645\u63d0\u4ea4\u5185\u5bb9\uff0c\u6211\u4eec\u5c06\u63d0\u4f9b\u4e0d\u540c\u7ea7\u522b\u7684\u5956\u52b1\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6211\u4eec\u5c06\u5411\u8d21\u732e\u8005\u63d0\u4f9b\u6211\u4eec\u7684\u4ea7\u54c1\u6216\u73b0\u91d1\u5956\u52b1\uff0c\u4ee5\u793a\u6fc0\u52b1\u548c\u611f\u8c22\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6b64\u5916\uff0c\u6240\u6709\u8d21\u732e\u8005\u53ca\u5176\u8d21\u732e\u5c06\u5728\u5e73\u53f0\u4e0a\u516c\u5f00\u5c55\u793a\u3002")),(0,r.yg)("h3",{id:"\u4efb\u52a1\u7684\u5177\u4f53\u5185\u5bb9"},"\u4efb\u52a1\u7684\u5177\u4f53\u5185\u5bb9"),(0,r.yg)("p",null,"\u622a\u81f3\u76ee\u524d\uff0c\u4efb\u52a1\u7c7b\u578b\u5305\u62ec\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u9879\u76ee\u5f00\u53d1\uff1a\u57fa\u4e8eSeeed Studio\u4ea7\u54c1\u7684\u5404\u79cd\u5e94\u7528\u548c\u8f6f\u4ef6\u90e8\u7f72\uff0c\u4ece\u5355\u7247\u673a\u5e94\u7528\u5230\u5de5\u4e1a\u7ea7\u8bbe\u5907\u8f6f\u4ef6\u90e8\u7f72\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7f51\u9875\u7ed3\u6784\u548c\u5185\u5bb9\u7684\u8fed\u4ee3\uff1a\u4ece\u7b80\u5355\u7684\u8bed\u6cd5\u4fee\u6b63\u5230\u6574\u4e2a\u9875\u9762\u5185\u5bb9\u7684\u66f4\u65b0\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u57fa\u4e8e\u201c\u89e3\u51b3\u65b9\u6848\u201d\u7684\u539f\u578b\u3001\u53ef\u90e8\u7f72\u89e3\u51b3\u65b9\u6848\u3001\u6216\u6709\u8da3\u7684\u9879\u76ee\u60f3\u6cd5\u3002\u53ef\u53c2\u8003\u80cc\u666f\u793a\u4f8b\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6570\u5b57\u81ea\u52a8\u5316\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5206\u6563\u5f0f\u6570\u5b57\u8f6c\u578b\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u5728\u91ce\u5916\u90e8\u7f72\u7684\u57fa\u7840\u8bbe\u65bd\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u78b3\u4e2d\u548c\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u6301\u7eed\u53d1\u5c55\u76ee\u6807\uff08SDGs\uff09\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u89e3\u51b3\u65e5\u5e38\u751f\u6d3b\u4e2d\u7684\u95ee\u9898\uff1b"),(0,r.yg)("li",{parentName:"ul"},"TinyML")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-platform/contributor_program.png",alt:"pir",width:900,height:"auto"})),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u975e\u5e38\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u6b64\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u8fc7\u7a0b\u4e2d\u83b7\u5f97\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);