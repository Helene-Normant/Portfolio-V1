import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hélène-normant/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Helene-Normant" target="_blank"><VscGithub/></a>
    </div>
  )
}

export default HeaderSocials