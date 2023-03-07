import React from 'react'
import "./item.css"

const Home = ({greeting}) => {
  return (
    <div className='greeting'>
        <p>{greeting}</p>
        
    </div>
  )
}

export default Home;