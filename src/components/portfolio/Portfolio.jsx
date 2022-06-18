import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio3.png'
import IMG3 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Emoji Pimp',
    github: 'https://github.com/Helene-Normant/Ride_my_bike'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Ride my bike',
    github: 'https://github.com/Helene-Normant/pimp_emoji'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Adacademy',
    github: 'https://github.com/Helene-Normant/helene-normant.github.io'
  }

]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MES PROJETS</h5>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-primary' target='_blank'> Github</a>
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