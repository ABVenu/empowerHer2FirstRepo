import React from 'react'

const GreetUser = ({name}) => {

   // console.log("props", props)
    console.log("name", name)
  return (
    <div>
        <h3>Hi {name}</h3>
    </div>
  )
}

export default GreetUser