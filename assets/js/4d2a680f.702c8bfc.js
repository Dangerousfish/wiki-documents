"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23056],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,c=p["".concat(d,".").concat(y)]||p[y]||u[y]||a;return n?i.createElement(c,o(o({ref:t},g),{},{components:n})):i.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},54551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(9668),r=(n(96540),n(15680));const a={description:"Grove - Line Finder",title:"Grove - Line Finder V1.1",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Line_Finder",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder",title:"Grove - Line Finder V1.1",description:"Grove - Line Finder",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Line_Finder",permalink:"/Grove-Line_Finder",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Line Finder",title:"Grove - Line Finder V1.1",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Line_Finder",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Infrared Receiver",permalink:"/Grove-Infrared_Receiver"},next:{title:"Grove-IR Line Follower Sensor V3.0",permalink:"/grove_line_follower"}},d={},s=[{value:"Version",id:"version",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],g={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/Grovelinefinder1.jpg"})),(0,r.yg)("p",null,"Grove-Line finder is designed for line-following robot. It has an IR emitting LED and an IR sensitive phototransistor. It can output digital signal to a microcontroller so that the robot can follow a black line on white background, or vice versa."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/300px-Get_One_Now_Banner.png"}))),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove-Line Finder V1.0"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Jan 29 2010")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove-Line Finder V1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"Add test points"),(0,r.yg)("td",{parentName:"tr",align:null},"Dec 28 2015")))),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Value/Range"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power supply"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Digital output mode"),(0,r.yg)("td",{parentName:"tr",align:null},"TTL (High when black is detected, Low when white is detected)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connector"),(0,r.yg)("td",{parentName:"tr",align:null},"4 pin Buckled Grove interface")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dimension"),(0,r.yg)("td",{parentName:"tr",align:null},"20mm*20mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROHS"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Photo reflective diode"),(0,r.yg)("td",{parentName:"tr",align:null},"RS-06WD")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Comparator"),(0,r.yg)("td",{parentName:"tr",align:null},"MV358")))),(0,r.yg)("p",null,"!!!Tip\nMore details about Grove modules please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System")),(0,r.yg)("h2",{id:"platform-supported"},"Platform Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Button"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html"},"Get One Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 2. Connect Grove-line finder to port D3 of Grove-Base Shield."),(0,r.yg)("li",{parentName:"ul"},"Step 3. Plug Grove - Base Shield into Seeeduino."),(0,r.yg)("li",{parentName:"ul"},"Step 4. Connect Seeeduino to PC through a USB cable.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/seeeduino_line_finder.jpg"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Line finder to Seeeduino as below.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove-Line finder"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Red")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"Black")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Not Conencted"),(0,r.yg)("td",{parentName:"tr",align:null},"White")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"D3"),(0,r.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1. Copy the code into Arduino IDE and upload.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'//------------------------------------------------------------\n//Name: Line finder digital mode\n//Function: detect black line or white line\n//Parameter:   When digital signal is HIGH, black line\n//             When digital signal is LOW, white line\n//-------------------------------------------------------------\nint signalPin =  3;    // connected to digital pin 3\nvoid setup()   {\n  pinMode(signalPin, INPUT); // initialize the digital pin as an output:\n  Serial.begin(9600);  // initialize serial communications at 9600 bps:\n}\n// the loop() method runs over and over again,\n// as long as the Arduino has power\nvoid loop()\n{\n  if(HIGH == digitalRead(signalPin))\n    Serial.println("black");\n  else  Serial.println("white");  // display the color\n  delay(1000);                  // wait for a second\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Step 2. Open the serial port and we will see "black" when put the sensor on top of black lines and "white" when on white area.')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"white\nwhite\nwhite\nblack\nblack\nblack\nblack\nblack\n")),(0,r.yg)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,r.yg)("h4",{id:"hardware-1"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Line Finder to port D3 of a Base Shield."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,r.yg)("h4",{id:"software-1"},"Software"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Open ",(0,r.yg)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/cc_Line_Finder.png"})),(0,r.yg)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,r.yg)("admonition",{title:"success",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"When the code finishes uploaded, you will see line found or not in Serial Monitor.")),(0,r.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.yg)("h4",{id:"hardware-2"},"Hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.yg)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Line Finder"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html"},"Get ONE Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 2. Plug the GrovePi_Plus into Raspberry."),(0,r.yg)("li",{parentName:"ul"},"Step 3. Connect Grove-Line Finder to D7 port of GrovePi_Plus."),(0,r.yg)("li",{parentName:"ul"},"Step 4. Connect the Raspberry to PC through USB cable.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/rasp_line_finder.jpg"})),(0,r.yg)("h4",{id:"software-2"},"Software"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1. Follow ",(0,r.yg)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,r.yg)("li",{parentName:"ul"},"Step 2. Git clone the Github repository.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 3. Excute below commands.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd ~/GrovePi/Software/Python\npython grove_line_finder.py\n")),(0,r.yg)("p",null,"Here is the grove_line_finder.py code."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Line Finder to digital port D7\n# SIG,NC,VCC,GND\nline_finder = 7\n\ngrovepi.pinMode(line_finder,"INPUT")\n\nwhile True:\n    try:\n        # Return HIGH when black line is detected, and LOW when white line is detected\n        if grovepi.digitalRead(line_finder) == 1:\n            print ("black line detected")\n        else:\n            print ("white line detected")\n\n        time.sleep(.5)\n\n    except IOError:\n        print ("Error")\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 4. We will see black line detected when the sensor is on top of black line.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pi@raspberrypi:~/GrovePi/Software/Python $ python grove_line_finder.py \nblack line detected\nblack line detected\nwhite line detected\nwhite line detected\n\n")),(0,r.yg)("h1",{id:"grove-line-finder-schematic-v10"},"Grove-Line Finder Schematic V1.0"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h1",{id:"grove-line-finder-schematic-v11"},"Grove-Line Finder Schematic V1.1"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Eagle&PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip"},"Grove-Line Finder Schematic V1.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Eagle&PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip"},"Grove-Line Finder Schematic V1.1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Lmv358.pdf"},"LMV358.PDF")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Codecraft]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Grove_Line_Finder_CDC_File.zip"},"CDC File"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,r.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.yg)("p",null,"With the SenseCAP ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.yg)("div",{align:"center"},(0,r.yg)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);