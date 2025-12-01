import React, { useState } from 'react';
import { trackEvent } from '../ga';

export default function Contact(){
  const [email, setEmail] = useState('');
  function submit(e){
    e.preventDefault();
    trackEvent('form_submit',{ form_id:'contact', email });
    alert('Form submitted (demo)');
    setEmail('');
  }
  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={submit}>
        <label>Email: <input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <button className="btn" style={{marginLeft:8}}>Send</button>
      </form>
    </div>
  );
}
