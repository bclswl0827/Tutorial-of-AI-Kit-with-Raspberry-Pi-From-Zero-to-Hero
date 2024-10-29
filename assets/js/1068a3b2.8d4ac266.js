"use strict";(self.webpackChunktutorial_of_ai_kit=self.webpackChunktutorial_of_ai_kit||[]).push([[911],{5033:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(5893),a=i(1151);const r={sidebar_position:2},s="Introduction to OpenCV in Raspberry Pi Environment",o={id:"Chapter 2 - Configuring the RaspberryPi Environment/Introduction_to_OpenCV",title:"Introduction to OpenCV in Raspberry Pi Environment",description:"Introduction",source:"@site/../articles/Chapter 2 - Configuring the RaspberryPi Environment/Introduction_to_OpenCV.md",sourceDirName:"Chapter 2 - Configuring the RaspberryPi Environment",slug:"/Chapter 2 - Configuring the RaspberryPi Environment/Introduction_to_OpenCV",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 2 - Configuring the RaspberryPi Environment/Introduction_to_OpenCV",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mastering Computer Vision with Seeed Studio",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 2 - Configuring the RaspberryPi Environment/Overview_of_Computer_Vision"},next:{title:"Training Your Model",permalink:"/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/docs/Chapter 5 - Custom Model Development and Deployment/Training Your Model"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Read an Image",id:"read-an-image",level:2},{value:"Capturing Video Feed from a USB Camera using OpenCV",id:"capturing-video-feed-from-a-usb-camera-using-opencv",level:2},{value:"Basic Image Manipulations",id:"basic-image-manipulations",level:2},{value:"Drawing on A image",id:"drawing-on-a-image",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction-to-opencv-in-raspberry-pi-environment",children:"Introduction to OpenCV in Raspberry Pi Environment"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["OpenCV (Open Source Computer Vision Library) is a powerful open-source library used for real-time computer vision and image processing tasks. It provides tools for tasks like object detection, face recognition, image manipulation, and video analysis, and is widely used in applications such as surveillance, robotics, and augmented reality.\nIn this course, we will install OpenCV on a Raspberry Pi environment and explore the basics of image manipulations, ",(0,t.jsx)(n.strong,{children:"such as reading and writing images/video feed, applying filters, and detecting shapes. OpenCV is widely used for real-time computer vision tasks, enabling projects like object detection, face recognition, and video analysis."})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s the step-by-step process for installing OpenCV on a Raspberry Pi 5 environment running the latest 64-bit OS (Bookworm distribution)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 01: Create a Directory for the Course"})}),"\n",(0,t.jsx)(n.p,{children:"First, let's create a directory called my_opencv_course and navigate into it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir my_opencv_course\ncd my_opencv_course\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 02: Create a Virtual Environment"})}),"\n",(0,t.jsx)(n.p,{children:"In this directory, create a virtual environment using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python -m venv --system-site-packages env\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 03: Activate the Virtual Environment"})}),"\n",(0,t.jsx)(n.p,{children:"Now, activate the virtual environment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Step 04 ",":Install"," OpenCV"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 install opencv-contrib-python\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 05: Verify the Installation"})}),"\n",(0,t.jsx)(n.p,{children:"To confirm that OpenCV has been installed correctly, run the following in Python:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, within the Python interpreter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\nprint(cv2.__version__)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the version prints successfully (e.g., 4.10.x), then OpenCV has been installed properly."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenCV installed",src:i(9669).Z+"",width:"661",height:"472"})}),"\n",(0,t.jsx)(n.h2,{id:"read-an-image",children:"Read an Image"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 01: Create a new Folder on Desktop. This case I used file name as OpenCV_Files"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Folder",src:i(2125).Z+"",width:"1023",height:"220"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 02: Place the image file lenna.png inside this folder."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lenna2",src:i(244).Z+"",width:"944",height:"385"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 03: Open the Python interpreter."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Thonny",src:i(8941).Z+"",width:"1021",height:"446"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 04: Write the following code to read and display the image. Save it as Lesson1.py on OpenCV_Files folder"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\nimport os\n\n# Define the path to the image\nimage_path = os.path.expanduser('/home/pi/Desktop/OpenCV_Files/lenna.png')\n\n# Read the image\nimage = cv2.imread(image_path)\n\n# Check if the image was loaded correctly\nif image is None:\n    print(\"Error: Image not found!\")\nelse:\n    # Display the image in a window\n    cv2.imshow('Lenna Image', image)\n\n    # Wait for a key press and then close the window\n    cv2.waitKey(0)\n    cv2.destroyAllWindows()\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  05: Go to Terminal and activate the virtual environment that we created."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my_opencv_course\nsource env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:"Step  06: Navigate the folder that you saved python file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /home/pi/Desktop/OpenCV_Files\n"})}),"\n",(0,t.jsx)(n.p,{children:"Step 07: Run the python script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python Lesson1.py\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Thonny",src:i(7822).Z+"",width:"1004",height:"797"})}),"\n",(0,t.jsx)(n.p,{children:"Press any key to exit the image view. Congratulations! Now you know how to read an image."}),"\n",(0,t.jsx)(n.h2,{id:"capturing-video-feed-from-a-usb-camera-using-opencv",children:"Capturing Video Feed from a USB Camera using OpenCV"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1: Plug in the USB Camera"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 2: Verify the Camera is Detected"})}),"\n",(0,t.jsx)(n.p,{children:"Open the terminal and run the following command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/video*\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Video_Cam",src:i(9968).Z+"",width:"661",height:"468"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3: Write the Python Script to Capture Video Feed."}),"\nOpen Thonny or a text editor and create a new Python script."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\n\n# Capture video feed from the first connected camera (USB)\ncap = cv2.VideoCapture(0)\n\n# Check if the camera opened successfully\nif not cap.isOpened():\n    print(\"Error: Could not open camera.\")\nelse:\n    while True:\n        # Read a frame from the camera\n        ret, frame = cap.read()\n\n        # If the frame is read successfully, display it\n        if ret:\n            cv2.imshow('USB Camera Feed', frame)\n\n        # Press 'q' to exit the video feed window\n        if cv2.waitKey(1) & 0xFF == ord('q'):\n            break\n\n    # Release the camera and close the window\n    cap.release()\n    cv2.destroyAllWindows()\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 04: Save it as Lesson2.py on OpenCV_Files folder"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Video_Cam",src:i(9831).Z+"",width:"1026",height:"731"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  05: Go to Terminal and activate the virtual environment that we created."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my_opencv_course\nsource env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  06: Navigate the folder that you saved python file."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /home/pi/Desktop/OpenCV_Files\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 07: Run the python script"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python Lesson2.py\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lesson 2",src:i(3258).Z+"",width:"1012",height:"755"})}),"\n",(0,t.jsx)(n.h2,{id:"basic-image-manipulations",children:"Basic Image Manipulations"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"What is Image Manipulation?"})}),"\n",(0,t.jsx)(n.p,{children:"Image manipulation refers to the process of altering or analyzing images to achieve certain objectives such as enhancing visual quality, detecting objects, or extracting meaningful information. By transforming images through various techniques, we can simplify their representation and prepare them for tasks like object recognition, edge detection, or machine learning applications. Image manipulation is crucial in fields like medical imaging, computer vision, and digital media."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Why is Image Manipulation Important?"})}),"\n",(0,t.jsx)(n.p,{children:"Image manipulations are fundamental because they allow computers to understand and process visual information more effectively. Operations like filtering, detecting edges, or adjusting pixel intensity help simplify the complexity of images, making it easier to detect objects, shapes, or features. These techniques are the building blocks for advanced applications such as face recognition, autonomous vehicles, and smart surveillance systems."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Common Image Manipulation Methods:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["1.",(0,t.jsx)(n.strong,{children:"Grayscale Conversion"}),": Converts an image from color (RGB) to grayscale, simplifying the data by removing color information and focusing only on intensity levels. This is useful for reducing computational complexity and is often a preprocessing step for further analysis like edge detection."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["2.",(0,t.jsx)(n.strong,{children:"Blurring and Edge Detection (Canny)"}),": Blurring smooths an image, reducing noise and detail, while edge detection (like the Canny method) identifies sharp changes in intensity, marking the boundaries of objects in an image."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["3.",(0,t.jsx)(n.strong,{children:"Dilation and Erosion"}),": Morphological operations that modify the shape of objects in binary or grayscale images. Dilation expands object boundaries, making features more prominent, while erosion shrinks boundaries, removing noise or small features."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 01: Write the following code to read and display the image. Save it as Lesson3.py on OpenCV_Files folder"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\nimport numpy as np\n\n# Load the image\nimage_path = '/home/pi/Desktop/OpenCV_Files/lenna.png'\nimage = cv2.imread(image_path)\n\n# Function to resize the images to the same width and height\ndef resize_image(image, width=300, height=300):\n    return cv2.resize(image, (width, height))\n\n# Grayscale Conversion\ngray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\n\n# Blurring the image (Gaussian Blur)\nblurred_image = cv2.GaussianBlur(gray_image, (5, 5), 0)\n\n# Edge Detection (Canny)\nedges = cv2.Canny(blurred_image, 100, 200)\n\n# Dilation and Erosion\ndilated_image = cv2.dilate(edges, np.ones((3, 3), np.uint8), iterations=1)\neroded_image = cv2.erode(dilated_image, np.ones((3, 3), np.uint8), iterations=1)\n\n# Resize the images\nresized_original = resize_image(image)\nresized_gray = resize_image(gray_image)\nresized_blur = resize_image(blurred_image)\nresized_edges = resize_image(edges)\nresized_dilate = resize_image(dilated_image)\nresized_erode = resize_image(eroded_image)\n\n# Stack images into a grid (2 rows and 3 columns)\n# Convert grayscale images to BGR so they can be tiled with color images\nresized_gray_bgr = cv2.cvtColor(resized_gray, cv2.COLOR_GRAY2BGR)\nresized_blur_bgr = cv2.cvtColor(resized_blur, cv2.COLOR_GRAY2BGR)\nresized_edges_bgr = cv2.cvtColor(resized_edges, cv2.COLOR_GRAY2BGR)\nresized_dilate_bgr = cv2.cvtColor(resized_dilate, cv2.COLOR_GRAY2BGR)\nresized_erode_bgr = cv2.cvtColor(resized_erode, cv2.COLOR_GRAY2BGR)\n\n# Create a grid of images (tiles)\ntop_row = np.hstack((resized_original, resized_gray_bgr, resized_blur_bgr))\nbottom_row = np.hstack((resized_edges_bgr, resized_dilate_bgr, resized_erode_bgr))\n\n# Combine the two rows into one final image\nfinal_image = np.vstack((top_row, bottom_row))\n\n# Display the final tiled image\ncv2.imshow(\"Image Manipulations in Tiles\", final_image)\n\n# Wait for any key press to close\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  02: Go to Terminal and activate the virtual environment that we created."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my_opencv_course\nsource env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  03: Navigate the folder that you saved python file."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /home/pi/Desktop/OpenCV_Files\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 04: Run the python script"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python Lesson3.py\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Img manu",src:i(3007).Z+"",width:"1010",height:"756"})}),"\n",(0,t.jsx)(n.p,{children:"Press q to exit."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exercise: Experiment with Image Manipulation Parameters"})}),"\n",(0,t.jsx)(n.p,{children:"Change the parameters of each function to explore how they affect the image manipulation. For example, try changing the kernel size in cv2.GaussianBlur() from (5, 5) to (3, 3) and observe the differences in the blurred image."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Suggestions"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Grayscale Conversion: You can experiment with different color spaces by using cv2.COLOR_BGR2HSV or cv2.COLOR_BGR2LAB instead of cv2.COLOR_BGR2GRAY."}),"\n",(0,t.jsx)(n.li,{children:"Blurring: Modify the kernel size (e.g., from (5, 5) to (3, 3)) in cv2.GaussianBlur() to see how the image becomes more or less blurred."}),"\n",(0,t.jsx)(n.li,{children:"Edge Detection (Canny): Adjust the thresholds (e.g., from 100, 200 to 50, 150) to make the edge detection more or less sensitive."}),"\n",(0,t.jsx)(n.li,{children:"Dilation and Erosion: Try different kernel sizes in cv2.dilate() and cv2.erode() (e.g., use a larger kernel like 5x5) to see how the object boundaries change."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"drawing-on-a-image",children:"Drawing on A image"}),"\n",(0,t.jsx)(n.p,{children:"In object detection, you often see bounding boxes highlighting detected objects, along with the class name and probability score. OpenCV allows you to easily add shapes like rectangles and overlay text onto video frames or images. This is useful for visualizing real-time detection results, such as displaying the FPS or labeling objects. Here's how you can draw a rectangle and add text, like FPS, on a live video feed using OpenCV."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 01: Write the following code to read and display the image. Save it as Lesson3.py on OpenCV_Files folder"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\nimport time\n\n# Capture video feed from the first camera (USB or internal)\ncap = cv2.VideoCapture(0)\n\n# Get the starting time for FPS calculation\nprev_frame_time = 0\n\n# Infinite loop for continuous video feed\nwhile True:\n    # Capture the video frame-by-frame\n    ret, frame = cap.read()\n\n    # Check if the frame was successfully captured\n    if not ret:\n        print(\"Error: Unable to capture video.\")\n        break\n\n    # Get the current time for FPS calculation\n    new_frame_time = time.time()\n\n    # Calculate the FPS (frames per second)\n    fps = 1 / (new_frame_time - prev_frame_time)\n    prev_frame_time = new_frame_time\n\n    # Convert FPS to an integer\n    fps = int(fps)\n\n    # Convert FPS to a string\n    fps_text = f\"FPS: {fps}\"\n\n    # Draw a rectangle on the frame\n    # Arguments: frame, start_point, end_point, color (BGR), thickness\n    cv2.rectangle(frame, (50, 50), (300, 300), (0, 255, 0), 2)\n\n    # Add text inside the rectangle\n    cv2.putText(frame, \"Object Class: Example\", (60, 100), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)\n\n    # Add FPS text at the top of the frame\n    cv2.putText(frame, fps_text, (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)\n\n    # Display the resulting frame\n    cv2.imshow('Video Stream with Bounding Box and FPS', frame)\n\n    # Press 'q' to quit the video feed\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break\n\n# Release the video capture object and close all windows\ncap.release()\ncv2.destroyAllWindows()\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  02: Go to Terminal and activate the virtual environment that we created."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my_opencv_course\nsource env/bin/activate\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step  03: Navigate the folder that you saved python file."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /home/pi/Desktop/OpenCV_Files\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 04: Run the python script"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python Lesson4.py\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Video_output",src:i(8262).Z+"",width:"1021",height:"729"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2125:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/folder-8482d658d012d57379c1dc3512098574.PNG"},3007:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/imagemanupulations-7ef52b8b0aac3b982d75aac74d570a77.PNG"},9669:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/install_openCV-dd7f5a204825b7a751b7fd5a222d6144.PNG"},244:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lenna2-69df5367934ce06622a0ae9fa1263419.PNG"},9831:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lesson2-055232bf3f35bf5bac66ddd1c2648e7d.PNG"},7822:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/readimage-9515706d338d1bb3bfe724f6add071da.PNG"},8941:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/thonny-48d0b2f506e001633741ddf5ba6a6618.PNG"},9968:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/video_cam-aa389b65a489dfc6a8131b848be41300.PNG"},8262:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/video_output-1c151d385ef081f4ec630f1c33d81bee.PNG"},3258:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/webcmfeed-953f81b1abb89e3c871f989f5dcd066b.PNG"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(7294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);