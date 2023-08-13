import React from 'react';
import { PokemonCardProps } from '../interfaces/pokemon';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonProp }) => {
    console.log(pokemonProp)



    return (
        <div className='pb-8 w-full'>
            {pokemonProp?.name && (<div>
                <div className='flex justify-between gap-24 items-center w-1/2'>
                    <h2 className='text-5xl text-gray-500'>{pokemonProp.name.toUpperCase()}</h2>
                    {/* <img className="w-96" src={pokemonProp.sprites.front_default} alt="Pokemon default img" /> */}
                    {/* This second src have better img and use the same id from the api-data */}
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonProp.id}.svg`} alt="Pokemon default img" />
                </div>
                <div className='flex justify-between pt-8 w-1/2'>
                    <div className=' text-gray-500 w-1/2'>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right">ID</span> <span>{"#" + pokemonProp.id}</span></p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Height</span> <span>{pokemonProp.height}</span> </p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Weight</span> <span>{pokemonProp.weight}</span></p>
                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Abilities</p>
                            <div className='flex'>
                                <p>{pokemonProp.abilities[0]?.ability?.name}</p>
                                <p>{pokemonProp.abilities[1]?.ability?.name}</p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Type</p>
                            <div className='flex'>
                                {pokemonProp.types.map(elem => {
                                    return (
                                        <p>{elem.type.name}</p>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                    <div className='text-gray-500'>
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