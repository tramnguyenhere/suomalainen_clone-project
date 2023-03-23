import React from 'react'
import './SiteWideBanner.scss'
import { banner } from '../../../data/banner'
import NavigationLink from '../../UI/NavigationLink/NavigationLink'

const SiteWideBanner = () => {
  return (
    <div className='site-wide-banner'>
      <div className='site-wide-banner__group'>
        {banner.customerServiceLink.map(item => (
          <NavigationLink id={item.id} className='site-wide-banner__item' link={item.link} label={item.label} />
        ))}
      </div>
      <div className='site-wide-banner__group' id='delivery-info'>
        {banner.freeDeliveryLink.map(item => (
          <NavigationLink id={item.id} className='site-wide-banner__item' link={item.link} label={item.label} />
        ))}
      </div>
      <div className='site-wide-banner__group'>
        {banner.subCompaniesLink.map(item => (
          <NavigationLink id={item.id} className='site-wide-banner__item' link={item.link} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export default SiteWideBanner