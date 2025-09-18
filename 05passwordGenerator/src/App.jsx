import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [spCharAllowed, setSpCharAllowed] = useState(false);

  const passwordRef = useRef(null)
   
  const passwordGenerator = useCallback(
    ()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numsAllowed) str += "0123456789"
      if (spCharAllowed) str += "!@#$%^&*-_+=[]{}~`"  

      for (let i = 1; i <= length; i++) {
        const char = Math.floor(Math.random() * str.length + 1);  
        pass += str.charAt(char);    
      }
      setPassword(pass);
    } , [length,numsAllowed,spCharAllowed] )
    
    const copyPassToClipboard = useCallback(() => {
      passwordRef.current?.select();  
      window.navigator.clipboard.writeText(password)  
    }, [password])

     useEffect(()=> {
      passwordGenerator();
    }, [length, numsAllowed, spCharAllowed, passwordGenerator])

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-img'>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref = {passwordRef}
            className='outline-none w-full py-1 px-3'
          />
          <button className='outline-none shadow bg-blue-800 text-blue px-2 py-1 shrink-0' onClick={copyPassToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            name="passLength"
            id="passLength" 
            min={6}
            max={100}
            value={length}  
            className='cursor-pointer'
            onChange={(e) => {setLength(Number(e.target.value))}} 
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id='numsAllowed'
            defaultChecked={numsAllowed}
            onChange={() => setNumsAllowed((prev) => !prev)}
            />
            <label htmlFor="numsAllowed">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id='spCharAllowed'
            onChange={() => setSpCharAllowed((prev) => !prev)}
            defaultChecked={spCharAllowed}
            />
            <label htmlFor="spCharAllowed">Special Characters</label>
          </div>

        </div>
      </div>
      </div>
  )
}

export default App