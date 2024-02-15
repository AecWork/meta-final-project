import React from 'react'
import './Ratings.css'
import Rating from './Rating/Rating.tsx'
import TripadvisorLogo from '../../../../assets/images/tripadvisor-logo.png';

const Ratings: React.FC = () => {
  return (
    <section className='ratings-container'>
        <ul>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
        </ul>
        <a href='https://www.tripadvisor.com/'>
            <img src={TripadvisorLogo} alt='Tripadvisor' />
        </a>
    </section>
  )
}

export default Ratings