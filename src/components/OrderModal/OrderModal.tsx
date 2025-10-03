'use client';

import React, { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import CartItem from '@/components/CartItem/ui/CartItem';
import './OrderModal.scss';

const OrderModal: React.FC = () => {
  const { items, isModalOpen, closeModal, getTotalPrice } = useCartStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="order-modal" onClick={handleBackdropClick}>
      <div className="order-modal__content">
        <div className="order-modal__header">
          <h2 className="order-modal__title">Ваш заказ</h2>
          <button
            className="order-modal__close"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <div className="order-modal__body">
          {items.length === 0 ? (
            <div className="order-modal__empty">
              <p>Ваша корзина пуста</p>
              <p className="order-modal__empty-hint">
                Добавьте пиццу из меню, чтобы оформить заказ
              </p>
            </div>
          ) : (
            <div className="order-modal__items">
              {items.map((item) => (
                <CartItem key={item.uniqueId} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            <div className="order-modal__total">
              <span className="order-modal__total-label">Сумма заказа:</span>
              <span className="order-modal__total-price">
                {getTotalPrice()} руб
              </span>
            </div>

            <div className="order-modal__form">
              <h3 className="order-modal__form-title">Контакты</h3>
              <div className="order-modal__form-row">
                <input
                  type="text"
                  className="order-modal__input"
                  placeholder="Ваше имя"
                />
                <input
                  type="tel"
                  className="order-modal__input"
                  placeholder="Телефон"
                />
              </div>
              <input
                type="text"
                className="order-modal__input order-modal__input--full"
                placeholder="Адрес доставки"
              />

              <h3 className="order-modal__form-title">Способ оплаты</h3>
              <div className="order-modal__payment">
                <label className="order-modal__radio">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Оплата наличными или картой курьеру</span>
                </label>
                <label className="order-modal__radio">
                  <input type="radio" name="payment" />
                  <span>Оплата картой онлайн на сайте</span>
                </label>
              </div>

              <button className="order-modal__submit">ОФОРМИТЬ ЗАКАЗ</button>
              <p className="order-modal__privacy">
                Нажимая кнопку «Оформить заказ» Вы соглашаетесь с политикой
                конфиденциальности
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;


