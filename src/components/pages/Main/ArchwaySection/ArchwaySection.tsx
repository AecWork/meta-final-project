import React from 'react'
import './ArchwaySection.css'
import ArchwayOption from './ArchwayOption/ArchwayOption.tsx'
import { ArchwaysDictionary as AD } from './dictionary/ArchwaysDictionary.tsx';
import MenuBG from '../../../../assets/images/menu-bg.jpg'
import AboutBG from '../../../../assets/images/about-bg.jpg'
import ReservationsBG from '../../../../assets/images/reservations-bg.jpg'
import useHeaderHeight from '../../../../hooks/useHeaderHeight/useHeaderHeight.ts';


const ArchwaySection: React.FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <section className='archway-section' style={{height: `calc(100vh - ${headerHeight}px)`}}>
      <ul className='archways'>
        <ArchwayOption option={AD.ArchwayOptionType.MENU} bgImageUrl={MenuBG}/>
        <ArchwayOption option={AD.ArchwayOptionType.ABOUT} bgImageUrl={AboutBG}/>
        <ArchwayOption option={AD.ArchwayOptionType.RESERVE} bgImageUrl={ReservationsBG}/>
      </ul>
    </section>
  )
}

export default ArchwaySection