import React from 'react';
import { AddressIcon, EmailIcon, PhoneIcon } from '../assets/svg';

function ContactSection() {
  const contactItems = [
    { icon: EmailIcon, text: 'tuandt66742@gmail.com', type: 'link' },
    {
      icon: AddressIcon,
      text: '198 West 21th Street, Suite 721 New York NY 10016',
      type: 'link'
    },
    {
      icon: PhoneIcon,
      text: '+84869244632',
      type: 'link'
    }
  ];

  return (
    <div className='basic-grid basic-grid--two'>
      <div className='contact-info-wrapper'>
        <address className='contact-info'>
          {contactItems.map((v, i) => (
            <div className='contact-info-card' key={i}>
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
      <div className='contact-form-wrapper'></div>
    </div>
  );
}

export default ContactSection;
