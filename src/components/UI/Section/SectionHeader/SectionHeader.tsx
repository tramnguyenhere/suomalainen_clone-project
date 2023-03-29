import React from 'react'
import './SectionHeader.scss'

interface Props {
  sectionHeader: string
}

const SectionHeader = ({sectionHeader}:Props) => {
  return (
    <div className='section-header'> 
      <div className="section-header__title">
        <h2 className='section-header__text'>{sectionHeader}</h2>
      </div>
      <a href="/collections/kirjailija-enni-mustonen" className="section-header__show-all">Näytä kaikki</a>
    </div>
  )
}

export default SectionHeader