import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.png'
import { IoMdSchool } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'


export const About = () => {
  return (
    <section id='about'>
      <h2> À PROPOS DE MOI</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME2} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
          
          <div className='about__cards'>
            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h3>Etudiante à Ada Tech School</h3>
              <medium>9 mois de formation - 1 an d'alternance</medium>
            </article>

                <article className='about__card'>
                  <BsSearch className='about__icon' />
                  <h3>Cherche alternance octobre 2022</h3>
                  <medium>4 jours en entreprise - 1 jour à l'école</medium>
                </article>
                 </div>

                 <p>
                 Après plusieurs années dans le secteur du textile, 2022 est l'année du changement.
                 J'ai donc repris le chemin de l'école en janvier. Près de 2 ans intenses pour me plonger dans 
                 le développement informatique, chapeautée par ADA TECH SCHOOL Paris.
                 Pendant ces 9 mois de formation à plein temps nous avons des projets variés en équipe 
                 dans différents langages et nous apprenons également à appliquer les méthodes agiles. 
                 </p>

                 <a href="#contact" className='btn btn-primary'>Restons en contact</a>
            </div>
          </div>
        </section>
        )
}

        export default About


