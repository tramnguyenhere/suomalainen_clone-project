import React from 'react'
import { navigationBar } from '../../../data/navigationBar'
import './NavigationBar.scss'
import Button from '../../UI/Button/Button'
import NavigationLink from '../../UI/NavigationLink/NavigationLink'

const NavigationBar = () => {
  return (
      <div className='navigation-bar'>
        <Button label={`Tuotteet`} icon={<i className="fa-solid fa-bars"></i>} className='category__button'/>
        {navigationBar.map(item => (
          <NavigationLink key={item.id} link={item.link} label={item.label} className='category__button'/>
        ))}
    </div>
  )
}

export default NavigationBar