import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-5'>
            <p className='btn bg-secondary px-6 py-2 text-white'> Latest</p>

            <Marquee pauseOnHover className='bg-base-200 #F3F3F3;
 p-2 flex gap-8'>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illo.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illo.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illo.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illo.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illo.</p>
            </Marquee>
        </div>
    );
};

export default Latest;