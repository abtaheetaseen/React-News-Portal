import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {


  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-7' src='' alt='' />
          <span className='text-xl font-bold text-black'>Daily News</span>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-3'>
          <NavLink to="/">
            <li>
              <div>Home</div>
            </li>
          </NavLink>

          <NavLink to="/favoriteList">
            <li>
              <div>Favorite</div>
            </li>
          </NavLink>
    </ul>

      </div>
    </div>
  )
}

export default Navbar
