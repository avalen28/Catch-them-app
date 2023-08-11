import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div>
      <SearchInput />
      <PokemonCard />
    </div>
  );
}

export default App;
