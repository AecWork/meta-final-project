import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { ModalType } from '../../../contexts/ModalContext.tsx'
import './Modal.css'
import Button from '../Button/Button.tsx'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

interface IProps {
  type?: ModalType
  content: React.ReactNode
}

const enableScroll = () => {
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

const Modal = forwardRef<HTMLDialogElement, IProps>(({type = ModalType.FULL_PAGE, content}, ref) => {
  const [closing, isClosing] = useState<boolean>(false);
  const innerRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => innerRef.current!, []);

  const animateClosing = () => {
    isClosing(true);
    enableScroll();
    setTimeout(() => {
      isClosing(false);
      innerRef?.current?.close();
    }, 1000);
  };

  return (
    <dialog className={`${type}${closing ? ' closing' : ''}`} ref={innerRef}>
      <div className='close-container'>
        <Button onClick={animateClosing}><CloseIcon /></Button>
      </div>
      { content }
    </dialog>
  )
});

export default Modal