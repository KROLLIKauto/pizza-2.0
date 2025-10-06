import React from 'react'
import { Logo } from '../Header/images/Logo'
import { Phone } from '../Header/images/Phone'
import { contactInfo } from '../Header/content/contact'
import { footerContent } from './content/footer'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className='main-info'>
            <div className="logo">
              <Logo />
            </div>

            <div className="contact">
              <Phone />
              <div className="info">
                <div className="phone">
                  {contactInfo.phone}
                </div>
                <div className="hours">
                  {contactInfo.hours}
                </div>
              </div>
            </div>
          </div>

          <div className="links">
            <a href={footerContent.privacyLink.href} className="link">
              {footerContent.privacyLink.text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer