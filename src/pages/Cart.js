import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../ga';

export default function Cart(){
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  function clearCart(){
    localStorage.removeItem('cart');
    setItems([]);
  }

  function checkout(){
    // simulate begin_checkout
    const value = items.reduce((s,p)=>s+p.price,0);
    trackEvent('begin_checkout',{ value, currency:'EUR', items });
    navigate('/checkout');
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length===0 && <p>No items in cart. <Link to="/products">Shop products</Link></p>}
      {items.map((it,idx)=>(
        <div key={idx} style={{marginBottom:8}}>
          {it.name} — €{it.price}
        </div>
      ))}
      {items.length>0 && (
        <>
          <div style={{marginTop:12}}>
            <button className="btn" onClick={checkout}>Proceed to Checkout</button>
            <button style={{marginLeft:8}} onClick={clearCart}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
}
