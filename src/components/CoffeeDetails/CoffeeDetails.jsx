import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    // console.log(coffee);
    
    return (
        <div>
            <div className='w-8/12 mx-auto pb-8 mt-24'>
                <Link to='/'><h1 className='w-fit fontRancho text-[#374151] text-xl font-bold flex items-center gap-3'><IoMdArrowBack /><span className='text-3xl'>Back To Home</span></h1></Link>
            </div>
            <div className='bg-[#F4F3F0] w-8/12 mx-auto mb-32 rounded-xl flex justify-around items-center px-6 py-12 '>
                <div>
                    <img className='w-[350px]' src={coffee.photo} alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mb-4'>
                        <h1 className='text-[#331A15] text-3xl font-bold fontRancho'>Niceties </h1>
                    </div>
                    <h1><span className='font-bold text-lg'>Name:</span>  { coffee.name}</h1>
                    <h1><span className='font-bold text-lg'>Quantity:</span>  { coffee.quantity}</h1>
                    <h1><span className='font-bold text-lg'>Supplier:</span>  { coffee.supplier}</h1>
                    <h1><span className='font-bold text-lg'>Taste:</span>  { coffee.test}</h1>
                    <h1><span className='font-bold text-lg'>Category:</span>  { coffee.category}</h1>
                    <h1><span className='font-bold text-lg'>Details:</span>  { coffee.details}</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;