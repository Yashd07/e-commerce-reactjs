import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

  console.log(useContext(CartContext));

  const { isOpen, handleClose } = useContext(SidebarContext);
 
 const {cart}= useContext(CartContext);
 
  // sidebar open close logic with css
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full overflow-y-scroll bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] teansition-all duration-300 z-20 px-4 lg:px-[35px]`}>
   <div className='flex items-center justify-between py-6 border-b'>
    <div className='uppercase text-sm font-semibold'>Shopping bag (0)</div>
   <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'><IoMdArrowForward className='text-2xl'/></div>
    
   </div>
   <div>{cart.map((item)=>{
    return <CartItem item={item} key={item.id}/>
   })}</div>
   <div className='absolute bottom-0 right-0'>Sidebar bottom</div>
  </div>;
};

export default Sidebar;
