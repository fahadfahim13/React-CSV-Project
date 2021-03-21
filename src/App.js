import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import './App.css';
import FirstForm from './components/firstForm';
import PrintResults from "./components/PrintResults";
// import Results from "./components/Results";
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
          <Route exact path="/results" component={PrintResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
