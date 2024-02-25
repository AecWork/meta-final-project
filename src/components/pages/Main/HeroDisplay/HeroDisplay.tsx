import React from 'react'
import { Parallax } from 'react-parallax';
import Mosaic from '../../../../assets/illustrations/mosaic4kpng.png';
import useHeaderHeight from '../../../../hooks/useHeaderHeight/useHeaderHeight.ts';
import './HeroDisplay.css';
import useMediaQuery from '../../../../hooks/useMediaQuery/useMediaQuery.ts';
import { DESKTOP_SIDE_MARGINS, MOBILE_SIDE_MARGINS, TABLET_SIDE_MARGINS } from '../../../../data/constants/constants.ts';

const HeroDisplay: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const {isDesktop, isTablet} = useMediaQuery();

  const bottomMarginValue: number = React.useMemo(() => {
    if (isDesktop) return DESKTOP_SIDE_MARGINS;
    if (isTablet) return TABLET_SIDE_MARGINS;
    return MOBILE_SIDE_MARGINS;
  }, [isDesktop, isTablet])

  return (
    <section
      id='hero'
      style={{height: `calc(100vh - ${headerHeight}px - ${bottomMarginValue}px)`, marginTop: headerHeight}}
      className='hero-container'
    >
      <Parallax
        className='hero-background-container'
        bgImage={Mosaic}
        bgImageAlt='Mosaic'
        strength={200}
      >
      </Parallax>
      <div className='hero-text-container'>
        <h1 className='uppercase'>Little</h1>
        <h1 className='uppercase'>Lemon</h1>
      </div>
    </section>
  )
}

export default HeroDisplay