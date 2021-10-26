import "./App.css";
// import About from './components/About';
// import Form from './components/Form';
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
      {/* <About />
      <Projects />
      <Form /> */}
    </div>
  );
}

export default App;
