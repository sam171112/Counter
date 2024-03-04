import { useState } from "react"
import './App.css'
function App() {
    const[count,setCount]=useState(0)

  return(
          <div className="mainDiv">
           <p className="Para">Count : {count}</p>
           <div className="subDiv">
            <button onClick={()=>{
              if(count<25)
              {
                setCount(count+1)
              }
              else
              {
                alert("You Can't Increment Count More than 25")
              }
            }}>+</button>
            <button onClick={()=>{
              if(count>0)
              {
                setCount(count-1)
              }
              else
              {
                alert("You Can't Decrement Count Less than 0")
              }
            }}>-</button>
        <button onClick={()=>{
              setCount(0)
            }}>Reset</button>
           </div>
          </div>

    )
}

export default App
