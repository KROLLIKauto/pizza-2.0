'use client'

import React, { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'
import CartItem from '@/components/CartItem/ui/CartItem'
import { orderModalContent } from './content/orderModal'
import './OrderModal.scss'

const OrderModal: React.FC = () => {
  const { items, isModalOpen, closeModal, getTotalPrice } = useCartStore()

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  if (!isModalOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className="order-modal" onClick={handleBackdropClick}>
      <div className="content">
        <div className="header">
          <h2 className="title">{orderModalContent.title}</h2>
          <button
            className="close"
            onClick={closeModal}
            aria-label={orderModalContent.closeAriaLabel}
          >
            ×
          </button>
        </div>

        <div className="body">
          {items.length === 0 ? (
            <div className="empty">
              <p>{orderModalContent.emptyCart.message}</p>
              <p className="empty-hint">
                {orderModalContent.emptyCart.hint}
              </p>
            </div>
          ) : (
            <div className="items">
              {items.map((item) => (
                <CartItem key={item.uniqueId} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            <div className="total">
              <span className="label">{orderModalContent.total.label}</span>
              <span className="price">
                {getTotalPrice()} {orderModalContent.total.currency}
              </span>
            </div>

            <div className="form">
              <h3 className="form-title">{orderModalContent.form.contactsTitle}</h3>
              <div className="form-row">
                <input
                  type="text"
                  className="input"
                  placeholder={orderModalContent.form.namePlaceholder}
                />
                <input
                  type="tel"
                  className="input"
                  placeholder={orderModalContent.form.phonePlaceholder}
                />
              </div>
              <input
                type="text"
                className="input full"
                placeholder={orderModalContent.form.addressPlaceholder}
              />

              <h3 className="form-title">{orderModalContent.form.paymentTitle}</h3>
              <div className="payment">
                <label className="radio">
                  <input type="radio" name="payment" defaultChecked />
                  <span>{orderModalContent.form.paymentOptions.cash}</span>
                </label>
                <label className="radio">
                  <input type="radio" name="payment" />
                  <span>{orderModalContent.form.paymentOptions.online}</span>
                </label>
              </div>

              <button className="submit">{orderModalContent.form.submitButton}</button>
              <p className="privacy">
                {orderModalContent.form.privacyText}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderModal