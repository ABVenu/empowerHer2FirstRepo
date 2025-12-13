import React, { useEffect, useState } from 'react'
import DisplayOddCount from './DisplayOddCount'

const Counter = () => {

    //const count = 1000 ; /// uncontrolled declaration
    // const [getter, setter] = React.useState(initialvalue)
    // intialValue deaclred by us or else coming from fetch etc
    // setter updates intialValue in React's memory 
    // gette gets the data from React's memory
    /// with the Data gets updated safel, React senses that and updates in UI
    const [count, setCount] = useState(100)
    const [count2, setCount2] = useState(999)
    function handleIncrement() {
        //count++;
        setCount((prev) => prev + 1)

        /// The below is side effect, which means, the if condition should work only 
        // after state gets updated, 
        /// useEffect is watcher for state upadtion, hence if should be written there
        // if(count%2==1){
        //     alert(`This is odd number-> count: ${count}`)
        // }
        // setCount((prev)=> prev+1)
        // setCount(count+1)
        //  setCount(count+1)
        //setCount(1008+1)
        // console.log("count", count)
    }

    function handleIncrement2() {
        setCount2((prev) => prev + 1)
    }

    // useEffect(() => {
    //     if (count % 2 == 1) {
    //         alert(`This is odd number-> count1: ${count}`)
    //     }
    //     ///alert("")
    //     // if(count2%2==1){
    //     //   alert(`This is odd count 2 number-> count2: ${count2}`)
    //     // }
    //     //console.log("No Dep Array, hence works for every rerender")
    // }, [count])


    // useEffect(() => {
    //     if (count2 % 2 == 1) {
    //         alert(`This is odd count 2 number-> count2: ${count2}`)
    //     }
    // }, [count2])

    return (
        <div>

            <h4>This mini counter app</h4>
            <h3>The current count1 is: {count}</h3>
            <button onClick={handleIncrement}>Increment Count1</button>
            <hr />
            <h3>The current count2 is: {count2}</h3>
            <button onClick={handleIncrement2}>Increment Count2</button>
            {/* <DisplayOddCount number={99} counter={1} /> */}
            {count%2==1 && <DisplayOddCount number={count} counter={1} /> }
            {/* {count%2==1?<DisplayOddCount number={count} counter={1} /> :""} */}
             {count2%2==1?<DisplayOddCount number={count2} counter={2} /> :""}


        </div>
    )
}

export default Counter