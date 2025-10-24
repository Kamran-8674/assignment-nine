import React, { use, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';

const ForgetPass = () => {
    
    const {forgetpass} = use(AuthContext)
     const emailref =useRef()
     const handleresestpass = (e) =>{
        e.preventDefault()
       const email = emailref.current.value;
       console.log(email)
       forgetpass(email)
       .then(()=>{
        alert('cheak your email')
       })
       .catch(errr=>console.log(errr))

     }

    return (
        <div className='flex   justify-center items-center'>
          <form onSubmit={handleresestpass}>  
          <input
          ref={emailref}
          name='email' type="email" className="input" placeholder="Email" />
          <button type='submit' className='btn btn-primary ml-10'>Reset</button>
          </form> 
        </div>
    );
};

export default ForgetPass;