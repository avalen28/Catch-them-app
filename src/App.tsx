import React from 'react';
import { Routes, Route } from "react-router-dom";
import SearchView from './views/SearchView';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<SearchView />} />
      </Routes>
    </div>
  );
}

export default App;
