import React from "react";
import ReactDOM from 'react-dom';
import Modal from "../components/business/Modals/Modal.tsx";
import { useNavigate } from "react-router-dom";
import { Section } from "../data/constants/constants.ts";
import About from "../components/pages/About/About.tsx";
import Menu from "../components/pages/Menu/Menu.tsx";
import Reserve from "../components/pages/Reserve/Reserve.tsx";
import Nav from "../components/business/Header/Nav/Nav.tsx";

export enum ModalType {
    SIDE_BAR = 'side-bar',
    FULL_PAGE = 'full-page'
}

const MODAL_COMPONENTS = {
    [Section.ABOUT]: <About />,
    [Section.MENU]: <Menu />,
    [Section.RESERVATIONS]: <Reserve />,
    [Section.NAV]: <Nav />
}

type OpenModalFunc = (section: Section, type?: ModalType) => void
type CloseModalFunc = (beforeClose?: (() => void) | null, afterClose?: (() => void) | null, delay?: number, ) => void

interface ModalContextValue {
  openModal: OpenModalFunc,
  closeModal: CloseModalFunc
}

const ModalContext = React.createContext<ModalContextValue>({
    openModal: () => {},
    closeModal: () => {}
});

const overlayElement = document.getElementById('overlays');

const setScrollOverflow = (overflowType: 'auto' | 'hidden') => {
    document.getElementsByTagName('body')[0].style.overflow = overflowType;
}

export const ModalContextProvider = ({ children }) => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    const [modal, setModal] = React.useState<React.ReactNode>(
        <Modal content={<></>} ref={dialogRef}/>
    );

    const openModal: OpenModalFunc = (section, type = ModalType.FULL_PAGE) => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        navigate(`#${section}`);
        setModal(
            <Modal
                type={type}
                content={MODAL_COMPONENTS[section]}
                ref={dialogRef}
            />
        );

        setScrollOverflow('hidden');

        if (!dialog.hasAttribute('open')) {
            dialog.showModal();
        }
    }

    const closeModal: CloseModalFunc = (beforeClose, afterClose, delay = 1000) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        navigate('/');
        dialog.classList.add('closing');
        setScrollOverflow('auto');
        beforeClose?.();

        setTimeout(() => {
            dialog.classList.remove('closing');
            dialog.close();
            afterClose?.()
        }, delay)
    }

    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal
            }}
        >
            { children }
            { overlayElement
                ? ReactDOM.createPortal(
                    modal,
                    overlayElement
                )
                : null
            }
        </ModalContext.Provider>
    );
};

export const useModal = () => React.useContext(ModalContext);