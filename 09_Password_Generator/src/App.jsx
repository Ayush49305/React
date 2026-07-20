// import React, { useState,useCallback } from 'react'
// const App = () => {

//   const [length,setLength]=useState(8)
//   const [numberAllowed,setNUmberAllowed]=useState(false)
//   const [charAllowed,setCharAllowed]=useState(false)
//   const [password,setPassword]=useState("")

//   const passwordGenerator=useCallback(()=>{
//   let pass=""
//   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

//     if(numberAllowed) str+="0123456789"
//     if(charAllowed) str+="!@#$%^&*()_+{}[]~`?/:"

//     for(let i=1;i<=length;i++){
//       let char=Math.floor(Math.random() * str.length+1)

//       pass=str.charAt(char)
//     }
//       setPassword(pass)


//     },[length,numberAllowed,charAllowed,setPassword])
 
//   return (
//     <>
//         <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>Test

//         </div>
      
//     </>
//   )
// }

// export default App

import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]~`?/:";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //Generate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
  <div className='w-full h-screen bg-black flex justify-center'>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center text-2xl my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='password'
        readOnly
         />

      </div>

     </div>
  </div>
  )
}

export default App;
