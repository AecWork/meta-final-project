import React from 'react'
import './Reserve.css'
import { ReservationContextProvider } from '../../../contexts/ReservationContext.tsx'
import ReserveForm from './ReserveForm/ReserveForm.tsx'

const Reserve: React.FC = () => {
  return (
    <ReservationContextProvider>
      <article className='reservation-page'>
        <h5 className='uppercase'>make a reservation</h5>
        <ReserveForm />
      </article>
    </ReservationContextProvider>
  )
}

export default Reserve