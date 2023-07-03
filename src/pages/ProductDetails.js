import React, {  useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className='h-screen flex justify-center items-center text-semibold'>Loading...</section>
  }
  console.log(product);

  const { title, price, description, image } = product;
  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>

        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 bg-purple-200'> 
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt='img1' />
        </div>
        <div className='flex flex-col px-8 space-y-4'>
        <div className='font-semibold mb-1'>{title}</div>
        <div className='mb-8'>{description}</div>
        <div className='text-red-400'>$ {price}</div>
        <div  onClick={()=>addToCart(product,product.id)} className=' cursor-pointer max-w-[120px]  py-4  bg-primary flex justify-center items-center text-gray-200 w-full font-medium'>Add to Cart</div>
        </div>
        
      </div>
    </div>

  </section>;
};

export default ProductDetails;
