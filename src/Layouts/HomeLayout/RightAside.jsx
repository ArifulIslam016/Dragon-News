import React from 'react';
import Login from '../../Components/Login/Login';
import JoinUs from '../../Components/JoinUs/JoinUs';
import QZone from '../../Components/QZone/QZone';

const RightAside = () => {
    return (
        <div className='space-y-5 ml-3 md:ml-0'>
            <Login></Login>
            <JoinUs></JoinUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;