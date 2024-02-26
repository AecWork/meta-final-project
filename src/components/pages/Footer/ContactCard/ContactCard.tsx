/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import './ContactCard.css'
import { ReactComponent as Semicircle } from '../../../../assets/illustrations/semicircle.svg'
import ScheduleDisplay from '../../../business/ScheduleDisplay/ScheduleDisplay.tsx'
import { ReactComponent as Instagram} from '../../../../assets/logo/Instagram.svg'
import { ReactComponent as X} from '../../../../assets/logo/TwitterX.svg'
import { SCHEDULE_1, SCHEDULE_2 } from '../../../../data/constants/constants.ts';

const ContactCard: React.FC = () => {
  return (
    <section id='contact' className='contact-card'>
        <div className='row'>
            <Semicircle />
            <span className='italics'>SCHEDULE & CONTACT</span>
            <Semicircle />
        </div>
        <div className='content'>
            <div className='schedule'>
              <ScheduleDisplay {...SCHEDULE_1} />
              <ScheduleDisplay {...SCHEDULE_2} />
            </div>
            <div className='location'>
              <a href="/" onClick={(e) => e.preventDefault()} className='uppercase'>907 W WRIGHTWOOD AVE APT 1 CHICAGO IL 60614-7462USA</a>
              <div className='map-container' />
            </div>
        </div>
        <div className='row'>
            <Semicircle />
            <div className='card-footer'>
              <span className='text-L uppercase'>+1 (312) 555-3890</span>
              <div className='socials'>
                <Instagram/>
                <X/>
              </div>
            </div>
            <Semicircle />
        </div>
    </section>
  )
}

export default ContactCard