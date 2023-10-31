import { useDispatch, useSelector } from 'react-redux';
import Featur from '../component/Featur';
import book from '../images/hero-banner.png'
import { useEffect } from 'react';
import {getBooks} from '../store/bookSlice'
import Bookinfo from '../component/Bookinfo';
import Offer from '../component/Offer';
function Hero() {
    const {books} = useSelector((state) => state.books)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getBooks())
    },[dispatch])
   return(
    <>
        <section className=" bg-no-repeat bg-cover bg-center bg-hero-pattern ">
        <div className='container m-auto flex  flex-wrap gap-6 ' >
            <div className="descript  flex flex-col justify-center p-4 md:w-[48%]  ">
            <h1 className='font-bold text-4xl my-4'>Get Your New </h1>
            <h1 className='font-bold text-4xl mb-3'>Book Collections</h1>
            <span className='w-14 h-1 bg-maxBlueGreen inline-block'></span>
            <p className='text-sm mt-4 mb-9 leading-5 max-w-sm md:max-w-none'>There are many variations of lorem ipsum availlabale, but the majority have suffered alteration in some formr</p>
            <div>
                <button className='rounded-full bg-inherit border border-white1 py-3 px-5 hover:bg-maxBlueGreen hover:border-maxBlueGreen'>Explore More <i class="fa-solid fa-cart-shopping"></i></button>
                <i className="fa-solid fa-play ml-7 rounded-full bg-inherit py-3 px-4 border border-white1"></i>
            </div>
            
            </div>
            <div className="imageBook w-full flex justify-center p-4 md:w-[48%]">
            <img src={book} alt="book" />
            </div>
        </div>
        <div>
            <Featur/>
        </div>
        <div>
            <Bookinfo books ={books} className="bg-xiketic border  flex   relative"/>
        </div> 
        <div>
            <Offer/>
        </div>
        </section>
    </>
   ) 
}
export default Hero;