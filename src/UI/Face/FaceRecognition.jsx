import React from 'react';
import "./FaceRecognition.css"


const FaceRecognition = () => {
    return (
        <>

            <div className="container">
                <header className="header">
                    <button className="icon-button">

                    </button>
                    <div className="logo">

                        <span className="logo-text">ATTENDANCE REGISTER</span>
                    </div>
                    <button className="icon-button">

                    </button>
                </header>

                <main className="main-content">
                    <div className="scanner-container">
                        <div className="scanner-frame">
                            <div className="corner top-left"></div>
                            <div className="corner top-right"></div>
                            <div className="corner bottom-left"></div>
                            <div className="corner bottom-right"></div>

                        </div>
                    </div>

                    <p className="instruction-text">
                        Hold your head still for at least 10 seconds to get accurate face recognition
                    </p>
                    <div>





                    </div>
                </main>


            </div>





        </>

    )

}

export default FaceRecognition
