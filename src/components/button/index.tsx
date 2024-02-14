import React from 'react'
import './button.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  hasIconPrefix?: boolean;
  Icon?: string;
  type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, onClick, variant, hasIconPrefix=false, Icon, type }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${variant} rounded-full text-sm`} type={type}>
      {hasIconPrefix ? <img src={Icon} alt="" className='w-5 h-5 inline-block'/> : null } {children}
    </button>
  )
}

export default Button