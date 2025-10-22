import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
      const {signUpWithEmailAndPass}=use(AuthContext)

     const handleRegister = (e) =>{
      e.preventDefault()

      const name = e.target.name.value
      const photo = e.target.photo.value
      const email = e.target.email.value
      const password = e.target.password.value
      console.log({name,photo,email,password})
      signUpWithEmailAndPass(email,password)
      .then(res =>{
        console.log(res.user)
      })
      .catch(err=>{
        console.log(err)
      })

     }

    return (
        <div className='flex justify-center items-center mt-20'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Your Name" />
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label  className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p>Already Have An Accout? <Link to={'/login'} className='text-red-400 underline'>Login</Link></p>
        </fieldset>
        </form>
       
      </div>
    </div>
</div>
    
    );
};

export default Register;