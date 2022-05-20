import {Container} from "react-bootstrap";

//COMPONENTS
import Header from "./components/Header";
import Cards from "./components/Cards";

//CONTEXT
import { BudgetsProvider} from "./context/BudgetContext";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
   <BudgetsProvider>
       <Container>
           <Header/>
           <Cards/>
       </Container>
       <AddBudgetModal show={true}/>
   </BudgetsProvider>
  );
}

export default App;
