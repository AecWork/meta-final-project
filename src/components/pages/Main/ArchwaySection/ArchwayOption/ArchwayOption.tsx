import React from 'react'
import './ArchwayOption.css'
import { Parallax } from 'react-parallax'
import { ArchwaysDictionary as AD } from '../dictionary/ArchwaysDictionary.tsx';
import useElementDimensions from '../../../../../hooks/useElementDimensions/useElementDimensions.ts';

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
  const { dimensions, ref } = useElementDimensions();

  return (
    <li className='archway-option' ref={ref} onClick={() => console.log('a')}>
      { AD.generateArchedTitle(option, dimensions.width) }
      <Parallax
        className='archway'
        contentClassName='shadow'
        bgImage={bgImageUrl}
        bgImageAlt='archway'
        strength={200}
      />
      { AD.generateContent(option) }
    </li>
  )
}

export default ArchwayOption