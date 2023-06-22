import React ,{useState, createContext, useContext}from 'react';
export const SidebarContext =createContext();

const SidebarProvider = ({children}) => {
  const [isOpen,setisOpen] = useState(false);

  const handlClose =() => {
    setisOpen(false);
  }

  return <SidebarContext.Provider value={{isOpen,setisOpen,handlClose}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
