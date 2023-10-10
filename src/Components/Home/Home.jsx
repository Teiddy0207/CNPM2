import React from 'react'

import ReactPlayer from 'react-player';

import takeoff5 from '../../assets/takeoff5.png'
import view from '../../assets/view.mp4'
const Home = () => {
  return (


<div className='home flex container'>
  <div className="mainText">
    <h1>Create Ever-lasting Memories With Us</h1>
  </div>

  <div className="homeImages flex">
      <div className="videoDiv">
   <video src= {view} autoPlay muted loop className='view' ></video>
      </div>
      <img src={takeoff5} className='plane' />
  </div>
</div>
  
  )
}

export default Home