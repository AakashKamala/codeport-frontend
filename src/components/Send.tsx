import axios from "axios"
import React, { useState } from "react"
import "./send.css"

const Send: React.FC = () => {

    const [command, setCommand]=useState("")
    const [waiting, setWaiting]=useState(false)

    const handleSend=async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setWaiting(true)
        try {
          const uuid1=localStorage.getItem("uuid1")
          const uuid2=localStorage.getItem("uuid2")
          const response=await axios.post("https://codeport-backend.onrender.com/code/send",{
            prompt:`you are a coding assistant. the only thing you produce is html code. be it any question, you either produce a code or just send back a <h2> tag with "Error" styled in red if the question doesn't make you write code. your prompt:  ${command}`,
            uuid1,
            uuid2
          })
          console.log(response.data)
          setWaiting(false)
        } catch (error) {
          console.log("error in getting back response: ", error)
        }
      }

  return (
    <div>
        <div className="send-form">
        <form>
          <input className="" value={command} onChange={(e)=>{setCommand(e.target.value)}} placeholder="Enter your command -->" type="text" />
          {!waiting && <button className="" type="submit" onClick={handleSend}>Send</button>}
          {waiting && <button className="" type="button">Waiting...</button>}
        </form>
      </div>
    </div>
  )
}

export default Send