import React, { use } from 'react';
import { SlCup } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext/AuthContext';

const CoffeeSection = ({ coffees, setCoffees }) => {
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    const handleDeleteCoffee = (id) => {
          if (user) {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`http://localhost:5000/coffees/${id}`, {
                        method: 'DELETE'
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                // window.location.reload()
                                const deletedCoffee = coffees.filter(coffee => coffee._id !== id)
                                setCoffees(deletedCoffee)
                            }
                            
                        })
                    
            }
                });
              
          } else {
              alert('You need to sign in to Delete this item')
              navigate('/SignIn')
          }
    }
    
    const handleRout = (routs) => {
        
        if (!user) {
           return navigate('/SignIn')
        }
        navigate(routs)
    }

    const addCoffee = () => {
         if (!user) {
           return navigate('/SignIn')
        }
        navigate('/AddCoffee')
    }
    return (
        <div className='bg-[url(https://res.cloudinary.com/dd4np04jl/image/upload/v1747406265/1_qrbyph.png)] pb-40'>
            <div className='w-8/12 mx-auto '>
                {/* heading text */}
                <div className='text-center flex flex-col gap-4 justify-center items-center mt-28'>
                    <p>--- Sip & Savor ---</p>
                    <h1 className='text-[#331A15] text-5xl fontRancho font-bold'>Our Popular Products</h1>
                   <button onClick={addCoffee} className='btn w-fit hover:text-white fontRancho hover:bg-[#E3B577] border-2 border-[#331A15] flex gap-3 '>Add Coffee <span className='text-[#331A15] text-base'><SlCup /></span></button>
                </div>
                {/* coffees */}
                <div className='grid grid-cols-2 gap-6 pt-12'>
                    {
                        coffees.map(cfe => {
                          return  <div key={cfe._id} className='bg-[#F5F4F1] rounded-xl grid grid-cols-5 pr-10'>
                        <div className='col-span-2 pl-4'>
                            <img src={cfe.photo} alt="" />
                        </div>
                        <div className='flex items-center justify-between col-span-3'>
                            <div className='flex flex-col gap-3'>
                                      <h1 className='font-bold'>Name :     <span className='text-sm font-normal'>{ cfe.name}</span></h1>
                                      <h1 className='font-bold'>Taste : <span className='text-sm font-normal'>{ cfe.test}</span></h1>
                                      <h1 className='font-bold'>Quantity : <span className='text-sm font-normal'>{ cfe.quantity}</span></h1>
                               
                                
                            </div>
                            <div className='flex flex-col justify-between gap-4 '>
                                <button onClick={()=>handleRout(`/CoffeeDetails/${cfe._id}`)} className='btn bg-[#E3B577] text-white text-xl w-fit'><FaEye /></button>
                                <button  onClick={()=>handleRout(`/UpdateCoffee/${cfe._id}`)} className='btn bg-[#3C393B] text-white text-xl w-fit'><MdEdit /></button>
                                <button onClick={()=>handleDeleteCoffee(cfe._id)} className='btn bg-[#EA4744] text-white text-xl w-fit'><MdDelete /></button>
                            </div>
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeSection;