import React from 'react';

//STYLE
const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
}

const Cards = () => {
    return (
        <div style={style}>
            cards
        </div>
    );
};

export default Cards;