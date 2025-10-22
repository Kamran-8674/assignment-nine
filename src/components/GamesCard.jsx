import React from 'react';

const GamesCard = ({game}) => {

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={game.coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{game.title}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default GamesCard;