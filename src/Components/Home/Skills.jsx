import React from 'react';

const Skills = () => {
    const adobeXD = 95;
    const Photoshop = 90;
    const Illustrator = 75;
    const Sketch = 50;
    return (
        <div>
            <div className='flex justify-end'>
                <img src="/icon/shape2.png" alt="" />
            </div>
            <div className='py-14 flex items-center justify-around'>
                <div style={{ background: `conic-gradient(#EB4A4A ${adobeXD * 3.6}deg,#0e1630 0deg)` }}
                    className='w-[140px] h-[140px] rounded-full flex items-center justify-center'>
                    <div className='w-[95%] h-[95%] rounded-full bg-[#121c3e] flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-[38px] text-primary'>{adobeXD}%</span>
                            <span className='text-white font-medium text-[17px]'>Adobe xd</span>
                        </div>
                    </div>
                </div>
                <div style={{ background: `conic-gradient(#EB4A4A ${Photoshop * 3.6}deg,#0e1630 0deg)` }}
                    className='w-[140px] h-[140px] rounded-full flex items-center justify-center'>
                    <div className='w-[95%] h-[95%] rounded-full bg-[#121c3e] flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-[38px] text-primary'>{Photoshop}%</span>
                            <span className='text-white font-medium text-[17px]'>Photoshop</span>
                        </div>
                    </div>
                </div>
                <div style={{ background: `conic-gradient(#EB4A4A ${Illustrator * 3.6}deg,#0e1630 0deg)` }}
                    className='w-[140px] h-[140px] rounded-full flex items-center justify-center'>
                    <div className='w-[95%] h-[95%] rounded-full bg-[#121c3e] flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-[38px] text-primary'>{Illustrator}%</span>
                            <span className='text-white font-medium text-[17px]'>Illustrator</span>
                        </div>
                    </div>
                </div>
                <div style={{ background: `conic-gradient(#EB4A4A ${Sketch * 3.6}deg,#0e1630 0deg)` }}
                    className='w-[140px] h-[140px] rounded-full flex items-center justify-center'>
                    <div className='w-[95%] h-[95%] rounded-full bg-[#121c3e] flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-[38px] text-primary'>{Sketch}%</span>
                            <span className='text-white font-medium text-[17px]'>Sketch</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <img src="/icon/shape3.png" alt="" />
            </div>
        </div>
    );
};

export default Skills;