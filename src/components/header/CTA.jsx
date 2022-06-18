import React from 'react'
import CV from '../../assets/CV_helene_normant.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Télécharger CV</a>
        <a href="#contact" className='btn btn-primary'>contactez moi</a>
    </div>
  )
}

export default CTA