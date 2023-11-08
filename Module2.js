import React from 'react'
import {b} from './Module'
import Module3 from './Module3'
import img from "./170051_original_4096x2731.jpg"
export default function Module2() {
  return (
    <div>
        <h2>{b}</h2>
        <Module3/>
        <img src={img}/>
    </div>
  )
}
