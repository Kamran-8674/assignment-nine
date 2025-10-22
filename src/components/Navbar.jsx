import React, { use } from 'react';
import logo from '../assets/logo2_231x.avif'
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import profile from '../assets/blank-profile-picture-image-holder-with-a-crown-vector-42411540.avif'


const Navbar = () => {
  
  const {user,signOutfunc} = use(AuthContext)
  const handleSignOut=()=>{
    signOutfunc()
    .then()
    .catch()
  }
    return (
        
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> <NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'register'}>Register</NavLink></li>
       <li><NavLink to={'login'}>Login</NavLink></li>
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  
  <div className="navbar-center">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-7">
      
       <li><NavLink to={'/'}>Home</NavLink></li>
       
       {!user && <div className='mt-2 space-x-7'>
    <NavLink to={'login'}>Login</NavLink><NavLink to={'register'}>Register</NavLink>
    </div> }

       
    </ul>
    
    </div>
   </div>
     {user && <div className='flex navbar-end'>
      <img width={40} src={profile} alt="" />
      <button className='btn btn-secondary' onClick={handleSignOut}>Logout</button>

     </div>
  }
</div>
            
        
    );
};

export default Navbar;