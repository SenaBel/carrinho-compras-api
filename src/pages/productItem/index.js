import React from 'react'
import Item from '../item/index'

const ProductsItem = ({product, handleRemoveItemFromProd}) => {
    return (
        <footer>
      <ul>
        {product.map((prodItem, index) => (
         <Item 
         key={index} 
         index={index}
         title={prodItem.title.substr(0,12)} 
         price={prodItem.price}
         handleRemoveItemFromProd = {handleRemoveItemFromProd}
         />
        
        )
        )}
       
        
      </ul>
    </footer>
    )
}

export default ProductsItem
