"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74479],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),y=i,g=p["".concat(s,".").concat(y)]||p[y]||c[y]||l;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(9668),i=(n(96540),n(15680));const l={title:"2-Channel Wi-Fi AC Relay Module In Home Assistant",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",image:"https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/3-thumbnail.jpg",slug:"/2_channel_wifi_ac_relay",keywords:["XIAO","Home Assistant","AC Relay","Smart Home"],sidebar_position:1,last_update:{author:"Spencer",date:new Date("2024-11-27T03:21:36.491Z")}},r=void 0,o={unversionedId:"Sensor/SeeedStudio_XIAO_Gadgets/Channel_Wi_Fi_AC_Relay_Module",id:"Sensor/SeeedStudio_XIAO_Gadgets/Channel_Wi_Fi_AC_Relay_Module",title:"2-Channel Wi-Fi AC Relay Module In Home Assistant",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",source:"@site/docs/Sensor/SeeedStudio_XIAO_Gadgets/2_Channel_Wi_Fi_AC_Relay_Module.md",sourceDirName:"Sensor/SeeedStudio_XIAO_Gadgets",slug:"/2_channel_wifi_ac_relay",permalink:"/2_channel_wifi_ac_relay",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO_Gadgets/2_Channel_Wi_Fi_AC_Relay_Module.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1732677696.491,formattedLastUpdatedAt:"Nov 27, 2024",sidebarPosition:1,frontMatter:{title:"2-Channel Wi-Fi AC Relay Module In Home Assistant",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",image:"https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/3-thumbnail.jpg",slug:"/2_channel_wifi_ac_relay",keywords:["XIAO","Home Assistant","AC Relay","Smart Home"],sidebar_position:1,last_update:{author:"Spencer",date:"2024-11-27T03:21:36.491Z"}},sidebar:"ProductSidebar",previous:{title:"FAQs for XIAO Series",permalink:"/XIAO_FAQ"},next:{title:"Wio Terminal Guide",permalink:"/Wio_Terminal_Intro"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Key Features and Specifications",id:"key-features-and-specifications",level:3},{value:"Physical Layout and Connections",id:"physical-layout-and-connections",level:3},{value:"Input and Output Terminals",id:"input-and-output-terminals",level:4},{value:"Physical Representation",id:"physical-representation",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Step 1: Set Up the Relay Module (Physical Setup)",id:"step-1-set-up-the-relay-module-physical-setup",level:3},{value:"Step 2: Network Configuration",id:"step-2-network-configuration",level:3},{value:"Step 3: Add the module device",id:"step-3-add-the-module-device",level:3},{value:"Automation and Use Cases",id:"automation-and-use-cases",level:2},{value:"Safety and Maintenance",id:"safety-and-maintenance",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"2-Channel Wi-Fi AC Relay Module")," is a smart device from Seeed Studio designed to control AC-powered appliances wirelessly. Its dual-channel configuration supports independent control of two loads, making it an excellent choice for automating household appliances such as lights, fans, and other devices in a Home Assistant environment."),(0,i.yg)("p",null,"This guide provides a detailed walkthrough, including setup, integration, and advanced configuration for users ranging from beginners to smart-home enthusiasts."),(0,i.yg)("h3",{id:"key-features-and-specifications"},"Key Features and Specifications"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{align:"center"},(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Feature"),(0,i.yg)("th",null,"Details"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Input Voltage"),(0,i.yg)("td",null,"AC 100-240V, 50/60Hz")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"Output Voltage"),(0,i.yg)("td",null,"AC 100-240V, 50/60Hz")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"Maximum Load"),(0,i.yg)("td",null,"10A per channel")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"Channels"),(0,i.yg)("td",null,"2 (independent control for each channel)")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"Connection Type"),(0,i.yg)("td",null,"Wi-Fi")),(0,i.yg)("tr",null,(0,i.yg)("th",null,"Input Terminals"),(0,i.yg)("td",null,"N (Neutral), L (Live)")),(0,i.yg)("tr",null,(0,i.yg)("th",{rolspan:"2"},"Output Terminals"),(0,i.yg)("td",null,(0,i.yg)("b",null,"Channel 1:")," N1 (Neutral), L1 (Live) ",(0,i.yg)("br",null)," ",(0,i.yg)("b",null,"Channel 2:")," N2 (Neutral), L2 (Live)"))))),(0,i.yg)("admonition",{title:"Safety Warning",type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Always disconnect AC power before wiring the relay. Avoid using the USB port while the device is connected to AC power to prevent electrical hazards.")),(0,i.yg)("h3",{id:"physical-layout-and-connections"},"Physical Layout and Connections"),(0,i.yg)("h4",{id:"input-and-output-terminals"},"Input and Output Terminals"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Input",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"N (Neutral)"),": Connect the neutral wire from the AC power supply."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"L (Live)"),": Connect the live wire from the AC power supply."))),(0,i.yg)("li",{parentName:"ul"},"Output",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Channel 1",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"N1 (Neutral)"),": Neutral wire for the load connected to Relay 1."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"L1 (Live)"),": Live wire for the load connected to Relay 1."))),(0,i.yg)("li",{parentName:"ul"},"Channel 2",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"N2 (Neutral)"),": Neutral wire for the load connected to Relay 2."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"L2 (Live)"),": Live wire for the load connected to Relay 2.")))))),(0,i.yg)("h4",{id:"physical-representation"},"Physical Representation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diagram"},"+-----------------------------------------+\n| Seeed Studio 2-Channel AC Wi-Fi Relay   |\n|-----------------------------------------|\n| Input:                                  |\n|   N  (Neutral)                          |\n|   L  (Live)                             |\n| Output: Channel 1                       |\n|   N1 (Neutral for Load 1)               |\n|   L1 (Live for Load 1)                  |\n| Output: Channel 2                       |\n|   N2 (Neutral for Load 2)               |\n|   L2 (Live for Load 2)                  |\n+-----------------------------------------+\n")),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("h3",{id:"requirements"},"Requirements"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Core Components"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"2-Channel Wi-Fi AC Relay Module"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Software"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Home Assistant installed"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ESPHome  Add-On")," set up for device communication(if not then the device will not be discovered)"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Network"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Stable Wi-Fi for seamless interaction between hardware and Home Assistant.")))),(0,i.yg)("h3",{id:"step-1-set-up-the-relay-module-physical-setup"},"Step 1: Set Up the Relay Module (Physical Setup)"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Wiring:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Follow the Physical Layout and Connections section to wire the relay module."),(0,i.yg)("li",{parentName:"ul"},"Ensure all connections are secure, and there are no exposed wires."))),(0,i.yg)("li",{parentName:"ol"},"Power On:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Turn on the AC supply. Do not power on the module through USB if it is connected to AC power.")))),(0,i.yg)("h3",{id:"step-2-network-configuration"},"Step 2: Network Configuration"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Enable Access Point"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Upon powering up for the first time, the module will create a Wi-Fi network (SSID: ",(0,i.yg)("inlineCode",{parentName:"li"},"seeedstudio-relay"),")."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Access Configuration"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Connect to the network using a phone or PC."),(0,i.yg)("li",{parentName:"ul"},"Open a browser and navigate to ",(0,i.yg)("inlineCode",{parentName:"li"},"http://192.168.4.1"),"."),(0,i.yg)("li",{parentName:"ul"},"Enter the SSID and password of your home Wi-Fi network."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Home Assistant Integration"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Once connected to the home network, the module will be discoverable in Home Assistant under ",(0,i.yg)("inlineCode",{parentName:"li"},"Settings -> Devices & Services"),".")))),(0,i.yg)("p",null,"This way, you can connect the module to your Home Assistant network and let Home Assistant discover it."),(0,i.yg)("h3",{id:"step-3-add-the-module-device"},"Step 3: Add the module device"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Automatic Discovery"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Ensure the ",(0,i.yg)("strong",{parentName:"li"},"ESPHome")," is installed in Home Assistant."),(0,i.yg)("li",{parentName:"ul"},"Navigate to ",(0,i.yg)("inlineCode",{parentName:"li"},"Settings -> Devices & Services -> Integrations")," and look for the device."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Manual Configuration"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"If not automatically discovered, manually add the device by specifying its IP address.")))),(0,i.yg)("h2",{id:"automation-and-use-cases"},"Automation and Use Cases"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Basic Automation:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Create a time-based schedule to toggle the relay at specific times."))),(0,i.yg)("li",{parentName:"ol"},"Sensor Integration:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Combine the relay with a temperature or motion sensor for conditional control (e.g., turn on a fan when the temperature exceeds a threshold)."))),(0,i.yg)("li",{parentName:"ol"},"Notifications:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Set up Home Assistant to send notifications when the relay state changes or if the device goes offline.")))),(0,i.yg)("h2",{id:"safety-and-maintenance"},"Safety and Maintenance"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Periodically inspect wiring for wear and tear."),(0,i.yg)("li",{parentName:"ol"},"Use proper circuit protection devices, such as fuses or breakers."),(0,i.yg)("li",{parentName:"ol"},"Keep the device away from water and excessive heat.")),(0,i.yg)("h2",{id:"faqs"},"FAQs"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"What happens if the device is disconnected from Wi-Fi?"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The module will attempt to reconnect automatically. If it fails, it will enable its fallback access point for reconfiguration."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Can I use the USB port while connected to AC power?"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"No, using USB while connected to AC power may damage the device or create a safety hazard."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Can this module work without Home Assistant?"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Yes, the module can be controlled via its ",(0,i.yg)("strong",{parentName:"li"},"local IP address")," or integrated with other platforms that support ESPHome or MQTT.")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/kpY74apCWj",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);