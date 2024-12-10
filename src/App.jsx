import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from "./UI/Loader/Loader";
import FaceScanner from './UI/Face/FaceScanner';






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
};










export default App;


function Register({ registerOnSuccess, registerOnFail }) {
  return (
    <>






      <h2 className='flex items-center justify-center mt-12 text-[24px]'>Face Recognition </h2>

      <FaceScanner />


      <br />
      <button onClick={registerOnSuccess}>Success</button>
      <button onClick={registerOnFail}>Fail</button>


    </>
  );
}

function Failed() {
  return <h1>Failed</h1>;
}

function Success() {
  return (
    <>
      <h1>Success</h1>
    </>
  );
}


function Landing() {
  return (
    <>


      <Loader />

      <h1 className='absolute top-[52%] left-2/4 -mt-[50px] -ml-[50px] font-extralight'>Shaper</h1>



    </>
  );
}





