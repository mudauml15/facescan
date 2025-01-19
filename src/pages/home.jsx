import { useState, useEffect } from "react";
import "./App.css";
import Loader from "../UI/Loader/Loader";
import FaceScanner from "../UI/Face/FaceScanner";

function App() {
    const [showLanding, setShowLanding] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowLanding(false);
            setShowRegister(true);
        }, 3000);
    }, []);

    function registerOnSuccess() {
        setShowRegister(false);
        setShowSuccess(true);
    }

    function registerOnFail() {
        setShowRegister(false);
        setShowFailed(true);
    }

    return (
        <div className="app">
            {showLanding && <Landing />}
            {showFailed && <Failed />}
            {showSuccess && <Success />}
            {showRegister && (
                <Register
                    registerOnSuccess={registerOnSuccess}
                    registerOnFail={registerOnFail}
                />
            )}
        </div>
    );
}

export default App;

function Register({ registerOnSuccess, registerOnFail }) {
    return (
        <>
            <h2 className="flex items-center justify-center mt-12 text-[24px]">
                Face Recognition{" "}
            </h2>

            <FaceScanner />

            <div class="buttons">
                {/* <button onClick={registerOnSuccess}>Success</button>
                <button onClick={registerOnFail}>Fail </button> */}

                <button
                    class="scanBtn"
                    onClick={registerOnSuccess}
                    className="inline-flex h-12 min-w-52 sm:min-w-96 animate-shimmer
         items-center justify-center rounded-md border border-slate-800
         bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
         bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-400
         transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 
         focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    Scan
                </button>
            </div>

            <div class="footer">
                <p>
                    <span className="font-medium text-center flex justify-center font-[montserrat]">
                        FaceID Required.
                    </span>
                    <span>
                        Ensure that your camera focuses on your face and should
                        <br /> be 5cm from your face.
                    </span>
                </p>
            </div>

            <div role="status" id="spinner">
                <svg
                    aria-hidden="true"
                    class=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#00c8B0]"
                    viewBox="0 0 100 101"
                    fill="none"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </>
    );
}

function Failed() {
    return;

    <h1>Failed page you need to retry </h1>;
}

function Success() {
    return (
        <>
            <h1 id="heading">Success page this should grant access</h1>
        </>
    );
}

function Landing() {
    return (
        <>
            <Loader />

            <h1 className="absolute top-[52%] left-2/4 -mt-[50px] -ml-[50px] font-extralight">
                Shaper
            </h1>
        </>
    );
}
