import React from 'react'
import './ProgressBar.css'
import Step, { StepProps } from './Step/Step.tsx'

interface Props {
  steps: StepProps[]
}

const ProgressBar: React.FC<Props> = ({ steps }) => {
  return (
    <ul className='progress-bar'>
      { steps.map((step, index) => (
        <>
          <Step {...step} />
          { index < steps.length - 1 ? <div /> : null }
        </>
      )) }
    </ul>
  )
}

export default ProgressBar