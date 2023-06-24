import React,{createContext,useState,useEffect} from 'react';

export const CartContext = createContext();

const CartProvider= ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart =(product,id)=> {
    const newItem = {...product, amount:1}
    //console.log(newItem);

    //console.log(`${product.title} ${id} added`);

    const cartItem =cart.find((item)=>{
      return item.id ===id;
    });
    //if cart item is already in cart
    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id===id){

          return {...item, amount: cartItem.amount+ 1};
        }
        else{
          return item;
        }

      });
      setCart(newCart);
      }else{
        setCart([...cart, newItem]);

      
    }

  };

  const removeFromCart =(id)=>{
    const newcart =cart.filter((item) =>{
    
      return item.id !== id;
    }) ;
    setCart(newcart);
  }

  const clearCart =()=>{
    setCart([]);
  }

  const increaseAmount = (id) =>{
    const item = cart.find((item)=> item.id === id);
    //console.log(item)
    addToCart(item,id);
  }

  //console.log(cart);
  return (<CartContext.Provider value={{ cart, addToCart, removeFromCart , clearCart, increaseAmount}}>{children}</CartContext.Provider>);
};

export default CartProvider;
