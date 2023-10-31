
const Footer = () => {
    return (
      <section className="bg-no-repeat bg-cover bg-center bg-banner p-4 pb-0">
        <div className=" container flex m-auto flex-wrap justify-center  gap-4 p-2">
          <div className="w-full sm:w-[48%] md:w-[23%]  ">
              <h1 className="font-bold text-xl mb-2"><i className="fa-solid fa-book text-xl "></i> Booken</h1>
              <p className="text-xs mb-2">My Finance web application, employing HTML, CSS, and Bootstrap. This all what i need to programm orointation no problem in my cabinet</p>
              <div>
                <i className="fa-brands fa-facebook hover:text-maxBlueGreen mr-3 "></i>
                <i className="fa-brands fa-twitter hover:text-maxBlueGreen mr-3"></i>
                <i className="fa-brands fa-instagram hover:text-maxBlueGreen mr-3"></i>
                <i className="fa-brands fa-youtube hover:text-maxBlueGreen mr-3"></i>
                <i className="fa-brands fa-pinterest hover:text-maxBlueGreen "></i>
              </div>
          
          </div>
          <div className="w-full sm:w-[48%] md:w-[23%] ">
            <h6 className="font-bold text-md mb-2">Corporate</h6>
            <ul>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Careers</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">About Us</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Contact Us</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">About Us</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">FAQs</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">About Us</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Vendors</li>
            </ul>
          </div>

          <div className="w-full sm:w-[48%] md:w-[23%] ">
            <h6 className="text-md font-bold mb-2">Information</h6>
            <ul>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Online Store</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Privacy Policy</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Refund Policy</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Shipping Policy</li>
              <li className="text-sm hover:text-maxBlueGreen">Terms of Service</li>
            </ul>
          </div>

          <div className="w-full sm:w-[48%] md:w-[23%] ">
            <h6 className="text-md font-bold mb-2">Services</h6>
            <ul>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Grooming</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Positive Dog Training</li>
              <li className="text-sm m-1 hover:text-maxBlueGreen">Veterinary Services</li>
              <li className="text-sm mb-1 hover:text-maxBlueGreen">Insurance</li>
              <li className="text-sm hover:text-maxBlueGreen">Book Writing</li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className='text-sm m-auto p-2  text-center border-t-2 border-white1'>Copyright 2023 | Made With Love by MOUNA</p>
        </div>
      </section>
    )
  }
  
  export default Footer;
  