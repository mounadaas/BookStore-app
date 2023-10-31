import { Link } from 'react-router-dom'
import './bookinfo.css'
//import { useShopingCart } from '../context/ShopingCartContext'
const Bookinfo = ({books}) => {

  //const { getItemQuantity} = useShopingCart();
  //const quantity = getItemQuantity(id)
  
  
     const bookList = books.map((e)=>(
      <div key={e.id} className='bookinfo bg-xiketic border border-white1 p-4 w-full sm:w-[48%] md:w-[23%] relative' >
        
        <div className='comment hidden rounded-full bg-xiketic py-1 px-4 flex justify-center items-center absolute top-1/2   lg:[23%]'>
          <Link to={`${e.id}`} className='font-semibold mr-3'><i className="fa-regular fa-eye hover:text-maxBlueGreen"></i></Link>
          <p className='font-semibold mr-3'><i className="fa-regular fa-heart hover:text-maxBlueGreen"></i></p>
          <p className='font-semibold mr-3'><i className="fa-solid fa-arrows-rotate hover:text-maxBlueGreen"></i></p>
          <Link   className='font-semibold '><i className="fa-solid fa-bag-shopping hover:text-maxBlueGreen"></i></Link> 
        </div>

        <div>
              <img  className='w-full' alt="book cover" src={e.image}  />          
        </div>
        <div className='flex  flex-col'>
          <h1 className="font-bold text-sm  hover:text-maxBlueGreen mb-1">{e.title}</h1>
          <h3 className="font-bold text-sm text-maxBlueGreen mb-1">${e.price}.00</h3>
          <p className="text-selectiveYellow">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <button className='text-xs mt-2 border border-white1 rounded-lg px-3 py-2 hover:bg-maxBlueGreen hover:border-maxBlueGreen self-center'>Add to card ( 0 )</button>
        </div>
      </div>
    ))
  return (
    <section className="pt-4 pb-4 ">
          <h1 className='font-bold text-2xl mb-4 text-center'>Featured Collections</h1>
          <p className='text-center text-sm pb-6'>Contrary to popular belief, lorem ipsum is not simply random.</p>
          <div className=" flex flex-wrap gap-4 justify-between items-center container m-auto p-4">
                {bookList}
          </div>
    </section>
  )
}

export default Bookinfo
