import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className="hero bg-base-200 min-h-screen ">
        
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">Register your account</h1>
        <div className="card-body">
         <form>
             <fieldset className="fieldset">
                {/* Name Section */}
                <label className="label text-lg text-black font-semibold">Name</label>
            <input type="text" className="input" placeholder="Your Name" name='name'/>
            {/* Photo Url Section */}
                <label className="label text-lg text-black font-semibold">Photo Url</label>
            <input type="text" className="input" placeholder="Paste Your Photo Url" name='PhotoUrl'/>
                {/* Email Section */}
            <label className="label text-lg text-black font-semibold" >Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            {/* Password Section */}
            <label className="label text-lg text-black font-semibold"></label>
            <input type="password" className="input" placeholder="Password" name='password' />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
         </form>
         <p>
           Alredy Have An Account ? <Link to={'/auth/login'} className="text-secondary">Login</Link>
         </p>
            
        </div>
      </div>
    </div>
    );
};

export default Register;