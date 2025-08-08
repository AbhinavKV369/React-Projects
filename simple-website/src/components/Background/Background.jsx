import React from 'react'
import "./Background.css"

import video from "../../assets/video.mp4"
import harrier from "../../assets/harrier.jpg";
import nexon from "../../assets/nexon.jpg";
import altroz from "../../assets/altroz.webp";

const Background = ({heroCount,playStatus}) => {

  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={harrier} alt="" className='background'/>;
  } else if (heroCount === 1) {
    return <img src={nexon} alt="" className='background' />;
  } else if (heroCount === 2) {
    return <img src={altroz} alt="" className='background' />;
  }

  return (
    <div>

    </div>
  )
}

export default Background