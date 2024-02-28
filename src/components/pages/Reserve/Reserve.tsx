import React, { useEffect, useMemo } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'
import { useReservation } from '../../../contexts/ReservationContext/ReservationContext.tsx'
import Button, { ButtonType } from '../../business/Button/Button.tsx'
import ProgressBar from '../../business/ProgressBar/ProgressBar.tsx'
import { StepProps } from '../../business/ProgressBar/Step/Step.tsx'
import './Reserve.css'
import ReserveForm from './ReserveForm/ReserveForm.tsx'

const STEPS: StepProps[] = [
  {
      step: 1,
      stepName: 'Time & people',
      complete: false
  },
  {
      step: 2,
      stepName: 'Contact information',
      complete: false
  },
  {
      step: 3,
      stepName: 'Done!',
      complete: false
  }
];

const Reserve: React.FC = () => {
  const { currentStep, prevStep } = useReservation();

  const steps = useMemo(() => (
    STEPS.map(step => ({...step, complete: currentStep >= (step.step || 0)}))
  ), [currentStep]);

  return (
    <article className='reservation-page'>
      <h5 className='uppercase'>make a reservation</h5>
      <section>
        { currentStep > 1 && (
          <div className='back-button'>
            <Button type={ButtonType.LINK} onClick={prevStep}><><Arrow />Back</></Button>
          </div>
        ) }
        <ProgressBar steps={steps}/>
        <ReserveForm />
      </section>
    </article>
  )
}

export default Reserve