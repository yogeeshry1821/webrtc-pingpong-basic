import { useEffect, useState, useRef } from 'react'
import './App.css'
function App() {
  const [socket,setSocket]=useState()
  const inputRef=useRef();
  const sendMessage=()=>{
    if(!socket){
      return;
    }
    const message=inputRef.current.value;
    socket.send(message);
  }
  useEffect(()=>{
    const wss=new WebSocket("ws://localhost:8080")
    setSocket(wss)
    wss.onmessage=(e)=>{
      alert(e.data)
    }
  },[])
  return (
    <>  
      <input type="text" ref={inputRef} placeholder="input a value...."/>
      <button onClick={sendMessage}> send</button>
    </>
  )
}

export default App
