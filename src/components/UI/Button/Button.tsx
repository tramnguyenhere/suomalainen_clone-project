import React from 'react'
import './Button.scss'

interface Props {
  type?: 'reset' | 'submit' | undefined;
  label: string | JSX.Element;
  icon?: JSX.Element;
  onClick?: any;
  className: string
}

const Button = ({type,label,onClick, className, icon}:Props) => {
  return (
    <button type={type} onClick={onClick} className={`${className} button`}>
      {icon}
      {label}
    </button>
  )
}

export default Button