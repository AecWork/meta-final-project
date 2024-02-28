import React, { useMemo } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'
import { useReservation, ReservationDataErrors, ReservationField } from '../../../contexts/ReservationContext/ReservationContext.tsx'
import Button, { ButtonType } from '../../business/Button/Button.tsx'
import ProgressBar from '../../business/ProgressBar/ProgressBar.tsx'
import { StepProps } from '../../business/ProgressBar/Step/Step.tsx'
import './Reserve.css'
import ReserveForm from './ReserveForm/ReserveForm.tsx'
import TrackingTextArea, { TextAreaField } from '../../business/TrackingTextArea/TrackingTextArea.tsx'

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

const translations: ReservationDataErrors = {
  [ReservationField.CLIENTS_AMMOUNT]: 'People',
  [ReservationField.DATE]: 'Date',
  [ReservationField.TIME]: 'Time',
  [ReservationField.NAME]: 'Name',
  [ReservationField.EMAIL]: 'Email',
  [ReservationField.PHONE]: 'Phone'
}

const Reserve: React.FC = () => {
  const { currentStep, prevStep, data } = useReservation();

  const steps: StepProps[] = useMemo(() => (
    STEPS.map(step => ({...step, complete: currentStep >= (step.step || 0)}))
  ), [currentStep]);

  const trackingFields: TextAreaField[] = useMemo(() => (
    Object.keys(data).map(field => ({
      title: translations[field],
      content: data[field]
    }))
  ), [data])

  return (
    <article className='reservation-page'>
      <h5 className='uppercase'>make a reservation</h5>
      <section>
        { currentStep === 2 && (
          <div className='back-button'>
            <Button type={ButtonType.LINK} onClick={prevStep}><><Arrow />Back</></Button>
          </div>
        ) }
        <ProgressBar steps={steps}/>
        <ReserveForm />
        <TrackingTextArea
          title='Your reservation'
          fields={trackingFields}
        />
      </section>
    </article>
  )
}

export default Reserve