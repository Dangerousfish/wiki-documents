"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29666],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(9668),o=(n(96540),n(15680));const i={description:"This article provides a getting-started guide for the reComputer Mini (based on the NVIDIA Jetson Orin platform), including the device's specifications and the steps for initial setup and configuration.",title:"Getting Started with reComputer Mini",keywords:["reComputer","reComputer mini","embedded computer","robots"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_jetson_mini_getting_started",last_update:{date:"12/11/2024",author:"Youjiang"}},a="Getting Started with reComputer Mini",s={unversionedId:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started",id:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started",title:"Getting Started with reComputer Mini",description:"This article provides a getting-started guide for the reComputer Mini (based on the NVIDIA Jetson Orin platform), including the device's specifications and the steps for initial setup and configuration.",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini",slug:"/recomputer_jetson_mini_getting_started",permalink:"/recomputer_jetson_mini_getting_started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1733875200,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{description:"This article provides a getting-started guide for the reComputer Mini (based on the NVIDIA Jetson Orin platform), including the device's specifications and the steps for initial setup and configuration.",title:"Getting Started with reComputer Mini",keywords:["reComputer","reComputer mini","embedded computer","robots"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_jetson_mini_getting_started",last_update:{date:"12/11/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"reComputer Industrial J40, J30 Hardware and Interfaces Usage",permalink:"/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage"},next:{title:"reComputer Mini Hardware and Interfaces Usage",permalink:"/recomputer_jetson_mini_hardware_interfaces_usage"}},l={},p=[{value:"Flash JetPack OS",id:"flash-jetpack-os",level:2},{value:"Supported Nvidia Jetson Module",id:"supported-nvidia-jetson-module",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Prepare the Jetpack Image",id:"prepare-the-jetpack-image",level:3},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:3},{value:"Flash to Jetson with Single Command.",id:"flash-to-jetson-with-single-command",level:3},{value:"Flash to Jetson Step by Step",id:"flash-to-jetson-step-by-step",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"getting-started-with-recomputer-mini"},"Getting Started with reComputer Mini"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"})),(0,o.yg)("p",null,"reComputer mini series built with Jetson Orin is a powerful and compact intelligent edge box to bring up to 100TOPS modern AI performance to the edge. While combining the NVIDIA Ampere\u2122 GPU architecture with 64-bit operating capability.\nreComputer mini J30/40 is preinstalled with Jetpack 6.0, simplifies development, and fits for deployment for edge AI solution providers working in robotics, video analytics, and AI agent across industries of smart cities, security, industrial automation, smart factories."),(0,o.yg)("h2",{id:"flash-jetpack-os"},"Flash JetPack OS"),(0,o.yg)("p",null,"Here, we will show you how to flash ",(0,o.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-archive"},"Jetpack 6.0")," to an NVMe SSD connected to the reComputer Mini."),(0,o.yg)("h3",{id:"supported-nvidia-jetson-module"},"Supported Nvidia Jetson Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html"},"NVIDIA\xae Jetson Orin\u2122 Nano Module 4GB")," "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html"},"NVIDIA\xae Jetson Orin\u2122 Nano Module 8GB")," "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html"},"NVIDIA\xae Jetson Orin\u2122 NX Module 8GB")," "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html"},"NVIDIA\xae Jetson Orin\u2122 NX Module 16GB")," ")),(0,o.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ubuntu Host Computer"),(0,o.yg)("li",{parentName:"ul"},"reComputer Mini J4012/ J4011/ J3010 or J3011"),(0,o.yg)("li",{parentName:"ul"},"USB Micro-B data transmission cable")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"We recommend that you use physical ubuntu host devices instead of virtual machines.\nPlease refer to the table below to prepare the host machine."),(0,o.yg)("table",{style:{textAlign:"center"}},(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",{rowspan:"2"}," JetPack Version "),(0,o.yg)("td",{class:"dbon",colspan:"3"}," Ubuntu Version (Host Computer) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 18.04 "),(0,o.yg)("td",null," 20.04 "),(0,o.yg)("td",null," 22.04 ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"JetPack 5.x"),(0,o.yg)("td",null," \u2705 "),(0,o.yg)("td",null," \u2705 "),(0,o.yg)("td",null," ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"JetPack 6.x"),(0,o.yg)("td",null," "),(0,o.yg)("td",null," \u2705 "),(0,o.yg)("td",null," \u2705 "))))),(0,o.yg)("h3",{id:"prepare-the-jetpack-image"},"Prepare the Jetpack Image"),(0,o.yg)("p",null,"Here, we need to download the system image to our Ubuntu PC corresponding to the Jetson module we are using:"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{style:{textAlign:"center"}},(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Jetpack Version"),(0,o.yg)("th",null,"Jetson Module"),(0,o.yg)("th",null,"Download Link"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:4},"6.0"),(0,o.yg)("td",null,"Orin Nx 16GB"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZojl6PUN4FFkshyt9a8kFEBUVVrQVO669V-pB_PNJvCuQ?e=YzFd1Z",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Orin Nx 8GB"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Orin Nano 8GB"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EabRgwAjKaJFv11KtK2r06QB_fn91IFoC97qV0LGKGPyWQ?e=fy7LwO",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Orin Nano 4GB"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVGTsdS4n-RLhFxn6tx1NFgB4axESjVlifNXHaFzNAsmWw?e=1oNQeE",target:"_blank",rel:"noopener noreferrer"},"Download")))))),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"The Jetpack6 image file is approximately ",(0,o.yg)("strong",{parentName:"p"},"16.7GB")," in size and should take around 60 minutes to download. Please kindly wait for the download to complete.")),(0,o.yg)("h3",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/HEIXFkizP5Y",title:"Enter Force Recovery Mode (reComputer Mini)",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,o.yg)("details",null,(0,o.yg)("summary",null," Step-by-Step "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1."),"  Connect a USB Micro-B cable between USB2.0 DEVICE port and the ubuntu host PC."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 2."),"  Use a pin and insert into the RECOVERY hole to press recovery button and while holding this."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 3."),"  Connect the power supply."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 4."),"  Release the recovery button."))),(0,o.yg)("p",null,"On the Linux host PC, open a Terminal window and enter the command ",(0,o.yg)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"For Orin NX 16GB: 0955:7323 NVidia Corp"),(0,o.yg)("li",{parentName:"ul"},"For Orin NX 8GB: 0955:7423 NVidia Corp"),(0,o.yg)("li",{parentName:"ul"},"For Orin Nano 8GB: 0955:7523 NVidia Corp"),(0,o.yg)("li",{parentName:"ul"},"For Orin Nano 4GB: 0955:7623 NVidia Corp")),(0,o.yg)("p",null,"The below image is for Orin Nx 16GB:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"})),(0,o.yg)("h3",{id:"flash-to-jetson-with-single-command"},"Flash to Jetson with Single Command."),(0,o.yg)("details",null,(0,o.yg)("summary",null," Flash the device with a single command. "),(0,o.yg)("p",null,"The reComputer Jetson J30/40 Mini has launched a one-click flashing script, which supports flashing Jetpack 6.0. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh\n")),(0,o.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the ",(0,o.yg)("inlineCode",{parentName:"p"},"Flash The Device Step by Step")," below and give feedback in our ",(0,o.yg)("a",{parentName:"p",href:"https://discord.com/channels/862602258452578314/930732339624026152"},"Discord Jetson channel"),". We'll fix them promptly and improve this function in the near future. "))),(0,o.yg)("h3",{id:"flash-to-jetson-step-by-step"},"Flash to Jetson Step by Step"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1:")," Extract the downloaded image file on ubuntu host PC:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd <path-to-image>\nsudo tar xpf mfi_xxxx.tar.gz\n# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2:")," Execute the following command to flash jetpack system to the NVMe SSD: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd mfi_xxxx\n# For example: cd mfi_recomputer-orin-j401\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs\n")),(0,o.yg)("p",null,"You will see the following output if the flashing process is successful"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The flash command may run for 2-10 minutes.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3:")," Connect the J501 to a display using the HDMI connector on the board and finish the initial configuration setup:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"})),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Please complete the ",(0,o.yg)("strong",{parentName:"p"},"System Configuration")," according to your needs.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4 (Optional):")," Install Nvidia Jetpack SDK"),(0,o.yg)("p",null,"Please open the terminal on the Jetson device and execute the following commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install nvidia-jetpack\n")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);