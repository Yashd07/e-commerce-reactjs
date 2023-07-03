import React, { useContext } from 'react';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  //console.log(useContext(CartContext));


  const { isOpen, handleClose } = useContext(SidebarContext);
 
 const {cart, clearCart, total}= useContext(CartContext);
 
  // sidebar open close logic with css
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full overflow-y-scroll bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] teansition-all duration-300 z-20 px-4 lg:px-[35px]`}>
   <div className='flex items-center justify-between py-6 border-b '>
    <div className='uppercase text-sm font-semibold'>Shopping bag (0)</div>
   <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'><IoMdArrowForward className='text-2xl'/></div>
    
   </div>

   <div>{cart.map((item)=>{
    return <CartItem item={item} key={item.id}/>
   })}</div>
  <div className='flex flex-col gap-y-3 py-3 mt-4'>

   <div className='flex w-full justify-between items-center'>
    <div className='uppercase font-semibold'>
      <span>Total:</span>$ {parseFloat(total).toFixed(2)}
    </div>
    <div onClick={clearCart} className='cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-2xl'><FiTrash2/></div>
    </div>
    <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View cart</Link>
    <Link to={'/'} className='bg-primary flex p-4 justify-center items-center text-gray-200 w-full font-medium'>Check Out</Link>
  </div>

  </div>;
};

export default Sidebar;
