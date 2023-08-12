import React,{useState} from 'react';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
    const [pokemon, setPokemon] = useState(null)

    const handleSearchPokemon = (searchPokemon: string) => {
        
    }
    return (
        <div>
            <SearchInput onHandleSearchPokemon={handleSearchPokemon} />
            <PokemonCard pokemon={pokemon} />
        </div>
    );
};

export default SearchView;