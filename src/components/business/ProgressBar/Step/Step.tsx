import React from 'react'
import './Step.css'

export interface StepProps {
    step?: number
    stepName?: string
    complete?: boolean
}

const Step: React.FC<StepProps> = ({ complete, step = 1, stepName = 'Step' }) => {
  return (
    <li className='step-wrapper'>
        <div className={`text-L${complete ? ' complete' : ''}`}>{ step }</div>
        <span>{ stepName }</span>
    </li>
  )
}

export default Step