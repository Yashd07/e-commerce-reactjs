import React, { useContext, useEffect, useState} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';


const Header = () => {

  const [isActive, setIsActive]= useState(false);
  const {isOpen,setisOpen} =useContext(SidebarContext);
  const{isAmount}= useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true): setIsActive(false);
    });
  });
  return (<header className={`${ isActive ? 'bg-white':'bg-none py-4'} fixed w-full z-10 transition-all`} >

    <div className='container mx-auto flex items-center justify-between '>
    <Link to={'/'}>
    <img  className='w-[40px] h-[40px]' src={Logo} alt='logo'/>
    </Link>
    <div className='text-2xl text-black font-semibold'>My Clothing Store</div>
    <div onClick={()=> setisOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className=' text-2xl w-[18px] h-[18px]'/>
      <div className='flex justify-center items-center absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white bg-red-500 rounded-lg'>{isAmount}</div>

    </div>
    </div>

  </header>);
};

export default Header;
