"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16692],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=a,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return t?i.createElement(f,r(r({ref:n},p),{},{components:t})):i.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},12304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(9668),a=(t(96540),t(15680));const o={description:"Key Word Spotting",title:"Key Word Spotting",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_course_Key_Word_Spotting",last_update:{date:"08/09/2023",author:"Salman"}},r="XIAO ESP32S3-Sense Key Word Spotting",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/Key_Word_Spotting",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/Key_Word_Spotting",title:"Key Word Spotting",description:"Key Word Spotting",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/Key_Word_Spotting.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse",slug:"/tinyml_course_Key_Word_Spotting",permalink:"/tinyml_course_Key_Word_Spotting",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/Key_Word_Spotting.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Key Word Spotting",title:"Key Word Spotting",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_course_Key_Word_Spotting",last_update:{date:"08/09/2023",author:"Salman"}},sidebar:"ProductSidebar",previous:{title:"Edgeimpulse",permalink:"/edgeimpulse"},next:{title:"Image classification",permalink:"/tinyml_course_Image_classification_project"}},l={},d=[{value:"1. Getting Started",id:"1-getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"2. Capturing (offline) Audio Data",id:"2-capturing-offline-audio-data",level:2},{value:"Step 1. Save recorded sound samples as .wav audio files to a microSD card.",id:"step-1-save-recorded-sound-samples-as-wav-audio-files-to-a-microsd-card",level:3},{value:"3. Training data acquisition",id:"3-training-data-acquisition",level:2},{value:"Step 2. Uploading collected sound data",id:"step-2-uploading-collected-sound-data",level:3},{value:"Step 3. Creating Impulse (Pre-Process / Model definition)",id:"step-3-creating-impulse-pre-process--model-definition",level:3},{value:"Step 4. Pre-Processing (MFCC)",id:"step-4-pre-processing-mfcc",level:3},{value:"4. Building a mechine learning model",id:"4-building-a-mechine-learning-model",level:2},{value:"Step 5. Model Design and Training",id:"step-5-model-design-and-training",level:3},{value:"5. Deploying to XIAO ESP32S3 Sense",id:"5-deploying-to-xiao-esp32s3-sense",level:2},{value:"Step 6. Deploying to XIAO ESP32S3 Sense",id:"step-6-deploying-to-xiao-esp32s3-sense",level:3},{value:"ToDo",id:"todo",level:2},{value:"Special Thanks",id:"special-thanks",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"xiao-esp32s3-sense-key-word-spotting"},"XIAO ESP32S3-Sense Key Word Spotting"),(0,a.yg)("p",null,"This tutorial will guide you through implementing a Keyword Spotting (KWS) system using TinyML on the XIAO ESP32S3 Sense microcontroller board, with the help of Edge Impulse for data collection and model training. KWS is essential for voice recognition systems, and with the power of TinyML, it's achievable on smaller, low-power devices. Let's build our own KWS system using Edge Impulse and XIAO ESP32S3 Sense!"),(0,a.yg)("h2",{id:"1-getting-started"},"1. Getting Started"),(0,a.yg)("p",null,"Before starting this project, please follow the preparation steps below to prepare the software and hardware needed for this project."),(0,a.yg)("h3",{id:"hardware"},"Hardware"),(0,a.yg)("p",null,"To carry out this project successfully, you need to prepare the following hardware."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"XIAO ESP32S3 Sense"),(0,a.yg)("li",{parentName:"ul"},"microSD card (No larger than 32GB)"),(0,a.yg)("li",{parentName:"ul"},"microSD card reader"),(0,a.yg)("li",{parentName:"ul"},"USB-C data cable")),(0,a.yg)("p",null,"Insert the microSD card into the microSD card slot. Please note the direction of insertion, the side with the gold finger should face inward."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg",style:{width:500,height:"auto"}})),(0,a.yg)("h3",{id:"software"},"Software"),(0,a.yg)("p",null,"If this is your first time using XIAO ESP32S3 Sense, then before you start, we suggest you read the following two Wiki's to learn how to use it."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/"},"Getting Started with Seeed Studio XIAO ESP32S3 (Sense)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/"},"Usage of Seeed Studio XIAO ESP32S3 microphone"))),(0,a.yg)("h2",{id:"2-capturing-offline-audio-data"},"2. Capturing (offline) Audio Data"),(0,a.yg)("h3",{id:"step-1-save-recorded-sound-samples-as-wav-audio-files-to-a-microsd-card"},"Step 1. Save recorded sound samples as .wav audio files to a microSD card."),(0,a.yg)("p",null,"Let's use the onboard SD Card reader to save.wav audio files, we need to habilitate the XIAO PSRAM first."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"Then compile and upload the following program to XIAO ESP32S3."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This code records audio using the I2S interface of the Seeed XIAO ESP32S3 Sense board, saves the recording as a.wav file on an SD card, and allows for control of the recording process through commands sent from the serial monitor. The name of the audio file is customizable (it should be the class labels to be used with the training), and multiple recordings can be made, each saved in a new file. The code also includes functionality to increase the volume of the recordings.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n * WAV Recorder for Seeed XIAO ESP32S3 Sense \n * \n * NOTE: To execute this code, we will need to use the PSRAM \n * function of the ESP-32 chip, so please turn it on before uploading.\n * Tools>PSRAM: "OPI PSRAM"\n * \n * Adapted by M.Rovai @May23 from original Seeed code\n*/\n\n#include <I2S.h>\n#include "FS.h"\n#include "SD.h"\n#include "SPI.h"\n\n// make changes as needed\n#define RECORD_TIME   10  // seconds, The maximum value is 240\n#define WAV_FILE_NAME "data"\n\n// do not change for best\n#define SAMPLE_RATE 16000U\n#define SAMPLE_BITS 16\n#define WAV_HEADER_SIZE 44\n#define VOLUME_GAIN 2\n\nint fileNumber = 1;\nString baseFileName;\nbool isRecording = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  while (!Serial) ;\n  \n  I2S.setAllPins(-1, 42, 41, -1, -1);\n  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1) ;\n  }\n  if(!SD.begin(21)){\n    Serial.println("Failed to mount SD Card!");\n    while (1) ;\n  }\n  Serial.printf("Enter with the label name\\n");\n  //record_wav();\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    String command = Serial.readStringUntil(\'\\n\');\n    command.trim();\n    if (command == "rec") {\n      isRecording = true;\n    } else {\n      baseFileName = command;\n      fileNumber = 1; // reset file number each time a new base file name is set\n      Serial.printf("Send rec for starting recording label \\n");\n    }\n  }\n  if (isRecording && baseFileName != "") {\n    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";\n    fileNumber++;\n    record_wav(fileName);\n    delay(1000); // delay to avoid recording multiple files at once\n    isRecording = false;\n  }\n}\n\nvoid record_wav(String fileName)\n{\n  uint32_t sample_size = 0;\n  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;\n  uint8_t *rec_buffer = NULL;\n  Serial.printf("Start recording ...\\n");\n   \n  File file = SD.open(fileName.c_str(), FILE_WRITE);\n  // Write the header to the WAV file\n  uint8_t wav_header[WAV_HEADER_SIZE];\n  generate_wav_header(wav_header, record_size, SAMPLE_RATE);\n  file.write(wav_header, WAV_HEADER_SIZE);\n\n  // PSRAM malloc for recording\n  rec_buffer = (uint8_t *)ps_malloc(record_size);\n  if (rec_buffer == NULL) {\n    Serial.printf("malloc failed!\\n");\n    while(1) ;\n  }\n  Serial.printf("Buffer: %d bytes\\n", ESP.getPsramSize() - ESP.getFreePsram());\n\n  // Start recording\n  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);\n  if (sample_size == 0) {\n    Serial.printf("Record Failed!\\n");\n  } else {\n    Serial.printf("Record %d bytes\\n", sample_size);\n  }\n\n  // Increase volume\n  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {\n    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;\n  }\n\n  // Write data to the WAV file\n  Serial.printf("Writing to the file ...\\n");\n  if (file.write(rec_buffer, record_size) != record_size)\n    Serial.printf("Write file Failed!\\n");\n\n  free(rec_buffer);\n  file.close();\n  Serial.printf("Recording complete: \\n");\n  Serial.printf("Send rec for a new sample or enter a new label\\n\\n");\n}\n\nvoid generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)\n{\n  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/\n  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;\n  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;\n  const uint8_t set_wav_header[] = {\n    \'R\', \'I\', \'F\', \'F\', // ChunkID\n    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize\n    \'W\', \'A\', \'V\', \'E\', // Format\n    \'f\', \'m\', \'t\', \' \', // Subchunk1ID\n    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)\n    0x01, 0x00, // AudioFormat (1 for PCM)\n    0x01, 0x00, // NumChannels (1 channel)\n    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate\n    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate\n    0x02, 0x00, // BlockAlign\n    0x10, 0x00, // BitsPerSample (16 bits)\n    \'d\', \'a\', \'t\', \'a\', // Subchunk2ID\n    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size\n  };\n  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));\n}\n')),(0,a.yg)("p",null,"Now, upload the code to the XIAO and get samples from the keywords (hello and stop). You can also capture noise and other words. The Serial monitor will prompt you to receive the label to be recorded."),(0,a.yg)("p",null,"Send the label (for example, ",(0,a.yg)("strong",{parentName:"p"},"hello"),"). The program will wait for another command: ",(0,a.yg)("strong",{parentName:"p"},"rec"),"."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/2.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"And the program will start recording new samples every time a command ",(0,a.yg)("strong",{parentName:"p"},"rec")," is sent. The files will be saved as hello.1.wav, hello.2.wav, hello.3.wav, etc. until a new label (for example, ",(0,a.yg)("strong",{parentName:"p"},"stop"),") is sent. In this case, you should send the command ",(0,a.yg)("strong",{parentName:"p"},"rec")," for each new sample, which will be saved as stop.1.wav, stop.2.wav, stop.3.wav, etc."),(0,a.yg)("p",null,"Ultimately, we will get the saved files on the SD card."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"We recommend that you have enough sounds for each label sample. You can repeat your keywords several times during each ten-second recording session, and we will segment the samples in subsequent steps. But there needs to be some spacing between keywords.")),(0,a.yg)("h2",{id:"3-training-data-acquisition"},"3. Training data acquisition"),(0,a.yg)("h3",{id:"step-2-uploading-collected-sound-data"},"Step 2. Uploading collected sound data"),(0,a.yg)("p",null,"When the raw dataset is defined and collected, we should initiate a new project at ",(0,a.yg)("a",{parentName:"p",href:"https://edgeimpulse.com/"},"Edge Impulse"),". Once the project is created, select the ",(0,a.yg)("strong",{parentName:"p"},"Upload Existing Data")," tool in the ",(0,a.yg)("strong",{parentName:"p"},"Data Acquisition")," section. Choose the files to be uploaded."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/3.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"And upload them to the Studio (You can automatically split data in train/test). Repete to all classes and all raw data."),(0,a.yg)("p",null,"All data on dataset have a 1s length, but the samples recorded in the previous section have 10s and must be split into 1s samples to be compatible. Click on three dots after the sample name and select ",(0,a.yg)("strong",{parentName:"p"},"Split sample"),"."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/5.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"Once inside de tool, split the data into 1-second records. If necessary, add or remove segments."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/4.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"This procedure should be repeated for all samples."),(0,a.yg)("h3",{id:"step-3-creating-impulse-pre-process--model-definition"},"Step 3. Creating Impulse (Pre-Process / Model definition)"),(0,a.yg)("p",null,"An impulse takes raw data, uses signal processing to extract features, and then uses a learning block to classify new data."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/6.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("p",null,"First, we will take the data points with a 1-second window, augmenting the data, sliding that window each 500ms. Note that the option ",(0,a.yg)("strong",{parentName:"p"},"zero-pad data")," is set. This is important to fill with zeros samples smaller than 1 second (in some cases, I reduced the 1000 ms window on the ",(0,a.yg)("strong",{parentName:"p"},"split tool")," to avoid noises and spikes)."),(0,a.yg)("p",null,"Each 1-second audio sample should be pre-processed and converted to an image (for example, 13 x 49 x 1). We will use MFCC, which extracts features from audio signals using Mel Frequency Cepstral Coefficients, which are great for the human voice."),(0,a.yg)("p",null,"Next, we select ",(0,a.yg)("strong",{parentName:"p"},"KERAS")," for classification that builds our model from scratch by doing Image Classification using Convolution Neural Network."),(0,a.yg)("h3",{id:"step-4-pre-processing-mfcc"},"Step 4. Pre-Processing (MFCC)"),(0,a.yg)("p",null,"The next step is to create the images to be trained in the next phase. We can keep the default parameter values or take advantage of the DSP ",(0,a.yg)("strong",{parentName:"p"},"Autotuneparameters option"),", which we will do."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/7.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("h2",{id:"4-building-a-mechine-learning-model"},"4. Building a mechine learning model"),(0,a.yg)("h3",{id:"step-5-model-design-and-training"},"Step 5. Model Design and Training"),(0,a.yg)("p",null,"We will use a Convolution Neural Network (CNN) model. The basic architecture is defined with two blocks of Conv1D + MaxPooling (with 8 and 16 neurons, respectively) and a 0.25 Dropout. And on the last layer, after Flattening four neurons, one for each class."),(0,a.yg)("p",null,"As hyper-parameters, we will have a Learning Rate of 0.005 and a model that will be trained by 100 epochs. We will also include data augmentation, as some noise. The result seems OK."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/8.png",style:{width:600,height:"auto"}})),(0,a.yg)("h2",{id:"5-deploying-to-xiao-esp32s3-sense"},"5. Deploying to XIAO ESP32S3 Sense"),(0,a.yg)("h3",{id:"step-6-deploying-to-xiao-esp32s3-sense"},"Step 6. Deploying to XIAO ESP32S3 Sense"),(0,a.yg)("p",null,"Edge Impulse will package all the needed libraries, preprocessing functions, and trained models, downloading them to your computer. You should select the option Arduino Library and at the bottom, select Quantized (Int8) and press the button Build."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/9.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"Even though Edge Impulse has not released its SDK for ESP32S3 using the ESP NN accelerator, thanks to Dmitry Maslov, we can have its assembly optimizations restored and fixed for ESP32-S3. This solution is not official yet, and EI will include it in EI SDK once they fix conflicts with other boards."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"For now, this only works with the non-EON version. So, you should also keep the the option ",(0,a.yg)("strong",{parentName:"p"},"Enable EON Compiler")," not selected.")),(0,a.yg)("p",null,"When the Build button is selected, a Zip file will be created and downloaded to your computer."),(0,a.yg)("p",null,"Before we use the downloaded library, we need to enable the ",(0,a.yg)("strong",{parentName:"p"},"ESP NN")," Accelerator. For that, you can download a preliminary version from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip"},"project GitHub"),", unzip it, and replace the ESP NN folder with it under:",(0,a.yg)("inlineCode",{parentName:"p"},"src/edge-impulse-sdk/porting/espressif/ESP-NN"),", in your Arduino library folder."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,"On your Arduino IDE, go to the Sketch tab and select the option Add .ZIP Library, and Choose the .zip file downloaded by the Edge Impulse."),(0,a.yg)("p",null,"You can find the complete code on the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/xiao_esp32s3_microphone_led"},"project's GitHub"),". Upload the sketch to your board and test some real inferences."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The library imported in the code needs to be updated with the name of your library. The logic for lighting up also needs to be modified based on the order of the labels you actually trained on.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* Edge Impulse Arduino examples\n * Copyright (c) 2022 EdgeImpulse Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n// If your target is limited in memory remove this macro to save 10K RAM\n#define EIDSP_QUANTIZE_FILTERBANK   0\n\n/*\n ** NOTE: If you run into TFLite arena allocation issue.\n **\n ** This may be due to may dynamic memory fragmentation.\n ** Try defining "-DEI_CLASSIFIER_ALLOCATION_STATIC" in boards.local.txt (create\n ** if it doesn\'t exist) and copy this file to\n ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.\n **\n ** See\n ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)\n ** to find where Arduino installs cores on your machine.\n **\n ** If the problem persists then there\'s not enough memory for this model and application.\n */\n\n/* Includes ---------------------------------------------------------------- */\n#include <XIAO-ESP32S3-KWS_inferencing.h>\n\n#include <I2S.h>\n#define SAMPLE_RATE 16000U\n#define SAMPLE_BITS 16\n\n#define LED_BUILT_IN 21 \n\n/** Audio buffers, pointers and selectors */\ntypedef struct {\n    int16_t *buffer;\n    uint8_t buf_ready;\n    uint32_t buf_count;\n    uint32_t n_samples;\n} inference_t;\n\nstatic inference_t inference;\nstatic const uint32_t sample_buffer_size = 2048;\nstatic signed short sampleBuffer[sample_buffer_size];\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\nstatic bool record_status = true;\n\n/**\n * @brief      Arduino setup function\n */\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    // comment out the below line to cancel the wait for USB connection (needed for native USB)\n    while (!Serial);\n    Serial.println("Edge Impulse Inferencing Demo");\n\n    pinMode(LED_BUILT_IN, OUTPUT); // Set the pin as output\n    digitalWrite(LED_BUILT_IN, HIGH); //Turn off\n    \n    I2S.setAllPins(-1, 42, 41, -1, -1);\n    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {\n      Serial.println("Failed to initialize I2S!");\n    while (1) ;\n  }\n    \n    // summary of inferencing settings (from model_metadata.h)\n    ei_printf("Inferencing settings:\\n");\n    ei_printf("\\tInterval: ");\n    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);\n    ei_printf(" ms.\\n");\n    ei_printf("\\tFrame size: %d\\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);\n    ei_printf("\\tSample length: %d ms.\\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);\n    ei_printf("\\tNo. of classes: %d\\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));\n\n    ei_printf("\\nStarting continious inference in 2 seconds...\\n");\n    ei_sleep(2000);\n\n    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {\n        ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\\r\\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);\n        return;\n    }\n\n    ei_printf("Recording...\\n");\n}\n\n/**\n * @brief      Arduino main function. Runs the inferencing loop.\n */\nvoid loop()\n{\n    bool m = microphone_inference_record();\n    if (!m) {\n        ei_printf("ERR: Failed to record audio...\\n");\n        return;\n    }\n\n    signal_t signal;\n    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;\n    signal.get_data = &microphone_audio_signal_get_data;\n    ei_impulse_result_t result = { 0 };\n\n    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);\n    if (r != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", r);\n        return;\n    }\n\n    int pred_index = 0;     // Initialize pred_index\n    float pred_value = 0;   // Initialize pred_value\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: ", result.classification[ix].label);\n        ei_printf_float(result.classification[ix].value);\n        ei_printf("\\n");\n\n        if (result.classification[ix].value > pred_value){\n           pred_index = ix;\n           pred_value = result.classification[ix].value;\n      }\n    }\n    // Display inference result\n    if (pred_index == 3){\n      digitalWrite(LED_BUILT_IN, LOW); //Turn on\n    }\n    else{\n      digitalWrite(LED_BUILT_IN, HIGH); //Turn off\n    }\n\n    \n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: ");\n    ei_printf_float(result.anomaly);\n    ei_printf("\\n");\n#endif\n}\n\nstatic void audio_inference_callback(uint32_t n_bytes)\n{\n    for(int i = 0; i < n_bytes>>1; i++) {\n        inference.buffer[inference.buf_count++] = sampleBuffer[i];\n\n        if(inference.buf_count >= inference.n_samples) {\n          inference.buf_count = 0;\n          inference.buf_ready = 1;\n        }\n    }\n}\n\nstatic void capture_samples(void* arg) {\n\n  const int32_t i2s_bytes_to_read = (uint32_t)arg;\n  size_t bytes_read = i2s_bytes_to_read;\n\n  while (record_status) {\n\n    /* read data at once from i2s - Modified for XIAO ESP2S3 Sense and I2S.h library */\n    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);\n    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);\n\n    if (bytes_read <= 0) {\n      ei_printf("Error in I2S read : %d", bytes_read);\n    }\n    else {\n        if (bytes_read < i2s_bytes_to_read) {\n        ei_printf("Partial I2S read");\n        }\n\n        // scale the data (otherwise the sound is too quiet)\n        for (int x = 0; x < i2s_bytes_to_read/2; x++) {\n            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;\n        }\n\n        if (record_status) {\n            audio_inference_callback(i2s_bytes_to_read);\n        }\n        else {\n            break;\n        }\n    }\n  }\n  vTaskDelete(NULL);\n}\n\n/**\n * @brief      Init inferencing struct and setup/start PDM\n *\n * @param[in]  n_samples  The n samples\n *\n * @return     { description_of_the_return_value }\n */\nstatic bool microphone_inference_start(uint32_t n_samples)\n{\n    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));\n\n    if(inference.buffer == NULL) {\n        return false;\n    }\n\n    inference.buf_count  = 0;\n    inference.n_samples  = n_samples;\n    inference.buf_ready  = 0;\n\n//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {\n//        ei_printf("Failed to start I2S!");\n//    }\n\n    ei_sleep(100);\n\n    record_status = true;\n\n    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);\n\n    return true;\n}\n\n/**\n * @brief      Wait on new data\n *\n * @return     True when finished\n */\nstatic bool microphone_inference_record(void)\n{\n    bool ret = true;\n\n    while (inference.buf_ready == 0) {\n        delay(10);\n    }\n\n    inference.buf_ready = 0;\n    return ret;\n}\n\n/**\n * Get raw audio signal data\n */\nstatic int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)\n{\n    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);\n\n    return 0;\n}\n\n/**\n * @brief      Stop PDM and release buffers\n */\nstatic void microphone_inference_end(void)\n{\n    free(sampleBuffer);\n    ei_free(inference.buffer);\n}\n\n#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE\n#error "Invalid model for current sensor."\n#endif\n')),(0,a.yg)("p",null,"The idea is that the LED will be ON whenever the keyword ",(0,a.yg)("strong",{parentName:"p"},"HELLO"),' is detected. In the same way, instead of turn-on a LED, this could be a "trigger" for an external device, as we saw in the introduction.'),(0,a.yg)("h2",{id:"todo"},"ToDo"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Build your own KWS project and run on XIAO ESPS3 Sense. ")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/11.png",style:{width:700,height:"auto"}})),(0,a.yg)("h2",{id:"special-thanks"},"Special Thanks"),(0,a.yg)("p",null,"Special thanks to ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://mjrobot.org/"},"MJRoBot (Marcelo Rovai)"))," for the tutorial content on XIAO ESP32S3 Sense access to Edge Impulse. The original article is very detailed and contains a lot of knowledge about machine learning."),(0,a.yg)("p",null,"If you would like to read the original content of this article, you can go straight to the original article by scrolling down."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-keyword-spotting-kws-5fa6e7#toc-capturing--offline--audio-data-with-the-xiao-esp32s3-sense-5"},"TinyML Made Easy: KeyWord Spotting (KWS)"))),(0,a.yg)("p",null,"MJRoBot also has very many interesting projects about the XIAO ESP32S3."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.hackster.io/mjrobot/exploring-machine-learning-with-the-new-xiao-esp32s3-6463e5"},"Exploring Machine Learning with the new XIAO ESP32S3")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae"},"TinyML Made Easy: Image Classification"))))}u.isMDXComponent=!0}}]);