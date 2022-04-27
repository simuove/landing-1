import React from "react";
import "./index.css"

function VideoBackground() {

    return (<>
        <video
            playsInline
            autoPlay
            muted
            loop
            // poster="polina.jpg" 
            id="bgvid">
            {/* <source src="polina.webm" type="video/webm"/> */}
            <source
                src="https://simuove-online-repo.s3.amazonaws.com/river-sky-sun.mp4"
                type="video/mp4" />
        </video>


            <div className="viewport-header-title-container">

               
            </div>
    </>)
};

export default VideoBackground;