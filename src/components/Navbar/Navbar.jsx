import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-around items-center p-8'>
                <Link to={'/'}><button className='btn'>Home</button></Link>
                <Link to={'/AddCoffee'}> <button className='btn'>Add Coffee</button></Link>
                <Link to={'/UpdateCoffee'}> <button className='btn'>Update Coffee</button></Link>
            </div>
        </div>
    );
};

export default Navbar;