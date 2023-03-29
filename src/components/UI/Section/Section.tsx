import React from 'react'
import SectionHeader from './SectionHeader/SectionHeader'
import './Section.scss'
import SectionSlider from './SectionSlider/SectionSlider'

const Section = () => {
  return (
    <div className='section'>
      <SectionHeader sectionHeader='Valokeilassa Enni Mustonen'/>
      <SectionSlider />
    </div>
  )
}

export default Section