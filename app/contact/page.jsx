'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';
import { useRouter } from 'next/navigation'
export default function Contact () {
  const form = useRef();
  const router = useRouter()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Charlytoc', 'template_nbholed', form.current, 'htbfOOPZRcoGtSQcb')
      .then((result) => {
        result.text == 'OK' ? router.push('/') : console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Navbar />
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <h1>Contact me!</h1>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <input type="text" name="message" />
      <label>Phone</label>
      <input type="text" name="phone" />
      <label>Interest</label>
      <input type="text" name='interest'/>
      <input className='click' type="submit" value="Send" />
    </form>
    </>
  );
};