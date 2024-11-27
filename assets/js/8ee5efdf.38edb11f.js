"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3487],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var l=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,c=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return n?l.createElement(c,a(a({ref:t},g),{},{components:n})):l.createElement(c,a({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>a});var l=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var l=n(9668),r=n(96540),i=n(20053),a=n(23104),o=n(56347),u=n(57485),s=n(31682),g=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,i=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:i}))),[u,s]=c({queryString:n,groupId:l}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,i]=(0,g.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),A=(()=>{const e=u??d;return y({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{A&&o(A)}),[A]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,i]),tabValues:i}}var A=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const g=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),p=e=>{const t=e.currentTarget,n=g.indexOf(t),l=s[n].value;l!==o&&(d(t),u(l))},y=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,l.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>g.push(e),onKeyDown:y,onClick:p},a,{className:(0,i.A)("tabs__item",h.tabItem,a?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function _(e){const t=m(e);return r.createElement("div",{className:(0,i.A)("tabs-container",h.tabList)},r.createElement(f,(0,l.A)({},e,t)),r.createElement(N,(0,l.A)({},e,t)))}function I(e){const t=(0,A.A)();return r.createElement(_,(0,l.A)({key:String(t)},e))}},67567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(9668),r=(n(96540),n(15680));n(11470),n(19365);const i={title:"\u5f00\u59cb\u4f7f\u7528 Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - \u57fa\u4e8e32\u4f4dRenesas RA4M1\u7684\u6700\u5c0f\u5f00\u53d1\u677f\uff0c\u517c\u5bb9Arduino IDE\uff0c\u62e5\u670919\u4e2aGPIO\uff0cRGB LED\uff0cCAN\u603b\u7ebf\uff0cUSB 2.0\n",image:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg",slug:"/cn/getting_started_xiao_ra4m1",keywords:["XIAO","RA4M1"],last_update:{date:"11/01/2024",author:"Agnes"},sidebar_position:0},a=void 0,o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Getting_started",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Getting_started",title:"\u5f00\u59cb\u4f7f\u7528 Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - \u57fa\u4e8e32\u4f4dRenesas RA4M1\u7684\u6700\u5c0f\u5f00\u53d1\u677f\uff0c\u517c\u5bb9Arduino IDE\uff0c\u62e5\u670919\u4e2aGPIO\uff0cRGB LED\uff0cCAN\u603b\u7ebf\uff0cUSB 2.0\n",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Getting_started.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1",slug:"/cn/getting_started_xiao_ra4m1",permalink:"/cn/getting_started_xiao_ra4m1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeedStudio_XIAO_RA4M1/CN_XIAO_RA4M1_Getting_started.md",tags:[],version:"current",lastUpdatedBy:"Agnes",lastUpdatedAt:1730419200,formattedLastUpdatedAt:"Nov 1, 2024",sidebarPosition:0,frontMatter:{title:"\u5f00\u59cb\u4f7f\u7528 Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - \u57fa\u4e8e32\u4f4dRenesas RA4M1\u7684\u6700\u5c0f\u5f00\u53d1\u677f\uff0c\u517c\u5bb9Arduino IDE\uff0c\u62e5\u670919\u4e2aGPIO\uff0cRGB LED\uff0cCAN\u603b\u7ebf\uff0cUSB 2.0\n",image:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg",slug:"/cn/getting_started_xiao_ra4m1",keywords:["XIAO","RA4M1"],last_update:{date:"11/01/2024",author:"Agnes"},sidebar_position:0},sidebar:"CNSidebar",previous:{title:"\u5c06 XIAO SAMD21 \u8fde\u63a5\u5230\u60a8\u7684\u6811\u8393\u6d3e",permalink:"/cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"},next:{title:"XIAO RA4M1 \u9f20\u6807",permalink:"/cn/xiao_ra4m1_mouse"}},u={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:3},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:3},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:3},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f",id:"\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f",level:2},{value:"\u91cd\u7f6e",id:"\u91cd\u7f6e",level:2},{value:"\u8fd0\u884c\u60a8\u7684\u7b2c\u4e00\u4e2a\u95ea\u70c1\u7a0b\u5e8f",id:"\u8fd0\u884c\u60a8\u7684\u7b2c\u4e00\u4e2a\u95ea\u70c1\u7a0b\u5e8f",level:2},{value:"\u73a9\u8f6c RGB LED",id:"\u73a9\u8f6c-rgb-led",level:2},{value:"\u7535\u6c60\u4e0e\u7535\u6e90\u7ba1\u7406",id:"\u7535\u6c60\u4e0e\u7535\u6e90\u7ba1\u7406",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"Q1: \u710a\u63a5\u5f15\u811a\u65f6\u6211\u5e94\u8be5\u6ce8\u610f\u4ec0\u4e48\uff1f",id:"q1-\u710a\u63a5\u5f15\u811a\u65f6\u6211\u5e94\u8be5\u6ce8\u610f\u4ec0\u4e48",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,l.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg",style:{width:480,height:"auto","border-radius":"12.8px"}})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.yg)("p",null,"XIAO RA4M1 \u5c06\u745e\u8428\u7684 RA4M1 \u82af\u7247\uff0832 \u4f4d ARM\xae Cortex\xae-M4 MCU\uff0c\u6700\u9ad8\u53ef\u8fbe 48 MHz\uff09\u96c6\u6210\u5230\u7ecf\u5178\u7684 XIAO \u5916\u5f62\u4e2d\u3002\u8be5\u5f00\u53d1\u677f\u63d0\u4f9b 256KB Flash\u300132KB SRAM\u30018KB EEPROM\u3001USB 2.0 \u8fde\u63a5\u5668\u3001\u590d\u4f4d\u548c\u5f15\u5bfc\u6309\u94ae\u30013 \u4e2a LED\u300114 \u4f4d A/D \u8f6c\u6362\u5668\u300112 \u4f4d D/A \u8f6c\u6362\u5668\u4ee5\u53ca CAN \u603b\u7ebf\u63a5\u53e3\u3002\u914d\u5907\u4e86\u677f\u8f7d\u5145\u7535\u7535\u8def\u548c\u4f4e\u529f\u8017\u6a21\u5f0f\uff08\u4f4e\u81f3 45\u03bcA\uff09\uff0c\u975e\u5e38\u9002\u5408\u7535\u6c60\u4f9b\u7535\u7684\u5e94\u7528\u3002\u4e0e Arduino Uno R4 \u5171\u4eab\u76f8\u540c\u7684 32 \u4f4d R7FA4M1AB3CFM \u5fae\u63a7\u5236\u5668\uff0c\u5b83\u4e0e Arduino IDE \u53ca\u4e30\u5bcc\u7684 XIAO \u914d\u4ef6\u539f\u751f\u517c\u5bb9\uff0c\u662f\u7535\u5b50\u9879\u76ee\u7684\u5b8c\u7f8e\u8d77\u70b9"),(0,r.yg)("h3",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6d41\u884c\u7684\u5fae\u63a7\u5236\u5668\uff1a"),"\u91c7\u7528\u745e\u8428 RA4M1\uff0c32 \u4f4d ARM\xae Cortex\xae-M4 R7FA4M1AB3CFM MCU\uff0c\u6700\u9ad8\u8fd0\u884c\u9891\u7387 48 MHz\uff0c256 KB Flash \u5185\u5b58\u548c 32 KB SRAM\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7a81\u51fa\u677f\u8f7d\u8d44\u6e90\uff1a"),"\u914d\u5907 14 \u4f4d ADC\u300112 \u4f4d DAC\u3001CAN \u603b\u7ebf\u3001USB 2.0 \u53ca\u677f\u8f7d RGB LED\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6269\u5c55 8 \u4e2a\u65b0 IO\uff1a"),"\u4e0e\u4e4b\u524d\u7684 XIAO \u677f\u76f8\u6bd4\uff0c\u5728\u80cc\u9762\u65b0\u589e 8 \u4e2a IO \u5f15\u811a\uff08\u603b\u5171 19 \u4e2a GPIO\uff09\uff0c\u652f\u6301\u66f4\u590d\u6742\u7684\u5e94\u7528\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u5f3a\u5927\u7684\u5b89\u5168\u7279\u6027\uff1a"),"\u5185\u7f6e\u786c\u4ef6\u52a0\u5bc6\u3001\u5b89\u5168\u542f\u52a8\u3001\u5bc6\u94a5\u5b58\u50a8\u7b49\u529f\u80fd\u4ee5\u786e\u4fdd\u5e94\u7528\u5b89\u5168\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u8f6f\u4ef6\u517c\u5bb9\u6027\uff1a"),"\u4e0e Arduino IDE \u5b8c\u5168\u517c\u5bb9\uff0c\u5b9e\u73b0\u65e0\u7f1d\u7684\u9879\u76ee\u5f00\u53d1\u548c\u539f\u578b\u5236\u4f5c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u9ad8\u6548\u7535\u6e90\u8bbe\u8ba1\uff1a"),"\u63d0\u4f9b 4 \u79cd\u5de5\u4f5c\u6a21\u5f0f\uff0c\u6df1\u5ea6\u7761\u7720\u4e0b\u529f\u8017\u4f4e\u81f3 45\u03bcA\uff0c\u652f\u6301\u9502\u7535\u6c60\u5145\u7535\u7ba1\u7406\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7d27\u51d1\u7684\u62c7\u6307\u5927\u5c0f\u8bbe\u8ba1\uff1a"),"\u5c3a\u5bf8\u4e3a 21 x 17.8mm\uff0c\u91c7\u7528 Seeed Studio \u7ecf\u5178\u7684 XIAO \u5916\u5f62\uff0c\u9002\u5408\u5bf9\u7a7a\u95f4\u8981\u6c42\u8f83\u9ad8\u7684\u5e94\u7528\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u9002\u5408\u751f\u4ea7\uff1a"),"\u8868\u9762\u8d34\u88c5\u8bbe\u5907\uff08SMD\uff09\u8bbe\u8ba1\uff0c\u6240\u6709\u7ec4\u4ef6\u5747\u5728\u524d\u9762\uff0c\u4e24\u4e2a\u4fa7\u9762\u6709\u51b2\u5b54\uff0c\u4fbf\u4e8e\u9ad8\u6548\u5927\u89c4\u6a21\u751f\u4ea7\u3002")),(0,r.yg)("h3",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Product"),(0,r.yg)("th",null,"XIAO RA4M1"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("th",{rowspan:"2"},"\u5904\u7406\u5668"),(0,r.yg)("td",null,(0,r.yg)("a",{href:"https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi"},"\u745e\u8428 RA4M1"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"48-MHz Arm\xae Cortex\xae-M4 \u6838\u5fc3")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"RAM"),(0,r.yg)("td",null,"32 KB SRAM")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Flash"),(0,r.yg)("td",null,"256 KB")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"LEDs"),(0,r.yg)("td",null,"1 \u4e2a\u7528\u6237 LED\uff0c1 \u4e2a\u7535\u6e90 LED\uff0c1 \u4e2a RGB LED")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u63a5\u53e3"),(0,r.yg)("td",null,"19 \u4e2a\u5f15\u811a\uff1a14 \u4e2a\u6a21\u62df\uff0c19 \u4e2a\u6570\u5b57\uff0c2 \u4e2a IIC\uff0c2 \u4e2a UART\uff0c2 \u4e2a SPI")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u6309\u94ae"),(0,r.yg)("td",null,"1 \u4e2a\u590d\u4f4d\u6309\u94ae\uff0c1 \u4e2a\u5f15\u5bfc\u6309\u94ae")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u5b89\u5168\u6027"),(0,r.yg)("td",null,"AES128/256")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u4f4e\u529f\u8017"),(0,r.yg)("td",null,"45\u03bcA")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u8f6f\u4ef6\u517c\u5bb9\u6027"),(0,r.yg)("td",null,"Arduino IDE")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u5de5\u4f5c\u6e29\u5ea6"),(0,r.yg)("td",null,"-20\xb0C-70\xb0C")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u5c3a\u5bf8"),(0,r.yg)("td",null,"21x17.8 mm")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u7535\u6e90"),(0,r.yg)("td",null,"Type-C: 5V",(0,r.yg)("br",null),"BAT: 3.8V")))),(0,r.yg)("h3",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,r.yg)("p",null,"\u5728\u4e00\u5207\u5f00\u59cb\u4e4b\u524d\uff0c\u4e86\u89e3\u4ea7\u54c1\u7684\u4e00\u4e9b\u57fa\u672c\u53c2\u6570\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u4e0b\u8868\u63d0\u4f9b\u4e86 Seeed Studio XIAO RA4M1 \u7684\u7279\u6027\u4fe1\u606f\u3002"),(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO RA4M1 \u524d\u9762\u6307\u793a\u56fe")),(0,r.yg)("tr",null,(0,r.yg)("br",null),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png",style:{width:380,height:"auto"}})),(0,r.yg)("br",null)),(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO RA4M1 \u5f15\u811a\u5217\u8868")),(0,r.yg)("tr",null,(0,r.yg)("br",null),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png",style:{width:880,height:"auto"}})),(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,r.yg)("h3",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,r.yg)("p",null,"\u60a8\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u8bbe\u5907\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 x ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"},"Seeed Studio XIAO RA4M1")),(0,r.yg)("li",{parentName:"ul"},"1 x \u8ba1\u7b97\u5668"),(0,r.yg)("li",{parentName:"ul"},"1 x USB Type-C \u6570\u636e\u7ebf")),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u67d0\u4e9b USB \u6570\u636e\u7ebf\u53ea\u80fd\u4f9b\u7535\uff0c\u65e0\u6cd5\u4f20\u8f93\u6570\u636e\u3002\u5982\u679c\u60a8\u6ca1\u6709 USB \u6570\u636e\u7ebf\u6216\u4e0d\u786e\u5b9a\u60a8\u7684 USB \u6570\u636e\u7ebf\u662f\u5426\u53ef\u4ee5\u4f20\u8f93\u6570\u636e\uff0c\u53ef\u4ee5\u67e5\u770b  ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Seeed USB Type-C \u652f\u6301 USB 3.1"),"\u3002")),(0,r.yg)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,r.yg)("p",null,"\u63a8\u8350\u4f7f\u7528 Arduino IDE \u4f5c\u4e3a XIAO RA4M1 \u7684\u7f16\u7a0b\u5de5\u5177\uff0c\u56e0\u6b64\u5728\u8f6f\u4ef6\u51c6\u5907\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u9700\u8981\u5b8c\u6210 Arduino \u7684\u5b89\u88c5\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528 Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"}," Arduino \u5165\u95e8\u6307\u5357"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c 1 \u6b65\uff1a")," \u6839\u636e\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d\u5e76\u5b89\u88c5\u7a33\u5b9a\u7248\u672c\u7684 Arduino IDE\u3002")),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"\u4e0b\u8f7d Arduino IDE"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c 2 \u6b65\uff1a")," \u542f\u52a8 Arduino \u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c 3 \u6b65\uff1a")," \u5c06 RA4M1 \u677f\u5305\u6dfb\u52a0\u5230\u60a8\u7684 Arduino IDE\u3002"),(0,r.yg)("p",{parentName:"li"},"  \u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},"\u6587\u4ef6 > \u9996\u9009\u9879"),", \u5e76\u5728 ",(0,r.yg)("strong",{parentName:"p"},'"\u9644\u52a0\u677f\u7ba1\u7406\u5668 URLs"')," \u4e2d\u586b\u5199\u4ee5\u4e0b URL\uff1a\n",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("a",{parentName:"em",href:"https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json"},"https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json"))),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png",style:{width:800,height:"auto"}})),(0,r.yg)("p",{parentName:"li"}," \u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},"\u5de5\u5177 > \u677f > \u677f\u7ba1\u7406\u5668..."),", \u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u5173\u952e\u5b57 ",(0,r.yg)("strong",{parentName:"p"},"RA4M1")," \uff0c\u9009\u62e9\u6700\u65b0\u7248\u672c\u7684",(0,r.yg)("strong",{parentName:"p"},"Seeed Renesas Board"),"\u5e76\u5b89\u88c5\u3002"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png",style:{width:600,height:"auto"}}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c 4 \u6b65\uff1a")," \u9009\u62e9\u60a8\u7684\u677f\u548c\u7aef\u53e3\u3002"),(0,r.yg)("p",{parentName:"li"},"  \u5728 Arduino IDE \u9876\u90e8\uff0c\u60a8\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u5f00\u53d1\u677f\u4e2d\u641c\u7d22",(0,r.yg)("strong",{parentName:"p"},"xiao"),"\uff0c\u9009\u62e9 XIAO_RA4M1\uff0c\u7136\u540e\u76f4\u63a5\u9009\u62e9\u7aef\u53e3\u3002"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png",style:{width:800,height:"auto"}})))),(0,r.yg)("h2",{id:"\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f"},"\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f"),(0,r.yg)("p",null,"\u6709\u65f6\uff0c\u4f7f\u7528\u9519\u8bef\u7684\u7a0b\u5e8f\u53ef\u80fd\u5bfc\u81f4 XIAO \u5931\u53bb\u7aef\u53e3\u6216\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u5e38\u89c1\u95ee\u9898\u5305\u62ec\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"XIAO \u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c\u4f46\u672a\u627e\u5230\u7aef\u53e3\u53f7\u3002"),(0,r.yg)("li",{parentName:"ul"},"XIAO \u5df2\u8fde\u63a5\uff0c\u5e76\u4e14\u51fa\u73b0\u4e86\u7aef\u53e3\u53f7\uff0c\u4f46\u7a0b\u5e8f\u4e0a\u4f20\u5931\u8d25\u3002")),(0,r.yg)("p",null,"\u5f53\u60a8\u9047\u5230\u4e0a\u8ff0\u4e24\u79cd\u60c5\u51b5\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5c06 XIAO \u653e\u5165\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u8fd9\u53ef\u4ee5\u89e3\u51b3\u5927\u591a\u6570\u672a\u8bc6\u522b\u8bbe\u5907\u548c\u4e0a\u4f20\u5931\u8d25\u7684\u95ee\u9898\u3002\u5177\u4f53\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65b9\u6cd51\uff1a")," \u6309\u4f4f XIAO RA4M1 \u4e0a\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"BOOT")," \u6309\u94ae\uff0c\u4fdd\u6301\u4e0d\u653e\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65b9\u6cd52\uff1a")," \u6309\u4f4f ",(0,r.yg)("inlineCode",{parentName:"li"},"BOOT")," \u6309\u94ae\uff0c\u7136\u540e\u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u540e\u91ca\u653e BOOT \u6309\u94ae\u3002")),(0,r.yg)("h2",{id:"\u91cd\u7f6e"},"\u91cd\u7f6e"),(0,r.yg)("p",null,"\u5f53\u7a0b\u5e8f\u5f02\u5e38\u8fd0\u884c\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0a\u7535\u65f6\u6309\u4e00\u6b21 ",(0,r.yg)("inlineCode",{parentName:"p"},"Reset")," \u4ee5\u8ba9 XIAO \u91cd\u65b0\u6267\u884c\u4e0a\u4f20\u7684\u7a0b\u5e8f\u3002 \u5f53\u60a8\u5728\u4e0a\u7535\u65f6\u6309\u4f4f ",(0,r.yg)("inlineCode",{parentName:"p"},"BOOT")," \u952e\uff0c\u7136\u540e\u6309\u4e00\u6b21 ",(0,r.yg)("inlineCode",{parentName:"p"},"Reset")," \u952e\u65f6\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u5165\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f\u3002"),(0,r.yg)("h2",{id:"\u8fd0\u884c\u60a8\u7684\u7b2c\u4e00\u4e2a\u95ea\u70c1\u7a0b\u5e8f"},"\u8fd0\u884c\u60a8\u7684\u7b2c\u4e00\u4e2a\u95ea\u70c1\u7a0b\u5e8f"),(0,r.yg)("p",null,"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u6211\u76f8\u4fe1\u60a8\u5bf9 XIAO RA4M1 \u7684\u7279\u6027\u548c\u786c\u4ef6\u6709\u4e86\u5f88\u597d\u7684\u4e86\u89e3\u3002\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u4ee5\u6700\u7b80\u5355\u7684\u95ea\u70c1\u7a0b\u5e8f\u4e3a\u4f8b\uff0c\u8fdb\u884c XIAO RA4M1 \u7684\u7b2c\u4e00\u6b21\u95ea\u70c1\uff01"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65\uff1a")," \u542f\u52a8 Arduino \u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65\uff1a")," \u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},"\u6587\u4ef6 > \u793a\u4f8b > 01.\u57fa\u7840 > Blink"),"\uff0c\u6253\u5f00\u7a0b\u5e8f\u3002"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png",style:{width:700,height:"auto"}}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65\uff1a")," \u9009\u62e9\u5f00\u53d1\u677f\u578b\u53f7\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"XIAO RA4M1"),"\uff0c\u5e76\u9009\u62e9\u6b63\u786e\u7684\u7aef\u53e3\u53f7\u4ee5\u4e0a\u4f20\u7a0b\u5e8f\u3002"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png",style:{width:700,height:"auto"}})))),(0,r.yg)("p",null,"\u7a0b\u5e8f\u6210\u529f\u4e0a\u4f20\u540e\uff0c\u60a8\u5c06\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\u6d88\u606f\uff0c\u5e76\u53ef\u4ee5\u89c2\u5bdf\u5230 XIAO RA4M1 \u53f3\u4fa7\u7684\u6a59\u8272 LED \u6b63\u5728\u95ea\u70c1\u3002"),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif",style:{width:700,height:"auto"}})),(0,r.yg)("p",null,"\u606d\u559c\u60a8\uff01\u60a8\u5df2\u7ecf\u6210\u529f\u638c\u63e1\u4e86\u5982\u4f55\u4f7f\u7528 XIAO RA4M1 \u5f00\u53d1\u677f\uff01"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u5f53 XIAO RA4M1 \u4e0a\u7684\u7528\u6237 LED \u5f15\u811a\u8bbe\u7f6e\u4e3a\u9ad8\u7535\u5e73\u65f6\uff0cLED \u624d\u4f1a\u7184\u706d\uff0c\u800c\u5f53\u5f15\u811a\u8bbe\u7f6e\u4e3a\u4f4e\u7535\u5e73\u65f6\uff0cLED \u624d\u4f1a\u4eae\u8d77\u3002")),(0,r.yg)("h2",{id:"\u73a9\u8f6c-rgb-led"},"\u73a9\u8f6c RGB LED"),(0,r.yg)("p",null,"XIAO RA4M1 \u914d\u5907\u4e86\u5185\u7f6e RGB LED\uff0c\u60a8\u53ef\u4ee5\u63a7\u5236\u5b83\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5982\u4f55\u5e73\u6ed1\u5730\u5728\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u4e4b\u95f4\u5207\u6362 LED \u989c\u8272\u7684\u793a\u4f8b\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65\uff1a")," \u4e0b\u8f7d ",(0,r.yg)("inlineCode",{parentName:"li"},"Adafruit_NeoPixel")," \u5e93")),(0,r.yg)("p",null,"Navigate to ",(0,r.yg)("strong",{parentName:"p"},"Sketch > Include Liarbry > Manage Libraries..."),", and search ",(0,r.yg)("strong",{parentName:"p"},"Adafruit_NeoPixel"),", install the lastest version."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65\uff1a")," \u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5230\u65b0\u7684\u8349\u56fe\u4e2d\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Adafruit_NeoPixel.h>\n\n#define LED_PIN RGB_BUILTIN  // \u5b9a\u4e49\u5185\u7f6e RGB LED \u7684\u5f15\u811a\n#define NUM_PIXELS 1         // WS2812 LED \u7684\u6570\u91cf\n\nAdafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  pinMode(PIN_RGB_EN, OUTPUT); // \u8bbe\u7f6e\u7535\u6e90\u5f15\u811a\n  digitalWrite(PIN_RGB_EN, HIGH); // \u6253\u5f00 LED \u7535\u6e90\n  pixels.begin();  // \u521d\u59cb\u5316 NeoPixel \u5e93\n}\n\nvoid loop() {\n    // \u4ece\u7ea2\u8272\u8fc7\u6e21\u5230\u7eff\u8272\n  for (int i = 0; i <= 255; i++) {\n    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // \u7ea2\u8272\u51cf\u5c11\uff0c\u7eff\u8272\u589e\u52a0\n    pixels.show();\n    delay(10);  // \u8c03\u6574\u5ef6\u8fdf\u4ee5\u5b9e\u73b0\u5e73\u6ed1\u8fc7\u6e21\n  }\n\n  // \u4ece\u7eff\u8272\u8fc7\u6e21\u5230\u84dd\u8272\n  for (int i = 0; i <= 255; i++) {\n    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // \u7eff\u8272\u51cf\u5c11\uff0c\u84dd\u8272\u589e\u52a0\n    pixels.show();\n    delay(10);  // \u8c03\u6574\u5ef6\u8fdf\u4ee5\u5b9e\u73b0\u5e73\u6ed1\u8fc7\u6e21\n  }\n\n  // \u4ece\u84dd\u8272\u8fc7\u6e21\u5230\u7ea2\u8272\n  for (int i = 0; i <= 255; i++) {\n    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // \u84dd\u8272\u51cf\u5c11\uff0c\u7ea2\u8272\u589e\u52a0\n    pixels.show();\n    delay(10);  // \u8c03\u6574\u5ef6\u8fdf\u4ee5\u5b9e\u73b0\u5e73\u6ed1\u8fc7\u6e21\n  }\n}\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u4e09\u6b65\uff1a")," \u9009\u62e9\u5f00\u53d1\u677f\u578b\u53f7\u4e3a  ",(0,r.yg)("strong",{parentName:"li"},"XIAO RA4M1"),"\uff0c\u5e76\u9009\u62e9\u6b63\u786e\u7684\u7aef\u53e3\u53f7\u4ee5\u4e0a\u4f20\u7a0b\u5e8f\u3002")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif",style:{width:600,height:"auto"}})),(0,r.yg)("h2",{id:"\u7535\u6c60\u4e0e\u7535\u6e90\u7ba1\u7406"},"\u7535\u6c60\u4e0e\u7535\u6e90\u7ba1\u7406"),(0,r.yg)("p",null,"\u662f\u5426\u53ef\u4ee5\u5728\u6ca1\u6709\u989d\u5916\u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\u8bfb\u53d6\u7535\u6c60\u7535\u538b\uff1f\u53ef\u4ee5\uff0c\u4f7f\u7528 XIAO RA4M1\uff0c\u6bd4\u4ee5\u5f80\u66f4\u7b80\u5355\u3002\u5728\u4e4b\u524d\u7684 XIAO \u7cfb\u5217\u4ea7\u54c1\u4e2d\uff0c\u4f8b\u5982 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage"},"XIAO ESP32C3"),", \u8bfb\u53d6\u7535\u6c60\u7535\u538b\u9700\u8981\u624b\u52a8\u8fde\u63a5\u5230 A0 \u5e76\u4f7f\u7528\u7535\u963b\u3002"),(0,r.yg)("p",null,"\u4f46\u5728 XIAO RA4M1 \u4e2d\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u7b80\u5316\u4e86\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"BAT_DET_PIN/P105")," \u5f15\u811a\u8bfb\u53d6\u7535\u6c60\u7535\u538b\u6c34\u5e73\uff0c\u7b80\u5316\u4e86\u8bbe\u8ba1\u548c\u5f00\u53d1\u3002\u53ea\u9700\u8bb0\u5f97\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"BAT_READ_EN/P400")," \u5f15\u811a\u8bbe\u7f6e\u4e3a\u9ad8\u7535\u5e73\uff0c\u56e0\u4e3a\u8fd9\u5bf9\u4e8e\u542f\u7528\u7535\u6c60\u7535\u538b\u8bfb\u53d6\u662f\u5fc5\u8981\u7684\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65\uff1a")," \u786c\u4ef6\u51c6\u5907")),(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Seeed Studio XIAO RA4M1"),(0,r.yg)("th",null,"Seeed Studio XIAO \u6269\u5c55\u57fa\u677f\u4e0e Grove OLED")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg",style:{width:500,height:"auto"}}))),(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",style:{width:500,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u83b7\u53d6 \ud83d\uddb1\ufe0f")))))),(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u83b7\u53d6 \ud83d\uddb1\ufe0f")))))))),(0,r.yg)("p",null,"XIAO \u6269\u5c55\u57fa\u677f\u4e0a\u7684 OLED \u663e\u793a\u5668\u4f7f\u7528 I2C \u534f\u8bae\uff0c\u5e76\u901a\u8fc7\u677f\u4e0a\u7684 I2C \u7535\u8def\u8fde\u63a5\u5230 XIAO \u7684 I2C \u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5c06 XIAO \u63d2\u5165\u6269\u5c55\u57fa\u677f\uff0c\u5e76\u7f16\u7a0b\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u5185\u5bb9\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65\uff1a")," \u5b89\u88c5 u8g2 \u5e93\u3002")),(0,r.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"github_item",href:"https://github.com/olikraus/U8g2_Arduino"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d\u5e93")))," ",(0,r.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,r.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Copy the code and stick on the Ardiono IDE.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8x8lib.h>\n#include <Wire.h>\n\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* \u65f6\u949f\u5f15\u811a=*/ WIRE_SCL_PIN, /* \u6570\u636e\u5f15\u811a=*/ WIRE_SDA_PIN, /* \u91cd\u7f6e\u5f15\u811a=*/ U8X8_PIN_NONE);   // \u6ca1\u6709\u663e\u793a\u91cd\u7f6e\u7684 OLED\n\n#define enablePin  BAT_READ_EN  // \u542f\u7528\u7535\u6c60\u7535\u538b\u8bfb\u53d6\u7684\u5f15\u811a\n#define adcPin BAT_DET_PIN     // \u6a21\u62df\u8f93\u5165\u5f15\u811a\uff08\u5728\u60a8\u7684\u60c5\u51b5\u4e0b\u662f GPIO29\uff09\nconst float referenceVoltage = 3.3;  // ADC \u7684\u53c2\u8003\u7535\u538b\nconst float voltageDivider = 2.0;    // \u7535\u538b\u5206\u538b\u7cfb\u6570\n\nvoid setup() {\n  Serial.begin(9600);          // \u4ee5 9600 \u6ce2\u7279\u7387\u521d\u59cb\u5316\u4e32\u53e3\u901a\u4fe1\n  pinMode(enablePin, OUTPUT);  // \u5c06\u542f\u7528\u5f15\u811a\u8bbe\u7f6e\u4e3a\u8f93\u51fa\n  digitalWrite(enablePin, HIGH); // \u5c06\u5f15\u811a\u8bbe\u7f6e\u4e3a\u9ad8\u7535\u5e73\u4ee5\u542f\u7528\u7535\u6c60\u7535\u538b\u8bfb\u53d6\n  u8x8.begin();\n  u8x8.setFlipMode(1);   // \u8bbe\u7f6e\u65cb\u8f6c\u6a21\u5f0f\uff0c\u503c\u4e3a 1 \u5230 3\uff0c\u5c4f\u5e55\u5185\u5bb9\u5c06\u65cb\u8f6c 180 \u5ea6\n  u8x8.setFont(u8x8_font_chroma48medium8_r);\n}\n\nvoid loop() {\n  int rawValue = analogRead(adcPin);    // \u8bfb\u53d6\u6a21\u62df\u8f93\u5165\u503c\n  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // \u8ba1\u7b97\u7535\u538b\n  // \u6253\u5370\u539f\u59cb\u503c\u548c\u8ba1\u7b97\u5f97\u5230\u7684\u7535\u538b\n  u8x8.setCursor(0, 0);\n  u8x8.print("\u539f\u59cb\u503c:0x");\n  u8x8.print(rawValue, HEX);\n  u8x8.setCursor(0, 2);\n  u8x8.print("\u7535\u538b:");\n  u8x8.print(voltage, 2);\n  u8x8.print("V");\n\n  delay(500); // \u5ef6\u8fdf 500 \u6beb\u79d2\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7b2c\u56db\u6b65\uff1a")," \u9009\u62e9\u5f00\u53d1\u677f\u578b\u53f7\u4e3a ",(0,r.yg)("strong",{parentName:"li"},"XIAO RA4M1"),"\uff0c\u5e76\u9009\u62e9\u6b63\u786e\u7684\u7aef\u53e3\u53f7\u4ee5\u4e0a\u4f20\u7a0b\u5e8f")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png",style:{width:600,height:"auto"}})),(0,r.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet"},"RA4M1 \u6570\u636e\u624b\u518c")),(0,r.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf"},"Seeed Studio XIAO RA4M1 \u539f\u7406\u56fe")),(0,r.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,r.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH%26PCB_v1.0_240719.zip"},"KiCAD \u5e93"))),(0,r.yg)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.yg)("h3",{id:"q1-\u710a\u63a5\u5f15\u811a\u65f6\u6211\u5e94\u8be5\u6ce8\u610f\u4ec0\u4e48"},"Q1: \u710a\u63a5\u5f15\u811a\u65f6\u6211\u5e94\u8be5\u6ce8\u610f\u4ec0\u4e48\uff1f"),(0,r.yg)("p",null,"\u7531\u4e8e XIAO RA4M1 \u7684\u5fae\u578b\u5c3a\u5bf8\uff0c\u710a\u63a5\u5f15\u811a\u65f6\u8bf7\u5c0f\u5fc3\uff0c\u907f\u514d\u4e0d\u540c\u5f15\u811a\u7c98\u8fde\u5728\u4e00\u8d77\uff0c\u4e5f\u4e0d\u8981\u5c06\u710a\u9521\u7c98\u5728\u5c4f\u853d\u6216\u5176\u4ed6\u7ec4\u4ef6\u4e0a\u3002\u5426\u5219\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4 XIAO \u77ed\u8def\u6216\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9020\u6210\u7684\u540e\u679c\u5c06\u7531\u7528\u6237\u81ea\u884c\u627f\u62c5\u3002"),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u83b7\u5f97\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);