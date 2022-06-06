import React, {useEffect, useState} from 'react'
import ProductAdd from '../productAdd/index'
import getProduct from '../../services/getProduct'
import ProductsItem from '../productItem'

const Products = ({handleAddItemToProd}) => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        let response
        response = getProduct.getLisPokemons().then(res => {
          setproduct(res)
          console.log('Valores hoje>>: ', res)
        })
    
      }, [])
      product && console.log('Esses são os Produtos hoje>>', product)
    return (
        <main>
        <section className='products-section'>
          {product && product.map((prod, index) => (
             <ProductAdd 
             image={prod.image} 
             title={prod.title}
             price={prod.price}
             handleAddItemToProd={handleAddItemToProd}
             />
          ) 
          )}
        
         
        </section>
      </main>
    )
}

export default Products
