import React from 'react'
import SiteWideBanner from './SiteWideBanner/SiteWideBanner'
import Header from './Header/Header'
import Cart from '../UI/Cart/Cart'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import NavigationBar from './NavigationBar/NavigationBar'
import HeroBanner from './HeroBanner/HeroBanner'
import Section from '../UI/Section/Section'

const Layout = () => {
    const showCart = useSelector((state: RootState) => (state.cartUI.cartIsVisible))

  return (
    <>
      <SiteWideBanner />
      <Header />
      {showCart && <Cart />}
      <NavigationBar />
      <HeroBanner />
      <Section />
    </>
  )
}

export default Layout