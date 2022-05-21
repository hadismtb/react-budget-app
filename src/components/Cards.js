import React from 'react';

//COMPONENTS
import BudgetCard from "./BudgetCard";
import {useBudgets} from "../context/BudgetContext";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";
import TotalBudgetCard from "./TotalBudgetCard"

//STYLE
const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
    alignItems: "flex-start",
}


const Cards = ({openAddExpense, viewExpenseModal}) => {
    const { budgets } = useBudgets();

    return (
        <div style={style}>
            {
                budgets.map(budget => <BudgetCard openAddExpense={openAddExpense}  viewExpenseModal={viewExpenseModal} key={budget.id} data={budget} />)
            }
            <UncategorizedBudgetCard openAddExpense={openAddExpense}  viewExpenseModal={viewExpenseModal}/>
            <TotalBudgetCard />    
        </div>
    );
};

export default Cards;