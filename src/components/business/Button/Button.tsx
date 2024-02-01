import React from 'react'
import './Button.css';

export enum ButtonType {
  LINK,
  DEFAULT,
  CTA,
  BIG_CTA
}

interface IProps {
  children?: string | JSX.Element
  type?: ButtonType
}

const Button: React.FC<IProps> = ({children = 'Button', type = ButtonType.DEFAULT}) => {

  const buttonTypeStyle: string = React.useMemo(() => {
    switch (type) {
      case ButtonType.LINK: return 'link';
      case ButtonType.DEFAULT: return 'default';
      case ButtonType.CTA: return 'CTA';
      case ButtonType.BIG_CTA: return 'CTA big';
    }
  }, [type])

  const button: JSX.Element = React.useMemo(() =>
    <button className={`${buttonTypeStyle} text-Base`}>{children || "Button"}</button>
  , [children, buttonTypeStyle]);

  return type === ButtonType.LINK
  ? button
  : (
    <div className='container'>
      { button }
    </div>
  )
}

export default Button