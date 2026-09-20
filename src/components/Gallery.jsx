import React from 'react';
import GoodsCard from './GoodsCard';

function Gallery() {
    // Масив з 6 товарами
    const goodsList = [
        { id: 1, name: 'Apple', price: 15, photo: '/apple.png' },
        { id: 2, name: 'Pear', price: 20, photo: '/pear.png' },
        { id: 3, name: 'Grape', price: 25, photo: '/grapes.png' },
        { id: 4, name: 'Peach', price: 18, photo: '/peach.png' },
        { id: 5, name: 'Banana', price: 22, photo: '/banana.png' },
        { id: 6, name: 'Orange', price: 17, photo: '/orange.png' }
    ];

    return (
        <div>
            <h2>Галерея товарів</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {goodsList.map(item => (
                    <GoodsCard 
                        key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        photo={item.photo} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;