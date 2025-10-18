import React from 'react';
import { useParams } from 'react-router';

const Catagory = () => {
    const catagoryId=useParams().id;
    
    return (
        <div>
                <h1>Catatory Based{catagoryId}</h1>
        </div>
    );
};

export default Catagory;