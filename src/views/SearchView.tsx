import React, { useState } from 'react';
import axios from "axios";
import { PokemonInfo } from '../interfaces/pokemon';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
    // interface of the pokemon-useState
    const [pokemon, setPokemon] = useState<PokemonInfo | null>(null)

    // function that takes the pokemon name
    // as a parameter(pass this function to the child SearchInput)
    const handleSearchPokemon = (searchPokemon: string) => {
        getPokemonFromApi(searchPokemon.toLowerCase())

    }
    //declarates the function that calls to the api.
    const getPokemonFromApi = async (searchPokemon: string) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`);
            const pokemonFromApi: PokemonInfo = response.data;
            // when the pokemon with his interface is correct. ups to the useState
            setPokemon(pokemonFromApi)
        } catch (error) {
            console.error(error)
        }
    }
    // On searchInput we pass the function that trigger handleSearch
    // take the pokemon name + call to the api

    // when we have the pokemon data, check if is true and then launch the PokemonCard component
    return (
        <div className='p-16'>
            <SearchInput onHandleSearchPokemon={handleSearchPokemon} />
            {/* when we have any pokemon, print PokemonCard */}
            {pokemon && <PokemonCard pokemonProp={pokemon} />}
        </div>
    );
};

export default SearchView;