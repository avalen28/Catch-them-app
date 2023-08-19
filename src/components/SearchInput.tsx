import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
// pass on props the function that takes and call to the api
const SearchInput = ({ onHandleSearchPokemon }: any) => {
    const [pokemonQuery, setPokemonQuery] = useState("")

    //way to acces to input-value
    const handlePokemonQuery = (e: React.FormEvent<HTMLInputElement>) => {
        setPokemonQuery(e.currentTarget.value)
    }
    //form event
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        //this function do the api call
        onHandleSearchPokemon(pokemonQuery)
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchPokemon" value={pokemonQuery} onChange={handlePokemonQuery} required placeholder="Search..." className="bg-slate-200 px-4 py-2 border-2 border-solid border-slate-200 rounded-full" />
                <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className="text-blue-500 relative right-8" /></button>
            </form>
        </div>
    );
};

export default SearchInput;