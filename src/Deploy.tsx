import axios from 'axios'
import React, { useState } from 'react'

const Deploy: React.FC = () => {
  const [content, setContent] = useState("")
  const [web, setWeb] = useState("")

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://codeport-backend.onrender.com/deploy`, {
        params: { code: content }
      })
      console.log(response)
      const result = await axios.get(`https://codeport-backend.onrender.com/deploy/${response.data.uuid}`)
      console.log(result)
      setWeb(`https://codeport-backend.onrender.com/deploy/${response.data.uuid}`)
    } catch (error) {
      console.error("Error while deploying", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleDeploy}>
        <input 
          type="text" 
          placeholder="Paste the content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit">Deploy</button>
      </form>
      {web && <h1>{web}</h1>}
    </div>
  )
}

export default Deploy
