import React from 'react'
import GreetUser from './GreetUser'

const Welcome = () => {
  return (
    <div>
         <h3>Welcome to React Revision Session</h3>
       <h3>Which Happens on Saturday</h3>
       <GreetUser name={"Mahalaxmi"}  />
        <GreetUser name={"Bindu"} age={29}  />
    </div>
  )
}

export default Welcome