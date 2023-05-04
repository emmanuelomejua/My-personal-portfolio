import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <h1 className='pl-title'>Tools, Creativity & Excellence</h1>
      <div className='pl-texts'>
        
        <p className='pl-desc'>
          Provides solutions with amazing tools and technologies.
            Satisfies clients and build user friendly software systems
        </p>
      </div>
      <div className='pl-list'>
        {products.map((item)=> (
             <Product key={item.id} img={item.img} link={item.link}/>
             ))}
      </div>
    </div>
  )
}

export default ProductList
