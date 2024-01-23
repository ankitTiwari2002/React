import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flax flex-wrap justify-center bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl'>
            <button className='outline-none px-4 bg-red-600 rounded-full text-white shadow-lg' onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none px-4 bg-orange-600 rounded-full text-white shadow-lg' onClick={()=>setColor("orange")}>orange</button>
            <button className='outline-none px-4 bg-yellow-600 rounded-full text-white shadow-lg' onClick={()=>setColor("yellow")}>yellow</button>
            <button className='outline-none px-4 bg-gray-600 rounded-full text-white shadow-lg' onClick={()=>setColor("gray")}>gray</button>
            <button className='outline-none px-4 bg-green-600 rounded-full text-white shadow-lg' onClick={()=>setColor("green")}>green</button>
            <button className='outline-none px-4 bg-indigo-600 rounded-full text-white shadow-lg' onClick={()=>setColor("indigo")}>indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
