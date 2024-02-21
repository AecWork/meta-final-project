import React, { MouseEventHandler } from 'react'
import './Button.css';
import { useTheme } from '../../../contexts/ThemeContext.tsx';

export enum ButtonType {
  LINK,
  DEFAULT,
  CTA,
  BIG_CTA
}

interface IProps {
  children?: string | JSX.Element
  type?: ButtonType
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IProps> = ({children = 'Button', type = ButtonType.DEFAULT, onClick}) => {
  const { theme } = useTheme();

  const buttonTypeStyle: string = React.useMemo(() => {
    switch (type) {
      case ButtonType.LINK: return 'link';
      case ButtonType.DEFAULT: return 'default';
      case ButtonType.CTA: return 'CTA';
      case ButtonType.BIG_CTA: return 'CTA big';
    }
  }, [type])

  const button: JSX.Element = React.useMemo(() =>
    <button
      className={`${buttonTypeStyle}${typeof(children) === 'object' ? ' icon' : ''} text-Base`}
      onClick={onClick}
    >
      {children || "Button"}
    </button>
  , [children, buttonTypeStyle, onClick]);

  return (
    <div className={`${type === ButtonType.LINK ? '' : 'container '}${theme}`}>
      { button }
    </div>
  )
}

export default Button