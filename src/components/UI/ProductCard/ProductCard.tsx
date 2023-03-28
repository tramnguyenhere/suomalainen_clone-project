import React from 'react'
import './ProductCard.scss'
import Button from '../Button/Button'

const ProductCard = () => {
  return (
      <div className='card'>
      <div className="card-product">
        <img src="assets/images/book-cover.jpg" alt="book-cover" className="card-image" />
        <div className="card-badge">
          -50%
        </div>
      </div>
      <div className="card-details">
        <span className="card-details__title">Kasvattitytar</span>
        <span className="card-details__author">Enni Mustonen</span>
        <div className="card-details__rating"></div>
      </div>
      <Button label='Lisa koriin' className='card__button'/>
    </div>
  )
}

export default ProductCard