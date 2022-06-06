import React, {useEffect, useState} from 'react'
import ProductAdd from '../productAdd/index'
import getProduct from '../../services/getProduct'

const Products = ({}) => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        let response
        response = getProduct.getLisPokemons().then(res => {
          setproduct(res)
        })
      }, [])

    return (
        <main>
        <section className='products-section'>
          {product && product.map((prod, index) => (
             <ProductAdd 
             key={index}
             image={prod.image} 
             title={prod.title}
             price={prod.price}
             />
          ) 
          )}
        </section>
      </main>
    )
}

export default Products
