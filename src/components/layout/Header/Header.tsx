import React from 'react'
import './Header.scss'
import BrandLogo from './BrandLogo/BrandLogo'
import Form from '../../UI/Form/Form'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { toggleCartUI } from '../../../redux/cart/cartUISlice';

const Header = () => {
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(toggleCartUI())
  }

  return (
    <div className='header'>
      <BrandLogo />
      <div className='header-actions'>
        <Form placeholderText='Hae kaupasta, esim. askartelu' buttonLabel={<SearchIcon />} />
        <NavigationLink label='Kirjaudu' link='/account/login' className='header__link' />
        <Button label={<ShoppingBasketIcon />} className='header__button' onClick={toggleCart} />
      </div>
    </div>
  )
}

export default Header