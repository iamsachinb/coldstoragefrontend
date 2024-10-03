import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './InputForm';
import ResultPage from './ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
