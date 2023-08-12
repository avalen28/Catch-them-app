import React,{useState} from 'react';

const SearchInput = ({ onHandleSearchPokemon }: any) => {
    const [pokemonQuery, setPokemonQuery] = useState("")
    
//way to acces to input-value
    const handlePokemonQuery = (e: React.FormEvent<HTMLInputElement>)=> {
        setPokemonQuery(e.currentTarget.value)
    }
//form evet
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onHandleSearchPokemon(pokemonQuery)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchPokemon" value={pokemonQuery} onChange={handlePokemonQuery} required />
                <button type='submit'>Search!</button>
            </form>
        </div>
    );
};

export default SearchInput;