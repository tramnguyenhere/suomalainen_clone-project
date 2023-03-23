import React from 'react'
import SiteWideBanner from './SiteWideBanner/SiteWideBanner'
import Header from './Header/Header'
import Cart from '../UI/Cart/Cart'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Layout = () => {
    const showCart = useSelector((state: RootState) => (state.cartUI.cartIsVisible))

  return (
    <div>
        <SiteWideBanner />
        <Header />
        {showCart && <Cart />}
    </div>
  )
}

export default Layout