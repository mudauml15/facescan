import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

export default function FaceScanner() {
    const webcamRef = useRef(null); // Corrected useRef syntax
    const [isCaptured, setIsCaptured] = useState(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            // Typically, you would send the image to your server or process it
            console.log('Image captured:', imageSrc);
            setIsCaptured(true);
            setTimeout(() => setIsCaptured(false), 3000); // Reset after 3 seconds
        }
    }, []);

    return (
        <div className="w-full max-w-md mx-auto p-4 mt-36">
            <div className="relative">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full rounded-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-lg pointer-events-none"></div>
            </div>
            <div className="mt-4 flex flex-col items-center mb-4">
                <button
                    onClick={capture}

                >
                    Capture
                </button>
                {isCaptured && (
                    <div className="mt-4 text-center text-green-600 font-semibold">
                        Image captured successfully!
                    </div>
                )}
            </div>
        </div>
    );
}
