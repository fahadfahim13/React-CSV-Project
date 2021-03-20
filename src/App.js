import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import FirstForm from './components/firstForm';
import SecondForm from "./components/SecondForm";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <FirstForm /> */}
        {/* <SecondForm /> */}
        <Switch>
          <Route exact path="/" component={FirstForm} />
          <Route exact path="/second_form" component={SecondForm} />          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
