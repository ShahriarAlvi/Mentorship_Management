import React, { useState } from 'react'

function Card () {

    const [name, setName] = useState('Your Name');
    const [job, setJob] = useState('Job Title');
    const [about, setAbout] = useState('asjkdhasjkhdkasjhdask')



  return (
    <div className="Card">
        <div className='upper-container'>
            <div className='image-container'>
                <img src = " " alt = " " height = "100px" width="100px" /> 
            </div>
        </div>

        <div className='lower-container'>
            <h1> {name} </h1>
            <h4> {job} </h4>
            <p> {about} </p>
        </div>

    </div>
  )
}

export default Card