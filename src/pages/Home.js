import React from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useContext } from 'react';
import Product from '../components/Product'

const Home = () => {
  //get product from context
  const { products } = useContext(ProductContext);
  //console.log(products);

  const filProducts = products.filter((item) => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  });

  console.log(filProducts);
  return (<div>
    <section className='py-16'>
      <div className='container mx-auto'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gridcols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-4'>
        {filProducts.map(product => {
          return <Product product={product} key={product.id}/>
        })}
      </div>
    </section>
  </div>);
};

export default Home;
