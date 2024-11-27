"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46798],{15680:(e,t,i)=>{i.d(t,{xA:()=>y,yg:()=>c});var n=i(96540);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),g=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},y=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,y=a(e,["components","mdxType","originalType","parentName"]),p=g(i),d=l,c=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return i?n.createElement(c,o(o({ref:t},y),{},{components:i})):n.createElement(c,o({ref:t},y))}));function c(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,o=new Array(r);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var g=2;g<r;g++)o[g]=i[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},66430:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>g});var n=i(9668),l=(i(96540),i(15680));const r={description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4e50\u946b\u7684 Matter \u90e8\u7f72\u5de5\u5177\u5feb\u901f\u4f53\u9a8c Matter Lighting\u3002",title:"\u4f7f\u7528 XIAO ESP32 \u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Matter",keywords:["ESP-IDF","XIAO"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/getting_started_with_matter",last_update:{date:"11/27/2024",author:"Agnes"}},o="\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Matter \u548c XIAO ESP32 \u7cfb\u5217",a={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/Matter/CN_getting_started_with_matter",id:"zh-CN/Sensor/SeeedStudio_XIAO/Matter/CN_getting_started_with_matter",title:"\u4f7f\u7528 XIAO ESP32 \u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Matter",description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4e50\u946b\u7684 Matter \u90e8\u7f72\u5de5\u5177\u5feb\u901f\u4f53\u9a8c Matter Lighting\u3002",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/Matter/CN_getting_started_with_matter.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/Matter",slug:"/cn/getting_started_with_matter",permalink:"/cn/getting_started_with_matter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/Matter/CN_getting_started_with_matter.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1732665600,formattedLastUpdatedAt:"Nov 27, 2024",frontMatter:{description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u4e50\u946b\u7684 Matter \u90e8\u7f72\u5de5\u5177\u5feb\u901f\u4f53\u9a8c Matter Lighting\u3002",title:"\u4f7f\u7528 XIAO ESP32 \u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Matter",keywords:["ESP-IDF","XIAO"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/getting_started_with_matter",last_update:{date:"11/27/2024",author:"Agnes"}},sidebar:"CNSidebar",previous:{title:"\u5728 XIAO \u4e0a\u4f7f\u7528 Espressif ESP-IDF \u5f00\u53d1",permalink:"/cn/xiao_idf"},next:{title:"Matter \u5f00\u53d1\u4e0e XIAO ESP32 \u7cfb\u5217",permalink:"/cn/xiao_esp32_matter_env"}},s={},g=[{value:"\u51c6\u5907\u8f6f\u4ef6",id:"\u51c6\u5907\u8f6f\u4ef6",level:2},{value:"\u51c6\u5907\u786c\u4ef6",id:"\u51c6\u5907\u786c\u4ef6",level:2},{value:"\u89c6\u9891\u6559\u7a0b",id:"\u89c6\u9891\u6559\u7a0b",level:2},{value:"\u6b65\u9aa4 1. \u4e3a XIAO ESP32 \u5237\u5199 Matter \u56fa\u4ef6",id:"\u6b65\u9aa4-1-\u4e3a-xiao-esp32-\u5237\u5199-matter-\u56fa\u4ef6",level:2},{value:"\u6b65\u9aa4 2. \u4f7f\u7528 iPhone Home \u5e94\u7528\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u8bbe\u5907",id:"\u6b65\u9aa4-2-\u4f7f\u7528-iphone-home-\u5e94\u7528\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u8bbe\u5907",level:2},{value:"\u6b65\u9aa4 3. \u5728 Home \u5e94\u7528\u4e2d\u4f7f\u7528 XIAO",id:"\u6b65\u9aa4-3-\u5728-home-\u5e94\u7528\u4e2d\u4f7f\u7528-xiao",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"Q1: \u5728 Home \u5e94\u7528\u4e2d\u957f\u65f6\u95f4\u65e0\u6cd5\u8fde\u63a5\u5230\u8bbe\u5907\u3002",id:"q1-\u5728-home-\u5e94\u7528\u4e2d\u957f\u65f6\u95f4\u65e0\u6cd5\u8fde\u63a5\u5230\u8bbe\u5907",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],y={toc:g},p="wrapper";function u(e){let{components:t,...i}=e;return(0,l.yg)(p,(0,n.A)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u5feb\u901f\u5f00\u59cb\u4f7f\u7528-matter-\u548c-xiao-esp32-\u7cfb\u5217"},"\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 Matter \u548c XIAO ESP32 \u7cfb\u5217"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u672c\u6587\u662f Seeed Studio XIAO ESP32 \u5f00\u53d1 Matter \u7cfb\u5217\u7684\u7b2c\u4e8c\u7bc7\u6559\u7a0b\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u914d\u7f6e ESP-IDF \u73af\u5883\uff0c\u8bf7\u5148\u9605\u8bfb\u7b2c\u4e00\u7bc7\u6559\u7a0b\uff1a"),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},(0,l.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/xiao_idf"},"\u5728 XIAO \u4e0a\u4f7f\u7528 Espressif ESP-IDF \u5f00\u53d1")))),(0,l.yg)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u9002\u7528\u4e8e XIAO ESP32C3\u3001XIAO ESP32S3\u3002\u7531\u4e8e GPIO8 \u5f15\u811a\u672a\u5f15\u51fa\uff0cEspressif \u63d0\u4f9b\u7684 Matter \u793a\u4f8b\u6682\u65f6\u4e0d\u652f\u6301 XIAO ESP32C6\u3002")),(0,l.yg)("p",null,"\u5728\u667a\u80fd\u5bb6\u5c45\u6280\u672f\u9886\u57df\uff0cMatter \u7684\u51fa\u73b0\u88ab\u8ba4\u4e3a\u662f\u4e00\u573a\u9769\u547d\uff0c\u5b83\u627f\u8bfa\u5f7b\u5e95\u6539\u53d8\u8bbe\u5907\u4e4b\u95f4\u7684\u901a\u4fe1\u548c\u4e92\u52a8\u65b9\u5f0f\u3002Matter \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u6807\u51c6\u5316\u7684\u534f\u8bae\uff0c\u65e8\u5728\u5b9e\u73b0\u4e0d\u540c\u5382\u5546\u7684\u667a\u80fd\u5bb6\u5c45\u8bbe\u5907\u4e4b\u95f4\u7684\u65e0\u7f1d\u4e92\u64cd\u4f5c\u3002\u901a\u8fc7\u63d0\u4f9b\u7edf\u4e00\u7684\u8bed\u8a00\u548c\u6846\u67b6\uff0cMatter \u65e8\u5728\u7b80\u5316\u7269\u8054\u7f51\u8bbe\u5907\u7684\u5f00\u53d1\u548c\u90e8\u7f72\uff0c\u521b\u9020\u66f4\u4e92\u8054\u3001\u66f4\u53cb\u597d\u7684\u667a\u80fd\u5bb6\u5c45\u4f53\u9a8c\u3002"),(0,l.yg)("p",null,"\u4f5c\u4e3a\u5f00\u53d1\u8005\u6216\u7231\u597d\u8005\uff0c\u60a8\u53ef\u80fd\u6025\u4e8e\u63a2\u7d22 Matter \u7684\u6f5c\u529b\uff0c\u5e76\u5f00\u59cb\u6784\u5efa\u81ea\u5df1\u7684 Matter \u517c\u5bb9\u8bbe\u5907\u3002\u8fd9\u65f6\uff0cXIAO ESP32 \u7cfb\u5217\u548c ESPLaunchPad \u4fbf\u80fd\u6d3e\u4e0a\u7528\u573a\u3002XIAO ESP32 \u7cfb\u5217\uff0c\u7279\u522b\u662f XIAO ESP32C3\u3001XIAO ESP32S3 \u548c XIAO ESP32C6\uff0c\u662f\u7d27\u51d1\u800c\u5f3a\u5927\u7684\u5f00\u53d1\u677f\uff0c\u63d0\u4f9b\u4e86\u6784\u5efa Matter \u8bbe\u5907\u7684\u7406\u60f3\u5e73\u53f0\u3002\u51ed\u501f\u5176\u5f3a\u5927\u7684\u529f\u80fd\u548c\u4e30\u5bcc\u7684\u5916\u8bbe\u63a5\u53e3\uff0c\u8fd9\u4e9b\u5f00\u53d1\u677f\u4e3a\u60a8\u7684 Matter \u9879\u76ee\u63d0\u4f9b\u4e86\u6240\u9700\u7684\u786c\u4ef6\u57fa\u7840\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u4e3a\u4e86\u7b80\u5316\u5f00\u53d1\u8fc7\u7a0b\u5e76\u4f7f\u5176\u66f4\u6613\u8bbf\u95ee\uff0cEspressif \u7cfb\u7edf\u63a8\u51fa\u4e86 ESPLaunchPad\uff0c\u8fd9\u662f\u4e00\u4e2a\u5168\u9762\u7684\u5e73\u53f0\uff0c\u7b80\u5316\u4e86 ESP32 \u8bbe\u5907\u7684\u56fa\u4ef6\u5237\u5199\u548c\u914d\u7f6e\u8fc7\u7a0b\u3002ESPLaunchPad \u5229\u7528 ESP RainMaker \u751f\u6001\u7cfb\u7edf\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u5141\u8bb8\u60a8\u901a\u8fc7\u667a\u80fd\u624b\u673a\u5e94\u7528\u8f7b\u677e\u914d\u7f6e\u548c\u63a7\u5236\u8bbe\u5907\u3002\u901a\u8fc7\u5c06 XIAO ESP32 \u7cfb\u5217\u4e0e ESPLaunchPad \u76f8\u7ed3\u5408\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u5f00\u59cb Matter \u5f00\u53d1\uff0c\u4f53\u9a8c\u8fd9\u4e00\u53d8\u9769\u6027\u534f\u8bae\u7684\u597d\u5904\u3002"),(0,l.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 ESPLaunchPad \u5feb\u901f\u5c06\u56fa\u4ef6\u5237\u5199\u5230 XIAO ESP32 \u5f00\u53d1\u677f\u4e0a\uff0c\u5e76\u901a\u8fc7\u4e8c\u7ef4\u7801\u5c06\u5176\u4e0e iPhone \u914d\u5bf9\u3002\u6309\u7167\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u60a8\u5c06\u80fd\u591f\u5efa\u7acb\u624b\u673a\u4e0e XIAO ESP32 \u8bbe\u5907\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u5b9e\u73b0\u65e0\u7f1d\u63a7\u5236\u548c\u4e92\u52a8\u3002\u8fd9\u4e00\u5b9e\u8df5\u4f53\u9a8c\u5c06\u4e3a\u60a8\u63d0\u4f9b\u5173\u4e8e Matter \u53ca\u5176\u5728\u667a\u80fd\u5bb6\u5c45\u751f\u6001\u7cfb\u7edf\u4e2d\u7684\u6f5c\u529b\u7684\u57fa\u7840\u7406\u89e3\u3002"),(0,l.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u60a8\u7684 XIAO ESP32 \u5f00\u53d1\u677f\u5e76\u51c6\u5907\u597d\u5237\u5199\u56fa\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ESPLaunchPad \u8f7b\u677e\u5c06 Matter \u56fa\u4ef6\u5237\u5199\u5230 XIAO ESP32 \u8bbe\u5907\u4e0a\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u4e8c\u7ef4\u7801\u5c06\u60a8\u7684 XIAO ESP32 \u5f00\u53d1\u677f\u4e0e iPhone \u914d\u5bf9\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528 iPhone \u5e94\u7528\u63a7\u5236\u548c\u4e0e\u60a8\u7684 Matter \u8bbe\u5907\u4e92\u52a8\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5728\u5b9e\u9645\u73af\u5883\u4e2d\u63a2\u7d22 Matter \u7684\u57fa\u672c\u529f\u80fd\u548c\u80fd\u529b\u3002")),(0,l.yg)("p",null,"\u901a\u8fc7\u672c\u6559\u7a0b\uff0c\u60a8\u5c06\u5bf9 Matter \u53ca\u5176\u5728 XIAO ESP32 \u7cfb\u5217\u548c ESPLaunchPad \u4e0a\u7684\u5b9e\u73b0\u6709\u4e00\u4e2a\u575a\u5b9e\u7684\u7406\u89e3\u3002\u60a8\u5c06\u5177\u5907\u7ee7\u7eed\u63a8\u8fdb Matter \u5f00\u53d1\u7684\u77e5\u8bc6\u548c\u6280\u80fd\uff0c\u521b\u9020\u51fa\u521b\u65b0\u7684\u667a\u80fd\u5bb6\u5c45\u89e3\u51b3\u65b9\u6848\uff0c\u5145\u5206\u5229\u7528\u8fd9\u4e00\u5f00\u521b\u6027\u7684\u534f\u8bae\u3002"),(0,l.yg)("p",null,"\u90a3\u4e48\uff0c\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff0c\u8e0f\u4e0a\u4e0e XIAO ESP32 \u7cfb\u5217\u548c ESPLaunchPad \u4e00\u8d77\u63a2\u7d22 Matter \u4e16\u754c\u7684\u6fc0\u52a8\u4eba\u5fc3\u7684\u65c5\u7a0b\uff01"),(0,l.yg)("h2",{id:"\u51c6\u5907\u8f6f\u4ef6"},"\u51c6\u5907\u8f6f\u4ef6"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u5217\u51fa\u4e86\u672c\u6559\u7a0b\u652f\u6301\u7684\u7cfb\u7edf\u548c\u7248\u672c\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u4e3b\u673a"),"\uff1a ",(0,l.yg)("a",{parentName:"li",href:"https://releases.ubuntu.com/jammy/"},"Ubuntu 22.04 LTS (Jammy Jellyfish)")," \u6216 macOS 10.15 \u6216\u66f4\u9ad8\u7248\u672c\u3002")),(0,l.yg)("h2",{id:"\u51c6\u5907\u786c\u4ef6"},"\u51c6\u5907\u786c\u4ef6"),(0,l.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u7ed3\u675f\u65f6\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5c06 XIAO ESP32 \u7cfb\u5217\u4f5c\u4e3a Matter \u7ec8\u7aef\u8bbe\u5907\u6dfb\u52a0\u5230 Apple Home \u4e2d\uff0c\u4ee5\u901a\u8fc7\u82f9\u679c\u751f\u6001\u7cfb\u7edf\u63a7\u5236 LED \u706f\u5e26\u3002\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u672c\u6559\u7a0b\u652f\u6301\u4ee5\u4e0b XIAO \u5f00\u53d1\u677f\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u5b83\u4eec\u4f5c\u4e3a\u672c\u8bfe\u7a0b\u7684\u5185\u5bb9\u3002"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("table",{align:"center"},(0,l.yg)("tr",null,(0,l.yg)("th",null,"XIAO ESP32C3"),(0,l.yg)("th",null,"XIAO ESP32S3")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:110,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}})))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))),(0,l.yg)("td",null,(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))))))),(0,l.yg)("p",null,"\u9664\u4e86 XIAO \u5f00\u53d1\u677f\u5916\uff0c\u6211\u4eec\u8fd8\u9700\u8981 WS281x \u6a21\u578b\u7684\u706f\u5e26\u6216\u706f\u73e0\u3002\u76ee\u524d\uff0cEspressif \u63d0\u4f9b\u7684\u706f\u5149\u793a\u4f8b\u4ec5\u652f\u6301\u5355\u9897\u706f\u73e0\uff0c\u56e0\u6b64\u65e0\u8bba\u4f7f\u7528\u706f\u5e26\u8fd8\u662f\u706f\u73e0\uff0c\u5b83\u90fd\u4f1a\u53ea\u70b9\u4eae\u4e00\u4e2a\u706f\u3002\u6211\u4eec\u8fd8\u5efa\u8bae\u60a8\u9009\u62e9 Grove Base for XIAO\uff0c\u4ee5\u4fbf\u66f4\u8f7b\u677e\u5730\u8fdb\u884c\u63a5\u7ebf\u3002"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("table",{align:"center"},(0,l.yg)("tr",null,(0,l.yg)("th",null,"Grove Base for XIAO"),(0,l.yg)("th",null,"Grove - RGB LED Ring (20 - WS2813 Mini)")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png",style:{width:250,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg",style:{width:250,height:"auto"}})))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))),(0,l.yg)("td",null,(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))))))),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f XIAO ESP32C3\uff0c\u8bf7\u5c06 LED \u706f\u5e26\u8fde\u63a5\u5230 ",(0,l.yg)("strong",{parentName:"p"},"D8")," \u5f15\u811a\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png",style:{width:400,height:"auto"}})),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f XIAO ESP32S3\uff0c\u8bf7\u5c06 LED \u706f\u5e26\u8fde\u63a5\u5230 ",(0,l.yg)("strong",{parentName:"p"},"D9")," \u5f15\u811a\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png",style:{width:400,height:"auto"}})),(0,l.yg)("p",null,"\u672c\u6559\u7a0b\u5c06\u4ee5 ",(0,l.yg)("strong",{parentName:"p"},"XIAO ESP32C3")," \u4e3a\u4f8b\uff0c\u6982\u8ff0\u5982\u4f55\u5237\u5199\u56fa\u4ef6\u3001\u6dfb\u52a0\u8bbe\u5907\u7b49\u64cd\u4f5c\u3002"),(0,l.yg)("h2",{id:"\u89c6\u9891\u6559\u7a0b"},"\u89c6\u9891\u6559\u7a0b"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("iframe",{width:"750",height:"450",src:"https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,l.yg)("h2",{id:"\u6b65\u9aa4-1-\u4e3a-xiao-esp32-\u5237\u5199-matter-\u56fa\u4ef6"},"\u6b65\u9aa4 1. \u4e3a XIAO ESP32 \u5237\u5199 Matter \u56fa\u4ef6"),(0,l.yg)("p",null,"\u4f7f\u7528 USB \u6570\u636e\u7ebf\u5c06 XIAO ESP32C3 \u5f00\u53d1\u677f\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002\u786e\u4fdd\u8ba1\u7b97\u673a\u6b63\u786e\u8bc6\u522b\u8be5\u5f00\u53d1\u677f\u3002"),(0,l.yg)("p",null,"\u5728\u8ba1\u7b97\u673a\u4e0a\u6253\u5f00 ESPLaunchPad \u7f51\u7ad9\u3002"),(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"},"\u524d\u5f80 ESPLaunchPAD"))))),(0,l.yg)("br",null),(0,l.yg)("p",null,"\u5728 ",(0,l.yg)("strong",{parentName:"p"},"\u9009\u62e9\u5e94\u7528\u7a0b\u5e8f")," \u4e2d\u9009\u62e9 ",(0,l.yg)("strong",{parentName:"p"},"light"),"\uff0c\u5728 ",(0,l.yg)("strong",{parentName:"p"},"ESP \u82af\u7247\u7c7b\u578b")," \u4e2d\u9009\u62e9 ",(0,l.yg)("strong",{parentName:"p"},"ESP32C3"),"\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,l.yg)("strong",{parentName:"p"},"\u8fde\u63a5")," \u6309\u94ae\uff0c\u9009\u62e9\u60a8\u5df2\u7ecf\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u7684 XIAO \u8bbe\u5907\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u63a5\u7740\u70b9\u51fb\u4e0b\u9762\u7684 ",(0,l.yg)("strong",{parentName:"p"},"flash")," \u6309\u94ae\uff0c\u7b49\u5f85\u56fa\u4ef6\u4e0a\u4f20\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u56fa\u4ef6\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e9b\u64cd\u4f5c\u8b66\u544a\u6846\u548c\u4e00\u4e2a\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u53ea\u9700\u70b9\u51fb ",(0,l.yg)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u7136\u540e\u70b9\u51fb\u5c4f\u5e55\u53f3\u4fa7\u7684 ",(0,l.yg)("strong",{parentName:"p"},"\u91cd\u7f6e\u8bbe\u5907")," \u6309\u94ae\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png",style:{width:800,height:"auto"}})),(0,l.yg)("p",null,"\u5f53\u60a8\u770b\u5230\u8c03\u8bd5\u4fe1\u606f\u65f6\uff0c\u610f\u5473\u7740\u4e00\u5207\u987a\u5229\u3002\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u8bbe\u5907\u7ed1\u5b9a\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png",style:{width:800,height:"auto"}})),(0,l.yg)("h2",{id:"\u6b65\u9aa4-2-\u4f7f\u7528-iphone-home-\u5e94\u7528\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u8bbe\u5907"},"\u6b65\u9aa4 2. \u4f7f\u7528 iPhone Home \u5e94\u7528\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u8bbe\u5907"),(0,l.yg)("p",null,"\u5728\u6dfb\u52a0\u8bbe\u5907\u7684\u90e8\u5206\uff0c\u6211\u4eec\u4ee5 Apple \u7684\u8bbe\u5907\u4e3a\u4f8b\uff08\u56e0\u4e3a\u6211\u624b\u5934\u53ea\u6709 Apple \u8bbe\u5907\uff09\u3002\u5982\u679c\u60a8\u624b\u5934\u6709 ",(0,l.yg)("a",{parentName:"p",href:"https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid"},"Google \u8bbe\u5907")," \u6216 ",(0,l.yg)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/alexa/matter"},"Amazon \u8bbe\u5907"),"\uff0c\u4e5f\u8bb8\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u50cf\u672c\u6587\u4e00\u6837\uff0c\u60a8\u5e0c\u671b\u4f7f\u7528 iPhone \u7684 Home \u5e94\u7528\u6dfb\u52a0\u8bbe\u5907\uff0c\u60a8\u9700\u8981\u6709\u4e00\u4e2a Apple \u8bbe\u5907\u4f5c\u4e3a\u5bb6\u5ead\u4e2d\u5fc3\u3002\u76ee\u524d\uff0cHome Hub \u652f\u6301\u7684\u8bbe\u5907\u6709 HomePod \u548c Apple TV\uff0c\u8be6\u60c5\u8bf7\u9605\u8bfb ",(0,l.yg)("a",{parentName:"p",href:"https://support.apple.com/en-hk/102557"},"Apple \u5b98\u7f51"),"\u3002\u672c\u6559\u7a0b\u5047\u8bbe\u60a8\u5df2\u7ecf\u5728 Home \u5e94\u7528\u4e2d\u6dfb\u52a0\u4e86 Home Hub\u3002"),(0,l.yg)("p",null,"Home \u5e94\u7528\u9ed8\u8ba4\u5df2\u5b89\u88c5\u5728 iOS \u8bbe\u5907\u4e0a\u3002\u5982\u679c\u60a8\u66fe\u5220\u9664\u8fc7\u5b83\uff0c\u53ef\u4ee5 ",(0,l.yg)("a",{parentName:"p",href:"https://apps.apple.com/cn/app/home/id1110145103?l=en-GB"},"\u5728 App Store \u4e2d\u91cd\u65b0\u4e0b\u8f7d"),"\u3002"),(0,l.yg)("p",null,"\u6253\u5f00 iPhone \u4e0a\u7684 Home \u5e94\u7528\u3002\u70b9\u51fb\u5c4f\u5e55\u53f3\u4e0a\u89d2\u7684 ",(0,l.yg)("strong",{parentName:"p"},"+")," \u6309\u94ae\u3002\u4ece\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,l.yg)("strong",{parentName:"p"},"\u6dfb\u52a0\u6216\u626b\u63cf\u914d\u4ef6"),"\u3002\u4f7f\u7528 iPhone \u7684\u76f8\u673a\u626b\u63cf\u4e0e XIAO ESP32C3 \u4e00\u8d77\u63d0\u4f9b\u7684\u4e8c\u7ef4\u7801\u3002Home \u5e94\u7528\u5c06\u8bc6\u522b Matter \u914d\u4ef6\uff0c\u5e76\u5c06\u5176\u663e\u793a\u4e3a\u65b0\u914d\u4ef6\u3002\u70b9\u51fb ",(0,l.yg)("strong",{parentName:"p"},"\u6dfb\u52a0\u5230\u5bb6\u5ead")," \u5c06 XIAO ESP32C3 \u6dfb\u52a0\u5230\u60a8\u7684 Home \u5e94\u7528\u3002\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u8be6\u7ec6\u64cd\u4f5c\u622a\u56fe\u3002"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("table",{align:"center"},(0,l.yg)("tr",null,(0,l.yg)("th",null,"\u7b2c 1 \u9875"),(0,l.yg)("th",null,"\u7b2c 2 \u9875"),(0,l.yg)("th",null,"\u7b2c 3 \u9875")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png",style:{width:600,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png",style:{width:600,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png",style:{width:600,height:"auto"}})))),(0,l.yg)("tr",null,(0,l.yg)("th",null,"\u7b2c 4 \u9875"),(0,l.yg)("th",null,"\u7b2c 5 \u9875"),(0,l.yg)("th",null,"\u7b2c 6 \u9875")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png",style:{width:600,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png",style:{width:600,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png",style:{width:600,height:"auto"}})))),(0,l.yg)("tr",null,(0,l.yg)("th",null,"\u7b2c 7 \u9875"),(0,l.yg)("th",null,"\u7b2c 8 \u9875"),(0,l.yg)("th",null,"\u7b2c 9 \u9875")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png",style:{width:600,height:"auto"}}))),(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png",style:{width:600,height:"auto"}})))))),(0,l.yg)("h2",{id:"\u6b65\u9aa4-3-\u5728-home-\u5e94\u7528\u4e2d\u4f7f\u7528-xiao"},"\u6b65\u9aa4 3. \u5728 Home \u5e94\u7528\u4e2d\u4f7f\u7528 XIAO"),(0,l.yg)("p",null,"\u5728 Home \u5e94\u7528\u4e2d\uff0c\u627e\u5230\u65b0\u6dfb\u52a0\u7684 XIAO ESP32C3 \u914d\u4ef6\u3002\u70b9\u51fb\u8be5\u914d\u4ef6\u4ee5\u8bbf\u95ee\u5176\u63a7\u5236\u9009\u9879\u3002\u4f7f\u7528\u4eae\u5ea6\u6ed1\u5757\u8c03\u6574\u8fde\u63a5\u706f\u5149\u7684\u4eae\u5ea6\u3002\u70b9\u51fb\u989c\u8272\u56fe\u6807\u53ef\u4ee5\u66f4\u6539\u706f\u5149\u7684\u989c\u8272\u3002\u60a8\u53ef\u4ee5\u4ece\u591a\u79cd\u9884\u8bbe\u989c\u8272\u4e2d\u9009\u62e9\uff0c\u6216\u8005\u4f7f\u7528\u989c\u8272\u9009\u62e9\u5668\u521b\u5efa\u81ea\u5b9a\u4e49\u989c\u8272\u3002\u8fde\u63a5\u5230 XIAO ESP32C3 \u7684\u706f\u5149\u5c06\u5b9e\u65f6\u54cd\u5e94\u60a8\u5728 Home \u5e94\u7528\u4e2d\u8fdb\u884c\u7684\u8c03\u6574\u3002"),(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png",style:{width:300,height:"auto"}})),(0,l.yg)("p",null,"\u606d\u559c\uff01\u60a8\u5df2\u7ecf\u6210\u529f\u4f7f\u7528 ESPLaunchPad \u4e3a XIAO ESP32C3 \u5f00\u53d1\u677f\u5237\u5199\u4e86\u706f\u5149\u56fa\u4ef6\uff0c\u5e76\u5c06\u5176\u4e0e iPhone \u7684 Home \u5e94\u7528\u914d\u5bf9\u3002\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece iPhone \u63a7\u5236\u8fde\u63a5\u706f\u5149\u7684\u4eae\u5ea6\u548c\u989c\u8272\uff0c\u521b\u9020\u4e2a\u6027\u5316\u4e14\u65b9\u4fbf\u7684\u7167\u660e\u4f53\u9a8c\u3002"),(0,l.yg)("p",null,"\u6b22\u8fce\u7ee7\u7eed\u63a2\u7d22 Home \u5e94\u7528\u4e2d\u7684\u66f4\u591a\u9ad8\u7ea7\u529f\u80fd\u548c\u81ea\u5b9a\u4e49\u9009\u9879\uff0c\u5c1d\u8bd5\u4e0e XIAO ESP32C3 \u5f00\u53d1\u677f\u517c\u5bb9\u7684\u4e0d\u540c\u706f\u5149\u914d\u4ef6\u3002\u901a\u8fc7\u8fd9\u4e00\u57fa\u7840\uff0c\u60a8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6269\u5c55\u667a\u80fd\u5bb6\u5c45\u8bbe\u7f6e\uff0c\u6253\u9020\u771f\u6b63\u4e92\u8054\u548c\u81ea\u52a8\u5316\u7684\u751f\u6d3b\u7a7a\u95f4\u3002"),(0,l.yg)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,l.yg)("h3",{id:"q1-\u5728-home-\u5e94\u7528\u4e2d\u957f\u65f6\u95f4\u65e0\u6cd5\u8fde\u63a5\u5230\u8bbe\u5907"},"Q1: \u5728 Home \u5e94\u7528\u4e2d\u957f\u65f6\u95f4\u65e0\u6cd5\u8fde\u63a5\u5230\u8bbe\u5907\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u957f\u65f6\u95f4\u65e0\u6cd5\u8fde\u63a5\u5230\u8bbe\u5907\uff0c\u8bf7\u786e\u4fdd\u5728\u4e0a\u4f20\u56fa\u4ef6\u540e\u770b\u5230\u65e5\u5fd7\u6d88\u606f\u3002\u5982\u679c\u6b64\u65f6\u8bbe\u5907\u957f\u65f6\u95f4\u6ca1\u6709\u914d\u5bf9\uff0cXIAO \u53ef\u80fd\u8fdb\u5165\u4e86\u5f85\u673a\u6a21\u5f0f\uff0c\u6b64\u65f6\u60a8\u9700\u8981\u6309\u4e0b XIAO \u4e0a\u7684\u91cd\u7f6e\u6309\u94ae\uff0c\u6216\u8005\u4f7f\u7528 ESPLaunchPad \u4e0a\u7684 ",(0,l.yg)("strong",{parentName:"p"},"\u91cd\u7f6e\u8bbe\u5907")," \u529f\u80fd\u6765\u91cd\u542f\u8bbe\u5907\u3002\u7136\u540e\u518d\u5c1d\u8bd5\u6dfb\u52a0\u8bbe\u5907\u3002"),(0,l.yg)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u53ef\u80fd\u662f\u7f51\u7edc\u95ee\u9898\u3002\u8bf7\u786e\u4fdd XIAO \u548c\u60a8\u7684 iPhone \u5728\u540c\u4e00\u4e2a\u5c40\u57df\u7f51 (LAN) \u4e0b\uff0c\u5e76\u4e14\u5b83\u4eec\u90fd\u9700\u8981\u8fde\u63a5\u5230 2.4GHz \u7f51\u7edc\uff0c\u800c\u4e0d\u662f 5GHz \u7f51\u7edc\u3002\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u624b\u673a\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7f51\u7edc\uff0c\u4f46 XIAO \u53ea\u652f\u6301 2.4GHz \u7f51\u7edc\u3002"),(0,l.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,l.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u591a\u4e2a\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);