import axios from "axios"
import React from "react"

const Accept: React.FC = () => {

    const handleAccept=async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const uuid1=localStorage.getItem("uuid1")
        const uuid2=localStorage.getItem("uuid2")
        const response=await axios.post("https://codeport-backend.onrender.com/code/accept",{
          uuid1, uuid2
        })
        console.log(response.data)
      }

  return (
    <div>
        <div>
        <form>
          <button type="submit" onClick={handleAccept}>Accept</button>
        </form>
      </div>
    </div>
  )
}

export default Accept