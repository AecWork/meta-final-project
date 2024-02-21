import React from "react";
import ReactDOM from 'react-dom';
import Modal from "../components/business/Modals/Modal.tsx";

export enum ModalType {
    SIDE_BAR = 'side-bar',
    FULL_PAGE = 'full-page'
}

type ToggleModalFunc = (content: React.ReactNode, type?: ModalType) => void

interface ModalContextValue {
  openModal: ToggleModalFunc
}

const ModalContext = React.createContext<ModalContextValue>({
    openModal: () => {}
});

const overlayElement = document.getElementById('overlays');

export const ModalContextProvider = ({ children }) => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const [modal, setModal] = React.useState<React.ReactNode>(
        <Modal content={<></>} ref={dialogRef}/>
    );

    const openModal: ToggleModalFunc = (content, type = ModalType.FULL_PAGE) => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        setModal(<Modal type={type} content={content} ref={dialogRef}/>);

        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        if (!dialog.hasAttribute('open')) {
            dialog.showModal();
        }
    }

    return (
        <ModalContext.Provider
            value={{
                openModal
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