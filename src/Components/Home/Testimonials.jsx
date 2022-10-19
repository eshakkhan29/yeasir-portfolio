import Image from 'next/image';
import React from 'react';
import { RightArrow } from '../Icons';

const Testimonials = () => (
    <div className='w-full py-[57px]'>
        <div className='flex items-center'>

            <div className='w-1/2 p-14 relative'>
                <img className='w-full' src="/icon/atomSahpe.svg" alt="" />
                <img
                    className='w-20 h-20 rounded-full absolute top-2/4 left-2/4 translate-x-[-45%] translate-y-[-45%]'
                    src="/yeasir.png" alt="" />
                <img
                    className='w-[70] h-[70px] rounded-full absolute top-20 left-32'
                    src="/yeasir.png" alt="" />
                <img
                    className='w-[45px] h-[45px] rounded-full absolute top-[200px] right-[60px]'
                    src="/yeasir.png" alt="" />
                <img
                    className='w-[100px] h-[100px] rounded-full absolute bottom-[75px] right-[110px]'
                    src="/yeasir.png" alt="" />
                <img
                    className='w-[35px] h-[35px] rounded-full absolute bottom-[75px] left-[180px]'
                    src="/yeasir.png" alt="" />
                <img
                    className='w-[60px] h-[60px] rounded-full absolute bottom-[200px] left-[130px]'
                    src="/yeasir.png" alt="" />
            </div>

            <div className='w-1/2 relative'>
                <div className='absolute top-0 right-0'>
                    <img src="/icon/testimonials-shape.svg" alt="" />
                </div>
                <div className="flex items-center mb-5 gap-[10px]">
                    <div className="w-8 h-1 bg-primary"></div>
                    <p className="text-lg font-medium text-primary">TESTIMONIALS</p>
                </div>
                <p className="text-2xl text-white font-bold">
                    WHAT OUR  CLIENT SAY
                </p>
                <div className='flex justify-between items-end py-9'>
                    <div className='flex items-center gap-x-[30px]'>
                        <div className='w-20 h-20 p-[7px] rounded-[5px] border-[1.5px] border-[#ffffff1a]'>
                            <img className='overflow-hidden rounded-[5px]' src="/yeasir.png" alt="" />
                        </div>
                        <div>
                            <p className='font-medium text-lg text-secondary'>Yeasir arafat</p>
                            <p className='font-medium text-lg text-primary'>Front-end developer</p>
                        </div>
                    </div>
                    <div className='flex gap-x-[7px] items-center'>
                        <img src="/icon/star.svg" alt="" />
                        <img src="/icon/star.svg" alt="" />
                        <img src="/icon/star.svg" alt="" />
                        <img src="/icon/star2.svg" alt="" />
                        <img src="/icon/star2.svg" alt="" />
                    </div>
                </div>
                <div className='relative'>
                    <p className='font-normal text-base text-secondary leading-[190%]'>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry standard dummy. text ever since the 1500s, when an. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, laboriosam.</p>
                    <img className='absolute right-0 -bottom-8' src="/icon/comma.svg" alt="" />
                </div>
                <div className='pt-[115px] flex items-center justify-between'>
                    <div className='w-[83%] bg-secondary h-[2px]'>
                        <div className='w-[25%] bg-primary h-[2px]'>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-5'>
                        <p className='rotate-180 text-secondary cursor-pointer'>
                            <RightArrow />
                        </p>
                        <p className='cursor-pointer'><RightArrow /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonials;