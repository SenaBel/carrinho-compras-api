import React, {useContext} from 'react'
import Item from '../item/index'
import { ProdContext } from '../../../context/prodContext/index'

const ProductsItem = () => {
  const {product} = useContext(ProdContext)

    return (
        <footer>
      <ul>
        {product.map((prodItem, index) => (
         <Item 
         key={index} 
         index={index}
         title={prodItem.title.substr(0,12)} 
         price={prodItem.price}
     
         />
        
        )
        )}
       
        
      </ul>
    </footer>
    )
}

export default ProductsItem
