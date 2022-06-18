import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtefeih', 'template_cp7n91k', form.current, 'ut-QCXmhwtfNQ95Iu')
    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>ME CONTACTER</h5>
      <div className='container contact__container'>
        <div className='contact__options'>
          {/* <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h3>normanthelene@gmail.com</h3>
            <a href="mailto:normanthelene@gmail.com" target="_blank">envoyer un message</a>
          </article> */}
          {/* <article className='contact__option'>
            <BsFillTelephoneFill className='contact__option-icon' />
            <h4>Téléphone</h4>
            <h3>06.30.64.29.53</h3>
          </article> */}
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/hélène-normant/" target="_blank">envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom' required />
          <input type="email" name="email" placeholder='votre email' required />
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact