import React from 'react'
import './Cart.scss'
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { toggleCartUI } from '../../../redux/cart/cartUISlice';

const EmptyCart = () => {
  return (
    <div className="cart--empty">
      Ostokorisi on tyhjä.
    </div>
  )
}

const Cart = () => {
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(toggleCartUI())
  }

  return (
    <div className='cart' >
      <div onClick={toggleCart} className='cart-overlay'></div>
      <Button label={<CancelIcon />} className='cart__button--close' onClick={toggleCart} />
      <div className="cart-list">
        <EmptyCart />
      </div>
    </div>
  )
}

export default Cart