"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12306],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),d=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=d(t),c=n,u=y["".concat(o,".").concat(c)]||y[c]||g[c]||i;return t?r.createElement(u,s(s({ref:a},p),{},{components:t})):r.createElement(u,s({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[y]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53394:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(9668),n=(t(96540),t(15680));const i={description:"Hardware Interface",title:"Hardware Interface",keywords:["Edge","reCamera"],image:"https://files.seeedstudio.com/wiki/reCamera/image.webp",slug:"/reCamera_hardware_interface",last_update:{date:"11/11/2024",author:"Parker Hu"}},s="reCamera Overview",l={unversionedId:"Edge/reCamera/reCamera 2002 Series/product_overview/reCamera_hardware_overview",id:"Edge/reCamera/reCamera 2002 Series/product_overview/reCamera_hardware_overview",title:"Hardware Interface",description:"Hardware Interface",source:"@site/docs/Edge/reCamera/reCamera 2002 Series/product_overview/reCamera_hardware_overview.md",sourceDirName:"Edge/reCamera/reCamera 2002 Series/product_overview",slug:"/reCamera_hardware_interface",permalink:"/reCamera_hardware_interface",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reCamera/reCamera 2002 Series/product_overview/reCamera_hardware_overview.md",tags:[],version:"current",lastUpdatedBy:"Parker Hu",lastUpdatedAt:1731283200,formattedLastUpdatedAt:"Nov 11, 2024",frontMatter:{description:"Hardware Interface",title:"Hardware Interface",keywords:["Edge","reCamera"],image:"https://files.seeedstudio.com/wiki/reCamera/image.webp",slug:"/reCamera_hardware_interface",last_update:{date:"11/11/2024",author:"Parker Hu"}},sidebar:"ProductSidebar",previous:{title:"Product Overview",permalink:"/recamera_product_overview"},next:{title:"Overview of AI model Deployment",permalink:"/recamera_ai_model_deployment"}},o={},d=[{value:"Feature",id:"feature",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Interface Overview",id:"interface-overview",level:2},{value:'<span id="jump1"> Camera </span>',id:"-camera-",level:2},{value:"Flow Export",id:"flow-export",level:3},{value:'<span id="jump2">Light</span>',id:"light",level:2},{value:'<span id="jump3">Mic &amp;&amp; Speaker</span>',id:"mic--speaker",level:2},{value:'<span id="jump4">WIFI</span>',id:"wifi",level:2},{value:'<span id="jump5">SD Card</span>',id:"sd-card",level:2},{value:'<span id="jump6">Uart (Debug)</span>',id:"uart-debug",level:2},{value:'<span id="jump7">User Button</span>',id:"user-button",level:2},{value:"Partlist",id:"partlist",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},y="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"recamera-overview"},"reCamera Overview"),(0,n.yg)("p",null,"reCamera is an open-source and tiny AI camera, programmable and customizable, powered by RISC-V SoC, delivering\non-device 1 TOPS AI performance with video encoding 5MP @30 FPS. The modular hardware design and expandable\ninterfaces offer the most verstile platform for developers building vision AI systems."),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("table",{style:{width:"72.2022%"}},(0,n.yg)("tbody",null,(0,n.yg)("tr",null),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"35.3932%"},colspan:"2",rowspan:"1",width:"208"},(0,n.yg)("p",null,(0,n.yg)("strong",null,(0,n.yg)("span",{"data-font-family":'"Source Sans Pro", sans-serif'},"reCamera 2002 Series")))),(0,n.yg)("td",{style:{width:"28.7153%"},colspan:"1",rowspan:"1",width:"169"},(0,n.yg)("p",null,(0,n.yg)("strong",null,(0,n.yg)("span",{"data-font-family":'"Source Sans Pro", sans-serif'},"reCamera 2002")))),(0,n.yg)("td",{style:{width:"35.7271%"},colspan:"1",rowspan:"1",width:"210"},(0,n.yg)("p",null,(0,n.yg)("strong",null,(0,n.yg)("span",{"data-font-family":'"Source Sans Pro", sans-serif'},"reCamera 2002w"))))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"16.528%"},colspan:"1",rowspan:"6",width:"97"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Processor System"))),(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Al Performance"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"1TOPS@Int8")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"SOC"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"SG2002")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"CPU"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"C906@1GHz + C906@700MHz")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"MCU"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"8051@8KB SRAM")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Memory"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"256MB")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Video Encode"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"5MP @ 30Fps")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"35.3932%"},colspan:"2",rowspan:"1",width:"208"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Camera Sensor"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"OV5647")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"16.528%"},colspan:"1",rowspan:"2",width:"97"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Storage"))),(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"eMMC"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"(version1) 8GB (version2) 64GB")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Expansion"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"removable TF card (up to 2TB, not included)")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"16.528%"},colspan:"1",rowspan:"6",width:"97"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"I/O"))),(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Ethernet"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"100Mbps")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Wireless"))),(0,n.yg)("td",{style:{width:"28.7153%"},colspan:"1",rowspan:"1",width:"169"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"/"))),(0,n.yg)("td",{style:{width:"35.7271%"},colspan:"1",rowspan:"1",width:"210"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"WIFI2.4G/5G BT4.2/5.0")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"USB"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"USB Type-C(2.0)")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Button"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"1 Reset Button, 1 Boot Button")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Fill Light"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"0.3w White Light")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Status Light"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"1 Power Indicator, 2 IO Programmable")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"16.528%"},colspan:"1",rowspan:"2",width:"97"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Audio"))),(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Mic"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"On-board Mic")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"18.8653%"},colspan:"1",rowspan:"1",width:"111"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Speaker"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"External Speaker")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"35.3932%"},colspan:"2",rowspan:"1",width:"208"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Dimension"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"40x40x36.5mm")))),(0,n.yg)("tr",null,(0,n.yg)("td",{style:{width:"35.3932%"},colspan:"2",rowspan:"1",width:"208"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"Montserrat"},"Power"))),(0,n.yg)("td",{style:{width:"64.4424%"},colspan:"2",rowspan:"1",width:"379"},(0,n.yg)("p",null,(0,n.yg)("span",{"data-font-family":"default"},"5V 1A")))))),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("h2",{id:"interface-overview"},"Interface Overview"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump1"},"Camera")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump2"},"Light")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump3"},"Mic && Speaker")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump4"},"WIFI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump5"},"SD Card")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump6"},"Uart (Debug)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#jump7"},"User Button"))),(0,n.yg)("h2",{id:"-camera-"},(0,n.yg)("span",{id:"jump1"}," Camera ")),(0,n.yg)("p",null,"Regarding the camera call, we have adapted node for recamera, you can get the camera's image data in node-red."),(0,n.yg)("br",null),"Connect the recamera to your computer using **type-c** and access node-red by visiting `192.168.42.1:1880`. You can also access node-red from your recamera network on port `LocalIP:1880` after the recamera is connected.",(0,n.yg)("br",null),"After the image configuration, you can get the camera's base64 image data and the RTSP's H.264 image push data.",(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image.png"})),(0,n.yg)("p",null,"By accessing ",(0,n.yg)("inlineCode",{parentName:"p"},"rtsp://192.168.42.1:554/live")," to see the h.264 video stream"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-1.png"})),(0,n.yg)("h3",{id:"flow-export"},"Flow Export"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'[{"id":"86fe9b81.31c418","type":"http request","z":"fafa85fb.98fd68","name":"","method":"GET","ret":"bin","paytoqs":false,"url":"http://192.168.178.21/tmpfs/snap.jpg?usr=admin&pwd=instar","tls":"","proxy":"","authType":"","x":265,"y":343,"wires":[["4068ec45.05b034"]]},{"id":"54d0ea94.c1b9a4","type":"ui_template","z":"fafa85fb.98fd68","group":"73b331f4.a8bda","name":"Display image","order":1,"width":"6","height":"6","format":"\\n<img alt=\\"HTTP Snap\\" src=\\"data:image/jpg;base64,{{msg.payload}}\\" />\\n","storeOutMessages":true,"fwdInMessages":true,"templateScope":"local","x":575.3645515441895,"y":343.6041603088379,"wires":[[]]},{"id":"4068ec45.05b034","type":"base64","z":"fafa85fb.98fd68","name":"","action":"","property":"payload","x":415,"y":343,"wires":[["54d0ea94.c1b9a4"]]},{"id":"3fa57e6a.6819f2","type":"inject","z":"fafa85fb.98fd68","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":115,"y":343,"wires":[["86fe9b81.31c418"]]},{"id":"73b331f4.a8bda","type":"ui_group","z":"","name":"HTTP Snap","tab":"d75e440d.a22678","disp":true,"width":"6","collapse":false},{"id":"d75e440d.a22678","type":"ui_tab","z":"fafa85fb.98fd68","name":"Cameras","icon":"camera_alt","order":2}]\n')),(0,n.yg)("h2",{id:"light"},(0,n.yg)("span",{id:"jump2"},"Light")),(0,n.yg)("p",null,"There are four indicators on the recamera, three of which are controllable indicators and the ",(0,n.yg)("strong",{parentName:"p"},"green")," indicator is the power indicator.\nAmong them, there are four ",(0,n.yg)("strong",{parentName:"p"},"white")," lights, which are the fill lights of the camera.\n",(0,n.yg)("strong",{parentName:"p"},"Red")," is the status indicator of the CPU and ",(0,n.yg)("strong",{parentName:"p"},"blue")," is the reading status indicator of the system emmc."),(0,n.yg)("br",null),"The switch of the fill light and the red and blue indicator lights can be controlled by the following instructions.",(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on\necho 0 > /sys/devices/platform/leds/leds/white/brightness //light off\n\necho 1 > /sys/devices/platform/leds/leds/red/brightness //red indicator\necho 0 > /sys/devices/platform/leds/leds/red/brightness \n\necho 1 > /sys/devices/platform/leds/leds/blue/brightness //blue indicator\necho 0 > /sys/devices/platform/leds/leds/blue/brightness \n")),(0,n.yg)("h2",{id:"mic--speaker"},(0,n.yg)("span",{id:"jump3"},"Mic && Speaker")),(0,n.yg)("p",null,"The recamera has a microphone and a speaker. You can invoke the microphone and speaker by following the command. The recamera can play audio files in ",(0,n.yg)("strong",{parentName:"p"},"wav")," format."),(0,n.yg)("p",null,"The default format of the player is: 16bit bitrate; The sampling rate is 16,000"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio\n\nsudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio\n")),(0,n.yg)("h2",{id:"wifi"},(0,n.yg)("span",{id:"jump4"},"WIFI")),(0,n.yg)("p",null,"The wifi of recamera is AP+STA dual mode, which can be used to configure the device\nnetwork or configure the device in AP mode."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"SSID")," of wifi in AP mode is: ",(0,n.yg)("inlineCode",{parentName:"p"},"reCamera_+ the last six bits of MAC"),"."),(0,n.yg)("br",null),"The **Passwd** of wifi in AP mode is: `12345678`.",(0,n.yg)("br",null),"The ssid and passwd of the WiFi_AP can be configured in the /etc/hostapd_2g4.conf file on the recamera system.",(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-2.png"})),(0,n.yg)("p",null,"The reCamera STA configuration file is in ",(0,n.yg)("strong",{parentName:"p"},"/etc/wpa_supplicant.conf"),", where you configure the WiFi account and password to connect to.\nIn STA mode, please connect to WiFi in ",(0,n.yg)("strong",{parentName:"p"},"5G")," band."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-3.png"})),(0,n.yg)("p",null,"In the terminal, you can scan and connect to WiFi with the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'wpa_cli -i wlan0 scan                           #Start a scan\n\nwpa_cli -i wlan0 scan_results                   #Returns wifi scan results\n\nwpa_cli add_network                             # Adding a new network,Returns a network ID\nwpa_cli set_network ID ssid "your_wifi_name"    # set network SSID\nwpa_cli set_network ID psk "your_wifi_password" # set network passwd\nwpa_cli enable_network ID                       # enable network and connect\nwpa_cli status                                  # Checking connection status\n')),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-4.png"})),(0,n.yg)("h2",{id:"sd-card"},(0,n.yg)("span",{id:"jump5"},"SD Card")),(0,n.yg)("p",null,"The SD card slot can expand the storage space of the recamera. After inserting the SD card, you can find the existence of your SD by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"lsblk")," command."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-5.png"})),(0,n.yg)("p",null,"Once you have found a storage device like mmcblk1p1, you can mount it to your system using the following command."),(0,n.yg)("br",null),(0,n.yg)("p",null,"Note that recamera only recognizes ",(0,n.yg)("strong",{parentName:"p"},"ext4")," filesystems."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted\n/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"\n\nsudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4\nmkdir /userdata/mmcblk1 #Create a mount file\nsudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path\n')),(0,n.yg)("p",null,"Check the mount result by ",(0,n.yg)("inlineCode",{parentName:"p"},"lsblk")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-6.png"})),(0,n.yg)("h2",{id:"uart-debug"},(0,n.yg)("span",{id:"jump6"},"Uart (Debug)")),(0,n.yg)("p",null,"The base circuit board of the recamera has three contacts tx,rx, and gnd, which serve as the debug serial port of the recamera."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reCamera/image-7.png"})),(0,n.yg)("p",null,"The device has a serial port baud rate of 115200 and can log into the recamera system."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-8.png"})),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-9.png"})),(0,n.yg)("h2",{id:"user-button"},(0,n.yg)("span",{id:"jump7"},"User Button")),(0,n.yg)("p",null,"The reCamera's usr button can be customized by the user."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reCamera/image-10.png"})),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'echo "510" > /sys/class/gpio/export\necho "in" > /sys/class/gpio/gpio510/direction #Enable the input mode\ncat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed\n')),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reCamera/image-11.png"})),(0,n.yg)("h2",{id:"partlist"},"Partlist"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Item"),(0,n.yg)("th",{parentName:"tr",align:null},"Quantity"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"reCamera 2002 Series"),(0,n.yg)("td",{parentName:"tr",align:null},"x1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"USB type-C Cable"),(0,n.yg)("td",{parentName:"tr",align:null},"x1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ethernet Cable"),(0,n.yg)("td",{parentName:"tr",align:null},"x1")))),(0,n.yg)("p",null,"//## Accessories List"),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);