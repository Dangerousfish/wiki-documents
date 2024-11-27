"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52971],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=a,y=g["".concat(s,".").concat(p)]||g[p]||c[p]||r;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(9668),a=(n(96540),n(15680));const r={description:"\u4f7f\u7528Seeed Studio XIAO RA4M1\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u9f20\u6807\u3002",title:"XIAO RA4M1 \u9f20\u6807",keywords:["ra4m1","xiao","mouse"],image:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png",side_position:2,slug:"/cn/xiao_ra4m1_mouse",last_update:{date:"10/31/2024",author:"Agnes"}},o=void 0,l={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Mouse",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Mouse",title:"XIAO RA4M1 \u9f20\u6807",description:"\u4f7f\u7528Seeed Studio XIAO RA4M1\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u9f20\u6807\u3002",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Mouse.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1",slug:"/cn/xiao_ra4m1_mouse",permalink:"/cn/xiao_ra4m1_mouse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Mouse.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1730332800,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{description:"\u4f7f\u7528Seeed Studio XIAO RA4M1\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u9f20\u6807\u3002",title:"XIAO RA4M1 \u9f20\u6807",keywords:["ra4m1","xiao","mouse"],image:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png",side_position:2,slug:"/cn/xiao_ra4m1_mouse",last_update:{date:"10/31/2024",author:"Agnes"}},sidebar:"CNSidebar",previous:{title:"\u5f00\u59cb\u4f7f\u7528 Seeed Studio XIAO RA4M1",permalink:"/cn/getting_started_xiao_ra4m1"},next:{title:"Seeed Studio XIAO RA4M1 \u7684\u5f15\u811a\u590d\u7528",permalink:"/cn/xiao_ra4m1_pin_multiplexing"}},s={},u=[{value:"\u6240\u9700\u6750\u6599",id:"\u6240\u9700\u6750\u6599",level:2},{value:"\u521d\u6b65\u51c6\u5907",id:"\u521d\u6b65\u51c6\u5907",level:2},{value:"\u70b9\u4eae XIAO RA4M1 \u7684\u5185\u7f6e LED",id:"\u70b9\u4eae-xiao-ra4m1-\u7684\u5185\u7f6e-led",level:3},{value:"\u8bfb\u53d6 Grove \u6447\u6746\u7684 X \u8f74\u548c Y \u8f74\u6570\u636e",id:"\u8bfb\u53d6-grove-\u6447\u6746\u7684-x-\u8f74\u548c-y-\u8f74\u6570\u636e",level:3},{value:"\u6b65\u9aa4 1\uff1a\u8fde\u63a5\u8bbe\u5907",id:"\u6b65\u9aa4-1\u8fde\u63a5\u8bbe\u5907",level:4},{value:"\u6b65\u9aa4 2\uff1a\u4e0a\u4f20\u6d4b\u8bd5\u7a0b\u5e8f",id:"\u6b65\u9aa4-2\u4e0a\u4f20\u6d4b\u8bd5\u7a0b\u5e8f",level:4},{value:"\u4f7f\u7528 XIAO RA4M1 \u6784\u5efa\u9f20\u6807",id:"\u4f7f\u7528-xiao-ra4m1-\u6784\u5efa\u9f20\u6807",level:2},{value:"\u6b65\u9aa4 3\uff1a\u4e0a\u4f20\u9f20\u6807\u63a7\u5236\u7a0b\u5e8f",id:"\u6b65\u9aa4-3\u4e0a\u4f20\u9f20\u6807\u63a7\u5236\u7a0b\u5e8f",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:u},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("iframe",{width:"800",height:"500",src:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,a.yg)("h2",{id:"\u6240\u9700\u6750\u6599"},"\u6240\u9700\u6750\u6599"),(0,a.yg)("table",{align:"center"},(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Seeed Studio XIAO RA4M1"),(0,a.yg)("th",null,"Grove \u6447\u6746"),(0,a.yg)("th",null,"Grove \u7535\u7f06")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg",style:{width:200,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg",style:{width:210,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg",style:{width:210,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u83b7\u53d6 \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",{align:"center"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Thumb-Joystick.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u83b7\u53d6 \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",{align:"center"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," \u67e5\u770b\u66f4\u591a \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("h2",{id:"\u521d\u6b65\u51c6\u5907"},"\u521d\u6b65\u51c6\u5907"),(0,a.yg)("h3",{id:"\u70b9\u4eae-xiao-ra4m1-\u7684\u5185\u7f6e-led"},"\u70b9\u4eae XIAO RA4M1 \u7684\u5185\u7f6e LED"),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u4ece\u672a\u4f7f\u7528\u8fc7 XIAO RA4M1\uff0c",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc")," \u4e86\u89e3\u5982\u4f55\u70b9\u4eae\u5185\u7f6e LED\uff0c\u8fd9\u53ef\u4ee5\u786e\u4fdd\u4f60\u7684\u5f00\u53d1\u73af\u5883\u6b63\u5e38\u3002"),(0,a.yg)("h3",{id:"\u8bfb\u53d6-grove-\u6447\u6746\u7684-x-\u8f74\u548c-y-\u8f74\u6570\u636e"},"\u8bfb\u53d6 Grove \u6447\u6746\u7684 X \u8f74\u548c Y \u8f74\u6570\u636e"),(0,a.yg)("h4",{id:"\u6b65\u9aa4-1\u8fde\u63a5\u8bbe\u5907"},"\u6b65\u9aa4 1\uff1a\u8fde\u63a5\u8bbe\u5907"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u8868\u683c\u5c06 XIAO RA4M1 \u548c\u6447\u6746\u8fde\u63a5\u5728\u4e00\u8d77\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"XIAO RA4M1"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - Thumb Joystick"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"3.3V"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7ea2\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"A0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u767d\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"A1"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ec4\u8272")))),(0,a.yg)("p",null,"\u73b0\u5728\u4f7f\u7528 Grove \u7535\u7f06\u6309\u7167\u4ee5\u4e0b\u56fe\u50cf\u8fde\u63a5\u5b83\u4eec\u3002"),(0,a.yg)("div",{style:{textAlign:"left"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png",style:{width:600,height:"auto"}})),(0,a.yg)("h4",{id:"\u6b65\u9aa4-2\u4e0a\u4f20\u6d4b\u8bd5\u7a0b\u5e8f"},"\u6b65\u9aa4 2\uff1a\u4e0a\u4f20\u6d4b\u8bd5\u7a0b\u5e8f"),(0,a.yg)("p",null,"\u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\uff0c\u7c98\u8d34\u5230 Arduino IDE \u4e2d\uff0c\u7136\u540e\u4e0a\u4f20\u5230 XIAO RA4M1\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'void setup()\n{\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n    int sensorValue1 = analogRead(A0);\n    int sensorValue2 = analogRead(A1);\n\n    Serial.print("X \u548c Y \u5750\u6807\u4e3a:");\n    Serial.print(sensorValue1, DEC);\n    Serial.print(",");\n    Serial.println(sensorValue2, DEC);\n    Serial.println(" ");\n    delay(200);\n}\n')),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"\u73b0\u5728\uff0c\u5f53\u4f60\u79fb\u52a8\u6447\u6746\u65f6\uff0c\u5750\u6807\u6570\u636e\u4f1a\u5b9e\u65f6\u53d8\u5316\u3002\u8fd9\u610f\u5473\u7740 XIAO RA4M1 \u548c\u6447\u6746\u5de5\u4f5c\u5b8c\u7f8e\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528-xiao-ra4m1-\u6784\u5efa\u9f20\u6807"},"\u4f7f\u7528 XIAO RA4M1 \u6784\u5efa\u9f20\u6807"),(0,a.yg)("h3",{id:"\u6b65\u9aa4-3\u4e0a\u4f20\u9f20\u6807\u63a7\u5236\u7a0b\u5e8f"},"\u6b65\u9aa4 3\uff1a\u4e0a\u4f20\u9f20\u6807\u63a7\u5236\u7a0b\u5e8f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Mouse.h>\n\nconst int xaxis = A0;\nconst int yaxis = A1;\nconst int sensitivity = 5;//\u8c03\u6574\u9f20\u6807\u7075\u654f\u5ea6\n\nvoid setup()\n{\n    Mouse.begin();\n    delay(1000);//\u81f3\u5c11 1000 \u6beb\u79d2\u4ee5\u521d\u59cb\u5316\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n  int xValue = analogRead(xaxis);\n  int yValue = analogRead(yaxis);\n\n  /*\n  \u5f53\u4f60\u70b9\u51fb Grove \u6447\u6746\u7684\u4e2d\u592e\u6309\u94ae\u65f6\uff0cxValue \u5c06\u7b49\u4e8e 1023\uff0c\n  \u56e0\u6b64\u5f53 xValue < 1000 \u65f6\uff0c\u6211\u4eec\u79fb\u52a8\u9f20\u6807\uff1b\u5f53 xValue > 1000 \u65f6\uff0c\u6211\u4eec\u70b9\u51fb\u9f20\u6807\n  */\n  if(xValue<1000){\n  \n    //\u5b9a\u4e49\u9f20\u6807\u79fb\u52a8\u8ddd\u79bb\n    int xDistance;\n    int yDistance;\n\n    /*\n    \u6447\u6746\u8bfb\u53d6 x \u548c y \u503c\u7684\u4e2d\u5fc3\u5750\u6807\u8f74\u4e3a 500\uff0c\n    \u6240\u4ee5\u6211\u4eec\u9700\u8981\u901a\u8fc7\u51cf\u53bb 500 \u6765\u5904\u7406\u6570\u636e\uff0c\u540c\u65f6\u6d88\u9664\u4e00\u4e9b\u5fae\u5c0f\u7684\u9707\u52a8\u3002\n    */\n    //\u6d88\u9664 X \u65b9\u5411\u7684\u5fae\u5c0f\u9707\u52a8\u3002\n    if(abs(xValue-500)<10){\n      xDistance = 0;\n    }else{\n      xDistance = (xValue - 500);\n    }\n    //\u6d88\u9664 Y \u65b9\u5411\u7684\u5fae\u5c0f\u9707\u52a8\u3002\n    if(abs(yValue-500)<10){\n      yDistance = 0;\n    }else{\n      yDistance = (yValue - 500);\n    }\n    //\u4ece\u6447\u6746\u8bfb\u53d6\u503c\n    Serial.print("\u503c: ");\n    Serial.print(xValue);\n    Serial.print(",");\n    Serial.println(yValue);\n    Serial.println(" ");\n    //\u8bfb\u53d6\u9f20\u6807\u5c06\u8981\u79fb\u52a8\u7684\u8ddd\u79bb\n    Serial.print("\u8ddd\u79bb: ");\n    Serial.print(xDistance);\n    Serial.print(",");\n    Serial.println(yDistance);\n    Serial.println(" ");\n\n    // \u8ba9\u9f20\u6807\u4e0d\u90a3\u4e48\u7075\u654f\n        Mouse.move(xDistance / sensitivity, -yDistance / sensitivity, 0);\n    } else {\n        // \u5f53 xValue > 1000 \u65f6\uff0c\u9f20\u6807\u70b9\u51fb\n    Mouse.click();\n  }\n    delay(100);\n}\n')),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"\u73b0\u5728\u4f60\u4f1a\u770b\u5230\u5149\u6807\u5728\u4f60\u63a7\u5236\u6447\u6746\u65f6\u79fb\u52a8 ~"),(0,a.yg)("p",null,"\u606d\u559c\u4f60\uff01\u4f60\u6210\u529f\u6784\u5efa\u4e86\u8fd9\u4e2a\u7b80\u5355\u7684\u5c0f\u9f20\u6807\u3002\u8fd8\u6709\u66f4\u591a\u6709\u8da3\u7684 HID\uff08\u4eba\u673a\u63a5\u53e3\u8bbe\u5907\uff09\u529f\u80fd\u7b49\u5f85\u4f60\u901a\u8fc7 XIAO RA4M1 \u63a2\u7d22\u3002 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/"},"\u60f3\u4e86\u89e3\u66f4\u591a\u5417\uff1f\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b~")),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u4f60\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u4f60\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u4e2a\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);