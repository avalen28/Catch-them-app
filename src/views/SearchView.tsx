import React from 'react';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
    return (
        <div>
            <SearchInput />
            <PokemonCard />
        </div>
    );
};

export default SearchView;