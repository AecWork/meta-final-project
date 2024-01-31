import React from 'react'
import './Button.css';

export enum ButtonType {
  LINK,
  DEFAULT,
  CTA,
  BIG_CTA
}

interface IProps {
  children: string | JSX.Element
  type?: ButtonType
}

const Button: React.FC<IProps> = ({children = 'Button', type = ButtonType.DEFAULT}) => {

  const buttonTypeStyle = React.useMemo(() => {
    switch (type) {
      case ButtonType.LINK: return 'link';
      case ButtonType.DEFAULT: return 'default';
      case ButtonType.CTA: return 'CTA';
      case ButtonType.BIG_CTA: return 'CTA big';
    }
  }, [type])

  return (
    <div className='container'>
      <button className={`${buttonTypeStyle} text-Base`}>{children}</button>
    </div>
  )
}

export default Button