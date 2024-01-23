import { useState } from 'react'
import './App.css'

function App() {
  
  let  [count, setCount] = useState(0)

  const increment = ()=>{
    if (count<20){
      setCount(count+1)
    }
  }
  const decrement = ()=>{
      if(count>0){
        setCount(count-1)
      }
  }
  return (
      <>
      <button onClick={increment}>add Value {count} </button>
      <button onClick={decrement}>remove Value {count} </button>
      </>
  )
}

export default App
