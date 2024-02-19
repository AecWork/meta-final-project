import React from 'react'
import './Header.css';
import Button, { ButtonType } from '../Button/Button.tsx';
import Logo from '../../../assets/logo/LL-logo-black.svg';
import CenterImg from '../../../assets/illustrations/Header-center-ill.svg';
import { useTheme } from '../../../contexts/ThemeContext.tsx';

const Header: React.FC = () => {
  const themeContext = useTheme();

  return (
    <header className={`${themeContext.theme}`}>
      <section>
        <img src={Logo} alt='LL Logo'/>
        <nav>
          <ul>
            <li><Button type={ButtonType.LINK}>Home</Button></li>
            <li><Button type={ButtonType.LINK}>About</Button></li>
            <li><Button type={ButtonType.LINK}>Menu</Button></li>
            <li><Button type={ButtonType.LINK}>Contact</Button></li>
          </ul>
        </nav>
      </section>
      <img src={CenterImg} alt='Header center illustration' />
      <section>
        <Button type={ButtonType.CTA}>Reserve</Button>
      </section>
    </header>
  )
}

export default Header