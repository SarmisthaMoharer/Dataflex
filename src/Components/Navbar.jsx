import {useState} from 'react';
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-teal-500'>DATAFLEX.</h1>
      <ul className='hidden md:flex w-full -ml-[20px]'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Account</li>
        <li className='p-4'>Sign in</li>
        <button className='px-6 bg-white text-black rounded-xl'>Get Started</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
      </div>
      <div className={!nav ? ' ease-in-out duration-400 fixed left-[-100%] md:hidden':'fixed left-0 top-0 w-[60%] h-full pt-4 border-r border-r-gray-700 bg-[#000300] ease-in-out duration-400 md:hidden' }>
        <div className='sm:flex m-4 '>
            <h1 className='w-full text-3xl font-bold text-gradient-to-r from-teal-400 to-blue-500 '>DATAFLEX..</h1>
           
        </div>
        <ul className='p-4 uppercase'>
        <li className='p-3 border-b border-gray-600'>Home</li>
        <li className='p-3 border-b border-gray-600'>Company</li>
        <li className='p-3 border-b border-gray-600'>Resources</li>
        <li className='p-3 border-b border-gray-600'>About</li>
        <li className='p-3 '>Contact</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
