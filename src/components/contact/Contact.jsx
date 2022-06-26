import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtefeih', 'template_cp7n91k', form.current, 'ut-QCXmhwtfNQ95Iu')
    alert('Message envoyé');
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <section id="contact">
      <h5>ME CONTACTER</h5>
      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom' required />
          <input type="email" name="email" placeholder='Votre email' required />
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  );
}


export default Contact
