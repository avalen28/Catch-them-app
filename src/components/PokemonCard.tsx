import React from 'react';
import { PokemonCardProps } from '../interfaces/pokemon';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonProp }) => {
    console.log(pokemonProp)



    return (
        <div>
            {pokemonProp?.name && (<div>
                <div className='block1'>
                    <h2>{pokemonProp.name}</h2>
                    <img src={pokemonProp.sprites.front_default} alt="Pokemon default img" />
                    {/* This second src have better img and use the same id from the api-data */}
                    {/* <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonProp.id}.svg`} alt="Pokemon default img" /> */}
                </div>
                <div>
                    <div className='A'>
                        <p>ID {"#" + pokemonProp.id}</p>
                        <p>Height {pokemonProp.height} </p>
                        <p>Weight {pokemonProp.weight}</p>
                        <div>
                            <p>Abilities</p>
                            <div>
                                <p>{pokemonProp.abilities[0]?.ability?.name}</p>
                                <p>{pokemonProp.abilities[1]?.ability?.name}</p>
                            </div>
                        </div>
                        <div>
                            <p>Type</p>
                            {pokemonProp.types.map(elem => {
                                return (
                                    <p>{elem.type.name}</p>
                                )
                            })}

                        </div>
                    </div>
                    <div className='B'>
                        {pokemonProp.stats.map(elem => {
                            return (
                                <div>
                                    <p>{elem.stat.name}</p>
                                    <progress
                                        //className="w-full border-2 border-solid border-sky-200 rounded-md h-3"
                                        max="100"
                                        value={elem.base_stat}
                                    ></progress>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>)}
        </div>
    );
};

export default PokemonCard;