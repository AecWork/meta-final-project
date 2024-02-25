import React from 'react';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/icons/burger-menu.svg';
import CenterImg from '../../../assets/illustrations/Header-center-ill.svg';
import { ReactComponent as Logo } from '../../../assets/logo/LL-logo-black.svg';
import { ModalType, useModal } from '../../../contexts/ModalContext.tsx';
import { useTheme } from '../../../contexts/ThemeContext.tsx';
import useMediaQuery from '../../../hooks/useMediaQuery/useMediaQuery.ts';
import scrollTo, { Section } from '../../../utils/scrollTo.ts';
import About from '../../pages/About/About.tsx';
import Menu from '../../pages/Menu/Menu.tsx';
import Button, { ButtonType } from '../Button/Button.tsx';
import './Header.css';

const Header: React.FC = () => {
  const themeContext = useTheme();
  const { openModal, closeModal } = useModal();
  const {isMobile} = useMediaQuery();

  const buttonType = React.useMemo(() =>
    isMobile
      ? ButtonType.DEFAULT
      : ButtonType.LINK
  , [isMobile]);

  const nav = React.useMemo(() => (
    <nav>
      <ul>
        <li><Button type={buttonType} onClick={() => closeModal(() => scrollTo(Section.HERO))}>Home</Button></li>
        <li><Button type={buttonType} onClick={() => closeModal(undefined, () => openModal(<About />))}>About</Button></li>
        <li><Button type={buttonType} onClick={() => closeModal(undefined, () => openModal(<Menu />))}>Menu</Button></li>
        <li><Button type={buttonType} onClick={() => closeModal(() => scrollTo(Section.CONTACT))}>Contact</Button></li>
      </ul>
    </nav>
  ), [openModal, buttonType, closeModal]);

  return (
    <header className={`${themeContext.theme}`}>
      <section>
        <BurgerMenuIcon onClick={() => openModal(<><Logo />{nav}</>, ModalType.SIDE_BAR)} className="burger-menu-icon"/>
        <Logo />
        { nav }
      </section>
      <img src={CenterImg} alt='Header center illustration' />
      <section>
        <Button type={ButtonType.CTA}>Reserve</Button>
      </section>
    </header>
  )
}

export default Header