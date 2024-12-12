import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


export default function FaceScanner() {
  const webcamRef = useRef(null); // Corrected useRef syntax
  const [isCaptured, setIsCaptured] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const captureInterval = 3000;
  const [imageSrc1, setImageSrc1] = useState(null);
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current?.getScreenshot();
  //   if (imageSrc) {
  //     // Typically, you would send the image to your server or process it
  //     console.log("Image captured:", imageSrc);
  //     setIsCaptured(true);
  //     setTimeout(() => setIsCaptured(false), 3000);
  //   }
  // }, []);
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        captureAndRecognize();
      }, captureInterval);

      return () => clearInterval(interval);
    }
  }, [isScanning]);
  const captureAndRecognize = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    const blob = await fetch(imageSrc).then((res) => res.blob());

    const formData = new FormData();
    formData.append('image', blob, 'captured_image.jpg');


    if (isScanning) {
      try {
        const response = await axios.post(
          'http://127.0.0.1:5002/recognize-face',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        

        if (response.data.faces && response.data.faces[0] && response.data.faces[0].status && response.data.faces[0].status === "ok") {
          setImageSrc1(response.data.faces.image);
          setName(response.data.faces[0].name);
          setTime(response.data.faces[0].time);
          setIsScanning(false); 
          console.log("okkkkkkk")
        }

        if (response.data.faces && response.data.faces[0] && response.data.faces[0].status && response.data.faces[0].status === "bad") {
          // navigate('/Page4', { replace: true, state: imageSrc1})
          console.log("okkkkkkk")

        }
      } catch (error) {
        console.error('Error recognizing face:', error);
      }
    }}

  return (
    <>
      <div className="w-full max-w-md mx-auto p-4 mt-8 sm:mt-16 md:mt-32">
        <div className="relative w-full h-[400px] max-w-[400px] mx-auto">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover rounded-lg"
            videoConstraints={{
              width: { min: 400, ideal: 1280, max: 1920 },
              height: { min: 400, ideal: 720, max: 1080 },
              facingMode: "user",
            }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96  border-2 border-white rounded-lg pointer-events-none"></div>
        </div>
      </div>

     

     
    </>
  );
}
