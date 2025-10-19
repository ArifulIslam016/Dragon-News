import React, { use } from 'react';
import { NavLink } from 'react-router';
import './Allcatagory.css'
const catagoryPromise=fetch('/categories.json').then(res=>res.json())
const Allcatagory = () => {
    const catagoryData=use(catagoryPromise)
    return (
        <div className='pl-12' >
            <h1> All Catagory {catagoryData.length}</h1>
        <div className='grid grid-cols-1 space-y-2 mt-5'>
                {
                catagoryData.map(singleCatagory=> <NavLink to={`catagories/${singleCatagory.id}`} className='text-[#9F9F9F] btn py-4 bg-white outline-0' key={singleCatagory.id}>{singleCatagory.name}</NavLink>)
            }
        </div>
        </div> 
    );
};

export default Allcatagory;