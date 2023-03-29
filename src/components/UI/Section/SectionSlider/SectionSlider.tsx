import React from 'react'
import ProductCard from '../../ProductCard/ProductCard'
import './SectionSlider.scss'
import Button from '../../Button/Button'

const SectionSlider = () => {
  return (
    <div className='section-slider'>
      <Button label={<i className="fa-solid fa-chevron-left"/>} className='section-slider__button'/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Button label={<i className="fa-solid fa-chevron-right"/>} className='section-slider__button'/>
    </div>
  )
}

export default SectionSlider