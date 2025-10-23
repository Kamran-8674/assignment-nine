import React from 'react';
import { PiGameControllerFill } from 'react-icons/pi';
import { Link } from 'react-router';

const GamesCard = ({game}) => {

    return (
      <Link to={`/details/${game.id}`}>
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl ">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-40 "
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          {game.title}
        </h2>
        <p className="text-sm text-gray-500 mb-2 flex"><PiGameControllerFill className='mt-1 mr-1 text-blue-400' /> Category: <span className="font-medium">{game.category}</span>
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-yellow-500 font-semibold">
            ⭐ {game.ratings}
          </span>
          <button className="px-4 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 ">
            Show Details
          </button>
        </div>
      </div>
    </div>
      
      </Link>
    );
};

export default GamesCard;