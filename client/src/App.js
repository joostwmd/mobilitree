import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import HomePage from "./components/Home"
import CalculatorEmission from './pages/CalculatorEmission';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>

         <Route exact path="/" component={HomePage} />
         <Route exact path="/emission" component={CalculatorEmission} />

       </Switch>
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
