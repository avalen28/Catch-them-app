import React from 'react';
import { PokemonCardProps } from '../interfaces/pokemon';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonProp }) => {
    console.log(pokemonProp)



    return (
        <div className='pb-8 w-full'>
            {pokemonProp?.name && (<div>
                <div className='flex justify-center gap-80 items-center w-2/3'>
                    <h2 className='text-5xl text-gray-500'>{pokemonProp.name.toUpperCase()}</h2>
                    {/* <img className="w-96" src={pokemonProp.sprites.front_default} alt="Pokemon default img" /> */}
                    {/* This second src have better img and use the same id from the api-data */}
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonProp.id}.svg`} alt="Pokemon default img" />
                </div>
                <div className='flex justify-between pt-8 w-2/3'>
                    <div className='text-gray-500 w-1/2 flex flex-col gap-4'>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right">ID</span> <span className='w-2/3 text-left'>{"#" + pokemonProp.id}</span></p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Height</span> <span className='w-2/3 text-left'>{pokemonProp.height}</span> </p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Weight</span> <span className='w-2/3 text-left'>{pokemonProp.weight}</span></p>
                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Abilities</p>
                            <div className='flex w-2/3 gap-2'>
                                <p className='bg-gray-200 px-1 border-1 border-solid border-gray-200 rounded-sm'>{pokemonProp.abilities[0]?.ability?.name.toUpperCase()}</p>
                                <p className='bg-gray-200 px-1 border-1 border-solid border-gray-200 rounded-sm'>{pokemonProp.abilities[1]?.ability?.name.toUpperCase()}</p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Type</p>
                            <div className='flex w-2/3 gap-2 flex-wrap'>
                                {pokemonProp.types.map(elem => {
                                    return (
                                        <p className='bg-gray-200 px-1 border-1 border-solid border-gray-200 rounded-sm'>{elem.type.name}</p>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                    <div className='text-gray-500 w-1/2 flex flex-col gap-4'>
                        {pokemonProp.stats.map(elem => {
                            return (
                                <div className='flex justify-between'>
                                    <p className='w-1/4 text-right'>{elem.stat.name}</p>
                                    <progress
                                        className="w-2/3 border-2 border-solid rounded-md h-5"
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