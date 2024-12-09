import React from 'react'
import { useNavigate } from 'react-router-dom'
import { arr } from './data/arr'
import "./home.css"

const Home : React.FC = () => {

    const navigate=useNavigate()

    const handleSubmit=(index: number)=>{
        console.log("kk")

        navigate(`/${index}`)
    }

  return (
    <div>
        {arr.map((value, index)=>(
            <div key={index}>
                <p className='ques'>{`${index} : ${value}`}</p>
                <button className='solve' type='button' onClick={()=>handleSubmit(index)} >Solve</button>
            </div>
        ))}
    </div>
  )
}

export default Home