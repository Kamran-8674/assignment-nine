import { AuthContext } from '../context/AuthContext';
import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           
            <ProfileComponent></ProfileComponent>
            
        </div>
    );
};

export default Profile;