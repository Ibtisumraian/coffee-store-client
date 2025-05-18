import React, { use, useState } from 'react';
import CoffeeSection from '../../components/CoffeeSection/CoffeeSection';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';

const Home = () => { 
    const userInfo = use(AuthContext)
    console.log(userInfo);
    
    const initialCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffee)
    
    // const [coffee, setCoffee] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:5000/coffees')
    //     .then(res=>res.json())
    //     .then(data=>setCoffee(data))
    // }, [])
    console.log(initialCoffee);
    
    return (
        <div>
            <div>
                <div
                    className="hero min-h-screen flex justify-end "
                    style={{
                        backgroundImage:
                        "url(https://res.cloudinary.com/dd4np04jl/image/upload/v1747402586/3_aelfk9.png)",
                    }}
                    >
                   
                    <div className=" text-neutral-content text-start ">
                        
                        <div className=" flex flex-col items-start mr-60 ">
                        <h1 className="mb-5 text-4xl font-bold fontRancho">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-sm">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn bg-transparent border-2 border-white text-white hover:bg-[#E3B577] hover:border-2 hover:border-[#331A15] shadow-none fontRancho">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className=' w-8/12 mx-auto grid grid-cols-4 gap-6 py-12'>
                    <div className=' flex flex-col gap-4'>
                        <img className='w-[70px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747404387/1_gqqsjs.png" alt="" />
                        <h1 className='text-3xl fontRancho font-semibold text-[#331A15]'>Awesome Aroma</h1>
                        <p className='text-[#331A15] text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>


                    <div className=' flex flex-col gap-4'>
                        <img className='w-[70px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747404790/2_vvfjck.png" alt="" />
                        <h1 className='text-3xl fontRancho font-semibold text-[#331A15]'>High Quality</h1>
                        <p className='text-[#331A15] text-sm'>We served the coffee to you maintaining the best quality</p>
                    </div>


                    <div className=' flex flex-col gap-4'>
                        <img className='w-[70px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747404850/3_gkqydr.png" alt="" />
                        <h1 className='text-3xl fontRancho font-semibold text-[#331A15]'>Pure Grades</h1>
                        <p className='text-[#331A15] text-sm'>The coffee is made of the green coffee beans which you will love</p>
                    </div>


                    <div className=' flex flex-col gap-4'>
                        <img className='w-[70px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747404856/4_kri7hd.png" alt="" />
                        <h1 className='text-3xl fontRancho font-semibold text-[#331A15]'>Proper Roasting</h1>
                        <p className='text-[#331A15] text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                  
                </div>
            </div>

            <div>
                <CoffeeSection
                    
                    coffees={coffees}
                    setCoffees={setCoffees}
                ></CoffeeSection>
            </div>

            <div>
                <div className='w-8/12 mx-auto pb-32'>
                    <div className='text-center flex flex-col gap-4'>
                    <p className='text-lg'>Follow Us Now</p>
                    <h1 className='fontRancho text-5xl font-bold text-[#331A15]'>Follow on Instagram</h1>
                </div>
                <div className='grid grid-cols-4 gap-5 pt-10'>
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409480/Rectangle_9_qx1qvg.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409503/Rectangle_10_tf6qs9.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409521/Rectangle_11_aymkl6.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409463/Rectangle_12_ysitw5.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409553/Rectangle_13_bbi5m1.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409572/Rectangle_14_cdeqgy.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409589/Rectangle_15_on9czd.png" alt="" />
                    <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747409610/Rectangle_16_pnutvj.png" alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;