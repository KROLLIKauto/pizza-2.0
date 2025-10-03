'use client';

import React from 'react';
import { Logo } from './images/Logo'
import { Phone } from './images/Phone'
import './Header.scss';
import { PizzaIcon } from './images/PizzaIcon';
import { useCartStore } from '@/store/cartStore';

const Header: React.FC = () => {
  const { openModal, getTotalItems, items } = useCartStore();
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">

          <div className="header__logo">
            <Logo />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">МЕНЮ</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link header__nav-link--active">О НАС</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">КОНТАКТЫ</a>
              </li>
            </ul>
          </nav>

          <div className="contact">
            <Phone />
            <div className="contact_info">
              <div className="phone">
                +7 (918) 432-65-87
              </div>
              <div className="hours">
                Ежедневно с 9:00 до 23:00
              </div>
            </div>
          </div>

          <div className="order" onClick={openModal} style={{ cursor: 'pointer' }}>
            <PizzaIcon />
            <div className="info">
              <div className="title">ВАШ ЗАКАЗ</div>
              <div className="description">
                {getTotalItems() > 0 
                  ? `${items[0]?.product.name}${items.length > 1 ? ` и ещё ${items.length - 1} ${items.length === 2 ? 'пицца' : 'пиццы'}` : ''}`
                  : 'Корзина пуста'}
              </div>
            </div>
          </div>

          <button className="lang-switcher">
            EN
          </button>
        </div>
      </div>
      <div className="header__divider"></div>
    </header>
  );
};

export default Header;
