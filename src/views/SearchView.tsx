import React, { useState } from 'react';
import axios from "axios";
import { PokemonInfo } from '../interfaces/pokemon';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
    const [pokemon, setPokemon] = useState<PokemonInfo | null>(null)
    const handleSearchPokemon = (searchPokemon: string) => {
        getPokemonFromApi(searchPokemon.toLowerCase())

    }
    const getPokemonFromApi = async (searchPokemon: string) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`);
                const pokemonFromApi: PokemonInfo = response.data;
                setPokemon(pokemonFromApi)    
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='p-16'>
            <SearchInput onHandleSearchPokemon={handleSearchPokemon} />
            <PokemonCard pokemonProp={pokemon} />
        </div>
    );
};

export default SearchView;