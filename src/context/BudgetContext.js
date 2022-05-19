import {createContext, useContext, useState} from "react";

export const BudgetContext = createContext();

export const useBudgets = () => {
    return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const getBudgetExpenses = budgetId => {
      return expenses.filter(expense => expense.budgetId === budgetId)
    }

    const addBudget = ({name, max}) => {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: Date.now(), name, max}]
        })
    }

    const addExpense = ({description, amount, budgetId}) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: Date.now(), description, amount, budgetId}]
        })
    }

    const deleteBudget = ({id}) => {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }



    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addBudget,
            addExpense,
            deleteBudget,
            deleteExpense
        }}>
            {children}
        </BudgetContext.Provider>
    )
}