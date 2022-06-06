import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import getProduct from '../services/getProduct'
import NavBar from './navBar/index'
import Products from './products/index'
import ProductsItem from './productItem/index'


const Home = () => {

  const [product, setproduct] = useState([])


 function handleAddItemToProd(image, title, price){
   const itemObj = {image, title, price}
   setproduct([...product, itemObj])
 }

 function handleRemoveItemFromProd(clickedProdIndex){
   const filteredProd = product.filter(
     item => product.indexOf(item) !== clickedProdIndex
     )
    setproduct(filteredProd)
 }

 function clearProd(){
  setproduct([])
 }

  return (
    <>
    <NavBar product={product} clearProd={clearProd} />
    <Products handleAddItemToProd={handleAddItemToProd} />
    <ProductsItem product={product} handleRemoveItemFromProd={handleRemoveItemFromProd} />
    </>

  )
}

export default Home