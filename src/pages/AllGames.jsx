import Allcard from '../components/Allcard';
import useGames from '../hooks/useGames';
import { PiGameControllerFill } from 'react-icons/pi';

const AllGames = () => {
    const {games} = useGames()
    console.log(games)
    
    

    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            <div className='flex justify-between'>
                <h1 className='text-xl'>({games.length})Games Found</h1>

            

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

            
                {games.map(game=><Allcard game={game}></Allcard>)} 
            </div>
        </div>
    );
};

export default AllGames;