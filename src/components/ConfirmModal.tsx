import { ReactNode } from 'react';

import ReactModal from 'react-modal';

interface ModalProps {
  openModal: boolean;
  onClose: () => void;
  iconUrl: string;
  iconAlt: string;
  iconSize: number;
  title: string;
  desc: string;
  children: ReactNode;
}

const ConfirmModal = ({ openModal, onClose, iconUrl, iconAlt, iconSize, title, desc, children }: ModalProps) => {
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
      <div className='gap-6 px-16 py-9 flexbox-column sm:min-w-[340px]'>
        <div className='gap-2 flexbox-column'>
          <img src={iconUrl} alt={iconAlt} width={iconSize} height={iconSize} />
          <div className='flexbox-column'>
            <h2 className='text-bold-18 text-neutral-100'>{title}</h2>
            <span className='text-base-14 text-neutral-500'>{desc}</span>
          </div>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};

export default ConfirmModal;
