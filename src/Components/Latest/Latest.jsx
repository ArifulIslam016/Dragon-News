import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = ({NewsData}) => {
   const filterdData=  NewsData.filter(singleData=>singleData.others.is_trending===true)
     console.log(filterdData);
     
    
    return (
        <div className='flex items-center gap-5'>
            <p className='btn bg-secondary px-6 py-2 text-white'> Latest</p>

            <Marquee pauseOnHover className='bg-base-200 #F3F3F3;
 p-2 flex gap-8'>
                {
                    filterdData.map(sinFilteredData=><p className='mr-4'>{sinFilteredData.title}.</p>)
                }
            </Marquee>
        </div>
    );
};

export default Latest;