import React from 'react';
import Image from 'next/image';
import './Promotions.scss';
import { promotionsData } from '../content/promotions';
import { IPromotion } from '../types/promotion';

const Promotions: React.FC = () => {
  
  return (
    <section className="promotions">
      <div className="container">
        <div className="promotions-grid">
          {promotionsData.map((promo: IPromotion) => (
            <div key={promo.id} className="promo-card">
              <div className="promo-image">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={416}
                  height={324}
                />
              </div>
                <h3 className="promo-title">{promo.title}</h3>
                <p className="promo-description">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
