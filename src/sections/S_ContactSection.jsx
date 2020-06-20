import React, { useState } from 'react';
import { AddressIcon, EmailIcon, PhoneIcon } from '../assets/svg';
import { NormalButton } from '../components/buttons';
import TextInput from '../components/inputs/IN_TextInput';

function ContactSection() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const contactItems = [
    { icon: EmailIcon, text: 'tuandt66742@gmail.com', type: 'link' },
    {
      icon: AddressIcon,
      text: 'Khu trung cư SUDICO, phố Trần Văn Lai',
      type: 'link'
    },
    {
      icon: PhoneIcon,
      text: '+84869244632',
      type: 'link'
    }
  ];
  const handleSubmit = e => {
    e.preventDefault();
    console.log(message);
  };
  const handleChangeMessageForm = e => {
    const name = e.target.name;
    setMessage({ ...message, [name]: e.target.value });
  };

  return (
    <div className='contact-section-container d-flex-row d-flex-row-md d-flex-row--al-center mb-5'>
      <div className='contact-section'>
        <address className='contact-info'>
          {contactItems.map((v, i) => (
            <div
              className='contact-info-card d-flex-row d-flex-row-xs d-flex-row--al-center'
              key={i}
            >
              <div className='contact-info-icon'>
                <v.icon className='baba-icon-32' />
              </div>
              <div className='contact-info-text'>
                <p>
                  <a href='#'>{v.text}</a>
                </p>
              </div>
            </div>
          ))}
        </address>
      </div>
      <div className='contact-section'>
        <form className='contact-form form-vertical' onSubmit={handleSubmit}>
          <TextInput
            type='text'
            name='name'
            value={message.name}
            onChange={handleChangeMessageForm}
            placeholder='Name'
            className='input input-text input-outline-none form-item'
          />
          <TextInput
            type='email'
            name='email'
            value={message.email}
            onChange={handleChangeMessageForm}
            placeholder='Email'
            className='input input-text input-outline-none form-item'
          />
          <TextInput
            type='text'
            name='subject'
            value={message.subject}
            onChange={handleChangeMessageForm}
            placeholder='Subject'
            className='input input-text input-outline-none form-item'
          />
          <TextInput
            type='textarea'
            name='message'
            placeholder='Message'
            value={message.message}
            onChange={handleChangeMessageForm}
            rows='4'
            className='input input-text input-outline-none form-item'
          />
          <NormalButton type='submit' className='btn btn-primary'>
            Send message
          </NormalButton>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
