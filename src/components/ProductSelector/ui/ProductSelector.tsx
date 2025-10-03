'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './ProductSelector.scss';
import { productsData } from '../content/products';
import { IProduct, IProductSize } from '../types/product';
import { ProductCategory } from '../types/category';
import sizeBackground from '../content/images/size.png';
import { useCartStore } from '@/store/cartStore';

const ProductSelector: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'все'>(ProductCategory.ALL);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: IProductSize }>({});
  const addItem = useCartStore((state) => state.addItem);

  const categories = Object.values(ProductCategory);

  const filteredProducts = activeCategory === ProductCategory.ALL
    ? productsData
    : productsData.filter((product) => product.category === activeCategory);

  const handleSizeSelect = (productId: number, size: IProductSize) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product: IProduct, size: IProductSize) => {
    addItem(product, size.sizeProduct)
  };

  return (
    <section className="product-selector">
      <div className="container">
        <h2 className="title">Выберите пиццу</h2>
        
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredProducts.map((product: IProduct) => {
            const selectedSize = selectedSizes[product.id] || product.sizes[0]            
            
            return (
              <div key={product.id} className="card">
                <div className="image" data-size={selectedSize.sizeImg}>
                  <Image
                    src={sizeBackground}
                    alt="size background"
                    width={200}
                    height={200}
                    className="size-background"
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={304}
                    height={304}
                    className="pizza-image"
                    style={{
                      width: selectedSize.sizeImg,
                      height: selectedSize.sizeImg,
                    }}
                  />
                </div>
                
                <h3 className="name">{product.name}</h3>
                <p className="description">{product.description}</p>
                
                <div className="size-selector">
                  <span className="size-label">Размер, см:</span>
                  <div className="size-buttons">
                    {product.sizes.map((size) => (
                      <button
                        key={size.sizeProduct}
                        className={`size-btn ${selectedSize.sizeImg === size.sizeImg ? 'active' : ''}`}
                        onClick={() => handleSizeSelect(product.id, size)}
                      >
                        {size.sizeProduct}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="footer">
                  <div className="price">от {product.price} руб.</div>
                  <button 
                    className="order-btn"
                    onClick={() => handleAddToCart(product, selectedSize)}
                  >
                    ЗАКАЗАТЬ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
