import {Container} from "react-bootstrap";

//COMPONENTS
import Header from "./components/Header";
import Cards from "./components/Cards";

//CONTEXT
import { BudgetsProvider} from "./context/BudgetContext";

function App() {
  return (
   <BudgetsProvider>
       <Container>
           <Header/>
           <Cards/>
       </Container>
   </BudgetsProvider>
  );
}

export default App;
