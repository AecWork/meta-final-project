import React from 'react'
import './ContactCard.css'
import { ReactComponent as Semicircle } from '../../../../assets/illustrations/semicircle.svg'
import ScheduleDisplay, { ScheduleDays } from '../../../business/ScheduleDisplay/ScheduleDisplay.tsx'

const ContactCard: React.FC = () => {
  return (
    <section className='contact-card'>
        <div className='row'>
            <Semicircle />
            <span className='text-L italics'>SCHEDULE & CONTACT</span>
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

            </div>
        </div>
        <div className='row'>
            <Semicircle />
            <Semicircle />
        </div>
    </section>
  )
}

export default ContactCard