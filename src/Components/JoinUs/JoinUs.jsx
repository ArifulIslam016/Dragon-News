import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const JoinUs = () => {
    return (
      <div className="join join-vertical w-full ">
  <button className="btn join-item justify-start bg-base-100">  <FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start bg-base-100"> <FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item justify-start bg-base-100"><FaInstagram></FaInstagram> Instagram</button>
</div>
    );
};

export default JoinUs;