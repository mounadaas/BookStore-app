import { Link } from "react-router-dom";
import "../component/header.css";
import {useRef} from "react";
import { useShopingCart } from "../context/ShopingCartContext";

function Header(){
    const {cartQuantity} = useShopingCart()
    const navref= useRef();
    const showNav=()=>{
        navref.current.classList.toggle("responsive-nav")
    }
    return(
        <>
        <section className="   w-full bg-xiketic ">
            <div className=" w-full ">
                <div className="container m-auto ">
                    <div className="flex justify-between p-4 items-center">
                        <div className="logo w-1/3 md:w-1/5 ">
                            <h1 className="font-bold text-xl"><i className="fa-solid fa-book text-xl "></i>Booken</h1>
                        </div>

                        <div className="search-bar hidden sm:flex   hover:border-maxBlueGreen  hover:border border-xiketic  border rounded-lg p-0.5">
                            <input type="text" placeholder="Search out store" className="bg-inherit placeholder:text-white1 placeholder:text-xs outline-none px-3"/>
                            <button className="bg-maxBlueGreen rounded-md px-8 py-2 hover:text-maxBlueGreen hover:bg-xiketic border-maxBlueGreen  border">Search</button>
                        </div>

                        <div className="user  flex relative">
                            <Link to ='card'>
                                <i className="fa-solid fa-bag-shopping hover:text-maxBlueGreen text-2xl "></i>                            
                            </Link>
                            <span className="text-xs bg-jet py-0.5 px-1.5 rounded-full absolute -top-3 left-2">{cartQuantity}</span>
                            <Link to='profile'>
                                <i className="hidden sm:flex fa-regular fa-user  hover:text-maxBlueGreen text-2xl ml-4"></i>
                            </Link>
                            <i className="fa-solid fa-bars sm:hidden hover:text-maxBlueGreen text-2xl ml-4" onClick={showNav}></i>
                        </div>
                    </div>

                    <div className=" p-4 mobile-menu border border-white1   sm:bg-xiketic sm:flex justify-between sm:border-none duration-700 " ref={navref} >
                        <i className="fa-solid fa-xmark sm:hidden hover:text-maxBlueGreen bg-jet mb-4 py-1 px-2.5 rounded-full text-2xl" onClick={showNav}></i>
                        <div className="search-bar  flex justify-between border-2 border-white1 sm:hidden max-w-md">
                            <input type="text" placeholder="Search out store" className="outline-none pl-3  placeholder:text-xs placeholder:text-white1 w-full bg-xiketic"/>
                            <i className="hover:text-maxBlueGreen fa-solid fa-magnifying-glass p-4 border-l-2 border-white1"></i>
                        </div>
                        <ul className=" flex flex-col sm:flex-row font-semibold border-y-2 border-white1 mt-9 sm:border-none sm:mt-0">
                            <li className="mt-4 mb-2 sm:my-0 mr-3"><Link to='/' className="hover:text-maxBlueGreen">Home</Link></li>
                            <li className="my-2 sm:my-0 mr-3"><Link to ='blog' className="hover:text-maxBlueGreen">Blog</Link></li>
                            <li className="my-2 sm:my-0 mr-3"><Link to="signup" className="hover:text-maxBlueGreen">Sign up</Link></li>
                            <li className=" mt-2 mb-4 sm:my-0"><Link to='dashboard' className="hover:text-maxBlueGreen">Dashboard</Link></li>
                        </ul>
                        <p className="font-semibold hover:text-maxBlueGreen hidden sm:block"><i className="fa-solid fa-headphones"></i>(+213)672435678</p>
                    </div>
                </div>              
            </div> 
              
        </section>
         
        </>
    )
    }
export default Header;