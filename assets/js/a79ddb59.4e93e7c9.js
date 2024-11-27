"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47904],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var i=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=i.createContext({}),c=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(a.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},_=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),_=o,g=u["".concat(a,".").concat(_)]||u[_]||p[_]||r;return t?i.createElement(g,s(s({ref:n},d),{},{components:t})):i.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=_;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}_.displayName="MDXCreateElement"},9954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(9668),o=(t(96540),t(15680));const r={description:"ESP32C3\u7684MicroPython",title:"ESP32C3 \u7684 MicroPython \u7f16\u7a0b",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO_ESP32C3_MicroPython",last_update:{date:"11/13/2024",author:"Agnes"}},s="\u4f7f\u7528 XIAO ESP32C3 \u7528 MicroPython \u505a\u4e00\u4e2a Wi-Fi\u8ddf\u8e2a\u5668",l={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_MicroPython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_MicroPython",title:"ESP32C3 \u7684 MicroPython \u7f16\u7a0b",description:"ESP32C3\u7684MicroPython",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_MicroPython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/cn/XIAO_ESP32C3_MicroPython",permalink:"/cn/XIAO_ESP32C3_MicroPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/CN_XIAO_ESP32C3_MicroPython.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1731456e3,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{description:"ESP32C3\u7684MicroPython",title:"ESP32C3 \u7684 MicroPython \u7f16\u7a0b",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO_ESP32C3_MicroPython",last_update:{date:"11/13/2024",author:"Agnes"}},sidebar:"CNSidebar",previous:{title:"XIAO ESP32C3 \u4e0e CircuitPython",permalink:"/cn/xiao_esp32c3_with_circuitpython"},next:{title:"\u5e94\u7528 Home Assistant \u5b9e\u73b0\u5c4b\u5185\u65e0\u6444\u50cf\u5934\u76d1\u63a7",permalink:"/cn/xiao-esp32c3-esphome"}},a={},c=[{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:2},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u5728PC\u4e0a\u914d\u7f6eMicropython",id:"\u5728pc\u4e0a\u914d\u7f6emicropython",level:3},{value:"\u5b89\u88c5 Thonny IDE (Windows)",id:"\u5b89\u88c5-thonny-ide-windows",level:4},{value:"\u4f7f\u7528esptool\u5347\u7ea7\u56fa\u4ef6",id:"\u4f7f\u7528esptool\u5347\u7ea7\u56fa\u4ef6",level:4},{value:"\u5728XIAO ESP32C3\u4e0a\u5b89\u88c5Micropython",id:"\u5728xiao-esp32c3\u4e0a\u5b89\u88c5micropython",level:3},{value:"\u5b89\u88c5\u6240\u9700\u7684\u5e93",id:"\u5b89\u88c5\u6240\u9700\u7684\u5e93",level:4},{value:"\u8fd0\u884c\u811a\u672c\u5e76\u5c06\u5176\u95ea\u5b58\u5230\u677f\u4e0a",id:"\u8fd0\u884c\u811a\u672c\u5e76\u5c06\u5176\u95ea\u5b58\u5230\u677f\u4e0a",level:4},{value:"\u6f14\u793a  1\uff1a\u70b9\u4eaeOLED\u5c4f\u5e55",id:"\u6f14\u793a--1\u70b9\u4eaeoled\u5c4f\u5e55",level:3},{value:"1.\u4f60\u597d Seeder!",id:"1\u4f60\u597d-seeder",level:4},{value:"2. \u52a0\u8f7d\u52a8\u6001\u6548\u679c",id:"2-\u52a0\u8f7d\u52a8\u6001\u6548\u679c",level:4},{value:"\u6f14\u793a 2\uff1a\u70b9\u4eae\u8702\u9e23\u5668",id:"\u6f14\u793a-2\u70b9\u4eae\u8702\u9e23\u5668",level:3},{value:"1. \u58f0\u97f3",id:"1-\u58f0\u97f3",level:4},{value:"2.\u64ad\u653e\u6b4c\u66f2&lt;&lt;\u4ed6\u662f\u6d77\u76d7&gt;&gt;",id:"2\u64ad\u653e\u6b4c\u66f2\u4ed6\u662f\u6d77\u76d7",level:4},{value:"\u6f14\u793a 3: \u8fde\u63a5\u5230WiFi",id:"\u6f14\u793a-3-\u8fde\u63a5\u5230wifi",level:3},{value:"1. \u8fde\u63a5\u5230WiFi",id:"1-\u8fde\u63a5\u5230wifi",level:4},{value:"2. \u5728\u7ebf\u8bf7\u6c42\u7ebd\u7ea6\u65f6\u95f4",id:"2-\u5728\u7ebf\u8bf7\u6c42\u7ebd\u7ea6\u65f6\u95f4",level:4},{value:"\u6700\u7ec8\u9879\u76ee\uff1aWi-Fi\u4fe1\u53f7\u5f3a\u5ea6\u8ffd\u8e2a\u5668",id:"\u6700\u7ec8\u9879\u76eewi-fi\u4fe1\u53f7\u5f3a\u5ea6\u8ffd\u8e2a\u5668",level:3},{value:"\u66f4\u91cd\u8981\u7684\u662f",id:"\u66f4\u91cd\u8981\u7684\u662f",level:2},{value:"\u2728 \u9879\u76ee\u8d21\u732e\u8005",id:"-\u9879\u76ee\u8d21\u732e\u8005",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u4f7f\u7528-xiao-esp32c3-\u7528-micropython-\u505a\u4e00\u4e2a-wi-fi\u8ddf\u8e2a\u5668"},"\u4f7f\u7528 XIAO ESP32C3 \u7528 MicroPython \u505a\u4e00\u4e2a Wi-Fi\u8ddf\u8e2a\u5668"),(0,o.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u5c06\u63d0\u4f9b\u4e0eMicropython\u4e00\u8d77\u4f7f\u7528XIAO ESP32C3\u7684\u7b80\u8981\u6982\u8ff0\u3002\u6b64\u5916\uff0c\u6211\u5c06\u63a2\u8ba8Wi-Fi\u4fe1\u53f7\u5f3a\u5ea6\u8ddf\u8e2a\u5668\u7684\u5b9e\u9645\u5e94\u7528\uff0c\u5b83\u5728\u5efa\u7acb\u9ad8\u901f\uff0c\u9ad8\u8d28\u91cf\u7684\u5bb6\u5ead\u7f51\u7edc\u65f6\u88ab\u8bc1\u660e\u662f\u975e\u5e38\u5b9d\u8d35\u7684\u3002"),(0,o.yg)("p",null,"\u56e0\u6b64\uff0c\u5728Wi-Fi\u8ddf\u8e2a\u5668\u7684\u6307\u5bfc\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u5730\u4f18\u5316WiFi\u4fe1\u53f7\u589e\u5f3a\u5668\u7684\u4f4d\u7f6e\uff0c\u786e\u4fdd\u6700\u4f73\u7684\u4fe1\u53f7\u8986\u76d6\u3002"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/7n72Knh4IIM",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),(0,o.yg)("h2",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,o.yg)("p",null,"\u6211\u5728\u8fd9\u91cc\u4f7f\u7528Seeed Studio XIAO ESP32C3\u548c\u6269\u5c55\u677f\u4f5c\u4e3a\u786c\u4ef6\u3002"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,o.yg)("th",null,"Expansion Board Base for XIAO")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:"auto",height:200}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:"auto",height:200}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h2",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Thonny IDE"),(0,o.yg)("th",null,"Esptool")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d \u23ec")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://github.com/espressif/esptool"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u514b\u9686 \u23ec"))))))))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528\u5b83\u4e4b\u524d\uff0c\u5b83\u9700\u8981\u6211\u9648\u8ff0\u6211\u5728\u8fd9\u91cc\u4f7f\u7528\u7684\u8f6f\u4ef6/\u56fa\u4ef6\u662f\u4e3aESP32C3\u82af\u7247\u8bbe\u8ba1\u7684\u3002\u56e0\u6b64\uff0c\u5f53\u60a8\u5c1d\u8bd5\u4f7f\u7528\u5f15\u811a\u65f6\uff0c\u8bf7\u786e\u4fdd\u901a\u7528\u8f93\u5165/\u8f93\u51fa\u800c\u4e0d\u662f\u677f\u4e0a\u7684\u5f15\u811a"),(0,o.yg)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5f53\u60a8\u8bd5\u56fe\u4f7f\u7528\u5de6\u4fa7\u7b2c\u4e00\u884c\u4e2d\u7684pin\u65f6\u3002\u786e\u4fdd\u5b83\u662f",(0,o.yg)("inlineCode",{parentName:"p"},"GPIO2"),"\u800c\u4e0d\u662f",(0,o.yg)("inlineCode",{parentName:"p"},"A0"),"\u6216",(0,o.yg)("inlineCode",{parentName:"p"},"D0"),"\u3002"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png",style:{width:500,height:"auto"}}))),(0,o.yg)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,o.yg)("p",null,"\u8981\u8ba9XIAO ESP32C3\u771f\u6b63\u88abMicropython\u7f16\u7a0b\uff0c\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4(\u201cPC\u4e0a\u7684Micropython\u914d\u7f6e\u201d\u548c\u201cXIAO ESP32C3\u4e0a\u7684Micropython\u8bbe\u7f6e\u201d)\u3002\n\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4ece\u6bcf\u4e2a\u6f14\u793a\u7a0b\u5e8f\u4e2d\u4e00\u6b65\u4e00\u6b65\u5730\u590d\u5236\u4ee3\u7801\u4ee5\u5b9e\u73b0\u5b8c\u6210\u3002"),(0,o.yg)("h3",{id:"\u5728pc\u4e0a\u914d\u7f6emicropython"},"\u5728PC\u4e0a\u914d\u7f6eMicropython"),(0,o.yg)("h4",{id:"\u5b89\u88c5-thonny-ide-windows"},"\u5b89\u88c5 Thonny IDE (Windows)"),(0,o.yg)("p",null,"\u8bf7\u6309\u7167\u56fe\u4e2d\u7684\u6b65\u9aa4\u505a"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython1.png"})),(0,o.yg)("h4",{id:"\u4f7f\u7528esptool\u5347\u7ea7\u56fa\u4ef6"},"\u4f7f\u7528esptool\u5347\u7ea7\u56fa\u4ef6"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u6253\u5f00\u4f60\u81ea\u5df1\u7684\u6587\u4ef6\u4f4d\u7f6e")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"git clone https://github.com/espressif/esptool.git")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6700\u65b0\u56fa\u4ef6(\u672c\u6559\u7a0b\u662fv1.20.0 (2023-04-26) .bin)")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"}," https://micropython.org/download/esp32c3/")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u628a\u6700\u65b0\u7684firm\u653e\u5230\u8fd9\u4e2a\u6587\u4ef6\u4f4d\u7f6e\uff0c\u7528CMD\u6253\u5f00\u8fd9\u4e2a\u6587\u4ef6")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"your own file location\\esptool-master\\esptool")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"\u5728CMD\u4e2d\u8f93\u5165\u6b64\u547d\u4ee4\u5237\u65b0\u56fa\u4ef6(\u5728\u5237\u65b0\u524d\u8fdb\u5165bootloader\u6a21\u5f0f)")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"esptool.exe --chip esp32c3 --port COM10 --baud 921600 --before default_reset --after hard_reset --no-stub  write_flash --flash_mode dio --flash_freq 80m 0x0 esp32c3-usb-20230426-v1.20.0.bin\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython2.png"})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528linux\u64cd\u4f5c\u7cfb\u7edf\uff0c\u8bf7\u5c06\u201cesptool.exe\u201d\u4fee\u6539\u4e3a\u201cesptool.py\u201d\u3002\u5c06\u201cCOM10\u201d\u66f4\u6539\u4e3a\u81ea\u5df1\u7684\u4e32\u53e3\u3002\u4fee\u6539\u201cesp32c3-usb-20230426-v1.20.0.bin\u201d\u4e3a\u4f60\u4e0b\u8f7d\u7684\u6700\u65b0\u56fa\u4ef6\u540d\u79f0\u3002")),(0,o.yg)("h3",{id:"\u5728xiao-esp32c3\u4e0a\u5b89\u88c5micropython"},"\u5728XIAO ESP32C3\u4e0a\u5b89\u88c5Micropython"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u63d2\u4e0a\u4f60\u7684XIAO ESP32C3\uff0c\u6253\u5f00Thonny\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u914d\u7f6e\u89e3\u91ca\u5668")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u9009\u62e9interpreter- Micropython (ESP32)\u548cPort >>>\u5355\u51fb\u201cOK\u201d"))),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython3.png"})),(0,o.yg)("p",null,"\u6ce8\u610f:\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u60a8\u5c06\u5728shell\u4e2d\u770b\u5230\u8f93\u51fa"),(0,o.yg)("h4",{id:"\u5b89\u88c5\u6240\u9700\u7684\u5e93"},"\u5b89\u88c5\u6240\u9700\u7684\u5e93"),(0,o.yg)("p",null,'\u70b9\u51fb"Tools" >>>\u70b9\u51fb"Management Packages" >>>\u8f93\u5165\u5e93\u540d>>>\u70b9\u51fb"Search micropython-lib and PyPl"'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython4.png"})),(0,o.yg)("h4",{id:"\u8fd0\u884c\u811a\u672c\u5e76\u5c06\u5176\u95ea\u5b58\u5230\u677f\u4e0a"},"\u8fd0\u884c\u811a\u672c\u5e76\u5c06\u5176\u95ea\u5b58\u5230\u677f\u4e0a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u5f53\u4f60\u5b8c\u6210\u7f16\u7801\u540e\uff0c\u70b9\u51fb\u7eff\u8272\u6309\u94ae\u6765\u8fd0\u884c\u811a\u672c\u3002")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython5.png"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'\u5c06\u4ee3\u7801\u95ea\u5b58\u5230\u677f\u5b50\u4e0a\uff0c\u901a\u8fc7\u5c06\u6587\u4ef6\u4fdd\u5b58\u4e3a"boot.py"\u5230\u677f\u5b50\u4e0a\u3002')),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png"})),(0,o.yg)("h3",{id:"\u6f14\u793a--1\u70b9\u4eaeoled\u5c4f\u5e55"},"\u6f14\u793a  1\uff1a\u70b9\u4eaeOLED\u5c4f\u5e55"),(0,o.yg)("h4",{id:"1\u4f60\u597d-seeder"},"1.\u4f60\u597d Seeder!"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython7.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import time\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\noled.fill(0)  # Clear the screen\noled.text("Hello, Seeder!", 10, 15)\noled.text("/////", 30, 40)\noled.text("(`3`)y", 30, 55)\noled.show()  # Show the text\n')),(0,o.yg)("h4",{id:"2-\u52a0\u8f7d\u52a8\u6001\u6548\u679c"},"2. \u52a0\u8f7d\u52a8\u6001\u6548\u679c"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import time\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\ncenter_x = oled_width // 2\ncenter_y = oled_height // 2\nsquare_size = 6  # Size of each square\nnum_squares = 12  # Number of squares\nangle_increment = 2 * math.pi / num_squares\n\nwhile True:\n    oled.fill(0)  # Clear the screen\n    \n    for i in range(num_squares):\n        angle = i * angle_increment\n        x = int(center_x + (center_x - square_size-30) * math.cos(angle))\n        y = int(center_y + (center_x - square_size-30) * math.sin(angle))\n        \n        # Draw all squares\n        for j in range(num_squares):\n            angle_j = j * angle_increment\n            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))\n            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))\n            \n            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # Draw the square\n        \n        oled.fill_rect(x, y, square_size, square_size, 0)  # Erase the current square\n        oled.show()\n        time.sleep_ms(100)  # Pause before next iteration\n\n")),(0,o.yg)("h3",{id:"\u6f14\u793a-2\u70b9\u4eae\u8702\u9e23\u5668"},"\u6f14\u793a 2\uff1a\u70b9\u4eae\u8702\u9e23\u5668"),(0,o.yg)("h4",{id:"1-\u58f0\u97f3"},"1. \u58f0\u97f3"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import time\nfrom time import sleep\nimport machine\nfrom machine import Pin, SoftI2C\n\n\n# Buzzer settings\n\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\n\n# Buzzer working\n\nwhile True:\n\n    buzzer.duty(10)\n    time.sleep(1)\n    buzzer.duty(0)\n    time.sleep(1)\n")),(0,o.yg)("h4",{id:"2\u64ad\u653e\u6b4c\u66f2\u4ed6\u662f\u6d77\u76d7"},"2.\u64ad\u653e\u6b4c\u66f2<<\u4ed6\u662f\u6d77\u76d7>>"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"import machine\nimport time\n\n# Buzzer settings\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\n\n# Defining frequency of each music note\nNOTE_C4 = 262\nNOTE_D4 = 294\nNOTE_E4 = 330\nNOTE_F4 = 349\nNOTE_G4 = 392\nNOTE_A4 = 440\nNOTE_B4 = 494\nNOTE_C5 = 523\nNOTE_D5 = 587\nNOTE_E5 = 659\nNOTE_F5 = 698\nNOTE_G5 = 784\nNOTE_A5 = 880\nNOTE_B5 = 988\n\n# Music notes of the song, 0 is a rest/pulse\nnotes = [\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,\n    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,\n    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,\n\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_D5, NOTE_E5, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,\n    NOTE_C5, NOTE_A4, NOTE_B4, 0,\n\n    NOTE_A4, NOTE_A4,\n    #Repeat of first part\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,\n    NOTE_A4, NOTE_G4, NOTE_A4, 0,\n\n    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,\n    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,\n    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,\n\n    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,\n    NOTE_D5, NOTE_E5, NOTE_A4, 0,\n    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,\n    NOTE_C5, NOTE_A4, NOTE_B4, 0,\n    #End of Repeat\n\n    NOTE_E5, 0, 0, NOTE_F5, 0, 0,\n    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,\n    NOTE_D5, 0, 0, NOTE_C5, 0, 0,\n    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4,\n\n    NOTE_E5, 0, 0, NOTE_F5, 0, 0,\n    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,\n    NOTE_D5, 0, 0, NOTE_C5, 0, 0,\n    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4\n]\n\n# Durations (in ms) of each music note of the song\n# Quarter Note is 250 ms when songSpeed = 1.0\ndurations = [\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 125, 250, 125,\n\n    125, 125, 250, 125, 125,\n    250, 125, 250, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 375,\n\n    250, 125,\n    #Rpeat of First Part\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 125,\n\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 125, 250, 125,\n\n    125, 125, 250, 125, 125,\n    250, 125, 250, 125,\n    125, 125, 250, 125, 125,\n    125, 125, 375, 375,\n    #End of Repeat\n\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 125, 125, 125, 375,\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 500,\n\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 125, 125, 125, 375,\n    250, 125, 375, 250, 125, 375,\n    125, 125, 125, 125, 125, 500\n]\n\ndef play_song():\n    total_notes = len(notes)\n    for i in range(total_notes):\n        current_note = notes[i]\n        wait = durations[i]\n        if current_note != 0:\n            buzzer.duty(512)  # Set duty cycle for sound\n            buzzer.freq(current_note)  # Set frequency of the note\n        else:\n            buzzer.duty(0)  # Turn off the sound\n        time.sleep_ms(wait)\n        buzzer.duty(0)  # Turn off the sound\nwhile True:\n    # Play the song\n    play_song()\n")),(0,o.yg)("h3",{id:"\u6f14\u793a-3-\u8fde\u63a5\u5230wifi"},"\u6f14\u793a 3: \u8fde\u63a5\u5230WiFi"),(0,o.yg)("h4",{id:"1-\u8fde\u63a5\u5230wifi"},"1. \u8fde\u63a5\u5230WiFi"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8a.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import network\nimport urequests\nimport utime as time\n\n# Network settings\nwifi_ssid = "Your Own SSID"\nwifi_password = "Your Own Password"\n\ndef scan_and_connect():\n    station = network.WLAN(network.STA_IF)\n    station.active(True)\n\n    print("Scanning for WiFi networks, please wait...")\n    for ssid, bssid, channel, RSSI, authmode, hidden in station.scan():\n        print("* {:s}".format(ssid))\n        print("   - Channel: {}".format(channel))\n        print("   - RSSI: {}".format(RSSI))\n        print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))\n        print()\n\n    while not station.isconnected():\n        print("Connecting...")\n        station.connect(wifi_ssid, wifi_password)\n        time.sleep(10)\n\n    print("Connected!")\n    print("My IP Address:", station.ifconfig()[0])\n\n\n# Execute the functions\nscan_and_connect()\n')),(0,o.yg)("h4",{id:"2-\u5728\u7ebf\u8bf7\u6c42\u7ebd\u7ea6\u65f6\u95f4"},"2. \u5728\u7ebf\u8bf7\u6c42\u7ebd\u7ea6\u65f6\u95f4"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython9.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'from machine import Pin, SoftI2C\nimport ssd1306\nfrom time import sleep\nimport time\nimport network\nimport urequests\nimport ujson\n\n# ESP32 Pin assignment\n# i2c = SoftI2C(scl=Pin(22), sda=Pin(21))\n\n# ESP8266 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\n\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\nstation = network.WLAN(network.STA_IF)\nstation.active(True)\n\n# Network settings\nwifi_ssid = "Your wifi ssid"\nwifi_password = "Your wifi password"\nurl = "http://worldtimeapi.org/api/timezone/America/New_York"\n\nprint("Scanning for WiFi networks, please wait...")\nauthmodes = [\'Open\', \'WEP\', \'WPA-PSK\' \'WPA2-PSK4\', \'WPA/WPA2-PSK\']\nfor (ssid, bssid, channel, RSSI, authmode, hidden) in station.scan():\n    print("* {:s}".format(ssid))\n    print("   - Channel: {}".format(channel))\n    print("   - RSSI: {}".format(RSSI))\n    print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))\n    print()\n\n# Continually try to connect to WiFi access point\nwhile not station.isconnected():\n    # Try to connect to WiFi access point\n    print("Connecting...")\n    station.connect(wifi_ssid, wifi_password)\n    time.sleep(10)\n\n# Display connection details\nprint("Connected!")\nprint("My IP Address:", station.ifconfig()[0])\n\n\nwhile True:\n    # Perform HTTP GET request on a non-SSL web\n    response = urequests.get(url)\n    # Check if the request was successful\n    if response.status_code == 200:\n        # Parse the JSON response\n        data = ujson.loads(response.text)\n        # Extract the "datetime" field for New York\n        ny_datetime = data["datetime"]\n        # Split the date and time components\n        date_part, time_part = ny_datetime.split("T")\n        # Get only the first two decimal places of the time\n        time_part = time_part[:8]\n        # Get the timezone\n        timezone = data["timezone"]\n        \n        # Clear the OLED display\n        oled.fill(0)\n        \n        # Display the New York date and time on separate lines\n        oled.text("New York Date:", 0, 0)\n        oled.text(date_part, 0, 10)\n        oled.text("New York Time:", 0, 20)\n        oled.text(time_part, 0, 30)\n        oled.text("Timezone:", 0, 40)\n        oled.text(timezone, 0, 50)\n        # Update the display\n        oled.show()\n    else:\n        oled.text("Failed to get the time for New York!")\n        # Update the display\n        oled.show()\n')),(0,o.yg)("h3",{id:"\u6700\u7ec8\u9879\u76eewi-fi\u4fe1\u53f7\u5f3a\u5ea6\u8ffd\u8e2a\u5668"},"\u6700\u7ec8\u9879\u76ee\uff1aWi-Fi\u4fe1\u53f7\u5f3a\u5ea6\u8ffd\u8e2a\u5668"),(0,o.yg)("p",null,"\u8fd9\u662f\u8fd9\u4e2a\u9879\u76ee\u7684\u4e3b\u8981\u4efb\u52a1\u3002\u901a\u8fc7\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u7528\u8fd9\u6837\u4e00\u4e2a\u7b80\u5355\u7684\u8bbe\u5907\u5728\u5bb6\u91cc\u8ffd\u8e2awifi\u4fe1\u53f7\u3002"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython10.jpg"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'import network\nimport time\nfrom time import sleep\nimport machine\nfrom machine import Pin, SoftI2C\nimport ssd1306\nimport math\n\n# ESP32C3 Pin assignment\ni2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\n# Network settings\nwifi_ssid = "Your Own SSID"\nwifi_password = "Your Own Password"\nmachine.freq(160000000)  # Set CPU frequency to 160 MHz (ESP8266 specific)\noled.text("Starting up...", 0, 0)\noled.show()\n\nstation = network.WLAN(network.STA_IF)\nstation.active(True)\nstation.connect(wifi_ssid, wifi_password)\ntime.sleep(1)\n\nwhile not station.isconnected():\n    time.sleep(1)\n\noled.fill(0)\noled.text("Connecting to", 0, 0)\noled.text(wifi_ssid, 0, 20)\noled.show()\ntime.sleep(2)\n\noled.fill(0)\nip_address = station.ifconfig()[0]  # Get the IP address\noled.text("Connected! ", 0, 0)\noled.text("IP Address:", 0, 20)\noled.text(ip_address, 0, 40)\noled.show()\ntime.sleep(2)\n\n# Buzzer settings\nbuzzer_pin = machine.Pin(5, machine.Pin.OUT)\nbuzzer = machine.PWM(buzzer_pin)\nbuzzer.freq(1047)\nbuzzer.duty(0)\n\ncenter_x = oled_width // 2\ncenter_y = oled_height // 2\nsquare_size = 6  # Size of each square\nnum_squares = 12  # Number of squares\nangle_increment = 2 * math.pi / num_squares\n\nx_pos = [12, 38, 64, 90]\nstatuses = ["poor", "normal", "good", "excellent"]\n\ndef calculate_block_count(rssi):\n    # Determine the number of blocks based on RSSI values\n    if -80 <= rssi < -60:\n        return 1\n    elif -60 <= rssi < -40:\n        return 2\n    elif -40 <= rssi < -20:\n        return 3\n    elif -20 <= rssi <= 10:\n        return 4\n\ndef draw_blocks(count):\n    for i in range(count):\n        y_pos = 50 - calculate_block_height(i)\n        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 1)\n    for i in range(count, 4):  # Clear unused area\n        y_pos = 50 - calculate_block_height(i)\n        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 0)\n\ndef calculate_block_height(index):\n    return 10 * (index + 1)\n\nloop_count = 0  # Initialize loop count\n\nwhile loop_count < 2:  # Execute the loop 24 times\n    oled.fill(0)  # Clear the screen\n    \n    for i in range(num_squares):\n        angle = i * angle_increment\n        x = int(center_x + (center_x - square_size-30) * math.cos(angle))\n        y = int(center_y + (center_x - square_size-30) * math.sin(angle))\n        \n        # Draw all squares\n        for j in range(num_squares):\n            angle_j = j * angle_increment\n            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))\n            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))\n            \n            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # Draw the square\n        \n        oled.fill_rect(x, y, square_size, square_size, 0)  # Erase the current square\n        oled.show()\n        time.sleep_ms(100)  # Pause before next iteration\n        \n    loop_count += 1  # Increase loop count\n\noled.fill(0)  # Clear the screen after finishing the loops\noled.show()\n\nwhile True:\n    oled.fill(0)\n    station = network.WLAN(network.STA_IF)\n    time.sleep(0.1)\n    rssi = station.status(\'rssi\')\n    rssi_duty = 160 + 2 * int(rssi)\n    rssi_duty_2 = int(rssi_duty / 2)\n    rssi_abs = abs(int(rssi)) / 100\n \n    block_count = calculate_block_count(rssi)\n    status = statuses[block_count - 1]  # Get the status text based on block count\n    \n    draw_blocks(block_count)\n    \n    oled.text(status, 11, 56)\n    \n    oled.text("RSSI:", 0, 0)\n    oled.text(str(rssi), 40, 0)\n    # Update the display\n    oled.show()\n\n    buzzer.duty(rssi_duty)\n    time.sleep(rssi_abs)\n    buzzer.duty(0)\n    time.sleep(rssi_abs)\n    buzzer.duty(rssi_duty_2)\n    time.sleep(rssi_abs)\n    buzzer.duty(0)\n    time.sleep(rssi_abs)\n\n')),(0,o.yg)("h2",{id:"\u66f4\u91cd\u8981\u7684\u662f"},"\u66f4\u91cd\u8981\u7684\u662f"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u56fa\u4ef6flash\u5230XIAO ESP32C3\u4f7f\u7528esptool\u96c6\u6210\u5728\u652f\u6301MAC OS\u7684Thonny\u3002")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython11.png"})),(0,o.yg)("h2",{id:"-\u9879\u76ee\u8d21\u732e\u8005"},"\u2728 \u9879\u76ee\u8d21\u732e\u8005"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053"},"\u9879\u76ee\u8d21\u732e\u8005"),"."),(0,o.yg)("li",{parentName:"ul"},"Thanks ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053"},"\u674e\u65b0\u5e73\u7684\u52aa\u529b")," and your work will be ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"\u8868\u73b0\u51fa"),".")),(0,o.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,o.yg)("p",null,"\u975e\u5e38\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u6b64\u4e3a\u60a8\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u8fc7\u7a0b\u4e2d\u83b7\u5f97\u6700\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);