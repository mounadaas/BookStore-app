import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';

const Profile = () => {
  const  auth = useAuth()
    const navigate= useNavigate()
    const handlLogout=()=>{
        auth.logout();
        navigate('/',{replace:true} )
    }
  return (
    <section className='bg-xiketic p-10 pb-32'>
      <h1 className='mb-3 font-bold'>Welcome {auth.user}</h1>
      <button onClick={handlLogout} className=" text-sm font-semibold border border-white1 rounded-lg px-6 py-2 hover:bg-red-600 hover:border-red-600">Log out</button>
    </section>
  )
}

export default Profile
