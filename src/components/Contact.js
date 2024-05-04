import React from 'react';

const Contact = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px',borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 1.1)' }}>
      <h2 style={{ color: '#333' }}>Contact Us</h2>
      <p style={{ color: '#666' }}>Feel free to contact us with any questions or inquiries!</p>
      <form style={{ marginTop: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '10px', color: '#333' }}>Name:</label>
        <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', color: '#333' }}>Email:</label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <label htmlFor="message" style={{ display: 'block', marginBottom: '10px', color: '#333' }}>Message:</label>
        <textarea id="message" name="message" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
