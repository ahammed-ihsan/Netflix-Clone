import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className="title">Movie Name</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className="description">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web </h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
