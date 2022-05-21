import React from 'react';
import BudgetCard from "./BudgetCard";
import { useBudgets} from "../context/BudgetContext"

const UncategorizedBudgetCard = (props) => {
    const {expenses, budgets} = useBudgets();
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    const max = budgets.reduce((total, budget) => total + budget.max, 0);


    if (max ===0) return null
    return (
        <BudgetCard data={{max, total, name: "مجموع", id: "total"}}/>
    );
};

export default UncategorizedBudgetCard;