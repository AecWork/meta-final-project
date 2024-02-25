import React, { forwardRef, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import { ModalType, useModal } from '../../../contexts/ModalContext.tsx';
import Button from '../Button/Button.tsx';
import './Modal.css';

interface IProps {
  type?: ModalType
  content: React.ReactNode
}

const Modal = forwardRef<HTMLDialogElement, IProps>(({type = ModalType.FULL_PAGE, content}, ref) => {
  const [closing, isClosing] = useState<boolean>(false);
  const { closeModal } = useModal();

  const onClose = () => {
    closeModal(
      1000,
      () => isClosing(true),
      () => isClosing(false)
    );
  }

  return (
    <dialog className={`${type}${closing ? ' closing' : ''}`} ref={ref}>
      <div className='close-container'>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>
      { content }
    </dialog>
  )
});

export default Modal