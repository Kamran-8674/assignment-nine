import React from 'react';
import useGames from '../hooks/useGames';
import GamesCard from './GamesCard';

const PopularGames = () => {
   const {games} =useGames()
   console.log(games)
   const sorted = games.sort((a,b)=>b.ratings-a.ratings)
   const slised =sorted.slice(0,6)
   console.log(sorted)
   
    return (
        <div className='py-5'> <h1 className='text-3xl font-bold text-center text-white my-2.5'>Most Popular Games</h1>
         <div className='grid grid-cols-3 gap-3.5 max-w-[1200px] mx-auto'>
            {slised.map(game=><GamesCard game={game}></GamesCard>)}
        </div>
        </div>
       
    );
};

export default PopularGames;