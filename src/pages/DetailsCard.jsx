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
        <div className="card lg:card-side w-2/3 mt-5 mx-auto bg-base-100 shadow-sm">
  <figure>
    <img
      src={finded.coverPhoto}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{finded.title}</h2>
     <p>{finded.description}</p>
    <h3>Developed By: {finded.developer}</h3>
    <div className="card-actions">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default DetailsCard;