import React from 'react'
import './Main.css';
import HeroDisplay from './HeroDisplay/HeroDisplay.tsx';
import ArchwaySection from './ArchwaySection/ArchwaySection.tsx';

const Main: React.FC = () => {
  return (
    <article className='main-content'>
      <HeroDisplay />
      <ArchwaySection />
    </article>
  )
}

export default Main