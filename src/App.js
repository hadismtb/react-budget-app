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

  return (
   <BudgetsProvider>
       <Container>
           <Header handleAddBudgetModal={() => setShowAddBudgetModal(true)}/>
           <Cards/>
       </Container>
       <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
       <AddExpenseModal show={true}/>
   </BudgetsProvider>
  );
}

export default App;
