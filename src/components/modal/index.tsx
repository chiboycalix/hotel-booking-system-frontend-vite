import React from 'react'

interface IModalProps {
  isVisible: boolean;
  size?: 'small' | 'meduim' | 'large';
  onClose?: () => void;
  children?: React.ReactNode;
}
const Modal = ({ isVisible, children, onClose }: IModalProps) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-800 opacity-20 z-30" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-30">
        {children}
      </div>
    </div>
  )
}

export default Modal