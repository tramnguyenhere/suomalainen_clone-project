import React from 'react'
import './SectionHeader.scss'

const SectionHeader = () => {
  return (
    <div className='section-header'> 
      <div className="section-header__tittle">
        <h2 className='section-header__text'>Valokeilassa Enni Mustonen</h2>
      </div>
      <a href="/collections/kirjailija-enni-mustonen" className="section-header__show-all">Näytä kaikki</a>
    </div>
  )
}

export default SectionHeader