import React from "react";
import ReactDOM from 'react-dom';
import Modal from "../components/business/Modals/Modal.tsx";

export enum ModalType {
    SIDE_BAR = 'side-bar',
    FULL_PAGE = 'full-page'
}

type OpenModalFunc = (content: React.ReactNode, type?: ModalType) => void
type CloseModalFunc = (beforeClose?: () => void, afterClose?: () => void, delay?: number, ) => void

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

    const [modal, setModal] = React.useState<React.ReactNode>(
        <Modal content={<></>} ref={dialogRef}/>
    );

    const openModal: OpenModalFunc = (content, type = ModalType.FULL_PAGE) => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        setModal(<Modal type={type} content={content} ref={dialogRef}/>);

        setScrollOverflow('hidden');

        if (!dialog.hasAttribute('open')) {
            dialog.showModal();
        }
    }

    const closeModal: CloseModalFunc = (beforeClose, afterClose, delay = 1000) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

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