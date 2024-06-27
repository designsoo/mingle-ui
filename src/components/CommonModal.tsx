import { ReactNode } from 'react';

import ReactModal from 'react-modal';

interface ModalProps {
  openModal: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const CommonModal = ({ openModal, onClose, title, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className='modal animate-fade-up'
      overlayClassName='overlay'
      bodyOpenClassName='body-open'
      contentLabel='modal-confirm'
      appElement={document.getElementById('root') as HTMLElement}
    >
      <div className='flex w-full flex-col gap-5 p-8 sm:min-w-[340px]'>
        <h2 className='w-full text-bold-18 text-neutral-100'>{title}</h2>
        {children}
      </div>
    </ReactModal>
  );
};

export default CommonModal;
