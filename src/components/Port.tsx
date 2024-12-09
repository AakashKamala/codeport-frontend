import { useState } from "react"
import Send from "./Send"
import axios from "axios"
import "./port.css"

const Port = () => {

  const [command, setCommand]=useState(false)
  const [web, setWeb]=useState(false)

  const uuid1=localStorage.getItem("uuid1")
  const uuid2=localStorage.getItem("uuid2")

  const handleCommand=()=>{
    console.log("hh")
    setCommand(true)
    setWeb(false)
  }

  const handleWeb=async()=>{
    console.log("nkn")
    setWeb(true)
    setCommand(false)
  }

  const handleAccept=async(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    const uuid1=localStorage.getItem("uuid1")
    const uuid2=localStorage.getItem("uuid2")
    const response=await axios.post("https://codeport-backend.onrender.com/code/accept",{
      uuid1, uuid2
    })
    console.log(response.data)
  }

  const handleReject=()=>{
    setCommand(false)
  }

  return (
    <div>
      <Send />
      <button className="preview" type="button" onClick={handleCommand}>Command Preview</button>
      <button className="preview" type="button" onClick={handleWeb}>Web Preview</button>
      {command && <div><iframe
        src={`https://codeport-backend.onrender.com/view/write/${uuid1}`}
        width="1000"
        height="500"
        title="A YouTube video on React hooks"
        loading="lazy"
        ></iframe>
        <button className="accept" type="button" onClick={handleAccept}>Accept</button>
        <button className="reject" type="button" onClick={handleReject}>Reject</button>
        </div>}
        {web && <div><iframe
        src={`https://codeport-backend.onrender.com/view/append/${uuid2}`}
        width="1000"
        height="500"
        title="A YouTube video on React hooks"
        loading="lazy"
        ></iframe></div>}
    </div>
  )
}

export default Port