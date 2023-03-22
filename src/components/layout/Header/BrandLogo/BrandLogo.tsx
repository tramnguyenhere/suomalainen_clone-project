import React from 'react'
import './BrandLogo.scss'

const BrandLogo = () => {
  return (
    <a className="header__logo" href='/'>
        <span className="header-logo__name">suomalainen</span>
        <span className="header-logo__sub-name">kirjakauppa</span>
    </a>  
  )
}

export default BrandLogo