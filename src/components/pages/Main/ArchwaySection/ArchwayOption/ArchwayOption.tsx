import React from 'react'
import './ArchwayOption.css'
import { Parallax } from 'react-parallax'
import { ArchwaysDictionary as AD } from '../dictionary/ArchwaysDictionary.tsx';

interface IProps {
  bgImageUrl: string
  option?: AD.ArchwayOptionType
  onClick?: () => void
}

const ArchwayOption: React.FC<IProps> = ({
  bgImageUrl,
  option = AD.ArchwayOptionType.MENU,
  onClick = () => console.log('a')
}) => {
  return (
    <li className='archway-option'>
      { AD.generateTitle(option) }
      <Parallax
        className='archway'
        contentClassName='shadow'
        bgImage={bgImageUrl}
        bgImageAlt='archway'
        strength={500}
      />
    </li>
  )
}

export default ArchwayOption