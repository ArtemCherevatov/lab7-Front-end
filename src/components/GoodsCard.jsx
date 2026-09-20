import React from 'react';

function GoodsCard({ photo, name, price }) {
    return (
        <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '15px', 
            margin: '10px', 
            width: '150px', 
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <img src={photo} alt={name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '18px', color: '#333' }}>{name}</h3>
            <p style={{ fontWeight: 'bold', color: '#555' }}>Cost: {price} грн</p>
        </div>
    );
}

export default GoodsCard;