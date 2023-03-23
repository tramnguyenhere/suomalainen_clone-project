import React from 'react'
import './NavigationLink.scss'

interface Props {
    id?: string;
    label: string;
    link: string;
    className: string;
}

const NavigationLink = ({ label, link, id, className }:Props) => {
  return (
    <a className={`${className} navigation-link`} href={link} key={id}>{label}</a>
  )
}

export default NavigationLink