import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$24.99' },
    { id: 3, name: 'Product 3', price: '$14.99' },
    // Add more products as needed
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Products</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '10px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ margin: 0 }}>{product.name}</h3>
            <p style={{ margin: 0 }}>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
