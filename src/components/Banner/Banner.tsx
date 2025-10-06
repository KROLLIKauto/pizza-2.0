import React from 'react'
import Image from 'next/image'
import './Banner.scss'
import { bannerContent } from './content/banner'

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="image image-desktop">
        <Image
          src={bannerContent.image}
          alt={bannerContent.imageAlt}
          width={1007}
          height={630}
          priority
        />
      </div>
      <div className="container">
        <div className="content">
          <div className="text">
            <h1 className="title">{bannerContent.title}</h1>
            <p className="description">
              {bannerContent.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < bannerContent.description.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <button className="button primary-font">
              {bannerContent.buttonText}
            </button>
          </div>
          <div className="image image-mobile">
            <Image
              src={bannerContent.image}
              alt={bannerContent.imageAlt}
              width={1007}
              height={630}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner