import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className='bg-[url("https://res.cloudinary.com/dd4np04jl/image/upload/v1747329942/13_cvgu8u.jpg")] bg-contain py-8 '>
                <div className='w-8/12 mx-auto flex justify-between items-center gap-4'>
                    <div>
                        <div className='flex flex-col gap-7'>
                        <img className='w-[80px]' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747329190/logo1_jyavwq.png" alt="" />
                        <h1 className='text-[56px] text-[#331A15] font-semibold fontRancho'>Espresso Emporium</h1>
                        <p className='text-lg text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='flex gap-3 py-6'>
                        <a className='text-[#331A15] text-3xl' href=""><FaFacebook /></a>
                        <a className='text-[#331A15] text-3xl' href=""><FaTwitter /></a>
                        <a className='text-[#331A15] text-3xl' href=""><FaInstagram /></a>
                        <a className='text-[#331A15] text-3xl' href=""><FaLinkedin /></a>
                    </div>
                    <div>
                        <div className='flex flex-col '>
                            <h1 className='fontRancho text-[#331A15] py-8 text-5xl font-semibold'>Get in Touch</h1>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-[#331A15] flex items-center gap-4'><FaPhoneAlt /><span>+88 01533 333 333</span></h1>
                                <h1 className='text-[#331A15] flex items-center gap-4'><MdEmail /><span>info@gmail.com</span></h1>
                                <h1 className='text-[#331A15] flex items-center gap-4'><FaLocationDot /><span>72, Wall street, King Road, Dhaka</span></h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col gap-9'>
                        <div>
                            <h1 className=' fontRancho text-5xl font-semibold text-[#331A15] '>Connect with Us</h1>
                        </div>
                        <form className='h-fit flex flex-col gap-2'>
                            <fieldset className="fieldset">
                                <input name='name' type="text" className="input w-full border-none" placeholder="Name" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <input name='email' type="text" className="input w-full border-none" placeholder="Email" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <textarea className="textarea w-full" placeholder="Message"></textarea>
                            </fieldset>
                                <button className='btn w-fit text-[#331A15] fontRancho text-lg py-1.5 px-5 rounded-3xl border-2 border-[#331A15] mt-2'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;