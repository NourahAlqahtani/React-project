import React from 'react'

function Courss(Props) {
  return (
    <div className='card' >
        <img src={Props.img}></img>
        <p>Cours is: {Props.text?Props.text : "Not avalbail"}</p>
    
    </div>
  )
}

export default Courss
