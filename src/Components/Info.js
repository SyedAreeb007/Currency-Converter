import React from 'react'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/img2.png'

const Info = () => {
  return (
    <div className='info-container'>
      <h1 className='info'>Top Countries Pairings For US Dollars</h1>
      <div className='image-container'>
        <img className='img-fluid' src={img1} alt="img1" />
        <img className='img-fluid' src={img2} alt="img2" />
      </div>
    </div>
  )
}

export default Info
