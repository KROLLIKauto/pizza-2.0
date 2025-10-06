'use client'

import React from 'react'
import { Logo } from './images/Logo'
import { Phone } from './images/Phone'
import './Header.scss'
import { PizzaIcon } from './images/PizzaIcon'
import { useCartStore } from '@/store/cartStore'
import { navigationData } from './content/navigation'
import { INavigationItem } from './types/navigation'
import { contactInfo, orderWidget, languageSwitcher } from './content/contact'

const Header: React.FC = () => {
  const { openModal, getTotalItems, items } = useCartStore()

  const getCartDescription = (): string => {
    const totalItems = getTotalItems()
    
    if (totalItems === 0) {
      return orderWidget.emptyText
    }

    const firstItemName = items[0]?.product.name || ''
    const remainingCount = items.length - 1
    
    if (remainingCount === 0) {
      return firstItemName
    }

    const pizzaWord = remainingCount === 1 
      ? orderWidget.moreItemsText.pizzaSingular 
      : orderWidget.moreItemsText.pizzaPlural
    
    return `${firstItemName} ${orderWidget.moreItemsText.and} ${remainingCount} ${pizzaWord}`
  }

  return (
    <header className="header">
      <div className="container">
        <div className="content">

          <div className="logo">
            <Logo />
          </div>

          <nav className="nav">
            <ul className="list">
              {navigationData.map((item: INavigationItem) => (
                <li key={item.id}>
                  <a href={item.href} className={`link ${item.isActive ? 'active' : ''}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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

          <div className="order" onClick={openModal} style={{ cursor: 'pointer' }}>
            <PizzaIcon />
            <div className="info">
              <div className="title">{orderWidget.title}</div>
              <div className="description">
                {getCartDescription()}
              </div>
            </div>
          </div>

          <button className="lang-switcher">
            {languageSwitcher.currentLang}
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </header>
  )
}

export default Header