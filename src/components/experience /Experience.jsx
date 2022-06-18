import React from 'react'
import './experience.css'
import {DiHtml5} from 'react-icons/di'
import {FaCss3Alt} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import {DiVisualstudio} from 'react-icons/di'
import {CgFigma} from 'react-icons/cg'
import {SiAdobeillustrator} from 'react-icons/si'
import {MdRadioButtonChecked} from 'react-icons/md'


const Experience = () => {
  return (
    <section id="experience">
      <h5>COMPÉTENCES</h5>

      <div className='container experience__container'>
        
        <div className='hard__skill'>
          <h3>HARD SKILLS</h3>
          
          <div className='experience__content'>
           
            <article className='experience__details'>
            <DiHtml5 className='experience__details-icon' />
             <div><h4>HTML5</h4> </div>
            </article>
            
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div><h4>CSS3</h4></div>
            </article>
            
            <article className='experience__details'>
              <DiJavascript className='experience__details-icon' />
              <div><h4>Javascript</h4></div>
            </article>
           
            <article className='experience__details'>
              <GrReactjs className='experience__details-icon' />
              <div><h4>React</h4></div>
            </article>
            
            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon' />
              <div><h4>Git</h4></div>
            </article>
            
            <article className='experience__details'>
              <DiVisualstudio className='experience__details-icon' />
              <div><h4>VSCode</h4></div>
            </article>
                      
            <article className='experience__details'>
              <CgFigma className='experience__details-icon' />
              <div><h4>Figma</h4></div>
            </article>
           
            <article className='experience__details'>
              <SiAdobeillustrator className='experience__details-icon' />
              <div><h4>Suite Adobe</h4></div>
            </article>
          
          </div>
        </div>
        
        <div className='soft__skill'>
          <h3>SOFT SKILLS</h3>
          
          <div className='experience__content'>
          
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Travail en équipe</h4></div>
            </article>
           
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Polyvalence</h4></div>
            </article>
            
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Adapatabilité</h4></div>
            </article>
           
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Gestion des délais</h4></div>
            </article>
            
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Curiosité</h4></div>
            </article>
            
            <article className='experience__details'>
              <MdRadioButtonChecked className='experience__details-icon' />
              <div><h4>Organisée</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience