import React, { useState,useCallback,useEffect,useRef} from 'react'
const App = () => {

  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+{}[]~`?/:"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length+1)

      pass+=str.charAt(char)
    }
      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
    
    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])
 
  return (
    <div className="bg-black flex justify-center pt-20 ">
      <div className="w-192.5 bg-slate-800 rounded-2xl px-7 py-8 shadow-xl mt-10 text-orange-500">
        <h1 className="text-white text-[24px] font-medium text-center mb-5">
          Password generator
        </h1>

        <div className="flex justify-center">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="w-175  h-12 rounded-xl bg-white px-5 text-xl text-gray-800 placeholder:text-gray-400 outline-none mb-5"
          />
          <button onClick={copyPasswordToClipboard}
          className='bg-blue-700 text-white px-5 py-2 outline-none shrink-0 h-12 rounded-xl '>Copy</button>
        </div>
      
        <div className='flex text-sm gap-x-5'>
          <div className='text-2xl flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>

          <div className='text-2xl flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='text-2xl flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>

        </div>
      </div>

    </div>
  )
}
  

export default App


