import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='bg-[url("https://res.cloudinary.com/dd4np04jl/image/upload/v1747328890/15_hi9jgz.jpg")] bg-cover flex justify-center items-center gap-6 p-3'>
                <img className='w-[75px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747329190/logo1_jyavwq.png" alt=""  />
                <h1 className='text-6xl text-white fontRancho'>Espresso Emporium</h1>
            </div>
            <div className='w-8/12 mx-auto flex justify-center items-center gap-8 py-8'>
                <Link to={'/'}><button className='btn'>Home</button></Link>
                <Link to={'/AddCoffee'}> <button className='btn'>Add Coffee</button></Link>
                <Link to={'/UpdateCoffee'}> <button className='btn'>Update Coffee</button></Link>
            </div>
        </div>
    );
};

export default Navbar;