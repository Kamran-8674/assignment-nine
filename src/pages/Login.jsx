import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const{ signInWithEmailAndPass,setUser } =  use(AuthContext)
 
  const handleLogin = (e) =>{
    e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   signInWithEmailAndPass(email,password)
   .then(res =>{
    setUser(res.user)

   })
   .catch(err=>{
    console.log(err)
   })

  }
    return (
  <div className='flex justify-center items-center mt-20'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
         
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p>Dont Have An Accout? <Link to={'/register'} className='text-red-400 underline'>Register</Link></p>

        </fieldset>
        </form>
      </div>
    </div>
 </div>
    );
};

export default Login;