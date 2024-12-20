"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2115],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(9668),a=(n(96540),n(15680));const o={description:"Discover how the 4G LTE HAT for Raspberry Pi and MQTT protocol enable efficient, real-time communication for IoT and IIoT applications. Simplify remote connectivity with AT commands for scalable, high-speed data transmission and remote management.",title:"Setting Up 4G LTE Connectivity for IIoT with MQTT",keywords:["Raspberry Pi Hat","Getting started","IIoT","IoT","MQTT","Edge Computing"],image:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png",slug:"/mqtt_raspberry_pi_4g_lte_hat",last_update:{date:"12/18/2024",author:"Kasun Thushara"}},i=void 0,s={unversionedId:"Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/mqtt_on_rpi_4g_lte_hat",id:"Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/mqtt_on_rpi_4g_lte_hat",title:"Setting Up 4G LTE Connectivity for IIoT with MQTT",description:"Discover how the 4G LTE HAT for Raspberry Pi and MQTT protocol enable efficient, real-time communication for IoT and IIoT applications. Simplify remote connectivity with AT commands for scalable, high-speed data transmission and remote management.",source:"@site/docs/Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/mqtt_on_rpi_4g_lte_hat.md",sourceDirName:"Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications",slug:"/mqtt_raspberry_pi_4g_lte_hat",permalink:"/mqtt_raspberry_pi_4g_lte_hat",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/mqtt_on_rpi_4g_lte_hat.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:173448e4,formattedLastUpdatedAt:"Dec 18, 2024",frontMatter:{description:"Discover how the 4G LTE HAT for Raspberry Pi and MQTT protocol enable efficient, real-time communication for IoT and IIoT applications. Simplify remote connectivity with AT commands for scalable, high-speed data transmission and remote management.",title:"Setting Up 4G LTE Connectivity for IIoT with MQTT",keywords:["Raspberry Pi Hat","Getting started","IIoT","IoT","MQTT","Edge Computing"],image:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png",slug:"/mqtt_raspberry_pi_4g_lte_hat",last_update:{date:"12/18/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Connect and Transfer- FTP on Your Raspberry Pi 4G LTE HAT",permalink:"/ftp_with_raspberry_pi_4g_lte_hat"},next:{title:"Rockchip-Powered Network Solutions",permalink:"/Rockchip_network_solutions"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Communication drivers and tools",id:"communication-drivers-and-tools",level:4},{value:"Mosquitto Explorer",id:"mosquitto-explorer",level:4},{value:"Using AT commands Let&#39;s connect to MQTT Broker",id:"using-at-commands-lets-connect-to-mqtt-broker",level:2},{value:"Python Code Implementation",id:"python-code-implementation",level:2},{value:"Step 1. Prepare the Directory and Virtual Environment",id:"step-1-prepare-the-directory-and-virtual-environment",level:3},{value:"Step 2. Prepare the Python Script",id:"step-2-prepare-the-python-script",level:3},{value:"Step 3. Run the Script",id:"step-3-run-the-script",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The 4G LTE HAT for Raspberry Pi provides reliable, high-speed cellular connectivity, making it essential for remote and industrial IoT (IIoT) applications. With MQTT, a lightweight messaging protocol, devices can communicate efficiently over cellular networks, even in isolated locations. Using AT commands for configuration, it simplifies the process of connecting IoT devices to the network. This combination of 4G LTE and MQTT enhances real-time data transmission, enabling scalable IIoT solutions with remote management capabilities."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Raspberry Pi 5"),(0,a.yg)("th",null,"Raspberry Pi 4G LTE CAT4 HAT")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("h3",{id:"software-requirements"},"Software Requirements"),(0,a.yg)("h4",{id:"communication-drivers-and-tools"},"Communication drivers and tools"),(0,a.yg)("p",null,"If you have not installed relevant drivers and communication tools, please check the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation"},"guide")," first"),(0,a.yg)("h4",{id:"mosquitto-explorer"},"Mosquitto Explorer"),(0,a.yg)("p",null,"We will be using the Mosquitto broker, specifically the test broker available at ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://test.mosquitto.org"},"https://test.mosquitto.org"))," , which ",(0,a.yg)("inlineCode",{parentName:"p"},"does not require a username or password"),". For convenience, it is recommended to ",(0,a.yg)("a",{parentName:"p",href:"https://mqtt-explorer.com/"},"install Mosquitto")," directly on your PC for testing purposes."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG",style:{width:500}})),(0,a.yg)("h2",{id:"using-at-commands-lets-connect-to-mqtt-broker"},"Using AT commands Let's connect to MQTT Broker"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1: Configure receiving mode")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTCFG="recv/mode",0,0,1\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2: Open a network for MQTT client")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTOPEN=0,"test.mosquitto.org",1883\n\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3: Check MQTT connection status (optional)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"AT+QMTOPEN?\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4: Connect a client to the Mosquitto MQTT server")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTCONN=0,"clientExample"\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Note that the client ID must be unique, so ensure you generate a highly unique one. Mosquitto's public broker does not require a username or password for access.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5: Publish a message to a topic")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTPUBEX=0,0,0,0,"test/topic",30 \n\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"}," when ",(0,a.yg)("inlineCode",{parentName:"p"},">")," appear type the massage and press ctrl+z")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"> This is test data, hello MQTT.\n")),(0,a.yg)("p",null,"Open Mosquitto Explorer and enter the topic you published to. You will see the updates appear there."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG",style:{width:500}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 6: Subscribe to a topic")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTSUB=0,1,"test/topic",2\n')),(0,a.yg)("p",null,"Open Mosquitto Explorer and enter the topic  and massage you want to publish to from the 4G module."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG",style:{width:500}})),(0,a.yg)("p",null,"You will then see the published message successfully subscribed to at the 4G module's end."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG",style:{width:500}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 7: Unsubscribe from a topic")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'AT+QMTUNS=0,2,"test/topic"\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 8:  Disconnect the client from the MQTT server")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"AT+QMTDISC=0\n")),(0,a.yg)("h2",{id:"python-code-implementation"},"Python Code Implementation"),(0,a.yg)("h3",{id:"step-1-prepare-the-directory-and-virtual-environment"},"Step 1. Prepare the Directory and Virtual Environment"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open a terminal on your Raspberry Pi."),(0,a.yg)("li",{parentName:"ul"},"Create a new project folder and navigate into it:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir mqtt_EX\ncd mqtt_EX\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set up a Python virtual environment:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv --system-site-packages env\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Activate the virtual environment:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"source env/bin/activate\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install the required libraries:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"pip install pyserial \n")),(0,a.yg)("h3",{id:"step-2-prepare-the-python-script"},"Step 2. Prepare the Python Script"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Open the ",(0,a.yg)("strong",{parentName:"p"},"Thonny Python IDE")," (pre-installed on Raspberry Pi).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Create a new file in Thonny and paste the provided code into the editor.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Update the usb_port parameter to match your Raspberry Pi's serial port for the 4G HAT. Typically, it might be ",(0,a.yg)("inlineCode",{parentName:"p"},"/dev/ttyUSB2")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"/dev/ttyUSB3"),". Example:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'usb_port = "/dev/ttyUSB2"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Save the file as test_mqtt.py in the ",(0,a.yg)("strong",{parentName:"li"},"mqtt_EX")," folder.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'\nimport serial\nimport time\n\n# Serial port configuration\nSERIAL_PORT = \'/dev/ttyUSB2\'  # Adjust based on your setup\nBAUD_RATE = 9600\n\n\ndef send_at_command(ser, command, delay=1):\n    """\n    Sends an AT command to the Quectel module and waits for a response.\n    """\n    ser.write((command + \'\\r\\n\').encode())\n    time.sleep(delay)\n    response = ser.read_all().decode()\n    print(f"Command: {command}\\nResponse: {response}")\n    return response\n\n\ndef main():\n    # Open serial connection\n    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)\n    if not ser.is_open:\n        ser.open()\n\n    try:\n        # Configure MQTT receive mode\n        send_at_command(ser, \'AT+QMTCFG="recv/mode",0,0,1\')\n\n        # Open MQTT connection\n        send_at_command(ser, \'AT+QMTOPEN=0,"test.mosquitto.org",1883\')\n        send_at_command(ser, \'AT+QMTOPEN?\')  # Check connection status\n\n        # Connect to the MQTT broker\n        send_at_command(ser, \'AT+QMTCONN=0,"clientExample"\')\n\n        # Subscribe to the topic\n        send_at_command(ser, \'AT+QMTSUB=0,1,"test/topic_subscribe",2\')\n\n        print("Publishing and subscribing. Press Ctrl+C to stop.")\n\n        while True:\n            try:\n                # Publish a message\n                send_at_command(ser, \'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30\')\n                send_at_command(ser, \'This is test data, hello MQTT.\', delay=0.5)\n\n                # Read incoming messages\n                print("Checking for subscribed topic messages...")\n                incoming = ser.read_all().decode()\n                if incoming:\n                    print(f"Received: {incoming}")\n\n                # Delay between operations\n                time.sleep(2)\n            except KeyboardInterrupt:\n                print("Exiting loop...")\n                break\n\n        # Unsubscribe from the topic\n        send_at_command(ser, \'AT+QMTUNS=0,2,"test/topic_subscribe"\')\n\n        # Disconnect from the broker\n        send_at_command(ser, \'AT+QMTDISC=0\')\n    finally:\n        # Close serial connection\n        ser.close()\n\n\nif __name__ == \'__main__\':\n    main()\n\n')),(0,a.yg)("h3",{id:"step-3-run-the-script"},"Step 3. Run the Script"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open a terminal, ensure you're in the project directory:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd mqtt_EX\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Activate the virtual environment:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"source env/bin/activate\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Run the script using Python:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"python test_mqtt.py\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The output ")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG",style:{width:800}})),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF Book]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf"},"MQTT Application Guide"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);