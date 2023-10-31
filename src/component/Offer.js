import React from 'react'

const Offer = () => {
  return (
    <div className='p-8 flex flex-col'>
        <h1 className='text-lg text-center mb-4 font-semibold'>Special Offers</h1>
        <p className='text-center font-bold text-3xl text-maxBlueGreen mb-2'>All books are 50% off now!</p>
        <p className='text-center font-bold text-3xl text-maxBlueGreen mb-4'>Don't miss such a deal!</p>
        <p className=' text-center mb-4 max-w-md m-auto'>you will learn how to animate shapes like circles, lines, and polygons. You will also learn how to animate CSS proprties like color and size.</p>
        <div className='watch flex items-center justify-center gap-8 mt-2 mb-5'>
            <p className='flex flex-col font-semibold'>Days<span>15</span></p>
            <p className='flex flex-col font-semibold'>Hour<span>21</span></p>
            <p className='flex flex-col font-semibold'>Min<span>18</span></p>
            <p className='flex flex-col font-semibold'>Sec<span>14</span></p>
        </div>
        <button className='rounded-full bg-inherit border border-white1 py-2 px-6 self-center mt-3 hover:bg-maxBlueGreen hover:border-maxBlueGreen'>Explore More</button>
    </div>
  )
}

export default Offer
