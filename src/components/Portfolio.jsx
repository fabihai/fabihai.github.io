import React, { useState } from 'react';
import cards from '../card-info.jsx';
import Card from './Card.jsx';
import './Portfolio.css';

function Portfolio() {
    const [card, setCard] = useState(cards);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="card-container">
                {card.map((card) => (
                    <Card
                        key={card.key}
                        title={card.title}
                        tools={card.tools}
                        visual={card.visual}
                        link={card.link}
                        linktext={card.linktext}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;