import React from 'react'
import { navigationBar } from '../../../data/navigationBar'
import './NavigationBar.scss'
import Button from '../../UI/Button/Button'

const NavigationBar = () => {
  return (
      <div className='navigation-bar'>
          <Button label={<i className="fa-solid fa-percent">Tuotteet</i>} className='category__button'/>
        {navigationBar.map(item => (
          <a key={item.id} href={item.link}>{item.label}</a>
        ))}
    </div>
  )
}

export default NavigationBar