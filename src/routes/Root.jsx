import React from 'react'


import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'

const Root = () => {
  return (
    <div className='  text-white1'>
        <Header/>
        <div className='main '>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root
