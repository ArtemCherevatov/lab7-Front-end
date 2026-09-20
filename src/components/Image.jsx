import React, { useState } from 'react';

function Image() {
    const [isVisible, setIsVisible] = useState(true);
    const [imgWidth, setImgWidth] = useState(400);

    const addImage = () => setIsVisible(true);
    const removeImage = () => setIsVisible(false);
    const zoomIn = () => setImgWidth(prev => prev + 50);
    const zoomOut = () => setImgWidth(prev => (prev > 100 ? prev - 50 : 100));

    return (
        <div style={{ marginTop: '15px' }}>
            {isVisible && (
                <div style={{ marginBottom: '10px' }}>
                    <img 
                        src="/istanbul.jpg" 
                        alt="Стамбул" 
                        style={{ width: `${imgWidth}px`, display: 'block', transition: 'width 0.3s' }} 
                    />
                </div>
            )}
            
            <div>
                <button onClick={addImage} style={{ marginRight: '5px', padding: '5px 10px' }}>Додати</button>
                <button onClick={zoomIn} style={{ marginRight: '5px', padding: '5px 10px' }}>Збільшити</button>
                <button onClick={zoomOut} style={{ marginRight: '5px', padding: '5px 10px' }}>Зменшити</button>
                <button onClick={removeImage} style={{ padding: '5px 10px' }}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;