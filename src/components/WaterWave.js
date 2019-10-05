import React from 'react'
import ReactWaterWave from "react-water-wave"
import Image from "../../static/img/999823c5-fd69-4329-8a35-8424b8f9779c.jpeg"



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
