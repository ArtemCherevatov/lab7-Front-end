import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbiesClicked: false,
            sportClicked: false
        };
    }

    // Клік на 4-й елемент (Заголовок "Мої хобі")
    toggleHobbiesColor = () => {
        this.setState(prevState => ({ hobbiesClicked: !prevState.hobbiesClicked }));
    }

    // Клік на 5-й елемент (Пункт "Спорт")
    toggleSportColor = () => {
        this.setState(prevState => ({ sportClicked: !prevState.sportClicked }));
    }

    render() {
        // Стиль для заголовка хобі (змінюється на зелений при кліку)
        const hobbiesStyle = this.state.hobbiesClicked 
            ? { backgroundColor: '#008b8b', color: 'white', cursor: 'pointer', padding: '5px 10px', fontWeight: 'bold', marginTop: '15px' } 
            : { backgroundColor: 'transparent', color: 'black', cursor: 'pointer', padding: '5px 10px', fontWeight: 'bold', marginTop: '15px' };
            
        // Стиль для пункту "Спорт" (використовуємо display: 'list-item', щоб не зникала крапка)
        const sportStyle = this.state.sportClicked 
            ? { backgroundColor: '#ffff00', cursor: 'pointer', display: 'list-item' } 
            : { backgroundColor: 'transparent', cursor: 'pointer', display: 'list-item' };

        return (
            <div>
                <p><strong>Місце народження:</strong> 30 грудня 2006 року, м. Вінниця</p>
                <p><strong>Освіта:</strong> Вінницький ліцей №32, НТУУ "КПІ"</p>
                
                {/* 4-й елемент — Заголовок (змінює колір за кліком) */}
                <div style={hobbiesStyle} onClick={this.toggleHobbiesColor}>
                    Мої хобі
                </div>
                
                {/* 5-й елемент — Спорт (зберігає крапку і змінює колір за кліком) */}
                <ul>
                    <li style={sportStyle} onClick={this.toggleSportColor}>Спорт</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Фільми</li>
                </ul>
                
                <div style={{ marginTop: '15px' }}>
                    <strong>Улюблені фільми:</strong>
                    <div style={{ marginTop: '5px' }}>
                        1. "Ґодзілла проти Конга", 2021<br />
                        2. "Топовий стріл: Маверік", 2022<br />
                        3. "Оппенгеймер", 2023
                    </div>
                </div>

                <p style={{ marginTop: '20px' }}>
                    Стамбул — унікальний мегаполіс на двох континентах. Одне з найулюбленіших міст з неймовірною архітектурою та історією.
                </p>
            </div>
        );
    }
}

export default Content;