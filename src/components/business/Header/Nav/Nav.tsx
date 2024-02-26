import React from 'react'
import { useModal } from '../../../../contexts/ModalContext.tsx'
import { Section } from '../../../../data/constants/constants.ts'
import useMediaQuery from '../../../../hooks/useMediaQuery/useMediaQuery.ts'
import scrollTo from '../../../../utils/scrollTo.ts'
import { ReactComponent as Logo } from '../../../../assets/logo/LL-logo-black.svg'
import Button, { ButtonType } from '../../Button/Button.tsx'
import './Nav.css'

const NAV_BUTTONS = {
    [Section.HOME]: 'Home',
    [Section.ABOUT]: 'About',
    [Section.MENU]: 'Menu',
    [Section.CONTACT]: 'Contact'
}

const Nav: React.FC = () => {
    const { openModal, closeModal } = useModal();
    const { isMobile } = useMediaQuery();

    const onClick = React.useCallback((section: Section) => {
        switch(section) {
            case Section.MENU: case Section.ABOUT:
                const open = () => { openModal(section) }
                if (isMobile) {
                    closeModal(null, open);
                } else {
                    open();
                }
                break;
            default:
                const scroll = () => { scrollTo(section) }
                if (isMobile) {
                    closeModal(scroll);
                } else {
                    scroll();
                }
        }
    }, [closeModal, isMobile, openModal]);

    return (
        <>
            <Logo onClick={() => onClick(Section.HOME)}/>
            <nav>
                <ul>
                    { Object.keys(NAV_BUTTONS).map(nbe =>
                        <li key={nbe}>
                            <Button
                                type={
                                    isMobile
                                        ? ButtonType.DEFAULT
                                        : ButtonType.LINK
                                }
                                onClick={() => onClick(nbe as Section)}
                            >
                                { NAV_BUTTONS[nbe] }
                            </Button>
                        </li>
                    ) }
                </ul>
            </nav>
        </>
    )
}

export default Nav