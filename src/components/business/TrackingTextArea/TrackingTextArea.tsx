import React from 'react'
import './TrackingTextArea.css'

export interface TextAreaField {
  title: string
  content: string
}

interface Props {
  title?: string
  fields?: TextAreaField[]
}

const TrackingTextArea: React.FC<Props> = ({ title='Field Area', fields = [] }) => {
  return (
    <div className='text-area-wrapper'>
      <span className='text-XL header'>{ title }</span>
      <ul>
        { fields.map(field =>
          <li key={field.title}>
            <span className='text-L title'>{ field.title }:</span>
            <span className='text-L'>{ field.content }</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TrackingTextArea