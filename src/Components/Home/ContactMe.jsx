import React from 'react';
import { BechanceIcon, DribbleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon, PhoneIcon2 } from '../Icons';

const ContactMe = () => {
    return (
        <div className='w-full py-14'>
            <div className='flex'>
                <div className='w-1/2'>
                    <div className="flex items-center mb-5 mt-10 gap-[10px]">
                        <div className="w-8 h-1 bg-primary"></div>
                        <p className="text-lg font-medium text-primary">Contact Me</p>
                    </div>
                    <p className="text-2xl text-white font-bold mb-6">
                        Let’s Work together
                    </p>
                    <p className="text-secondary w-[50ch]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                    </p>
                    <div className='py-10'>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[35px] h-[35px] rounded-[5px] bg-[#eb4a4a1a] flex items-center justify-center'>
                                    <LocationIcon />
                                </div>
                                <p className='font-medium text-base text-secondary'>Mansoura - Dakhalia - Egypt</p>
                            </div>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[35px] h-[35px] rounded-[5px] bg-[#eb4a4a1a] flex items-center justify-center'>
                                    <MailIcon />
                                </div>
                                <p className='font-medium text-base text-secondary'>des.ibrahimshamss@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[35px] h-[35px] rounded-[5px] bg-[#eb4a4a1a] flex items-center justify-center'>
                                    <PhoneIcon2 />
                                </div>
                                <p className='font-medium text-base text-secondary'>+ 2 010 328 756 55</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-9 mt-4'>
                        <a href="">
                            <LinkedinIcon />
                        </a>
                        <a href="">
                            <DribbleIcon />
                        </a>
                        <a href="">
                            <BechanceIcon />
                        </a>
                        <a href="">
                            <FacebookIcon />
                        </a>
                        <a href="">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                <div className='w-1/2'>
                    <form className='flex flex-col gap-y-8'>
                        <input type="text" name='name' required placeholder='Your Name'
                            className='w-full p-[30px] outline-none bottom-0 bg-[#171F38] rounded-xl font-normal text-base text-secondary placeholder:text-secondary' />
                        <input type="email" name='email' required placeholder='Email Address'
                            className='w-full p-[30px] outline-none bottom-0 bg-[#171F38] rounded-xl font-normal text-base text-secondary placeholder:text-secondary' />
                        <input type="text" name='subject' required placeholder='Subject'
                            className='w-full p-[30px] outline-none bottom-0 bg-[#171F38] rounded-xl font-normal text-base text-secondary placeholder:text-secondary' />
                        <textarea rows="8" type="text" name='subject' required placeholder='Message'
                            className='w-full p-[28px] outline-none bottom-0 bg-[#171F38] rounded-xl font-normal text-base text-secondary placeholder:text-secondary' />
                        <button className='text-primary outline-none bg-[#ffffff0d] border border-primary rounded-xl py-[15px] px-[50px] text-lg font-medium mr-auto mt-5'>Send</button>
                    </form>
                </div>
            </div>
            <div className='w-1/2 flex justify-center mt-[62px]'>
                <img src="/icon/shape3.png" alt="" />
            </div>
        </div>
    );
};

export default ContactMe;