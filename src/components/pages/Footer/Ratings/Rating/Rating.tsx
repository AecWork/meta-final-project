import React from 'react'
import './Rating.css'
import StarRating from './StarRating/StarRating.tsx'

const Rating: React.FC = () => {
  return (
    <li className='rating-container'>
        <h6>Mary</h6>
        <p className='italics' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <StarRating rating={4}/>
    </li>
  )
}

export default Rating