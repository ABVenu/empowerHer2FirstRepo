import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

   return (
    <div>
      {/* <h3>Welcome to React Revision Session</h3>
       <h3>Which Happens on Saturday</h3> */}
     {/* <Welcome /> */}
     <Counter />
    </div>
  )
}

export default App
