import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useShopingCart } from '../context/ShopingCartContext';



const Bookdetail = ({id}) => {
  const { getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeItemFromCart} = useShopingCart()
  const quantity = getItemQuantity(id)
  
  const {bookId} = useParams();
  const api="http://localhost:3500/book";
  
  const [book, setbook]= useState({})
  useEffect(()=>{
        fetch(`${api}/${bookId}`)
            .then((res)=>res.json())
            .then((book)=>setbook(book));
},[bookId])
  
  return (

    <section className='bg-xiketic p-4'>
    <div className='container flex flex-col md:flex-row md:justify-evenly p-4  gap-3'> 
      <div className="border border-white1" >
        <img src={book.image} className="cover w-full" alt={book.title}/>
      </div>
      <div className="flex flex-col gap-2 pt-3 ">
          <h1 className="font-bold text-2xl  text-maxBlueGreen mb-2">{book.title}</h1>
          <h1 className="font-bold text-md   mb-2">{book.author}</h1>
          <p className=" text-sm max-w-lg mb-3">{book.description}</p>
          <p className="font-bold text-sm text-maxBlueGreen mb-4">$ {book.price}.00</p>
          <div >
          {
            quantity === 0 ? (
              <button onClick={()=>increaseCartQuantity(id)} className="text-sm font-bold border border-white1 rounded-lg px-6 py-2 hover:bg-maxBlueGreen hover:border-maxBlueGreen self-start">Add to card</button>
            ):(
              <div className='flex justify-center items-center gap-3'>
                <button onClick={()=>increaseCartQuantity(id)} className='text-sm font-semibold  rounded-lg px-2 py-1 bg-maxBlueGreen'>+</button>
                <p className='text-sm'>{quantity} in cart</p>
                <button onClick={()=>decreaseCartQuantity(id)} className='text-sm font-semibold  rounded-lg px-2.5 py-1 bg-maxBlueGreen'>-</button>
                <button onClick={()=>removeItemFromCart(id)} className='text-sm font-semibold  rounded-lg px-4 py-1 bg-red-700'>Remove Item</button>
              </div>
            )
          }
              
          </div>
          </div>
    </div>
    </section>
  )
}

export default Bookdetail
