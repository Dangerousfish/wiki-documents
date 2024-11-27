"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79575],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(9668),o=(n(96540),n(15680));const i={description:"\u5e26\u6709 PlatformIO \u7684 Seeed Studio XIAO nRF52840",title:"XIAO nRF52840-Sense \u4e0e PlatformIO",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png",slug:"/cn/xiao_nrf52840_with_platform_io",last_update:{date:"11/13/2024",author:"Agnes"}},l=void 0,a={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-nRF52840_PlatformIO",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-nRF52840_PlatformIO",title:"XIAO nRF52840-Sense \u4e0e PlatformIO",description:"\u5e26\u6709 PlatformIO \u7684 Seeed Studio XIAO nRF52840",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-nRF52840_PlatformIO.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/cn/xiao_nrf52840_with_platform_io",permalink:"/cn/xiao_nrf52840_with_platform_io",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-nRF52840_PlatformIO.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1731456e3,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{description:"\u5e26\u6709 PlatformIO \u7684 Seeed Studio XIAO nRF52840",title:"XIAO nRF52840-Sense \u4e0e PlatformIO",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png",slug:"/cn/xiao_nrf52840_with_platform_io",last_update:{date:"11/13/2024",author:"Agnes"}},sidebar:"CNSidebar",previous:{title:"Zephyr(RTOS) \u7f16\u7a0b",permalink:"/cn/XIAO-nRF52840-Zephyr-RTOS"},next:{title:"CircuitPython",permalink:"/cn/XIAO-BLE_CircutPython"}},s={},d=[{value:"\u5728 PlatformIO \u4e2d\u4f7f\u7528 XIAO nRF52840",id:"\u5728-platformio-\u4e2d\u4f7f\u7528-xiao-nrf52840",level:2},{value:"\u6b65\u9aa4 1 . \u5b89\u88c5 PlatformIO \u5b98\u65b9\u7f51\u7ad9\u4e2d\u7684\u8f6f\u4ef6",id:"\u6b65\u9aa4-1--\u5b89\u88c5-platformio-\u5b98\u65b9\u7f51\u7ad9\u4e2d\u7684\u8f6f\u4ef6",level:3},{value:"\u6b65\u9aa4 2 . \u5728 PlatformIO \u4e2d\u521b\u5efa\u9879\u76ee",id:"\u6b65\u9aa4-2--\u5728-platformio-\u4e2d\u521b\u5efa\u9879\u76ee",level:3},{value:"\u6b65\u9aa4 3 . \u4fee\u6539 platformio.ini \u6587\u4ef6",id:"\u6b65\u9aa4-3--\u4fee\u6539-platformioini-\u6587\u4ef6",level:3},{value:"\u6b65\u9aa4 4 .  \u7f16\u8bd1\u5e76\u70e7\u5f55",id:"\u6b65\u9aa4-4---\u7f16\u8bd1\u5e76\u70e7\u5f55",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png"})),(0,o.yg)("h1",{id:"seeed-studio-xiao-nrf52840-\u4e0e-platformio"},(0,o.yg)("strong",{parentName:"h1"},"Seeed Studio XIAO nRF52840 \u4e0e PlatformIO")),(0,o.yg)("p",null,"PlatformIO \u662f\u4e00\u4e2a\u96c6\u6210\u4e86\u591a\u79cd\u5f00\u53d1\u677f\u7c7b\u578b\u5e76\u4e14\u5177\u6709\u826f\u597d\u6269\u5c55\u6027\u7684\u5f00\u53d1\u5e73\u53f0\u3002\u5982\u679c\u5e73\u53f0\u4e2d\u6ca1\u6709\u4f60\u9700\u8981\u7684\u5f00\u53d1\u677f\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u3002\u4f60\u5728 Arduino \u4e2d\u7f16\u5199\u7684\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u5728 PlatformIO \u4e2d\u4f7f\u7528\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u76f8\u5e94\u7684\u5e93\u3002"),(0,o.yg)("p",null,"\u5728\u672c\u7bc7 Wiki \u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 PlatformIO \u4e2d\u5b89\u88c5\u5e76\u8fd0\u884c\u793a\u4f8b\u4ee3\u7801\u3002"),(0,o.yg)("h2",{id:"\u5728-platformio-\u4e2d\u4f7f\u7528-xiao-nrf52840"},"\u5728 PlatformIO \u4e2d\u4f7f\u7528 XIAO nRF52840"),(0,o.yg)("h3",{id:"\u6b65\u9aa4-1--\u5b89\u88c5-platformio-\u5b98\u65b9\u7f51\u7ad9\u4e2d\u7684\u8f6f\u4ef6"},"\u6b65\u9aa4 1 . \u5b89\u88c5 ",(0,o.yg)("a",{parentName:"h3",href:"https://platformio.org/platformio-ide"},"PlatformIO")," \u5b98\u65b9\u7f51\u7ad9\u4e2d\u7684\u8f6f\u4ef6"),(0,o.yg)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 PlatformIO\uff0c\u53ef\u4ee5\u70b9\u51fb\u4e0a\u8ff0\u94fe\u63a5\u8fdb\u884c\u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,o.yg)("h3",{id:"\u6b65\u9aa4-2--\u5728-platformio-\u4e2d\u521b\u5efa\u9879\u76ee"},"\u6b65\u9aa4 2 . \u5728 PlatformIO \u4e2d\u521b\u5efa\u9879\u76ee"),(0,o.yg)("p",null,"\u56e0\u4e3a\u5e73\u53f0\u5df2\u7ecf\u5305\u542b\u4e86 XIAO ESP32S3 \u548c XIAO ESP32C3 \u5f00\u53d1\u677f\u9009\u9879\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u6765\u521b\u5efa\u9879\u76ee\u3002\u5f53\u7136\uff0c\u5176\u4ed6\u5f00\u53d1\u677f\u6587\u4ef6\u4e5f\u53ef\u4ee5\u521b\u5efa\uff0c\u9879\u76ee\u540d\u79f0\u53ef\u4ee5\u968f\u610f\u9009\u62e9\u3002"),(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"\u64cd\u4f5c 1"),(0,o.yg)("th",null,"\u64cd\u4f5c 2")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png",style:{width:500,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png",style:{width:700,height:"auto"}}))))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u5df2\u7ecf\u5b89\u88c5\u4e86 XIAO ESP32C6 \u548c XIAO nRF52840 \u5b89\u88c5\u5305\uff0c\u56e0\u6b64\u4f60\u4f1a\u770b\u5230\u64cd\u4f5c\u4e8c\u4e2d\u7684\u56fe\u50cf\u4e2d\u6709 XIAO ESP32C6 \u548c XIAO nRF52840 \u7684\u9009\u9879\u3002\u5982\u679c\u4f60\u5728\u6267\u884c\u64cd\u4f5c\u65f6\u6ca1\u6709\u8fd9\u4e9b\u9009\u9879\uff0c\u8bf7\u53c2\u8003\u540e\u7eed\u6b65\u9aa4\u3002")),(0,o.yg)("h3",{id:"\u6b65\u9aa4-3--\u4fee\u6539-platformioini-\u6587\u4ef6"},"\u6b65\u9aa4 3 . \u4fee\u6539 platformio.ini \u6587\u4ef6"),(0,o.yg)("p",null,"\u6210\u529f\u521b\u5efa PlatformIO \u9879\u76ee\u540e\uff0c\u5de6\u4fa7\u680f\u4f1a\u51fa\u73b0\u591a\u4e2a\u6587\u4ef6\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a\u540d\u4e3a platform.ini \u7684\u6587\u4ef6\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u66ff\u6362\u5176\u4e2d\u7684\u5185\u5bb9\u3002"),(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"\u64cd\u4f5c 3")),(0,o.yg)("tr",null,(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png"})))),(0,o.yg)("p",null,"\u4f60\u9700\u8981\u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\uff0c\u5e76\u66ff\u6362 platform.ini \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"[env]\nplatform = https://github.com/maxgerhardt/platform-nordicnrf52\nframework = arduino\n \n[env:xiaoblesense_arduinocore_mbed]\nboard = xiaoblesense\n \n[env:xiaoble_arduinocore_mbed]\nboard = xiaoble\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u8bb0\u5f97\u4fdd\u5b58\u6587\u4ef6\uff0c\u6309 ctrl+s\uff0c\u6587\u4ef6\u5c06\u4f1a\u88ab\u52a0\u8f7d\u3002")),(0,o.yg)("h3",{id:"\u6b65\u9aa4-4---\u7f16\u8bd1\u5e76\u70e7\u5f55"},"\u6b65\u9aa4 4 .  \u7f16\u8bd1\u5e76\u70e7\u5f55"),(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"\u64cd\u4f5c 4")),(0,o.yg)("tr",null,(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/2.png"})))),(0,o.yg)("p",null,"\u6700\u7ec8\uff0c\u5982\u679c\u4f60\u770b\u5230\u4e0e\u4e0b\u56fe\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u8bf4\u660e\u4f60\u5df2\u7ecf\u6210\u529f\u6dfb\u52a0\u4e86 XIAO nRF52840 \u5f00\u53d1\u677f\u3002\u5f53\u4f60\u518d\u6b21\u521b\u5efa\u9879\u76ee\u65f6\uff0c\u5c31\u53ef\u4ee5\u9009\u62e9 XIAO nRF52840 \u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,o.yg)("p",null,"\u611f\u8c22\u4f60\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\u65b9\u5f0f\uff0c\u786e\u4fdd\u4f60\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u83b7\u5f97\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u4e2a\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u9700\u6c42\u548c\u504f\u597d\u3002"),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);