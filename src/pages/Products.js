import React from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data/products';

export default function Products(){
  return (
    <div>
      <h2>Products</h2>
      {PRODUCTS.map(p => (
        <div key={p.id} className="product">
          <div>
            <strong>{p.name}</strong><div>€{p.price}</div>
          </div>
          <div>
            <Link to={`/product/${p.id}`} className="btn">View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
