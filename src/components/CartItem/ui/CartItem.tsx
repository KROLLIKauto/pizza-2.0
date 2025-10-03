'use client';

import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/store/cartStore';
import { useCartStore } from '@/store/cartStore';
import './CartItem.scss';
import PlusImg from '../images/plus.png'
import MinusImg from '../images/minus.png'
import DeleteImg from '../images/x.png'

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleIncrement = () => {
    updateQuantity(item.uniqueId, item.quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.uniqueId, item.quantity - 1);
  };

  const handleRemove = () => {
    removeItem(item.uniqueId);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <Image
          src={item.product.image}
          alt={item.product.name}
          width={80}
          height={80}
        />
      </div>

      <div className="cart-item__info">
        <h4 className="cart-item__name">{item.product.name}</h4>
        <p className="cart-item__size">{item.size} см</p>
      </div>

      <div className="cart-item__controls">
        <button
          className="cart-item__btn cart-item__btn--decrease"
          onClick={handleDecrement}
          aria-label="Уменьшить количество"
        >
          <Image
            src={MinusImg}
            alt={'minus'}
            width={24}
            height={24}
          />
        </button>
        <span className="cart-item__quantity">{item.quantity}</span>
        <button
          className="cart-item__btn cart-item__btn--increase"
          onClick={handleIncrement}
          aria-label="Увеличить количество"
        >
          <Image
            src={PlusImg}
            alt={'plus'}
            width={24}
            height={24}
          />
        </button>
      </div>

      <div className="cart-item__price">
        {item.product.price * item.quantity} руб
      </div>

      <button
        className="cart-item__remove"
        onClick={handleRemove}
        aria-label="Удалить товар"
      >
        <Image
          src={DeleteImg}
          alt={'delete'}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default CartItem;


