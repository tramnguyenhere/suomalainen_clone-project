import React from 'react'
import './HeroBanner.scss'
import NavigationLink from '../../UI/NavigationLink/NavigationLink'

const HeroBanner = () => {
  return (
    <div className='hero-banner'>
      <a href="/collections/kirjailija-enni-mustonen" className="hero-banner__link">
      <img className='hero-banner__image' src='assets/images/Enni_Mustonen_desktop_banneri.webp' alt='hero-banner' />
      <div className="hero-banner__description">
        <span className="hero-banner__sub-title">Valokeilassa</span>
        <span className="hero-banner__title">Enni Mustonen</span>
        <NavigationLink label='Valikoimaan' link='/collections/kirjailija-enni-mustonen' className='hero-banner__button'/>
      </div>
     </a>
    </div>
  )
}

export default HeroBanner