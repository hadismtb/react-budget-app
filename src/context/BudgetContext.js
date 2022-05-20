import {createContext, useContext} from "react";

//CUSTOM HOOK
import useLocalStorage from "../hooks/useLocalStorage";

export const BudgetContext = createContext();

export const useBudgets = () => {
    return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenses] = useLocalStorage("expenses", []);

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

    const deleteExpense = ({id}) => {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
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