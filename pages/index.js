import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Product from '../components/product'
export default function Home() {
  const [productInfo, setProductInfo] = useState([])
  const [phrase, setPhrase] = useState('')
  useEffect(()=>{
    fetch('/api/products')
    .then(response => response.json() )
    .then(json => setProductInfo(json) )
  },[])
 
 const categoriesNames = [...new Set(productInfo.map(p => p.category))]
 
 let products;
 if (phrase) {
  products = productInfo.filter(p => p.name.toLowerCase().includes(phrase))
 }else {
  products = productInfo;
 }
  return (
   <div className='p-5'>
    <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder='Search for products...' className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
    <div>
      {categoriesNames.map(categoryName =>(
      <div key={categoryName}>
      {products.find(p => p.category === categoryName) && (
        <div>
           <h2 className='text-2xl py-5 capitalize'>{categoryName}</h2>
           <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
           {products.filter(p => p.category === categoryName).map(productInfo => (
          <div key={productInfo._id} className='px-5 snap-start'>
          <Product {...productInfo}  />        
          </div>
           ))}
           </div>
        </div>
      )}          
        </div>
      ))}

      <div className='py-4'>
          
      </div>
    </div>
   </div>
  )
}
