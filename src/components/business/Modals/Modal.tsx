import React, { forwardRef } from 'react'
import { ModalType } from '../../../contexts/ModalContext.tsx'

interface IProps {
  type: ModalType
  content: React.ReactNode
}

const Modal = forwardRef<HTMLDialogElement, IProps>(({type = ModalType.FULL_PAGE, content}, ref) => {
  return (
    <dialog className={type} ref={ref}>{ content }</dialog>
  )
});

export default Modal