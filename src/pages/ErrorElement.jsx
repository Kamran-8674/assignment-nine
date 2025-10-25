import React from 'react';
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-7xl text-blue-300 font-extrabold'>404</h1>
            <h1 className='font-bold text-3xl'>What On Are Earth Are You Doing Here</h1>
            <p>Well, this is awkword, the page you were trying toi visit does not exist</p>
         <Link to={'/'}>   <button className='btn btn-primary'>Get Yurself Home</button> </Link>
            
        </div>
    );
};

export default ErrorElement;