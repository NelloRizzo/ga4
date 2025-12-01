import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PRODUCTS from '../data/products';
import { trackEvent } from '../ga';

export default function ProductDetail(){
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const navigate = useNavigate();

  if(!product) return <div>Product not found</div>;

  function addToCart(){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    trackEvent('add_to_cart', { items: [product], value: product.price, currency:'EUR' });
    navigate('/cart');
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: €{product.price}</p>
      <button className="btn" onClick={() => { trackEvent('view_item',{ items:[product] }); }}>Track view_item</button>
      <button className="btn" style={{marginLeft:8}} onClick={addToCart}>Add to cart</button>
    </div>
  );
}
