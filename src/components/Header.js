import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const {isOpen,setisOpen} =useContext(SidebarContext);
  return (<div>
    <div>Header</div>
    <div onClick={()=> setisOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
    </div>
  </div>);
};

export default Header;
