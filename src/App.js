import {Container} from "react-bootstrap";

//COMPONENTS
import Header from "./components/Header";
import Cards from "./components/Cards";

//CONTEXT
import { BudgetsProvider} from "./context/BudgetContext";
import AddBudgetModal from "./components/AddBudgetModal";
import {useState} from "react";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpensesModal from "./components/ViewExpensesModal";

function App() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
    const [viewExpenseModal, setViewExpenseModal] = useState();

    const openAddExpenseModal = (budgetId) => {
        setShowAddExpenseModal(true);
        setAddExpenseModalBudgetId(budgetId)
    }

  return (
   <BudgetsProvider>
       <Container>
           <Header handleAddBudgetModal={() => setShowAddBudgetModal(true)} handleAddExpenseModal={() => setShowAddExpenseModal(true)}/>
           <Cards openAddExpense={openAddExpenseModal} viewExpenseModal={setViewExpenseModal}/>
       </Container>
       <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
       <AddExpenseModal show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
       <ViewExpensesModal budgetId={viewExpenseModal} handleClose={() => setViewExpenseModal()}/>
   </BudgetsProvider>
  );
}

export default App;
