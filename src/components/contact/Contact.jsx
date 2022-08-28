import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BiMessageRoundedDots} from 'react-icons/bi' 
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Emial</h4>
            <h5>deepsdk007@gmail.com</h5>
            <a href='mailto:deepsdk007@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BiMessageRoundedDots className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>deepsdk007@gmail.com</h5>
            <a href='mailto:deepsdk007@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>deepsdk007@gmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone=+919649881614' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact