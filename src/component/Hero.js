import book from '../images/hero-banner.png'
function Hero() {
   return(
    <>
        <section>
            <div className='container m-auto flex '>
                <div className="descript w-full md:w-[48%]  bg-no-repeat bg-cover bg-center">
                    <h1>Get Your New Book Collections</h1>
                    <span></span>
                    <p>There are many variations of lorem ipsum availlabale, but the majority have suffered alteration in some formr</p>
                    <button>Explore More <i className="fa-solid fa-cart-shopping"></i></button>
                    <i className="fa-solid fa-play"></i>
                </div>
                <div className="imageBook w-full md:w-[48%]">
                    <img src={book} alt="book" />
                </div>
            </div> 
                       
        </section>
    </>
   ) 
}
export default Hero;