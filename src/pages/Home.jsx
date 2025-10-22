import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-blue-800'><PopularGames></PopularGames></div>
            
            
        </div>
    );
};

export default Home;