import {createContext, useContext} from "react";

export const BudgetContext = createContext();

export const useBudgets = () => {
    return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
    return (
        <BudgetContext.Provider value={{}}>
            {children}
        </BudgetContext.Provider>
    )
}