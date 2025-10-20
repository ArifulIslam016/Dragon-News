import React from 'react';
import swimingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGroundImg from '../../assets/playground.png'
import bgImage from '../../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='font-bold text-xl p-4 text-primary' >QZone</h1>
            <div className='justify-center w-full flex flex-col'>
                <img src={swimingImg} className='p-3' alt="swiming image" />
                <img src={classImg} className='p-3' alt="ClassRoom Image" />
                <img src={playGroundImg} className='p-3' alt="Playground Image" />
                <img src={bgImage} className='p-3 bg-white ForDetailPage' alt="Playground Image" />
                
            </div>
        </div>
    );
};

export default QZone;