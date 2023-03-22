import React from 'react'
import './Header.scss'
import BrandLogo from './BrandLogo/BrandLogo'
import Form from '../../UI/Form/Form'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  return (
    <div className='header'>
      <BrandLogo />
      <Form placeholderText='Hae kaupasta, esim. askartelu' buttonLabel={<SearchIcon />}/>
    </div>
  )
}

export default Header