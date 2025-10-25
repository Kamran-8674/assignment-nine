import React from 'react';
import useGames from '../hooks/useGames';
import GamesCard from './GamesCard';

const PopularGames = () => {
   const {games} =useGames()
   console.log(games)
   const sorted = games.sort((a,b)=>b.ratings-a.ratings)
   const slised =sorted.slice(0,3)
   console.log(sorted)
   
    return (
        <div className='py-5'> <h1 className='text-3xl font-bold text-center text-white my-2.5'>Most Popular Games</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-[1200px] mx-auto'>
            {slised.map(game=><GamesCard game={game}></GamesCard>)}
        </div>
        <button className='btn btn-secondary mx-auto flex mt-1 md:w-1/5'>Show All Games</button>
        </div>
       
    );
};

export default PopularGames;