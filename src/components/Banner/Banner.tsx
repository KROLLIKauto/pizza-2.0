import React from 'react';
import Image from 'next/image'
import bannerImg from './images/banner.png'
import './Banner.scss'

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="content">
          {/* Левая часть с текстом */}
          <div className="text">
            <h1 className="title">Пицца на заказ</h1>
            <p className="description">
              Бесплатная и быстрая доставка за час<br />
              в любое удобное для вас время
            </p>
            <button className="button primary-font">
              ВЫБРАТЬ ПИЦЦУ
            </button>
          </div>

          <div className="image">
            <Image
              src={bannerImg}
              alt={'banner'}
              width={1007}
              height={630}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
