import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

export default function FaceScanner() {
  const webcamRef = useRef(null); // Corrected useRef syntax
  const [isCaptured, setIsCaptured] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // Typically, you would send the image to your server or process it
      console.log("Image captured:", imageSrc);
      setIsCaptured(true);
      setTimeout(() => setIsCaptured(false), 3000);
    }
  }, []);

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

          <div className=" h-[400px]  w-full max-w-[400px] mx-auto p-4 mt-8 sm:mt-16 md:mt-32 absolute top-1/2 left-1/2 transform -translate-x-1/2
           -translate-y-1/2 border-2 border-white rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}
