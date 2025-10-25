import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfileComponent = () => {
    const {user} = use(AuthContext)
    console.log(user)
    return (
         <div className='flex bg-gray-300 p-15 rounded-3xl'>
            <div className='space-y-1 mt-40'> 
                <h1 className='text-4xl font-bold text-fuchsia-400'>About Me</h1>
                <h1 className='text-xl font-semibold'>Name</h1>
                 <p>{user.displayName} </p>
                <h1 className='text-xl font-semibold'>Email</h1>
                <p className='text-red-400'>{user.email}</p>
                <button className='btn btn-primary'>Contact Me</button>
            </div>
            <div><img className='rounded-full mt-9' src={user.photoURL} alt="" /></div>
         </div>
    );
};

export default ProfileComponent;