/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './About.css'
import ScheduleDisplay from '../../business/ScheduleDisplay/ScheduleDisplay.tsx'
import { SCHEDULE_1, SCHEDULE_2 } from '../../../data/constants/constants.ts'
import { ReactComponent as Instagram} from '../../../assets/logo/Instagram.svg'
import { ReactComponent as X} from '../../../assets/logo/TwitterX.svg'

const About: React.FC = () => {
  return (
    <article className='about-section'>
      <h5 className='uppercase'>About us</h5>
      <section className='content'>
        <div className='text-data'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 

Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non.
          </p>
          <div className='extra-info'>
            <div className='schedules'>
              <ScheduleDisplay {...SCHEDULE_1} />
              <ScheduleDisplay {...SCHEDULE_2} />
            </div>
            <div className='contact'>
              <a href="javascript:;" className='uppercase'>907 W WRIGHTWOOD AVE APT 1 CHICAGO IL 60614-7462USA</a>
              <span className='text-L uppercase'>+1 (312) 555-3890</span>
              <div className='socials'>
                <Instagram/>
                <X/>
              </div>
            </div>
          </div>
        </div>
        <div className='archway-image'>
          {/* <img src={AboutBG} alt="AboutIMG"/> */}
        </div>
      </section>
    </article>
  )
}

export default About