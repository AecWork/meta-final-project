import React from 'react'
import './Reserve.css'
import { ReservationContextProvider } from '../../../contexts/ReservationContext'

const Reserve: React.FC = () => {
  return (
    <ReservationContextProvider>
      <article className='reservation-page'>
        <h5 className='uppercase'>make a reservation</h5>
      </article>
    </ReservationContextProvider>
  )
}

export default Reserve