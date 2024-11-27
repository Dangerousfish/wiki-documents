"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18630],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>_});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,_=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return t?i.createElement(_,o(o({ref:n},u),{},{components:t})):i.createElement(_,o({ref:n},u))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(96540),a=t(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var i=t(9668),a=t(96540),r=t(20053),o=t(23104),s=t(56347),l=t(57485),p=t(31682),u=t(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}function c(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,p.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,p]=_({queryString:t,groupId:i}),[d,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),y=(()=>{const e=l??d;return g({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),m(e)}),[p,m,r]),tabValues:r}}var y=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),i=p[t].value;i!==s&&(d(n),l(i))},g=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,i.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:g,onClick:c},o,{className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function N(e){const n=m(e);return a.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},a.createElement(h,(0,i.A)({},e,n)),a.createElement(b,(0,i.A)({},e,n)))}function I(e){const n=(0,y.A)();return a.createElement(N,(0,i.A)({key:String(n)},e))}},32529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>_,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var i=t(9668),a=(t(96540),t(15680)),r=t(11470),o=t(19365);const s={description:"\u201c\u5728 XIAO RP2350 \u4e0a\u4f7f\u7528 Pico SDK\u201d",title:"Seeed Studio XIAO RP2350 \u4e0e C/C++ SDK",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/xiao-rp2350-c-cpp-sdk",sidebar_position:2,last_update:{date:"11/18/2024",author:"Agnes"}},l=void 0,p={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/CN_XIAO-RP2350-with-SDK",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/CN_XIAO-RP2350-with-SDK",title:"Seeed Studio XIAO RP2350 \u4e0e C/C++ SDK",description:"\u201c\u5728 XIAO RP2350 \u4e0a\u4f7f\u7528 Pico SDK\u201d",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/CN_XIAO-RP2350-with-SDK.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350",slug:"/cn/xiao-rp2350-c-cpp-sdk",permalink:"/cn/xiao-rp2350-c-cpp-sdk",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/CN_XIAO-RP2350-with-SDK.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1731888e3,formattedLastUpdatedAt:"Nov 18, 2024",sidebarPosition:2,frontMatter:{description:"\u201c\u5728 XIAO RP2350 \u4e0a\u4f7f\u7528 Pico SDK\u201d",title:"Seeed Studio XIAO RP2350 \u4e0e C/C++ SDK",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/xiao-rp2350-c-cpp-sdk",sidebar_position:2,last_update:{date:"11/18/2024",author:"Agnes"}},sidebar:"CNSidebar",previous:{title:"Seeed Studio XIAO RP2350 \u4f7f\u7528 Arduino",permalink:"/cn/xiao_rp2350_arduino"},next:{title:"Getting Started with Seeed Studio XIAO nRF52840 (Sense) \u5f00\u53d1\u677f",permalink:"/cn/XIAO_BLE"}},u={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u901a\u8fc7 Vscode \u5b89\u88c5\u6307\u5357",id:"\u901a\u8fc7-vscode-\u5b89\u88c5\u6307\u5357",level:2},{value:"\u6b65\u9aa4 1\uff1a\u5b89\u88c5\u6269\u5c55",id:"\u6b65\u9aa4-1\u5b89\u88c5\u6269\u5c55",level:4},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u65b0\u9879\u76ee",id:"\u6b65\u9aa4-2\u521b\u5efa\u65b0\u9879\u76ee",level:4},{value:"\u6b65\u9aa4 3\uff1a\u914d\u7f6e\u60a8\u7684\u9879\u76ee",id:"\u6b65\u9aa4-3\u914d\u7f6e\u60a8\u7684\u9879\u76ee",level:4},{value:"\u6b65\u9aa4 4\uff1a\u6784\u5efa\u9879\u76ee",id:"\u6b65\u9aa4-4\u6784\u5efa\u9879\u76ee",level:4},{value:"\u793a\u4f8b 1\uff1aLED \u95ea\u70c1",id:"\u793a\u4f8b-1led-\u95ea\u70c1",level:2},{value:"\u793a\u4f8b 2: RGB \u95ea\u70c1",id:"\u793a\u4f8b-2-rgb-\u95ea\u70c1",level:2},{value:"\u793a\u4f8b 3: UART \u6253\u5370",id:"\u793a\u4f8b-3-uart-\u6253\u5370",level:2},{value:"\u793a\u4f8b 4: \u8bfb\u53d6\u7535\u6c60\u7535\u538b",id:"\u793a\u4f8b-4-\u8bfb\u53d6\u7535\u6c60\u7535\u538b",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"TinyUSB \u5b50\u6a21\u5757\u672a\u521d\u59cb\u5316\uff1bUSB \u652f\u6301\u4e0d\u53ef\u7528",id:"tinyusb-\u5b50\u6a21\u5757\u672a\u521d\u59cb\u5316usb-\u652f\u6301\u4e0d\u53ef\u7528",level:4},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:d},g="wrapper";function _(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,"Seeed Studio XIAO RP2350 \u914d\u5907 RP2350 \u5fae\u63a7\u5236\u5668\uff0c\u63d0\u4f9b\u5f3a\u5927\u7684\u6027\u80fd\uff0c\u4e14\u4f53\u79ef\u5c0f\u5de7\u3002\u672c\u6307\u5357\u5c06\u63d0\u4f9b\u8bbe\u7f6e\u548c\u4f7f\u7528 C/C++ SDK \u7684\u57fa\u672c\u6b65\u9aa4\uff0c\u5e2e\u52a9\u60a8\u5728 XIAO RP2350 \u4e0a\u5f00\u59cb\u5f00\u53d1\u3002"),(0,a.yg)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.yg)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5177\u5907\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e00\u53f0\u8fd0\u884c Windows\u3001macOS \u6216 Linux \u7684\u8ba1\u7b97\u673a\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e00\u6839\u7528\u4e8e\u5c06 XIAO RP2350 \u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u7684 USB \u7535\u7f06\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u57fa\u672c\u7684 C/C++ \u7f16\u7a0b\u77e5\u8bc6\u3002")),(0,a.yg)("h2",{id:"\u901a\u8fc7-vscode-\u5b89\u88c5\u6307\u5357"},"\u901a\u8fc7 Vscode \u5b89\u88c5\u6307\u5357"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u90a3\u4e9b\u559c\u6b22\u672c\u5730\u5f00\u53d1\u4f53\u9a8c\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf"},"Raspberry Pi Pico C/C++ SDK \u6587\u6863")," \u6216 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/raspberrypi/pico-sdk"},"Raspberry Pi Pico SDK | GitHub"),"\u3002")),(0,a.yg)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u7b80\u5355\u548c\u66f4\u6d41\u7545\u7684 SDK \u7f16\u7a0b\u4f53\u9a8c\uff0c\u5c24\u5176\u9002\u5408\u65b0\u624b\uff0c\u60a8\u53ef\u4ee5\u4e3a Visual Studio Code (VSCode) \u5b89\u88c5 ",(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico"},"Raspberry Pi Pico")," \u6269\u5c55\u3002"),(0,a.yg)("p",null,"\u6b64\u6269\u5c55\u7b80\u5316\u4e86\u8bbe\u7f6e\u8fc7\u7a0b\uff0c\u901a\u8fc7\u5f15\u5bfc\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u5de5\u5177\u94fe\u5b89\u88c5\uff0c\u907f\u514d\u4e86\u624b\u52a8\u5355\u72ec\u5b89\u88c5\u6bcf\u4e2a\u5de5\u5177\u3002\u4e0d\u8fc7\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u7b26\u5408\u5e73\u53f0\u8981\u6c42\uff1aWindows x64\u3001macOS\uff08Sonoma \u53ca\u66f4\u65b0\u7248\u672c\uff09\u3001Linux x64 \u6216 arm64\u3002"),(0,a.yg)("p",null,"\u6709\u5173\u9002\u5408\u60a8\u64cd\u4f5c\u7cfb\u7edf\u7684\u8be6\u7ec6\u5b89\u88c5\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico"},"Raspberry Pi Pico Extension for VSCode")," \u9875\u9762\u3002"),(0,a.yg)("h4",{id:"\u6b65\u9aa4-1\u5b89\u88c5\u6269\u5c55"},"\u6b65\u9aa4 1\uff1a\u5b89\u88c5\u6269\u5c55"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png",style:{width:500,height:"auto"}}),(0,a.yg)("div",{style:{marginTop:"-8px"}},(0,a.yg)("em",null,"\u5728 VSCode \u4e2d\u5b89\u88c5\u6269\u5c55")),(0,a.yg)("br",null)),(0,a.yg)("h4",{id:"\u6b65\u9aa4-2\u521b\u5efa\u65b0\u9879\u76ee"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u65b0\u9879\u76ee"),(0,a.yg)("p",null,"\u9875\u9762\u52a0\u8f7d\u540e\uff0c\u60a8\u5c06\u770b\u5230\u6240\u9700\u7684\u5185\u5bb9\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png",style:{width:500,height:"auto"}}),(0,a.yg)("div",{style:{marginTop:"-8px"}},(0,a.yg)("em",null,"\u4ece\u793a\u4f8b\u4e2d\u521b\u5efa\u65b0\u9879\u76ee")),(0,a.yg)("br",null)),(0,a.yg)("p",null,"\u5c1d\u8bd5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u4ece\u793a\u4f8b\u521b\u5efa\u65b0\u9879\u76ee")," \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"),(0,a.yg)("h4",{id:"\u6b65\u9aa4-3\u914d\u7f6e\u60a8\u7684\u9879\u76ee"},"\u6b65\u9aa4 3\uff1a\u914d\u7f6e\u60a8\u7684\u9879\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u540d\u79f0\uff1a")," \u901a\u5e38\u8fd9\u662f\u793a\u4f8b\u9879\u76ee\u7684\u540d\u79f0\uff1b\u5728\u6b64\uff0c\u6211\u4eec\u9009\u62e9 ",(0,a.yg)("inlineCode",{parentName:"li"},"blink")," \u9879\u76ee\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u677f\u7c7b\u578b\uff1a")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Pico 2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u4f4d\u7f6e\uff1a")," \u9009\u62e9\u60a8\u5e0c\u671b\u5b58\u50a8 XIAO RP2350 \u9879\u76ee\u7684\u4f4d\u7f6e\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SDK \u7248\u672c\uff1a")," \u5fc5\u987b\u662f ",(0,a.yg)("inlineCode",{parentName:"li"},"v2.0.0")," \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8c03\u8bd5\u5668\uff1a")," \u5982\u679c\u60a8\u8ba1\u5212\u4f7f\u7528 SWD \u8c03\u8bd5\u63a5\u53e3\uff0c\u8bf7\u52fe\u9009 SWD \u8c03\u8bd5\u5668\u9009\u9879\u4ee5\u4fbf\u4ee5\u540e\u542f\u7528\u8c03\u8bd5\u3002")),(0,a.yg)(r.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"c1",label:"\u914d\u7f6e\u9879\u76ee",mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png",style:{width:500,height:"auto"}}))),(0,a.yg)(o.A,{value:"c2",label:"\u9ad8\u7ea7\u9009\u9879",mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5bf9\u5de5\u5177\u94fe\u8bbe\u7f6e\u8fdb\u884c\u5fae\u8c03\u5e76\u907f\u514d\u4e0b\u8f7d\u5197\u4f59\u8d44\u6e90\uff0c\u53ef\u4ee5\u52fe\u9009 ",(0,a.yg)("strong",{parentName:"p"},"\u9ad8\u7ea7\u9009\u9879"),"\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u4e3a Ninja \u548c CMake \u7b49\u5de5\u5177\u6307\u5b9a\u8def\u5f84\u3002\u5982\u679c\u60a8\u4ee5\u524d\u6ca1\u6709\u5b89\u88c5 CMake \u6216 Python \u73af\u5883\uff0c\u6216\u8005\u4e0d\u60f3\u62c5\u5fc3\u8fd9\u4e9b\u95ee\u9898\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,a.yg)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u5c06\u4f7f\u7528\u5df2\u7ecf\u5728 Windows \u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5\u5e76\u6dfb\u52a0\u5230\u7cfb\u7edf PATH \u7684\u7cfb\u7edf\u7248\u672c\u3002\u56e0\u6b64\uff0c\u6211\u9009\u62e9 ",(0,a.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u7cfb\u7edf\u7248\u672c"),"\u3002"))),(0,a.yg)("p",null,"\u5982\u679c\u8fd9\u662f\u60a8\u7b2c\u4e00\u6b21\u8fd0\u884c\u8bbe\u7f6e\uff0c\u5f53\u60a8\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"\u521b\u5efa")," \u65f6\uff0c\u6269\u5c55\u4f1a\u4e3a\u60a8\u4e0b\u8f7d\u5e76\u7ba1\u7406 SDK\u3002\u5728 Windows \u4e0a\uff0cSDK \u901a\u5e38\u4f1a\u653e\u7f6e\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"%userprofile%\\.pico-sdk")," \u76ee\u5f55\u4e0b\u3002\u5b89\u88c5\u6240\u9700\u65f6\u95f4\u53d6\u51b3\u4e8e\u60a8\u7684\u4e92\u8054\u7f51\u901f\u5ea6\u3002\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u7a97\u53e3\uff0c\u663e\u793a\u60a8\u7684\u9879\u76ee\u3002"),(0,a.yg)("h4",{id:"\u6b65\u9aa4-4\u6784\u5efa\u9879\u76ee"},"\u6b65\u9aa4 4\uff1a\u6784\u5efa\u9879\u76ee"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png",style:{width:500,height:"auto"}})),(0,a.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u7b2c\u4e00\u6b21\u8bbe\u7f6e\u9879\u76ee\u65f6\uff0c\u60a8\u9700\u8981\u624b\u52a8\u4fee\u6539 CMake \u9879\u76ee\u4e2d\u7684\u677f\u7c7b\u578b\uff0c\u56e0\u4e3a\u6269\u5c55\u9ed8\u8ba4\u4e0d\u5305\u542b XIAO RP2350 \u677f\u3002\u5c06\u677f\u7c7b\u578b\u8bbe\u7f6e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"seeed_xiao_rp2350"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"\u4fee\u6539\u677f\u7c7b\u578b\u540e\uff0c\u8bf7\u6e05\u7406 ",(0,a.yg)("inlineCode",{parentName:"strong"},"build")," \u6587\u4ef6\u5939"),"\uff0c\u4ee5\u786e\u4fdd\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h")," \u4e2d\u7684\u6b63\u786e\u677f\u914d\u7f6e\u3002\u7136\u540e\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728\u6784\u5efa\u6587\u4ef6\u5939\u4e2d\u751f\u6210 CMake \u7f13\u5b58\uff1a"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cmake .. # \u5728 build \u6587\u4ef6\u5939\u4e2d\u6267\u884c\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},"\u8fd9\u5c06\u4f7f\u6269\u5c55\u7684\u7f16\u8bd1\u4efb\u52a1\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,a.yg)(r.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"compile",label:"\u7f16\u8bd1\u9879\u76ee",mdxType:"TabItem"},(0,a.yg)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u6309 ",(0,a.yg)("strong",{parentName:"p"},"\u7f16\u8bd1")," \u6309\u94ae\u6765\u6784\u5efa\u9879\u76ee\u3002\u6b64\u64cd\u4f5c\u5c06\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939\u4e2d\u751f\u6210 ",(0,a.yg)("inlineCode",{parentName:"p"},"blink.uf2")," \u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u62d6\u653e\u5230\u8ba1\u7b97\u673a\u8bc6\u522b\u7684 RP2350 \u9a71\u52a8\u5668\u4e2d\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png",style:{width:500,height:"auto"}}))),(0,a.yg)(o.A,{value:"run",label:"\u8fd0\u884c\u9879\u76ee",mdxType:"TabItem"},(0,a.yg)("p",null,"\u5982\u679c\u8bbe\u5907\u5904\u4e8e BOOT \u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u6309 ",(0,a.yg)("strong",{parentName:"p"},"\u8fd0\u884c")," \u6309\u94ae\u6765\u7f16\u8bd1\u5e76\u81ea\u52a8\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},".uf2")," \u6587\u4ef6\u590d\u5236\u5230 RP2350\uff0c\u7701\u53bb\u624b\u52a8\u62d6\u653e\u6587\u4ef6\u7684\u6b65\u9aa4\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png",style:{width:500,height:"auto"}})))),(0,a.yg)("p",null,"\u6211\u4eec\u521a\u521a\u8bbe\u7f6e\u4e86\u5f00\u53d1\u73af\u5883\uff0c\u5e76\u6210\u529f\u4f7f\u7528 Raspberry Pi Pico \u6269\u5c55\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u9879\u76ee\u5df2\u51c6\u5907\u5c31\u7eea\uff0c\u5de5\u5177\u4e5f\u5df2\u914d\u7f6e\u597d\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u7f16\u8bd1\u5e76\u5728 XIAO RP2350 \u4e0a\u8fd0\u884c\u60a8\u7684\u4ee3\u7801\uff0c\u4ece\u800c\u7b80\u5316\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,a.yg)("h2",{id:"\u793a\u4f8b-1led-\u95ea\u70c1"},"\u793a\u4f8b 1\uff1aLED \u95ea\u70c1"),(0,a.yg)("p",null,"\u4e3a\u4e86\u6f14\u793a\u57fa\u672c\u7684 SDK \u4f7f\u7528\u65b9\u6cd5\uff0c\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u7f16\u7a0b\u63a7\u5236\u677f\u8f7d LED \u95ea\u70c1\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="blink.c"',title:'"blink.c"'},'#include "pico/stdlib.h"\n\nconst int sleep_time = 250;\n\nint main() {\n    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25\n    gpio_init(LED_PIN);\n    gpio_set_dir(LED_PIN, GPIO_OUT);\n    while (true) {\n        gpio_put(LED_PIN, 1);\n        sleep_ms(sleep_time);\n        gpio_put(LED_PIN, 0);\n        sleep_ms(sleep_time);\n    }\n}\n')),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif",style:{width:400,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("h2",{id:"\u793a\u4f8b-2-rgb-\u95ea\u70c1"},"\u793a\u4f8b 2: RGB \u95ea\u70c1"),(0,a.yg)(r.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"ws2812.c",label:"ws2812.c",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'/**\n * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.\n *\n * SPDX-License-Identifier: BSD-3-Clause\n */\n\n#include <stdio.h>\n#include <stdlib.h>\n\n#include "pico/stdlib.h"\n#include "hardware/pio.h"\n#include "hardware/clocks.h"\n#include "ws2812.pio.h"\n\n#define IS_RGBW true\n#define NUM_PIXELS 1\n\n#ifdef PICO_DEFAULT_WS2812_PIN\n#define WS2812_PIN PICO_DEFAULT_WS2812_PIN\n#else\n// \u5982\u679c\u677f\u5b50\u6ca1\u6709\u9ed8\u8ba4\u7684 WS2812 \u5f15\u811a\u5b9a\u4e49\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5f15\u811a 2\n#define WS2812_PIN 22\n#endif\n\nstatic inline void put_pixel(uint32_t pixel_grb) {\n    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);\n}\n\nstatic inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {\n    return\n            ((uint32_t) (r) << 8) |\n            ((uint32_t) (g) << 16) |\n            (uint32_t) (b);\n}\n\nvoid pattern_snakes(uint len, uint t) {\n    for (uint i = 0; i < len; ++i) {\n        uint x = (i + (t >> 1)) % 64;\n        if (x < 10)\n            put_pixel(urgb_u32(0xff, 0, 0));\n        else if (x >= 15 && x < 25)\n            put_pixel(urgb_u32(0, 0xff, 0));\n        else if (x >= 30 && x < 40)\n            put_pixel(urgb_u32(0, 0, 0xff));\n        else\n            put_pixel(0);\n    }\n}\n\nvoid pattern_random(uint len, uint t) {\n    if (t % 8)\n        return;\n    for (int i = 0; i < len; ++i)\n        put_pixel(rand());\n}\n\nvoid pattern_sparkle(uint len, uint t) {\n    if (t % 8)\n        return;\n    for (int i = 0; i < len; ++i)\n        put_pixel(rand() % 16 ? 0 : 0xffffffff);\n}\n\nvoid pattern_greys(uint len, uint t) {\n    int max = 100; // \u4e3a\u4e86\u4e0d\u6d88\u8017\u8fc7\u591a\u7535\u6d41\uff01\n    t %= max;\n    for (int i = 0; i < len; ++i) {\n        put_pixel(t * 0x10101);\n        if (++t >= max) t = 0;\n    }\n}\n\ntypedef void (*pattern)(uint len, uint t);\nconst struct {\n    pattern pat;\n    const char *name;\n} pattern_table[] = {\n        {pattern_snakes,  "\u86c7\u5f62!"},\n        {pattern_random,  "\u968f\u673a\u6570\u636e"},\n        {pattern_sparkle, "\u95ea\u5149"},\n        {pattern_greys,   "\u7070\u5ea6"},\n};\n\nint main() {\n    //set_sys_clock_48();\n    stdio_init_all();\n\n    const int RGB_POWER = 23;\n    gpio_init(RGB_POWER);\n    gpio_set_dir(RGB_POWER, GPIO_OUT);\n    gpio_put(RGB_POWER, 1);\n\n    printf("WS2812 \u70df\u96fe\u6d4b\u8bd5\uff0c\u4f7f\u7528\u5f15\u811a %d", WS2812_PIN);\n\n    // todo \u83b7\u53d6\u7a7a\u95f2\u7684\u72b6\u6001\u673a\n    PIO pio = pio0;\n    int sm = 0;\n    uint offset = pio_add_program(pio, &ws2812_program);\n\n    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);\n\n    int t = 0;\n    while (1) {\n        int pat = rand() % count_of(pattern_table);\n        int dir = (rand() >> 30) & 1 ? 1 : -1;\n        puts(pattern_table[pat].name);\n        puts(dir == 1 ? "(\u6b63\u5411)" : "(\u53cd\u5411)");\n        for (int i = 0; i < 1000; ++i) {\n            pattern_table[pat].pat(NUM_PIXELS, t);\n            sleep_ms(10);\n            t += dir;\n        }\n    }\n}\n'))),(0,a.yg)(o.A,{value:"ws2812.pio",label:"ws2812.pio",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},';\n; Copyright (c) 2020 Raspberry Pi (Trading) Ltd.\n;\n; SPDX-License-Identifier: BSD-3-Clause\n;\n\n.program ws2812\n.side_set 1\n\n.define public T1 2\n.define public T2 5\n.define public T3 3\n\n.lang_opt python sideset_init = pico.PIO.OUT_HIGH\n.lang_opt python out_init     = pico.PIO.OUT_HIGH\n.lang_opt python out_shiftdir = 1\n\n.wrap_target\nbitloop:\n    out x, 1       side 0 [T3 - 1] ; \u5373\u4f7f\u6307\u4ee4\u505c\u987f\u65f6\uff0cSide-set\u4ecd\u7136\u4f1a\u53d1\u751f\n    jmp !x do_zero side 1 [T1 - 1] ; \u6839\u636e\u6211\u4eec\u79fb\u51fa\u7684\u4f4d\u8fdb\u884c\u8df3\u8f6c\u3002\u6b63\u8109\u51b2\ndo_one:\n    jmp  bitloop   side 1 [T2 - 1] ; \u7ee7\u7eed\u9a71\u52a8\u9ad8\u7535\u5e73\uff0c\u4ea7\u751f\u957f\u8109\u51b2\ndo_zero:\n    nop            side 0 [T2 - 1] ; \u6216\u8005\u9a71\u52a8\u4f4e\u7535\u5e73\uff0c\u4ea7\u751f\u77ed\u8109\u51b2\n.wrap\n\n% c-sdk {\n#include "hardware/clocks.h"\n\nstatic inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {\n\n    pio_gpio_init(pio, pin);\n    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);\n\n    pio_sm_config c = ws2812_program_get_default_config(offset);\n    sm_config_set_sideset_pins(&c, pin);\n    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);\n    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);\n\n    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;\n    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);\n    sm_config_set_clkdiv(&c, div);\n\n    pio_sm_init(pio, sm, offset, &c);\n    pio_sm_set_enabled(pio, sm, true);\n}\n%}\n\n.program ws2812_parallel\n\n.define public T1 2\n.define public T2 5\n.define public T3 3\n\n.wrap_target\n    out x, 32\n    mov pins, !null [T1-1]\n    mov pins, x     [T2-1]\n    mov pins, null  [T3-2]\n.wrap\n\n% c-sdk {\n#include "hardware/clocks.h"\n\nstatic inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {\n    for(uint i=pin_base; i<pin_base+pin_count; i++) {\n        pio_gpio_init(pio, i);\n    }\n    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);\n\n    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);\n    sm_config_set_out_shift(&c, true, true, 32);\n    sm_config_set_out_pins(&c, pin_base, pin_count);\n    sm_config_set_set_pins(&c, pin_base, pin_count);\n    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);\n\n    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;\n    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);\n    sm_config_set_clkdiv(&c, div);\n\n    pio_sm_init(pio, sm, offset, &c);\n    pio_sm_set_enabled(pio, sm, true);\n}\n%}\n'))),(0,a.yg)(o.A,{value:"ws2812-cmake",label:"CMakeLists.txt",mdxType:"TabItem"},(0,a.yg)("p",null,"\u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\u6bb5\u5e76\u5c06\u5176\u9644\u52a0\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt")," \u6587\u4ef6\u4e2d\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cmake",metastring:'title="CMakeLists.txt"',title:'"CMakeLists.txt"'},"project(pio_ws2812 C CXX ASM)\n\n# \u521d\u59cb\u5316 Raspberry Pi Pico SDK\npico_sdk_init()\n\n# \u4e3a pio_ws2812 \u6dfb\u52a0\u53ef\u6267\u884c\u76ee\u6807\nadd_executable(pio_ws2812)\n\n# \u4e3a\u751f\u6210\u7684\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\nfile(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)\n\n# \u4ece ws2812.pio \u751f\u6210 PIO \u5934\u6587\u4ef6\npico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)\n\n# \u5c06\u6e90\u6587\u4ef6\u6dfb\u52a0\u5230 pio_ws2812 \u76ee\u6807\u4e2d\ntarget_sources(pio_ws2812 PRIVATE ws2812.c)\n\n# \u5c06\u5fc5\u8981\u7684\u5e93\u94fe\u63a5\u5230 pio_ws2812 \u76ee\u6807\ntarget_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)\n\n# \u751f\u6210\u989d\u5916\u7684\u8f93\u51fa\u683c\u5f0f\uff08\u4f8b\u5982\uff0cUF2\uff0cBIN\uff09\npico_add_extra_outputs(pio_ws2812)\n\n# \u53ef\u9009\u5730\uff0c\u4ece PIO \u6c47\u7f16\u751f\u6210 Python \u6587\u4ef6\uff0c\u4ee5\u4f9b\u8fdb\u4e00\u6b65\u5206\u6790\u6216\u6587\u6863\u4f7f\u7528\nadd_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py\n    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio\n    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py\n    VERBATIM)\nadd_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)\nadd_dependencies(pio_ws2812 pio_ws2812_datasheet)\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png",style:{width:500,height:"auto"}})))),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif",style:{width:240,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("h2",{id:"\u793a\u4f8b-3-uart-\u6253\u5370"},"\u793a\u4f8b 3: UART \u6253\u5370"),(0,a.yg)("admonition",{title:"USB \u4e32\u53e3",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u901a\u8fc7 USB \u542f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"printf")," \u8f93\u51fa\u5230\u8ba1\u7b97\u673a\uff0c\u4f60\u9700\u8981\u5728\u9879\u76ee\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff1a"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-cmake"},"pico_enable_stdio_usb(your_project_name 1)\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png",alt:"CMake USB Enabled",style:{width:400,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},"\u53e6\u5916\uff0c\u786e\u4fdd\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u521d\u59cb\u5316\u6807\u51c6 I/O\uff0c\u901a\u8fc7\u5728\u4e3b\u51fd\u6570\u4e2d\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"stdio_init_all();")," \u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="hello_uart.c"',title:'"hello_uart.c"'},'#include "hardware/uart.h"\n#include "pico/stdlib.h"\n#include <pico/stdio.h>\n#include <pico/time.h>\n#include <stdio.h>\n\n#define UART_ID uart0\n#define BAUD_RATE 115200\n\n// \u6211\u4eec\u4f7f\u7528\u7684\u662f\u5f15\u811a 0 \u548c 1\uff0c\u66f4\u591a\u53ef\u7528\u5f15\u811a\u8bf7\u53c2\u89c1\u6570\u636e\u624b\u518c\u4e2d\u7684 GPIO \u529f\u80fd\u9009\u62e9\u8868\n#define UART_TX_PIN 0\n#define UART_RX_PIN 1\n\nint main() {\n   stdio_init_all();\n  // \u8bbe\u7f6e\u6211\u4eec\u6240\u9700\u7684\u6ce2\u7279\u7387\u6765\u521d\u59cb\u5316 UART\n  uart_init(UART_ID, BAUD_RATE);\n\n  // \u901a\u8fc7\u4f7f\u7528 GPIO \u7684\u529f\u80fd\u9009\u62e9\u8bbe\u7f6e TX \u548c RX \u5f15\u811a\n  // \u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1\u6570\u636e\u624b\u518c\u4e2d\u7684\u529f\u80fd\u9009\u62e9\n  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));\n  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));\n\n  // \u4f7f\u7528\u4e00\u4e9b UART \u51fd\u6570\u6765\u53d1\u9001\u6570\u636e\n  // \u5728\u9ed8\u8ba4\u7cfb\u7edf\u4e2d\uff0cprintf \u4e5f\u4f1a\u901a\u8fc7\u9ed8\u8ba4 UART \u8f93\u51fa\n\n  // \u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\uff0c\u4e0d\u505a\u4efb\u4f55\u8f6c\u6362\n  uart_putc_raw(UART_ID, \'A\');\n\n  // \u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\uff0c\u8fdb\u884c CR/LF \u8f6c\u6362\n  uart_putc(UART_ID, \'B\');\n\n  // \u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8fdb\u884c CR/LF \u8f6c\u6362\n  uart_puts(UART_ID, " Hello, UART!\\n");\n\n  // \u6253\u5370\u6d4b\u8bd5\n  int i = 0;\n  for (;;) {\n    sleep_ms(500);\n    printf("Hello %d", i++);\n  }\n}\n')),(0,a.yg)("h2",{id:"\u793a\u4f8b-4-\u8bfb\u53d6\u7535\u6c60\u7535\u538b"},"\u793a\u4f8b 4: \u8bfb\u53d6\u7535\u6c60\u7535\u538b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="hello_adc.c"',title:'"hello_adc.c"'},'#include <stdio.h>\n#include "pico/stdlib.h"\n#include "hardware/gpio.h"\n#include "hardware/adc.h"\n\nvoid init_gpio() {\n    const int gpio = 19;\n\n    gpio_init(gpio);\n    gpio_set_dir(gpio, GPIO_OUT);\n    gpio_put(gpio, 1);\n}\n\nint main() {\n    stdio_init_all();\n    printf("ADC \u7535\u6c60\u793a\u4f8b - GPIO29 A3\\n");\n\n    init_gpio();\n    adc_init();\n\n    // \u786e\u4fddGPIO\u4e3a\u9ad8\u963b\u6297\uff0c\u6ca1\u6709\u4e0a\u62c9\u7b49\n    adc_gpio_init(29);\n    // \u9009\u62e9ADC\u8f93\u5165 0\uff08GPIO26\uff09\n    adc_select_input(3);\n\n    while (1) {\n        // 12\u4f4d\u8f6c\u6362\uff0c\u5047\u8bbe\u6700\u5927\u503c == ADC_VREF == 3.3 V\n        const float conversion_factor = 3.3f / (1 << 12);\n        uint16_t result = adc_read();\n        printf("\u539f\u59cb\u503c: 0x%03x, \u7535\u538b: %f V\\n", result, result * conversion_factor * 2);\n        sleep_ms(500);\n    }\n}\n')),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,a.yg)("h4",{id:"tinyusb-\u5b50\u6a21\u5757\u672a\u521d\u59cb\u5316usb-\u652f\u6301\u4e0d\u53ef\u7528"},"TinyUSB \u5b50\u6a21\u5757\u672a\u521d\u59cb\u5316\uff1bUSB \u652f\u6301\u4e0d\u53ef\u7528"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u95ee\u9898\uff1a"),"\n\u5728\u6784\u5efa\u9879\u76ee\u65f6\uff0c\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u4ee5\u4e0b\u8b66\u544a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-plaintext"},"TinyUSB \u5b50\u6a21\u5757\u5c1a\u672a\u521d\u59cb\u5316\uff1bUSB \u652f\u6301\u5c06\u4e0d\u53ef\u7528\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\uff1a")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728 Linux/macOS \u4e0a\u6253\u5f00\u7ec8\u7aef\uff0c\u6216\u5728 Windows \u4e0a\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26/PowerShell/Git Bash\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8fdb\u5165 Pico SDK \u76ee\u5f55\uff1a")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/your/pico-sdk\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u5b50\u6a21\u5757\uff1a")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git submodule update --init\n")))),(0,a.yg)("p",null,"\u8fd9\u5c06\u4e3a\u60a8\u7684\u9879\u76ee\u542f\u7528 USB \u652f\u6301\u3002"),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,a.yg)("strong",{parentName:"li"},"[\u94fe\u63a5]")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/raspberrypi/pico-sdk"},"Raspberry Pi Pico SDK | GitHub")),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf"},"Raspberry Pi Pico\u7cfb\u5217 C/C++SDK")," \u2014 \u8be5\u4e66\u8bb0\u5f55\u4e86 SDK \u7684 API"),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf"},"Raspberry Pi Pico\u7cfb\u5217\u5165\u95e8\u6307\u5357")," \u2014 \u5b98\u65b9 Raspberry Pi \u6587\u6863\u3002"),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcfd\ufe0f ",(0,a.yg)("strong",{parentName:"li"},"[\u89c6\u9891]")," ",(0,a.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=B5rQSoOmR5w"},"Raspberry Pi Pico \u548c RP2040 \u7b80\u4ecb")," \u2014 \u4e00\u6bb5\u89c6\u9891\u6559\u7a0b\u3002")),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u591a\u79cd\u652f\u6301\u65b9\u5f0f\uff0c\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u65f6\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/kpY74apCWj",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}_.isMDXComponent=!0}}]);