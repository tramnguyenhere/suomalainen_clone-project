import React from 'react'
import './ProductCard.scss'
import Button from '../Button/Button'

const ProductCard = () => {
  return (
    <div className='card'>
      <a href='/collections/kirjailija-enni-mustonen/products/tekija-signeerattu' className="card-product">
        <img src="assets/images/book-cover.jpg" alt="book-cover" className="card-image" />
        <span className="card-badge">
          -50%
        </span>
      </a>
      <div className="card-details">
        <a href='/collections/kirjailija-enni-mustonen/products/tekija-signeerattu' className="card-details__title">Taiteilijan vaimo</a>
        <span className="card-details__author">Enni Mustonen</span>
      </div>
      <div className="card-actions">
        <div className="card-details__rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="card-prices">
          <span className='discounted-price'>12,95 $</span>
          <span className='before-discount-price'>24,95 $</span>
        </div>
        <Button label='Lisää koriin' className='card__button'/>
      </div>
    </div>
  )
}

export default ProductCard