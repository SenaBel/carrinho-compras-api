import React, {useContext } from 'react'
import { ProdContext } from '../../../context/prodContext/index'

const ProductAdd = ({image, title, price}) => {
   const { handleAddItemToProd } = useContext(ProdContext)
    return (
        <>
        <div className='card'>
            <img className='card-logo'  src={image} alt="" />
            <h1 className='card-title'>{title.substr(0,12)} /  R$ {price} </h1>
            <button onClick={() => handleAddItemToProd(image,title, price)}>ADICIONAR</button>
        </div>
          </>
    )

}

export default ProductAdd
// {
//     product && product.map((product) => (
//         <div className="card">
//             <h1>{product.title}</h1>
//         </di>
//     ))
// }