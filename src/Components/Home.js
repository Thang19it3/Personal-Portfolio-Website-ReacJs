import React from 'react'
import './Home.css'
import bg from '../props/photo-nft.jpg';

const Home = () => {
  return (
    <div className='Home' id='Home'>
      <div className="bg1">
        <img src={bg} alt='' />
      </div>
      <div className='content'>
        <h1>
          <c>eXplore</c> my <d>nft</d> <br/>
          collection
        </h1>

        <a href='#collection' className='show-me'>
          <span>show me</span>
        </a>
      </div>
    </div>
  )
}

export default Home