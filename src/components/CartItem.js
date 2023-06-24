import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {

  const{removeFromCart, increaseAmount} =useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return <div>
    <div className='flex gap-x-8 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500'>

      <div className='w-full min-h-[120px] flex items-center gap-x-4'>
      {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='myimage' />
        </Link>

        {/* ================================================================================= */}

        <div className='w-full flex flex-col'>
          {/* title */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`}
              className='text-smuppercase foont-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* close Icons */}
            <div  onClick={()=>removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm '>
            {/* qty */}

          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            {/* minus icon */}
            <div className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdRemove/></div>
            {/* amount */}
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            {/* plus icon */}
            <div onClick={increaseAmount} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd/></div>
          </div>

          {/* item price*/}
          <div className='flex flex-1 justify-around items-center text-primary'>$ {price}</div>
          {/* final price*/}
          <div className='flex flex-1 justify-end items-center text-primary font-medium'>{` $ ${parseFloat(price * amount).toFixed(2)}`}</div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
