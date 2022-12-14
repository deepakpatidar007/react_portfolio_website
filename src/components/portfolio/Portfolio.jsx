import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const Portfolio = () => {
const items = [{img:IMG1},{img:IMG2},{img:IMG3},{img:IMG4},{img:IMG5},{img:IMG6}]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {items.map((item,index)=>{
          return(
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.img} alt=''/>
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" target='_blank' className='btn'>Github</a>
                <a href="https://dribbble.com/alien_pixels" target='_blank' className='btn btn-primary'>Livedemo</a>
              </div>
            </article>
          )
        })}
        
      
        
      </div>
    </section>
  )
}

export default Portfolio