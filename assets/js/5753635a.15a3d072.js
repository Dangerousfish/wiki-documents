"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87004],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,c=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return r?a.createElement(c,o(o({ref:t},d),{},{components:r})):a.createElement(c,o({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(9668),n=(r(96540),r(15680));const i={description:"Overview",title:"Getting Started with Seeed Studio XIAO RP2040",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",slug:"/XIAO-RP2040",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Getting Started with Seeed Studio XIAO RP2040",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040",title:"Getting Started with Seeed Studio XIAO RP2040",description:"Overview",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/XIAO-RP2040",permalink:"/XIAO-RP2040",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Overview",title:"Getting Started with Seeed Studio XIAO RP2040",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",slug:"/XIAO-RP2040",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio XIAO MG24 Example - Matter",permalink:"/xiao_mg24_matter"},next:{title:"Arduino",permalink:"/XIAO-RP2040-with-Arduino"}},s={},p=[{value:"<strong>Features</strong>",id:"features",level:2},{value:"<strong>Specification</strong>",id:"specification",level:2},{value:"<strong>Hardware Overview</strong>",id:"hardware-overview",level:2},{value:"<strong>Enter Bootloader Mode</strong>",id:"enter-bootloader-mode",level:3},{value:"<strong>Reset</strong>",id:"reset",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Course Resources",id:"course-resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"getting-started-with-seeed-studio-xiao-rp2040"},"Getting Started with Seeed Studio XIAO RP2040"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"The Seeed Studio XIAO RP2040 is as small as the Seeed Studio XIAO SAMD21 but it's more powerful. On one hand, it carries the powerful Dual-core RP2040 processor that can flexible clock running up to 133 MHz which is a low-power microcontrollers. On the Seeed Studio XIAO RP2040 there is also 264KB of SRAM, and 2MB of on-board Flash memory which can provide more program to save and run. On the other hand, this little board has good performance in processing but needs less power.",(0,n.yg)("br",{parentName:"p"}),"\n","All in all, it is designed in a tiny size as small as a thumb(21x17.8mm) and can be used for wearable devices and small projects."),(0,n.yg)("p",null,"There are 14 GPIO PINs on Seeed Studio XIAO RP2040, on which there are 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface."),(0,n.yg)("p",null,"Seeed Studio XIAO RP2040 is compatible to the Seeed Studio XIAO expansion board. "),(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.yg)("h2",{id:"features"},(0,n.yg)("strong",{parentName:"h2"},"Features")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Powerful MCU: Dual-core ARM Cortex M0+ processor, flexible clock running up to 133 MHz"),(0,n.yg)("li",{parentName:"ul"},"Rich on-chip resources: 264KB of SRAM, and 2MB of on-board Flash memory"),(0,n.yg)("li",{parentName:"ul"},"Flexible compatibility: Support Micropython/Arduino/CircuitPython"),(0,n.yg)("li",{parentName:"ul"},"Easy project operation: Breadboard-friendly & SMD design, no components on the back"),(0,n.yg)("li",{parentName:"ul"},"Small size: As small as a thumb(21x17.8mm) for wearable devices and small projects."),(0,n.yg)("li",{parentName:"ul"},"Multiple interfaces: 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface.")),(0,n.yg)("h2",{id:"specification"},(0,n.yg)("strong",{parentName:"h2"},"Specification")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Item"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"CPU"),(0,n.yg)("td",{parentName:"tr",align:null},"Dual-core ARM Cortex M0+ processor up to 133MHz")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Flash Memory"),(0,n.yg)("td",{parentName:"tr",align:null},"2MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SRAM"),(0,n.yg)("td",{parentName:"tr",align:null},"264KB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,n.yg)("td",{parentName:"tr",align:null},"11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Analog I/O Pins"),(0,n.yg)("td",{parentName:"tr",align:null},"4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"PWM Pins"),(0,n.yg)("td",{parentName:"tr",align:null},"11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"I2C interface"),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SPI interface"),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"UART interface"),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Power supply and downloading interface"),(0,n.yg)("td",{parentName:"tr",align:null},"Type-C")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Power"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3V/5V DC")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.yg)("td",{parentName:"tr",align:null},"21\xd717.8\xd73.5mm")))),(0,n.yg)("h2",{id:"hardware-overview"},(0,n.yg)("strong",{parentName:"h2"},"Hardware Overview")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"For general I/O pins:\nWorking voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V ."),(0,n.yg)("p",{parentName:"admonition"},"For power supply pins:\nThe built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN."),(0,n.yg)("p",{parentName:"admonition"},"XIAO RP2040 currently only supports battery power supply and cannot connect to Type-C while a battery is connected, as it may pose a safety risk."),(0,n.yg)("p",{parentName:"admonition"},"Please pay attention to use, do not lift the shield cover.")),(0,n.yg)("h3",{id:"enter-bootloader-mode"},(0,n.yg)("strong",{parentName:"h3"},"Enter Bootloader Mode")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO RP2040 port may disappear when user programming process fails. we can solve this problem by the following operation: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Long press the "B" button.'),(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO PR2040 to your computer."),(0,n.yg)("li",{parentName:"ul"},"The computer will appear a disk driver.")),(0,n.yg)("p",null,"At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps."),(0,n.yg)("h3",{id:"reset"},(0,n.yg)("strong",{parentName:"h3"},"Reset")),(0,n.yg)("p",null,"If you want to reset the Seeed Studio XIAO RP2040, perform the following steps:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO RP2040 to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "R" pins ',(0,n.yg)("strong",{parentName:"li"},"once"),".")),(0,n.yg)("p",null,"Please note: The behavior of the built-in programmable Single-colour LEDs (They are red, blue and green) are reversed to the one on an Arduino. On the Seeed Studio XIAO RP2040, the pin has to be pulled low to enable."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf"},"RP2040 datasheet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf"},"Seeed Studio XIAO RP2040 Schematic")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[Ebook]")," ",(0,n.yg)("a",{parentName:"p",href:"https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/"},"XIAO: Big Power, Small Board Mastering Arduino and TinyML"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip"},"Seeed Studio XIAO RP2040 KiCAD file"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip"},"Seeed Studio XIAO RP2040 Eagle file"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[DXF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip"},"Seeed Studio XIAO RP2040 Dimension in DXF"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[LBR]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr"},"Seeed Studio XIAO RP2040 Eagle footprint"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[XLSX]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx"},"Seeed Studio XIAO RP2040 pinout sheet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[STEP]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip"},"Seeed Studio XIAO RP2040 3D Model"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Certification.zip"},"Seeed Studio XIAO RP2040 Certification files")))),(0,n.yg)("h2",{id:"course-resources"},"Course Resources"),(0,n.yg)("div",{align:"middle"},(0,n.yg)("img",{width:"400",src:"https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Ebook]")," ",(0,n.yg)("a",{parentName:"li",href:"https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/"},"XIAO: Big Power, Small Board Mastering Arduino and TinyML"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);