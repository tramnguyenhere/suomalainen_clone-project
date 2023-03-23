import React from 'react'
import './Button.scss'

interface Props {
    type?: 'reset' | 'submit' | undefined;
    label: string | JSX.Element;
    onClick?: any;
    className: string
}

const Button = ({type,label,onClick, className}:Props) => {
  return (
      <button type={type} onClick={onClick} className={`${className} button`}>{label}</button>
  )
}

export default Button