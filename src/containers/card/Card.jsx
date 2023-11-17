import React from 'react'
import './card.css'
import Avatar from '../../images/image-victor.jpg'
import Social from '../../components/social/Social'

const Card = () => {
  return (
    <div className='card_container' role="main">
      <div className='card_container_path'>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className='card_container_user'>
        <h1>Victor Crest<span className='card_container_user_age'>26</span></h1>
        <p className='card_container_user_location'>London</p>
      </div>
      <Social />
    </div>
  )
}

export default Card