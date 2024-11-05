"use strict";(self.webpackChunktutorial_of_ai_kit=self.webpackChunktutorial_of_ai_kit||[]).push([[742],{4037:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=t(5893),s=t(1151);const o={sidebar_position:4},a="Mastering Computer Vision with Seeed Studio",r={id:"Chapter 1 - Introduction to AI/Introduction_of_Computer_Vision",title:"Mastering Computer Vision with Seeed Studio",description:"Introduction",source:"@site/../articles/Chapter 1 - Introduction to AI/Introduction_of_Computer_Vision.md",sourceDirName:"Chapter 1 - Introduction to AI",slug:"/Chapter 1 - Introduction to AI/Introduction_of_Computer_Vision",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 1 - Introduction to AI/Introduction_of_Computer_Vision",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Introduction of Convolutional Neural Network",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 1 - Introduction to AI/Introduction_of_Convolutional_Neural_Network"},next:{title:"Generative AI (GenAI)",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 1 - Introduction to AI/Introduction_of_Large_Language_Model"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Computer Vision Tasks",id:"computer-vision-tasks",level:2},{value:"Image Classification",id:"image-classification",level:3},{value:"Object Detection",id:"object-detection",level:3},{value:"Object Tracking",id:"object-tracking",level:3},{value:"Segmentation",id:"segmentation",level:3},{value:"Content-Based Image Retrieval",id:"content-based-image-retrieval",level:3},{value:"Pose Estimation",id:"pose-estimation",level:3},{value:"How Do Computer Vision and Image Processing Differ, and Where Do They Overlap?",id:"how-do-computer-vision-and-image-processing-differ-and-where-do-they-overlap",level:2},{value:"Become a Computer Vision Champ: Unlock the Power of AI in Visual Data!",id:"become-a-computer-vision-champ-unlock-the-power-of-ai-in-visual-data",level:2},{value:"Introduction to Computer Vision with OpenCV",id:"introduction-to-computer-vision-with-opencv",level:3},{value:"Deep Learning",id:"deep-learning",level:3},{value:"Raspberry Pi and Hailo Accelerator Integration",id:"raspberry-pi-and-hailo-accelerator-integration",level:3},{value:"Next Steps: Think Smart, Apply Smart!",id:"next-steps-think-smart-apply-smart",level:2}];function d(e){const i={br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"mastering-computer-vision-with-seeed-studio",children:"Mastering Computer Vision with Seeed Studio"}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Computer vision is a branch of artificial intelligence that enables machines to interpret and understand visual data, such as images and videos, similar to human perception. By leveraging machine learning and neural networks, computer vision systems can identify objects, recognize patterns, and make decisions based on visual input. This technology powers applications like facial recognition, object detection, and automated monitoring across various industries."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"CV-Tasks",src:t(6341).Z+"",width:"1280",height:"717"})}),"\n",(0,n.jsx)(i.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Security and Safety"}),":Imagine"," you have a security system that automatically detects when someone enters your backyard. A camera, powered by computer vision, recognizes human figures in real-time and sends alerts to your phone. It can even distinguish between a person, an animal, or an object, helping to prevent false alarms. In more advanced systems, facial recognition can identify who the person is, adding an extra layer of security."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Operational Efficiency in Industry"}),":In"," a factory, computer vision is used to monitor assembly lines for defects. As products move along the line, high-speed cameras capture detailed images, and AI instantly analyzes them to detect issues like cracks, improper assembly, or missing parts. The system alerts the workers or even stops the production line to prevent faulty products from being shipped, improving operational efficiency and reducing waste."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Healthcare"}),":In"," a hospital, computer vision aids doctors in diagnosing diseases. For example, it analyzes medical images such as X-rays, MRIs, or CT scans, highlighting areas of concern that might indicate tumors or other abnormalities. This assists radiologists by providing a second opinion, leading to faster and more accurate diagnoses, ultimately saving lives."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Sports Performance Analysis"}),":Imagine"," you're a coach for a soccer team, and you use computer vision to analyze your players\u2019 movements during a game. Cameras track each player's positioning, speed, and interactions with the ball, providing data on performance and areas for improvement. The system highlights key moments and tactics, helping coaches strategize better for future matches and allowing players to refine their skills with precision."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Autonomous Vehicles/Self-driving Cars"}),":Picture"," yourself in a self-driving car that navigates through a busy city. Computer vision systems continuously scan the road, detecting pedestrians, other vehicles, road signs, and obstacles. When a pedestrian suddenly crosses the street, the system instantly recognizes it and applies the brakes. These vision-powered systems are crucial for ensuring the safety and smooth operation of autonomous vehicles."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Agriculture"}),":In"," a large farm, computer vision drones fly over fields, capturing images of crops. The AI analyzes the images to assess plant health, detect diseases, and even identify weeds. Farmers receive real-time data on which parts of their crops need more water, nutrients, or pest control. This technology helps optimize crop yields and reduces waste, making farming more sustainable and efficient."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"computer-vision-tasks",children:"Computer Vision Tasks"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"CV-Tasks",src:t(6808).Z+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(i.p,{children:"Here are computer vision tasks described in day-to-day applications with technical insights:"}),"\n",(0,n.jsx)(i.h3,{id:"image-classification",children:"Image Classification"}),"\n",(0,n.jsx)(i.p,{children:"Imagine you\u2019re using a photo app that automatically categorizes your vacation photos into folders like \u201cbeach,\u201d \u201cmountains,\u201d or \u201ccity.\u201d The app scans each image and assigns it to a category based on the dominant features, making it easier for you to organize and retrieve your photos."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),': In image classification, a neural network processes the image as input and assigns a label (or class) based on its trained categories, such as "dog" or "car."']}),"\n",(0,n.jsx)(i.h3,{id:"object-detection",children:"Object Detection"}),"\n",(0,n.jsx)(i.p,{children:"Think of a security camera that can not only see but identify objects. When someone walks into your yard, it detects the person, identifies their location, and sends an alert. It can also differentiate between objects like cars, packages, or animals."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),": Object detection involves identifying objects within an image and marking their location with bounding boxes, usually combining image classification with localization techniques."]}),"\n",(0,n.jsx)(i.h3,{id:"object-tracking",children:"Object Tracking"}),"\n",(0,n.jsx)(i.p,{children:"Picture watching a soccer match on TV, where the camera tracks the ball\u2019s movement as it flies across the field. The system follows the object continuously, making sure you never lose sight of the action."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),": Object tracking continuously follows an object over time in video frames, relying on algorithms like Kalman filters or optical flow to predict the object's position as it moves."]}),"\n",(0,n.jsx)(i.h3,{id:"segmentation",children:"Segmentation"}),"\n",(0,n.jsx)(i.p,{children:"Imagine using a photo editor to isolate yourself from the background in an image to create a perfect portrait. The editor identifies each pixel that belongs to you and separates it from the rest of the scene."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),": Segmentation involves partitioning an image into meaningful segments (pixels belonging to the same object), such as foreground and background, using techniques like Mask R-CNN."]}),"\n",(0,n.jsx)(i.h3,{id:"content-based-image-retrieval",children:"Content-Based Image Retrieval"}),"\n",(0,n.jsx)(i.p,{children:"You upload a picture of a dress to an online store, and it instantly shows you similar dresses available for purchase. The system searches the store's image database based on visual content rather than keywords."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),": Content-based image retrieval (CBIR) matches images by analyzing visual features like color, texture, and shape rather than relying on metadata, using feature extraction algorithms."]}),"\n",(0,n.jsx)(i.h3,{id:"pose-estimation",children:"Pose Estimation"}),"\n",(0,n.jsx)(i.p,{children:"Imagine using your phone's camera for a fitness app that tracks your body movements during workouts, providing real-time feedback on your posture and form. Pose estimation identifies key points of your body, like joints, and maps them to ensure you're exercising correctly, improving safety and performance."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Technical Insight"}),":Pose"," estimation involves detecting and tracking human body keypoints (like elbows, knees, etc.) in an image or video. Techniques like OpenPose and deep learning models analyze these points to estimate the position and movement of a person, commonly used in sports, gaming, and health applications."]}),"\n",(0,n.jsx)(i.h2,{id:"how-do-computer-vision-and-image-processing-differ-and-where-do-they-overlap",children:"How Do Computer Vision and Image Processing Differ, and Where Do They Overlap?"}),"\n",(0,n.jsx)(i.p,{children:"Computer vision and image processing are related but different. Image processing focuses on modifying or enhancing images using techniques like filtering or smoothing, while computer vision aims to understand and interpret the content of images to perform tasks like object recognition. In many cases, image processing is used as a step to help computer vision systems analyze images more effectively."}),"\n",(0,n.jsx)(i.h2,{id:"become-a-computer-vision-champ-unlock-the-power-of-ai-in-visual-data",children:"Become a Computer Vision Champ: Unlock the Power of AI in Visual Data!"}),"\n",(0,n.jsx)(i.p,{children:"If you want to master computer vision, this course is your gateway to success. Let's explore the roadmap to becoming a champion in this transformative field:"}),"\n",(0,n.jsx)(i.h3,{id:"introduction-to-computer-vision-with-opencv",children:"Introduction to Computer Vision with OpenCV"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Logos-png",src:t(2448).Z+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(i.p,{children:"Start with the basics\u2014learn how to read and write images, perform manipulations like grayscale conversion, blurring, resizing, and more. Master face detection, color and shape detection, and perspective transformations to build your foundation."}),"\n",(0,n.jsx)(i.h3,{id:"deep-learning",children:"Deep Learning"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"NN",src:t(2574).Z+"",width:"500",height:"282"})}),"\n",(0,n.jsx)(i.p,{children:"Dive into the world of AI! Get a solid introduction to TensorFlow and neural networks, and explore CNN architectures like LeNet, AlexNet, and VGG16. Learn how object detection works and explore popular architectures such as YOLO, EfficientDet, and MobileNetSSD."}),"\n",(0,n.jsx)(i.h3,{id:"raspberry-pi-and-hailo-accelerator-integration",children:"Raspberry Pi and Hailo Accelerator Integration"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"hailo",src:t(2671).Z+"",width:"960",height:"540"})}),"\n",(0,n.jsx)(i.p,{children:"Discover the power of the Raspberry Pi, a low-cost, energy-efficient platform perfect for edge AI applications. Supercharge it with the Hailo accelerator for real-time predictions. You'll integrate them, implement pretrained models, and even build a custom object detection system!"}),"\n",(0,n.jsx)(i.h2,{id:"next-steps-think-smart-apply-smart",children:"Next Steps: Think Smart, Apply Smart!"}),"\n",(0,n.jsx)(i.p,{children:"Once you've mastered the core skills, it\u2019s time to explore where computer vision can make a real impact. Here\u2019s how you can apply it to smart, real-world applications:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Smart Parking Systems"}),(0,n.jsx)(i.br,{}),"\n","Build systems that automatically detect available parking spots and guide drivers efficiently, reducing congestion and improving parking management."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Intelligent Retail and E-Commerce Systems"}),(0,n.jsx)(i.br,{}),"\n","From smart shopping carts that track items to smart shelves that monitor stock, and even smart refrigerators that suggest recipes based on their contents, computer vision is revolutionizing the shopping experience."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Security and Monitoring Systems"}),(0,n.jsx)(i.br,{}),"\n","Develop intelligent security systems that detect intruders, or create monitoring systems for elderly or child care, ensuring safety with real-time alerts and personalized features."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"The future is smart\u2014let\u2019s get ready to build it!"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6341:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/cv-code-7acdafc230fa802543a870ead0542c65.jpg"},6808:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/cv-tasks-71c2e507f380c7f8405a3980bf99d918.gif"},2671:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/hailo-a678e3dfc8bcb29c81af92e7085b9f6e.gif"},2448:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/logos-fba9ac46de486f79beb9f853c67873c1.png"},2574:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/nn-587822242287c8d7f01daf3a51beb871.gif"},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>a});var n=t(7294);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);