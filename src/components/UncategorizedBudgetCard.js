import React from 'react';
import BudgetCard from "./BudgetCard";
import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "../context/BudgetContext"

const UncategorizedBudgetCard = (props) => {
    const {getBudgetExpenses} = useBudgets();

    const uncategorizedList = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID)

    if (uncategorizedList.length ===0) return null
    return (
        <BudgetCard data={{...props, id: UNCATEGORIZED_BUDGET_ID, name: "دسته‌بندی نشده"}}/>
    );
};

export default UncategorizedBudgetCard;