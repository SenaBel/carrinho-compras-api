import React from 'react'

const Item = ({title, price, index, handleRemoveItemFromProd}) => {
    return (
        <li>
          <h2 className='list-title'>{title}</h2>
    <span className='list-price'> R$ {price}</span>
          <button className="remove-btn" onClick={() => handleRemoveItemFromProd(index)} >REMOVER</button>
        </li>
    )
}

export default Item
