// import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextAPI } from '../Provider/ContextProvider';

const Header = () => {
  const { user, handleLogOut } = useContext(ContextAPI);
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  //business
  const handleToggle = (event) => {
    if(event.target.checked){
      setTheme("business");
    }else{
      setTheme("light");
    }
  }
  
  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  
  
  /* const handleLogOut = () =>{
    console.log('logout')
  } */

  const navLink = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-error text-white'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-error'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/allReview'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-error text-white'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-error'
          }
        >
          <span>All Reviews</span>
        </NavLink>
      </li>

      {user?.email && (
        <li>
          <NavLink
            to='/addReview'
            className={({ isActive, isPending }) =>
              isActive
                ? 'btn btn-error text-white'
                : isPending
                ? 'pending'
                : 'btn btn-outline btn-error'
            }
          >
            <span>Add Reviews</span>
          </NavLink>
        </li>
      )}

      {user?.email && (
        <li>
          <NavLink
            to='/myReviews'
            className={({ isActive, isPending }) =>
              isActive
                ? 'btn btn-error text-white'
                : isPending
                ? 'pending'
                : 'btn btn-outline btn-error'
            }
          >
            <span>My Reviews</span>
          </NavLink>
        </li>
      )}

      {user?.email && (
        <li>
          <NavLink
            to='/myWatchlist'
            className={({ isActive, isPending }) =>
              isActive
                ? 'btn btn-error text-white'
                : isPending
                ? 'pending'
                : 'btn btn-outline btn-error'
            }
          >
            <span>Game WatchList</span>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className='navbar bg-base-100'>
      {/* Header Title & Logo */}
      <div className='navbar-start'>
        <div className='dropdown'>
          {/* Mobile Device Hamburger Menu */}
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          {/* Mobile Nav */}
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow'
          >
            {navLink}
          </ul>
        </div>
        {/* Logo & Title */}
        <div className='flex gap-1 items-center'>
          <img className='w-8' src='/game.png' alt='' />
          <p className='w-full truncate md:text-2xl font-bold'>Chill Gamer</p>
        </div>
      </div>

      {/* Large Device Nav */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 space-x-1'>{navLink}</ul>
      </div>

      {/* Navbar End */}
      <div className='navbar-end'>
        <div
          className='dropdown dropdown-end tooltip tooltip-left'
          data-tip={user?.displayName}
        >
          {/* User Profile */}
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img alt='User' src={user ? user?.photoURL : '/user.png'} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow'
          >
            {/* <li className='px-3'>
              {user ? user?.displayName : <p>User Name</p>}
            </li>
            <p className='divider'></p> */}
            {user && (
              <>
                <div className='px-3'>
                  <p className=' text-center font-bold text-xl'>
                    {user?.displayName}
                  </p>
                </div>
                <p className='divider'></p>
              </>
            )}
            {user ? (
              <button className='btn btn-sm btn-ghost' onClick={handleLogOut}>
                <Link to={'/'}>Log Out</Link>
              </button>
            ) : (
              <>
                <button className='btn btn-sm btn-ghost'>
                  <Link to={'/login'}>Login</Link>
                </button>
                <button className='btn btn-sm btn-ghost'>
                  <Link to={'/signup'}>Sign up</Link>
                </button>
              </>
            )}

            {/* Dark Theme */}
            <div className='mx-auto'>
              <label className='flex cursor-pointer gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='5' />
                  <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                </svg>
                <input
                  type='checkbox'
                  onChange={handleToggle}
                  className='toggle theme-controller'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                </svg>
              </label>
            </div>
            {/* ========== */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
