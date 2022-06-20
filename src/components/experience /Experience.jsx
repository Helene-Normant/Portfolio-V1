import React from 'react'
import './experience.css'
import ME3 from '../../assets/me-hard.png'
import ME4 from '../../assets/me-soft.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>COMPÉTENCES</h5>

      <div className='container experience__container'>


        <div className='hard__skill'>

          <div className='experience__me'>
          <div className='exeprience__me-image'>
            <img src={ME3} alt="Hard Image"/>
          </div>
        </div>

          <div className='experience__content_hard'>

            <article className='experience__details'>
              <div><h4>HTML5</h4> </div>
            </article>

            <article className='experience__details'>
              <div><h4>CSS3</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Javascript</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>React</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Git</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>VSCode</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Figma</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Suite Adobe</h4></div>
            </article>

          </div>
        </div>

        <div className='soft__skill'>

          <div className='experience__me'>
          <div className='exeprience__me-image'>
            <img src={ME4} alt="Soft Image"/>
          </div>
        </div>

          <div className='experience__content_soft'>

            <article className='experience__details'>
              <div><h4>Travail en équipe</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Polyvalence</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Adaptabilité</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Gestion des délais</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Curiosité</h4></div>
            </article>

            <article className='experience__details'>
              <div><h4>Organisation</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience