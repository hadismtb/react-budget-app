import {Container} from "react-bootstrap";

//COMPONENTS
import Header from "./components/Header";
import Cards from "./components/Cards";

//CONTEXT
import { BudgetsProvider} from "./context/BudgetContext";
import AddBudgetModal from "./components/AddBudgetModal";
import {useState} from "react";
import AddExpenseModal from "./components/AddExpenseModal";

function App() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();

    const openAddExpenseModal = (budgetId) => {
        setShowAddExpenseModal(true);
        setAddExpenseModalBudgetId(budgetId)
    }

  return (
   <BudgetsProvider>
       <Container>
           <Header handleAddBudgetModal={() => setShowAddBudgetModal(true)} handleAddExpenseModal={() => setShowAddExpenseModal(true)}/>
           <Cards/>
       </Container>
       <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
       <AddExpenseModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)}/>
   </BudgetsProvider>
  );
}

export default App;
