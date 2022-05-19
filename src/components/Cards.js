import React from 'react';

//COMPONENTS
import BudgetCard from "./BudgetCard";

//STYLE
const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
}
const testData = {name: "لباس",
max: 300,
    amount: 700
}


const Cards = () => {
    return (
        <div style={style}>
            <BudgetCard data={testData}/>
        </div>
    );
};

export default Cards;