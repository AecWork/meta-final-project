import React from 'react'
import './Main.css';
import HeroDisplay from './HeroDisplay/HeroDisplay.tsx';
import ArchwaySection from './ArchwaySection/ArchwaySection.tsx';
import Ratings from './Ratings/Ratings.tsx';

const Main: React.FC = () => {
  return (
    <main className='main-content'>
      <HeroDisplay />
      <ArchwaySection />
      <Ratings />
    </main>
  )
}

export default Main