import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer__logo'>
    
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">A propos</a></li>
      <li><a href="#experience">Compétences</a></li>
      <li><a href="#portfolio">Projets</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
<div className='footer__copyright'>
  <small>&copy; Hélène Normant. All rights reserved.</small>
</div>
    </footer>
    
  )
}

export default Footer