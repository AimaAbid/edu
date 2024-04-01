import React from 'react'
import I from "../Assets/G18.jpg"

export default function Post() {
  return (
    <div className='container post' >
     
      <p id='username'>User Name</p>
      <p id='title'>Title</p>
      <br />
      <img src={I} alt="img" />
      <br /><br />
      <button className='btn btn-primary ' id='button'>Read More</button>
    </div>
  )
}
