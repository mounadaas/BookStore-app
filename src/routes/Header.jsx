import { useRef } from 'react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
 
    
    const navref= useRef();
    const showNav=()=>{
        navref.current.classList.toggle("responsive-nav")
    }
    return(
        <>
            <section className="container  m-auto relative ">

                <div className="flex justify-between">
                    <div className="logo">
                        <i className="fa-solid fa-book"></i>
                        <h1>Booken</h1>
                    </div>

                    <div className="search-bar hidden sm:flex ">
                        <input type="text" placeholder="Search out store" className="w-1/2"/>
                        <button>Search</button>
                    </div>

                    <div className="user">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className="text-xs">0</span>
                        <i className="hidden sm:flex fa-regular fa-user "></i>
                        <i class="fa-solid fa-bars sm:hidden "onClick={showNav}></i>
                    </div>
                </div>

                <div className="hidden sm:flex justify-between  bg-yellow-500" >
                    <ul className="flex ">
                        <li><NavLink to='/' end>Home</NavLink></li>
                        <li><NavLink to ='blog'>Blog</NavLink></li>
                        <li><NavLink to="login">Login</NavLink></li>
                        <li><NavLink to='signup'>Sign up</NavLink></li>
                        <li><a href="#/">Contact</a></li>
                        <li><a href="#/">Dashboard</a></li>
                    </ul>
                    <p><i className="fa-solid fa-headphones"></i>(+213)672435678</p>
                </div>
               
                <div ref={navref} className="  mobile-menu sm:hidden w-1/2 bg-purple-700 h-screen absolute right-0 top-0 duration-700 translate-x-full">
                    <i className="fa-solid fa-xmark sm:hidden " onClick={showNav}></i>
                    <div>
                        <div className="search-bar sm:flex bg-slate-600">
                            <input type="text" placeholder="Search out store" className="w-1/2"/>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul className="">
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/">Blog</a></li>
                            <li><a href="#/">Shop</a></li>
                            <li><a href="#/">About Us</a></li>
                            <li><a href="#/">Contact</a></li>
                            <li><a href="#/">Dashboard</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
   

}

export default Header



