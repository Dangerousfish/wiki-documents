"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44030],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(a),c=o,m=g["".concat(l,".").concat(c)]||g[c]||y[c]||n;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(9668),o=(a(96540),a(15680));const n={description:"This wiki will guide you on how to flash open source LoRaWAN\xae firmware for your M2 gateway. Based on the open source LoRaWAN\xae firmware, you can deeply customise your M2 gateway.",title:"Flash open source firmware to M2 Gateway",image:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp",slug:"/flash_opensource_firmware_to_m2_gateway",last_update:{date:"12/11/2024",author:"Leo"}},i=void 0,s={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/flash_opensource_firmware_to_m2_gateway",id:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/flash_opensource_firmware_to_m2_gateway",title:"Flash open source firmware to M2 Gateway",description:"This wiki will guide you on how to flash open source LoRaWAN\xae firmware for your M2 gateway. Based on the open source LoRaWAN\xae firmware, you can deeply customise your M2 gateway.",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/flash_opensource_firmware_to_m2_gateway.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform",slug:"/flash_opensource_firmware_to_m2_gateway",permalink:"/flash_opensource_firmware_to_m2_gateway",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/flash_opensource_firmware_to_m2_gateway.md",tags:[],version:"current",lastUpdatedBy:"Leo",lastUpdatedAt:1733875200,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{description:"This wiki will guide you on how to flash open source LoRaWAN\xae firmware for your M2 gateway. Based on the open source LoRaWAN\xae firmware, you can deeply customise your M2 gateway.",title:"Flash open source firmware to M2 Gateway",image:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp",slug:"/flash_opensource_firmware_to_m2_gateway",last_update:{date:"12/11/2024",author:"Leo"}},sidebar:"ProductSidebar",previous:{title:"Connecting to ChirpStack",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack"},next:{title:"SenseCAP M1 Overview",permalink:"/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview"}},l={},p=[{value:"Supported Products List",id:"supported-products-list",level:2},{value:"Prepare the firmware",id:"prepare-the-firmware",level:2},{value:"Download the pre-built firmware",id:"download-the-pre-built-firmware",level:3},{value:"Build your firmware",id:"build-your-firmware",level:3},{value:"Flash the firmware",id:"flash-the-firmware",level:2},{value:"Get and Flash firmware via TFTP",id:"get-and-flash-firmware-via-tftp",level:3},{value:"Get and Flash firmware via Luci",id:"get-and-flash-firmware-via-luci",level:3},{value:"Login into Console",id:"login-into-console",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p},g="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(g,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The SenseCAP M2 gateways represent a cost-effective solution for LoRa gateways, powered by the mature hardware solution MT7628 and the Semtech SX1302 baseband Long Range chip. The specific models are distinguished by the factory-set frequency band (EU868/US915/AS923/AU915), optional module (4G/GPS) and supported LoRa network (LoRaWAN\xae/Helium network)"),(0,o.yg)("p",null,"This wiki will guide you on how to burn open source firmware for your M2 gateway. Based on the open source firmware, you can deeply customise your M2 gateway, such as adding additional features or changing the operating band (antennas need to be adapted to the band)"),(0,o.yg)("admonition",{title:"Warning",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"After flashing the open source firmware, you ",(0,o.yg)("strong",{parentName:"p"},"CAN NOT")," revert to the ",(0,o.yg)("strong",{parentName:"p"},"factory firmware"),"."),(0,o.yg)("p",{parentName:"admonition"},"Seeed studio is ",(0,o.yg)("strong",{parentName:"p"},"NOT responsible")," for any damage to the device caused by the user ",(0,o.yg)("strong",{parentName:"p"},"using open source firmware or third party firmware"),".")),(0,o.yg)("h2",{id:"supported-products-list"},"Supported Products List"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html",target:"_blank"},(0,o.yg)("span",null," ",(0,o.yg)("b",null,"M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html",target:"_blank"},(0,o.yg)("span",null," ",(0,o.yg)("b",null,"M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html",target:"_blank"},(0,o.yg)("span",null," ",(0,o.yg)("b",null,"M2 Data-Only LoRaWAN Indoor Gateway(SX1302)")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-M2-Light-Hotspot-and-Software-License.html",target:"_blank"},(0,o.yg)("span",null," ",(0,o.yg)("b",null,"M2 Light Hotspot"))))),(0,o.yg)("h2",{id:"prepare-the-firmware"},"Prepare the firmware"),(0,o.yg)("h3",{id:"download-the-pre-built-firmware"},"Download the pre-built firmware"),(0,o.yg)("p",null,"If you want to experience open source firmware at your convenience, we provide some compiled firmwares. You can download from ",(0,o.yg)("a",{href:"https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases",target:"_blank"},(0,o.yg)("span",null," Seeed-Solution/LoRa_Gateway_OpenWRT/Release"))),(0,o.yg)("admonition",{title:"Note",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Make sure you download the firmware for your gateway"),(0,o.yg)("p",{parentName:"admonition"},"E.g. the ",(0,o.yg)("strong",{parentName:"p"},"EU868-4G")," firmware does not work with ",(0,o.yg)("strong",{parentName:"p"},"M2 gateways(EU868)"))),(0,o.yg)("h3",{id:"build-your-firmware"},"Build your firmware"),(0,o.yg)("p",null,"If your gateway does not compatitate with our pre-built firmware or if you want to develop it further, you can build your own firmware as follows"),(0,o.yg)("p",null,"To build your own firmware you need a ",(0,o.yg)("strong",{parentName:"p"},"GNU/Linux, BSD or MacOSX system")," (case sensitive filesystem required). Cygwin is unsupported because of the lack of a case sensitive file system"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1:")," clone the source code from ",(0,o.yg)("a",{href:"https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT",target:"_blank"},(0,o.yg)("span",null," Seeed-Solution/LoRa_Gateway_OpenWRT"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-git"},"git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2:")," Install prerequisite packages refer to ",(0,o.yg)("a",{href:"https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem",target:"_blank"},(0,o.yg)("span",null," Build system setup"))),(0,o.yg)("admonition",{title:"Note",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Please perform the following steps with a ",(0,o.yg)("strong",{parentName:"p"},"non-root")," user.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3:")," Go to the source code folder, Run ",(0,o.yg)("inlineCode",{parentName:"p"},"./scripts/feeds update -a")," to obtain all the latest package definitions defined in feeds.conf / feeds.conf.default"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4:")," Run ",(0,o.yg)("inlineCode",{parentName:"p"},"./scripts/feeds install -a")," to install symlinks for all obtained packages into package/feeds/"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5:")," Run ",(0,o.yg)("inlineCode",{parentName:"p"},"cp diffconfig-sensecap-general .config")," to use SenseCAP diff file, and run ",(0,o.yg)("inlineCode",{parentName:"p"},"make defconfig")," to expand full config"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 6:")," Run ",(0,o.yg)("inlineCode",{parentName:"p"},"make menuconfig")," to select your SenseCAP Hardware information"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"SenseCAP Hardware->Have 4G ( Whether it contains 4G Hardware)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"SenseCAP Hardware->Have GPS ( Whether it contains GPS Hardware)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"SenseCAP Hardware->REGION (select your default REGION)"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 7:")," Run ",(0,o.yg)("inlineCode",{parentName:"p"},"make")," to build your firmware"),(0,o.yg)("p",null,"This will download all sources, build the cross-compile toolchain and then cross-compile the GNU/Linux kernel & all chosen applications for your target system"),(0,o.yg)("p",null,"After compiling, you can find the firmware named ",(0,o.yg)("inlineCode",{parentName:"p"},"openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<prj>/bin/targets/ramips/mt76x8/")," directory"),(0,o.yg)("h2",{id:"flash-the-firmware"},"Flash the firmware"),(0,o.yg)("p",null,"You can flash the firmware into your gateway in one of two ways"),(0,o.yg)("h3",{id:"get-and-flash-firmware-via-tftp"},"Get and Flash firmware via TFTP"),(0,o.yg)("p",null,"Before you begin, you will need to install the TFTP server tool on your computer and place the firmware in the appropriate directory."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1:")," Use a Type-c cable to connect the device to the computer, and use a network cable to place the device and the computer in the same LAN."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2:")," Connect to the device using the serial port called ",(0,o.yg)("inlineCode",{parentName:"p"},"USB-SERIAL CH340")," with ",(0,o.yg)("strong",{parentName:"p"},"baud rate 57600")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3:")," Restart the device. When the device enters uboot, ",(0,o.yg)("strong",{parentName:"p"},"select command 2")," to enter the system update."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4:")," Enter ",(0,o.yg)("strong",{parentName:"p"},"device ip"),", where the device ip network segment must be the network segment of your own network; enter ",(0,o.yg)("strong",{parentName:"p"},"server ip"),", which is the IP of your computer, and enter ",(0,o.yg)("strong",{parentName:"p"},"the name of the firmware")," to be burned (the file suffix must be included)"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5:")," Wait for the firmware update to complete. The gateway will start installing the firmware and the LED will enter the orange slow blinking state until the installation is completed."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("h3",{id:"get-and-flash-firmware-via-luci"},"Get and Flash firmware via Luci"),(0,o.yg)("p",null,"Login Luci and navigate to ",(0,o.yg)("strong",{parentName:"p"},"System")," > ",(0,o.yg)("strong",{parentName:"p"},"Backup/Flash Firmware")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Scoll down and navigate to ",(0,o.yg)("strong",{parentName:"p"},"Local upgrade")," and click ",(0,o.yg)("strong",{parentName:"p"},"Flash image...")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Browse folders and upload firmware"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"When the upload is complete, confirm that the uploaded firmware information is correct and click ",(0,o.yg)("strong",{parentName:"p"},"Continue"),"."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"After that, the gateway will start installing the firmware and the LED will enter the orange slow blinking state until the installation is completed."),(0,o.yg)("h2",{id:"login-into-console"},"Login into Console"),(0,o.yg)("p",null,"After the firmware is installed, the device will automatically open an AP hotspot, name ",(0,o.yg)("strong",{parentName:"p"},"SenseCAP_XXXX")),(0,o.yg)("p",null,"Use your phone or computer to connect to the hotspot, no password"),(0,o.yg)("p",null,"Enter ",(0,o.yg)("strong",{parentName:"p"},"192.168.168.1")," in the browser to enter the LuCI interface"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Login into console with username ",(0,o.yg)("strong",{parentName:"p"},"root")," and ",(0,o.yg)("strong",{parentName:"p"},"no password")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"[",(0,o.yg)("strong",{parentName:"li"},"Website"),"]"," ",(0,o.yg)("a",{href:"https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT",target:"_blank"},(0,o.yg)("span",null," GitHub-Seeed-Solution/Lora_Gateway_OpenWRT"))),(0,o.yg)("li",{parentName:"ul"},"[",(0,o.yg)("strong",{parentName:"li"},"Website"),"]"," ",(0,o.yg)("a",{href:"https://openwrt.org/",target:"_blank"},(0,o.yg)("span",null," OpenWrt offical website"))),(0,o.yg)("li",{parentName:"ul"},"[",(0,o.yg)("strong",{parentName:"li"},"PDF"),"]"," ",(0,o.yg)("a",{href:"https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf",target:"_blank"},(0,o.yg)("span",null," M2 Gateway Hardware Description")))),(0,o.yg)("h2",{id:"tech-support"},"Tech Support"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Need help with your SenseCAP M2 Gateway? We're here to assist you!")),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,o.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);