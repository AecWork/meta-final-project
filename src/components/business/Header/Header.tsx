import React from 'react';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/icons/burger-menu.svg';
import CenterImg from '../../../assets/illustrations/Header-center-ill.svg';
import { ModalType, useModal } from '../../../contexts/ModalContext.tsx';
import { useTheme } from '../../../contexts/ThemeContext.tsx';
import { Section } from '../../../data/constants/constants.ts';
import Button, { ButtonType } from '../Button/Button.tsx';
import './Header.css';
import Nav from './Nav/Nav.tsx';

const Header: React.FC = () => {
  const themeContext = useTheme();
  const { openModal } = useModal();

  return (
    <header className={`${themeContext.theme}`}>
      <section>
        <BurgerMenuIcon onClick={() => openModal(Section.NAV, ModalType.SIDE_BAR)} className="burger-menu-icon"/>
        <Nav />
      </section>
      <img src={CenterImg} alt='Header center illustration' />
      <section>
        <Button type={ButtonType.CTA} onClick={() => openModal(Section.RESERVATIONS)}>Reserve</Button>
      </section>
    </header>
  )
}

export default Header