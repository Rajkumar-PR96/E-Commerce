import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import all_product from '../Components/Assets/all_product'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDipslay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct'



export const Products = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='products'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
      
    </div>
  )
}
