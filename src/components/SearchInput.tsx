import React,{useState} from 'react';

const SearchInput = ({ onHandleSearchPokemon }: any) => {
    const [pokemonQuery, setPokemonQuery] = useState("")

    const handlePokemonQuery = (e:React.FormEvent<HTMLInputElement>)=> {
        setPokemonQuery(e.currentTarget.value)
        
    }

    return (
        <div>
            <form>
                <input type="text" name="searchPokemon" value={pokemonQuery} onChange={handlePokemonQuery} required />
                <button type='submit'>Search!</button>
            </form>
        </div>
    );
};

export default SearchInput;