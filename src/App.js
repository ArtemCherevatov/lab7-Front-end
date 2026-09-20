import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Gallery from './components/Gallery';

function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <Header />
            <Content />
            <Image />
            
            <hr style={{ margin: '40px 0', borderTop: '1px solid #ccc' }} />
            
            <Gallery />
        </div>
    );
}

export default App;