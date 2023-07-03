import React ,{useState, createContext}from 'react';
export const SidebarContext =createContext();


//==================to open and close the sidebar====================//
const SidebarProvider = ({children}) => {
  const [isOpen,setisOpen] = useState(false);

  const handleClose =() => {
    setisOpen(false);
  };

  return (<SidebarContext.Provider value={{ isOpen,setisOpen,handleClose }}>{children}</SidebarContext.Provider>);
};

export default SidebarProvider;
