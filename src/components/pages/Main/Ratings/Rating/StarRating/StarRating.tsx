import React from 'react'
import './StarRating.css'
import Star from './Star.tsx';

interface IProps {
    rating?: 0|1|2|3|4|5
}

const MAX_STARS = 5;
const STARS = [...Array(MAX_STARS).keys()];

const StarRating: React.FC<IProps> = ({ rating = 0 }) => {
  return (
    <ul className='star-rating-list'>
        { STARS.map(i => <Star key={i} highlighted={(i + 1) <= rating}/>) }
    </ul>
  )
}

export default StarRating