import React from 'react'
import './clock.css'
import AnalogClock from 'analog-clock-react';

function Clock() {
   
let options =  {
    "useCustomTime": false,
    "width": "238px",
    "border": true,
    "borderColor": "#0a0a0a",
    "baseColor": "#00997a",
    "centerColor": "#e12114",
    "centerBorderColor": "#ffffff",
    "handColors": {
      "second": "#d81c7a",
      "minute": "#ffffff",
      "hour": "#ffffff"
    }
  }
  return (
    <div  className='clock'>
    <AnalogClock {...options} />
    </div>
  )
}

export default Clock