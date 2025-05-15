import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router';
const UpdateCoffee = () => {
    const handleUpdateCoffee = (e) => { 
        e.preventDefault()
        // const name = e.target.name.value
        // const supplier = e.target.supplier.value
        // const category = e.target.category.value
        // const chef = e.target.chef.value
        // const test = e.target.test.value
        // const details = e.target.details.value
        // const photo = e.target.photo.value
        // const coffeeDetails = {
        //     name,
        //     supplier,
        //     category,
        //     chef,
        //     test,
        //     details,
        //     photo
        // }
        const form = e.target
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        
        // e.target.reset()
    }
    return (
        <div className='bg-[url("https://i.ibb.co/ccNQRfk1/11.png")] bg-cover mb-48'>
                <div className='w-8/12 mx-auto py-8'>
                    <Link to='/'><h1 className='w-fit fontRancho text-[#374151] text-xl font-bold flex items-center gap-3'><IoMdArrowBack /><span className='text-3xl'>Back To Home</span></h1></Link>
                </div>
            <div className='w-8/12 mx-auto p-3 bg-[#F4F3F0] opacity-80 rounded-sm'>
                {/* form section */}
                <div className=''>
                    {/* form heading */}
                    <div className='text-center flex flex-col gap-6 py-9'>
                        <h1 className='fontRancho text-[#374151] text-[45px] font-bold'>Update Existing Coffee Details</h1>
                        <p className='text-lg text-[#1B1A1AB3]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                    </div>
                    <div>
                        <form onSubmit={handleUpdateCoffee}>
                            <div>
                                <div className='grid grid-cols-2 gap-5 p-6'>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Name</legend>
                                        <input name='name' type="text" className="input w-full border-none" placeholder="Enter Coffee Name" required />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Supplier</legend>
                                        <input name='supplier' type="text" className="input w-full border-none" placeholder="Enter Coffee Supplier" required />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Category</legend>
                                        <input name='category' type="text" className="input w-full border-none" placeholder="Enter Coffee Category" required />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Quantity</legend>
                                        <input name='quantity' type="text" className="input w-full border-none" placeholder="Enter Coffee Quantity" required />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Taste</legend>
                                        <input name='test' type="text" className="input w-full border-none" placeholder="Enter Coffee Taste" required />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Details</legend>
                                        <input name='details' type="text" className="input w-full border-none" placeholder="Enter Coffee Details" required />
                                    </fieldset>
                                  
                                </div>
                                <div className='px-6'>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-xl text-[#1B1A1ACC] ">Photo</legend>
                                        <input name='photo' type="text" className="input w-full border-none" placeholder="Photo URL" required />
                                    </fieldset>
                                </div>
                                <div className='p-6'>
                                    <button className='btn fontRancho text-xl border-2 border-[#331A15] rounded-md text-[#331A15] bg-[#D2B48C] w-full '>Add Coffee</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;