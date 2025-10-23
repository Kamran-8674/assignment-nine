import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>My Profile</h1>
            <h1 className='text-xl font-bold'>Name: {user.displayName}</h1>
            <p className='text-md font-semibold'>Email Adress: {user.email}</p>
            <img src={user.photoURL} alt="User Profile" />
            
            
        </div>
    );
};

export default Profile;