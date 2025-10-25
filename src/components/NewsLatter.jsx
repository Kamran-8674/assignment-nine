import React from 'react';

const NewsLatter = () => {
    return (
        <div className='max-w-[1200px] mx-auto text-blue-800 space-y-3'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Stay Updated with GameHub</h1>
                <p>Join our newsletter to get the latest gaming news, reviews, and updates on trending titles — delivered straight to your inbox. Stay one step ahead in the gaming world!</p>
            </div>
            <input className='border-1 p-4 rounded-3xl w-full' type="email" name="" id="" placeholder='Your Email Address' />
            <div>
                <input className='border-1 p-4 rounded-3xl w-1/2' type="text" placeholder='Your First Name ' />
                <input className='border-1 p-4 rounded-3xl w-1/2' type="text" placeholder='Your Last Name ' />
            </div>
            <button onClick={()=>alert('you are suscribed')} className='btn btn-primary w-1/4 mt-2.5 flex justify-center items-center mx-auto'>Suscribe</button>
        </div>
    );
};

export default NewsLatter;