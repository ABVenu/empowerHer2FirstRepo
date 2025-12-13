import React from 'react'

const DisplayOddCount = ({number,counter}) => {
  return (
    <div style={{color:counter==1?"blue":"red"}}>
     <h3>The number, that is {number} is odd number, coming from counter number {counter}</h3>
    </div>

  )
}

export default DisplayOddCount