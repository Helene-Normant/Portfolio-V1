import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio3.png'
import IMG3 from '../../assets/portfolio2.png'

const data = [
  {
    box: 'portfolio__item',
    id: 1,
    image: IMG2,
    title: 'Ride my bike : Dataviz velib',
    github: 'https://github.com/Helene-Normant/Ride_my_bike'
  },

  {
    box: 'portfolio__item_2',
    id: 2,
    image: IMG1,
    title: 'Emoji pimp : Extension chrome',
    github: 'https://github.com/Helene-Normant/pimp_emoji'
  },

  {
    box: 'portfolio__item_3',
    id: 3,
    image: IMG3,
    title: 'Adacademy : jeux pico-8',
    github: 'https://github.com/Helene-Normant/helene-normant.github.io'
  }

]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MES PROJETS</h5>
      <div className='container portfolio__container'>
        {
          data.map(({box, id, image, title, github }) => {
            return (
              <article key={id} className={box}>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn-new' target='_blank'> ⇨ Go </a>
                </div>
              </article>

            )

          })
        }

      </div>
    </section>
  )
}

export default Portfolio