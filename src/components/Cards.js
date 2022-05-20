import React from 'react';

//COMPONENTS
import BudgetCard from "./BudgetCard";
import {useBudgets} from "../context/BudgetContext";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";

//STYLE
const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
}


const Cards = ({openAddExpense}) => {
    const { budgets } = useBudgets();

    return (
        <div style={style}>
            {
                budgets.map(budget => <BudgetCard openAddExpense={openAddExpense} key={budget.id} data={budget} />)
            }
            <UncategorizedBudgetCard/>
        </div>
    );
};

export default Cards;