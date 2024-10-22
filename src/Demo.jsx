import React, { useState } from 'react'

function Demo() {
 
    const [count,setcount] = useState(0)
     var plus = ()=>{
        setcount(count +1)
     }
     console.log("hi")
  return (
   <>
   <h1>Count is :{count}</h1>
   <div>
    <button onClick={plus}>Increment</button>
    <button>deccrement</button>
   </div>
   </>
  )
}

export default Demo