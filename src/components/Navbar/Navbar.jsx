import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='bg-[url("https://res.cloudinary.com/dd4np04jl/image/upload/v1747328890/15_hi9jgz.jpg")] bg-cover flex justify-center items-center gap-6 p-3'>
                <img className='w-[75px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747329190/logo1_jyavwq.png" alt=""  />
                <h1 className='text-6xl text-white fontRancho'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;