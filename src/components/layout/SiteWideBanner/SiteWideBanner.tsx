import React from 'react'
import './SiteWideBanner.scss'
import { banner } from '../../../data/banner'


// Testing
const SiteWideBanner = () => {
  return (
    <div className='site-wide-banner'>
      <div className='site-wide-banner__group'>
        {banner.customerServiceLink.map(item => (
          <a key={item.id} href={item.link} className='site-wide-banner__item'>{item.label}</a>
        ))}
      </div>
      <div className='site-wide-banner__group' id='delivery-info'>
        {banner.freeDeliveryLink.map(item => (
          <a  className='site-wide-banner__item' key={item.id} href={item.link}>{item.label}</a>
        ))}
      </div>
      <div className='site-wide-banner__group'>
        {banner.subCompaniesLink.map(item => (
          <a  className='site-wide-banner__item' key={item.id} href={item.link}>{item.label}</a>
        ))}
      </div>
    </div>
  )
}

export default SiteWideBanner