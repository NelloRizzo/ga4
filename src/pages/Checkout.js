import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../ga';

export default function Checkout(){
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  function placeOrder(e){
    e.preventDefault();
    if(items.length===0){ alert('Cart empty'); return; }
    const total = items.reduce((s,p)=>s+p.price,0);
    const transactionId = 'T-'+Date.now();
    // track purchase
    trackEvent('purchase',{ transaction_id: transactionId, value: total, currency:'EUR', items });
    // clear cart
    localStorage.removeItem('cart');
    navigate('/');
    alert('Order placed (demo) — ' + transactionId);
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={placeOrder}>
        <label>Email: <input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <div style={{marginTop:12}}>
          <button className="btn" type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
}
