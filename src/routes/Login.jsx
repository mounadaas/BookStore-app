import React, { useState } from 'react'
import book from '../images/hero-banner.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location= useLocation();
    const redirectpath = location.state?.path || "/";
    const [user, setUser]= useState("");
    const handelLogin=()=>{
        auth.login(user)
        navigate( redirectpath,{replace:true})
    }
  return (
    <section className=' md:h-screen   bg-xiketic gap-7 text-white1'>
        <div className='container m-auto  flex  flex-wrap  '>
            <div className='flex justify-center items-center w-full  sm:w-1/2'>
                <img src={book} alt="book" />
            </div>
            <div className='flex flex-col justify-center m-auto w-full  sm:w-1/2'>
                <h1 className='text-xl font-bold mb-2 pl-5'>Login</h1>
                <p className='text-md pl-5'>Sign in with email annd password.</p>
                
                <form className="p-5 md:pt-3 " >
                    
                    <div class=" pb-3">
                        <label htmlFor="email" className="text-sm mb-1">Email</label>
                        <input type="email" placeholder='Enter your email' onChange={(e)=> setUser(e.target.value)} className="text-sm w-full p-3 bg-inherit hover:border-maxBlueGreen  hover:border border-white1  border rounded-lg" required  />
                    </div>
                    <div class=" pb-4">
                        <label htmlFor="password" className="text-sm mb-1">Password</label>
                        <input type="text" placeholder='Enter your password' className="text-sm  w-full p-3 bg-inherit hover:border-maxBlueGreen  hover:border border-white1  border rounded-lg" required  />
                    </div>
                    <Link to='/' onClick={handelLogin} className=" text-sm font-semibold border border-white1 rounded-lg px-6 py-2 hover:bg-maxBlueGreen hover:border-maxBlueGreen">Login</Link>
                   
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
