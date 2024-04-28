import { useEffect, useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {
  const [length, setLength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("");
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+= '/^!@#$%^&*]{}$/'
       let pass = "";
    for (let i = 1; i <=length; i++) {
       pass += str.charAt(Math.floor(Math.random() * str.length+1));
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[numberAllowed, charAllowed, length, passwordGenerator])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className='flex w-full h-screen justify-center my-20 '>
        <div className="w-2/4 h-40 bg-gray-700 rounded-xl ">
          <div className="w-full h-full justify-center items-center text-orange-500">
            <div className="flex w-full justify-center shadow-sm rounded-lg overflow-hidden my-7 ">
              <input className="w-3/4 outline-none rounded-l-xl text-orange-500 text-lg py-1 px-3" 
              type="text" value={password} placeholder="Password" ref={passwordRef} readOnly />
              <button onClick={copyPassword} className="bg-blue-500 text-white rounded-r-lg  px-4">Copy</button>
            </div>
            <div className="flex w-full gap-5 justify-center text-xl font-bold">
            <div>
              <input type="range" 
              min={6} max={100} 
              value={length}
              onChange={(e)=>setLength(e.target.value)} />
              <label>Length:{length}</label>
            </div>
            <div>
              <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
               />
               <label>Numeber</label>
            </div>
            <div>
              <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
               />
               <label>Character</label>
            </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default App
