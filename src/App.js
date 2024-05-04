import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main class="animated">
          <Home/>
          <Products/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
