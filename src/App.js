import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Create from './components/Create';
import Details from './components/Details';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;