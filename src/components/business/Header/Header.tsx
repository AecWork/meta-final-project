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

enum NavButton {
  HOME = 'Home',
  ABOUT = 'About',
  MENU = 'Menu',
  CONTACT = 'Contact'
}

const Header: React.FC = () => {
  const themeContext = useTheme();
  const { openModal, closeModal } = useModal();
  const {isMobile} = useMediaQuery();

  const buttonType = React.useMemo(() =>
    isMobile
      ? ButtonType.DEFAULT
      : ButtonType.LINK
  , [isMobile]);

  const onClick = React.useCallback((navButton: NavButton) => {
    let func: () => void = () => {};

    switch(navButton) {
      case NavButton.HOME: func = () => scrollTo(Section.HERO); break;
      case NavButton.ABOUT: func = () => openModal(<About />); break;
      case NavButton.MENU: func = () => openModal(<Menu />); break;
      case NavButton.CONTACT: func = () => scrollTo(Section.CONTACT); break;
    }

    if (isMobile) {
      switch(navButton) {
        case NavButton.HOME: case NavButton.CONTACT: closeModal(func); break;
        default: closeModal(undefined, func);
      }
    } else {
      func();
    }
  }, [closeModal, isMobile, openModal])

  const nav = React.useMemo(() => (
    <nav>
      <ul>
        { Object.values(NavButton).map(nb =>
          <li key={nb}><Button type={buttonType} onClick={() => onClick(nb)}>{ nb }</Button></li>
        ) }
      </ul>
    </nav>
  ), [buttonType, onClick]);

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