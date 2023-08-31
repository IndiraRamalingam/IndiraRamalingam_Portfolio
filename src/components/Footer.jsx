import React from 'react'
import '/src/index.css'

function Footer() {

  const footer ={
    "color":"#69696b",
    "font-weight":"bolder",
    "backgroundColor": " #ecedf142",
    // "position": "absolute",
    "left": "0",
    "bottom": "0",
    "right": "0",
    "height" : "3.5rem",
    "display":"flex",
   " alignItems": "center",
    "justifyContent": "center",   
}


  return (
    <div>
       <div style={footer}>
      <p className='mt-3'>Created By Indira Ramalingam @ 2023</p>
    </div>
    </div>
  )
}

export default Footer