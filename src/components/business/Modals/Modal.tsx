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
  const { closeModal } = useModal();

  return (
    <dialog className={`${type}`} ref={ref}>
      <div className='close-container'>
        <Button onClick={() => closeModal()}>
          <CloseIcon />
        </Button>
      </div>
      { content }
    </dialog>
  )
});

export default Modal