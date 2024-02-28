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
          <Step key={step.step} {...step} />
          { index < steps.length - 1 ? <div key={(step.step || 0) + 0.5}/> : null }
        </>
      )) }
    </ul>
  )
}

export default ProgressBar