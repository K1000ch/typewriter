import React from 'react'
import ReactWaterWave from "react-water-wave"
import Image from "../../static/water-wave-img/img2.jpg"

let rippleStyle = {
  backgroundImage: `url(${Image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}

const WaterWave = () => {
  return(
    <ReactWaterWave
      className="ripple"
      style={rippleStyle}
    >
    </ReactWaterWave>
  )
}

export default WaterWave
