import React, { useContext } from 'react'
import Card from './Card.jsx'
import mainContext from '../context/Context'

const Cards = () => {
const {data}=useContext(mainContext)
  return (
    <div style={{display:"flex" }}>
        {
            data.map((item,index)=>
                <Card key={index} item={item}/> 
          )
        }
        
    </div>
  )
}

export default Cards