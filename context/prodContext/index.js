import {createContext, useState} from 'react'

export const ProdContext = createContext({})

export const ProdProvider = ({ children }) => {
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
    <ProdContext.Provider value={{product, handleAddItemToProd, handleRemoveItemFromProd, clearProd}}>
        {children}
        </ProdContext.Provider>
    )
}