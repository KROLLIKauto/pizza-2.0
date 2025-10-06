import React from 'react'
import Image from 'next/image'
import './Features.scss'
import { featuresData } from '../content/features'
import { IFeature } from '../types/feature'

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="list">
          {featuresData.map((feature: IFeature, index: number) => (
            <div 
              key={feature.id} 
              className={`item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="image">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={314}
                  height={314}
                  sizes="(max-width: 640px) 80px, (max-width: 834px) 220px, 314px"
                />
              </div>
              <div className="content">
                <h3 className="title">{feature.title}</h3>
                <p className="description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features