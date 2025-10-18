import React from 'react';
import { NavLink } from 'react-router';
import usrImg from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
                <section></section>
                <section className='flex gap-4 items-center'>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/career'}>Career</NavLink>
                </section>
                <section className='flex items-center gap-3'>
                    <img src={usrImg} alt="Iamge of user profile" />
                    <button className='btn btn-primary' >Login</button>
                </section>
        </div>
    );
};

export default Navbar;