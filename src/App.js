import './App.css';
import About from './components/About';
import Form from './components/Form';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
