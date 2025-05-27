import React, { use } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { AuthContext } from '../AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then((data)=>{console.log(data)})
        .catch((error)=>{console.log(error)})
    }

    return (
        <div>
            <div className='bg-[url("https://res.cloudinary.com/dd4np04jl/image/upload/v1747328890/15_hi9jgz.jpg")] bg-cover '>
                <div className='w-11/12 mx-auto flex justify-between items-center gap-6 p-3'>
                    <div>
                    <div className="dropdown dropdown-bottom">
                        {/* <div tabIndex={0} role="button" className="btn bg-transparent text-2xl"><GiHamburgerMenu /></div> */}
                        <GiHamburgerMenu tabIndex={0} role="button" className='text-2xl text-white' />
                        <ul tabIndex={0} className="dropdown-content menu flex flex-col gap-2 text-center text-xl bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <NavLink className='fontRancho rounded-xl hover:bg-[#E3B577] hover:text-white' to='/'>Home</NavLink>
                            {
                                user ? <><button onClick={handleSignOut} className='fontRancho rounded-xl hover:bg-[#e98282] hover:text-white'>Sign Out</button></> : <><NavLink className='fontRancho rounded-xl hover:bg-[#E3B577] hover:text-white' to='/SignIn'>Sign In</NavLink>
                            <NavLink className='fontRancho rounded-xl hover:bg-[#E3B577] hover:text-white' to='/SignUp'>Sign Up</NavLink></>
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-[75px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747329190/logo1_jyavwq.png" alt=""  />
                    <h1 className='text-6xl text-white fontRancho'>Espresso Emporium</h1>
                </div>
                <div>
                        <h1 className='text-white text-xl'>{ user?.email}</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;