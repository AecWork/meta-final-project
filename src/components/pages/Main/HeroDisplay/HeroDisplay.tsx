import React from 'react'
import { Parallax } from 'react-parallax';
import Mosaic from '../../../../assets/illustrations/mosaic4kpng.png';
import useHeaderHeight from '../../../../hooks/useHeaderHeight/useHeaderHeight.tsx';
import './HeroDisplay.css';

const HeroDisplay: React.FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <section
      style={{height: `calc(100vh - ${headerHeight}px - 64px)`}}
      className='hero-container'
    >
      <Parallax
        blur={0}
        className='hero-background-container'
        bgImage={Mosaic}
        bgImageAlt='Mosaic'
        strength={500}
      >
      </Parallax>
      <div className='hero-text-container'>
        <h1 className='uppercase'>Little</h1>
        <h1 className='uppercase'>Lemon</h1>
      </div>
    </section>

    // <section style={{height: `calc(100vh - ${headerHeight}px - 64px)`}} className='hero-container'>
    // </section>
  )
}

export default HeroDisplay