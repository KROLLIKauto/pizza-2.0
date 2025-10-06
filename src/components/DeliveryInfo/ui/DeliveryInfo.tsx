import React from 'react'
import Image from 'next/image'
import './DeliveryInfo.scss'
import { deliveryInfoData } from '../content/deliveryInfo'
import { IDeliveryInfo } from '../types/deliveryInfo'

const DeliveryInfo: React.FC = () => {
  return (
    <section className="delivery-info">
      <div className="container">
        <h2 className="title">Доставка и оплата</h2>
        <div className="cards">
          {deliveryInfoData.map((item: IDeliveryInfo) => (
            <div key={item.id} className="card">
              <div className="image">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                />
              </div>
              <div className="content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryInfo