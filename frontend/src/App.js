import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainCVComponent from './MainCVComponent';
import Templates from './Templates';

function App() {
  return (
    <>
      <nav className="bg-white shadow-md px-4 py-2 text-blue-700 font-semibold flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/templates" className="hover:underline">Resume Templates</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainCVComponent />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
}

export default App;







