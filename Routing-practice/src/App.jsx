import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';
import StyledWord from './components/StyledWord';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<NumberOrWord />} />
        <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
      </Routes>
    </div>
  );
}

export default App;
