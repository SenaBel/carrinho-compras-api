import React, {useEffect, useState} from 'react'
import ProductAdd from '../productAdd/index'
import getProduct from '../../services/getProduct'

const Products = ({}) => {
    const [product, setproduct] = useState([])
    const [productPerPage, setProductPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(product.length / productPerPage)
    const startIndex = currentPage * productPerPage
    const endIndex = startIndex + productPerPage
    const currentProduct = product.slice(startIndex, endIndex)


    useEffect(() => {
        let response
        response = getProduct.getLisPokemons().then(res => {
          setproduct(res)
        })
      }, [])

    return (
      <>
       
        <main>
        <section className='products-section'>
          {currentProduct && currentProduct.map((prod, index) => (
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

        <div className='pages-number'>
          {Array.from(Array(pages), (prod, i) => {
            return <button className='b-page' value={i} onClick={(e)=> setCurrentPage(Number(e.target.value))} >{i+1}</button>
          } )}
        </div>
       
      </>
    )
}

export default Products
