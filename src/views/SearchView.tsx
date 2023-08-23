import React, { useState } from 'react';
import axios from "axios";
import { PokemonInfo } from '../interfaces/pokemon';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import ErrorCard from '../components/ErrorCard';

const SearchView = () => {
    // interface of the pokemon-useState
    const [pokemon, setPokemon] = useState<PokemonInfo | null>(null)
    const [loading, setLoading] = useState(false)
    const [errorView,setErrorView] = useState(false)

    // function that takes the pokemon name
    // as a parameter(pass this function to the child SearchInput)
    const handleSearchPokemon = (searchPokemon: string) => {
        getPokemonFromApi(searchPokemon.toLowerCase())

    }
    //declarates the function that calls to the api.
    const getPokemonFromApi = async (searchPokemon: string) => {
        setPokemon(null)
        setLoading(true)  
        setErrorView(false)
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`);
            if (response) {
                setLoading(false)
            }
            const pokemonFromApi: PokemonInfo = response.data;
            // when the pokemon with his interface is correct. ups to the useState
            setPokemon(pokemonFromApi)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setErrorView(true)
        }
    }
    // On searchInput we pass the function that trigger handleSearch
    // take the pokemon name + call to the api

    // when we have the pokemon data, check if is true and then launch the PokemonCard component
    return (
        <div className='p-16 h-screen'>
            <SearchInput onHandleSearchPokemon={handleSearchPokemon} />
            {/* when we have any pokemon, print PokemonCard */}
            {loading && <div className='flex justify-center pt-4'><img className="w-12" src="./images/loading.gif" alt="loading-gif" /></div>}
            {pokemon && !loading && <PokemonCard pokemonProp={pokemon} />}
            {errorView && !loading && <ErrorCard />}
        </div>
    );
};

export default SearchView;