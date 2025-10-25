import React from 'react';
import { useParams } from 'react-router';
import useGames from '../hooks/useGames';

const DetailsCard = () => {
    const {id}=useParams()
    const {games,loading}=useGames()
    if (loading) {
    return <p className="text-center mt-6">Loading...</p>;
  }




    console.log(games)
    const finded = games.find(game => game.id==id) 
    console.log(finded)
    
    return (
        <div className="card lg:card-side w-2/3 mt-5 mx-auto bg-base-100 shadow-sm gap-2 md:h-100">
  <figure>
    <img
      src={finded.coverPhoto}
      alt="Album" />
  </figure>
  <div className="gap-2 flex flex-col justify-center">
    <h2 className="card-title">{finded.title}</h2>
     <p>{finded.description}</p>
     <p>Category:{finded.category}</p>
     <span className="text-yellow-500 font-semibold">
            ⭐ {finded.ratings}
          </span> 
    <h3>Developed By: {finded.developer}</h3>
    <div className="card-actions">
      <button onClick={()=> alert('game installing')} className="btn btn-primary w-full mt-3">Install</button>
    </div>
  </div>
</div>
    );
};

export default DetailsCard;