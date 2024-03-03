import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
