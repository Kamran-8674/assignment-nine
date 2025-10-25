import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import NewsLatter from '../components/NewsLatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-blue-800'><PopularGames></PopularGames></div>
            <div className='py-3 bg-amber-300'>
                <NewsLatter></NewsLatter>
            </div>
            
            
        </div>
    );
};

export default Home;