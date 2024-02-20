/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import './ContactCard.css'
import { ReactComponent as Semicircle } from '../../../../assets/illustrations/semicircle.svg'
import ScheduleDisplay, { ScheduleDays } from '../../../business/ScheduleDisplay/ScheduleDisplay.tsx'
import Instagram from '../../../../assets/logo/Instagram.svg';
import X from '../../../../assets/logo/TwitterX.svg';

const ContactCard: React.FC = () => {
  return (
    <section className='contact-card'>
        <div className='row'>
            <Semicircle />
            <span className='italics'>SCHEDULE & CONTACT</span>
            <Semicircle />
        </div>
        <div className='content'>
            <div className='schedule'>
              <ScheduleDisplay
                startDay={ScheduleDays.MONDAY}
                endDay={ScheduleDays.FRIDAY}
                startTime={8}
                endTime={16}
              />
              <ScheduleDisplay
                startDay={ScheduleDays.FRIDAY}
                endDay={ScheduleDays.SUNDAY}
                startTime={8}
                endTime={23}
              />
            </div>
            <div className='location'>
              <a href="javascript:;" className='uppercase'>907 W WRIGHTWOOD AVE APT 1 CHICAGO IL 60614-7462USA</a>
              <div className='map-container' />
            </div>
        </div>
        <div className='row'>
            <Semicircle />
            <div className='card-footer'>
              <span className='text-L uppercase'>+1 (312) 555-3890</span>
              <div className='socials'>
                <img src={Instagram} alt='Instagram' />
                <img src={X} alt='X' />
              </div>
            </div>
            <Semicircle />
        </div>
    </section>
  )
}

export default ContactCard