import React from 'react'

interface IProps {
  highlighted?: boolean
}

const Star: React.FC<IProps> = ({ highlighted }) => {
  return (
    <li>
      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.0204 0L18.6686 10.4804L28.5137 6.01648L21.971 14.6214L31.5993 19.5354L20.7924 19.7852L22.9536 30.3767L16.0204 22.0833L9.08708 30.3767L11.2483 19.7852L0.441413 19.5354L10.0697 14.6214L3.52702 6.01648L13.3721 10.4804L16.0204 0Z"
          fill={highlighted ? '#232323' : '#7C7C7C'}
        />
      </svg>
    </li>
  )
}

export default Star