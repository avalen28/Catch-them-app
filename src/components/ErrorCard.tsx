import React from 'react';

const ErrorCard = () => {
    return (
        <div className="flex flex-col items-center justify-evenly h-1/2">
            <img className="w-72 border-2 rounded-lg border-transparent" src="../images/pokemon-confused.gif" alt="error.gif" />
            <div>
                <h3 className=' text-gray-500 text-2xl text-center'>Our database is confused! It hurt itself in its confusion!</h3>
                <h2 className=' text-gray-500 text-xl text-center'>Please check the Pokemon's name or try it again</h2>
            </div>
      
        </div>
    );
};

export default ErrorCard;