import React from 'react';
import { trackEvent } from '../ga';

export default function Home(){
  return (
    <div>
      <h2>Welcome to the GA4 React Advanced Demo</h2>
      <p>This demo contains products, cart and a fake checkout to generate ecommerce-like events.</p>
      <div style={{marginTop:16}}>
        <button className="btn" onClick={() => trackEvent('promo_click',{ promo:'homepage_banner' })}>
          Click Promo
        </button>
      </div>
    </div>
  );
}
