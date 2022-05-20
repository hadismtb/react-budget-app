import React from 'react';

//COMPONENTS
import BudgetCard from "./BudgetCard";
import {useBudgets} from "../context/BudgetContext";

//STYLE
const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
}


const Cards = () => {
    const { budgets } = useBudgets();

    return (
        <div style={style}>
            {
                budgets.map(budget => <BudgetCard key={budget.id} data={budget} />)
            }
        </div>
    );
};

export default Cards;